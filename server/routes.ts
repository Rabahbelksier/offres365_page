import type { Express } from "express";
import { type Server } from "http";
import { createHash } from "crypto";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  app.post(api.contacts.create.path, async (req, res) => {
    try {
      const input = api.contacts.create.input.parse(req.body);
      const dbInput = {
        name: input.name,
        email: input.email,
        messages: input.message,
        app: input.app,
      };
      const contact = await storage.createMessage(dbInput);
      res.status(201).json(contact);
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({
          message: err.errors[0].message,
          field: err.errors[0].path.join('.'),
        });
      }
      res.status(500).json({ message: "Internal Server Error" });
    }
  });

  app.post("/api/delete-account", async (req, res) => {
    try {
      const { email, password } = req.body;
      if (!email || !password) {
        return res.status(400).json({ message: "Email and password are required" });
      }

      const user = await storage.getUserByEmail(email);
      const hashedPassword = createHash("sha256").update(password).digest("hex");
      if (!user || user.password !== hashedPassword) {
        return res.status(401).json({ message: "Invalid email or password" });
      }

      await storage.deleteUser(user.id);
      res.json({ message: "Account deleted successfully" });
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  });

  return httpServer;
}
