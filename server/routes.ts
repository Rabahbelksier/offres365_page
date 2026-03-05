import type { Express } from "express";
import { type Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";
import pg from "pg";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  app.post(api.contacts.create.path, async (req, res) => {
    try {
      const input = api.contacts.create.input.parse(req.body);
      // Map frontend 'message' to DB 'messages'
      const dbInput = {
        name: input.name,
        email: input.email,
        messages: input.message
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

      const supabaseUrl = process.env.SUPABASE_DATABASE_URL;
      if (!supabaseUrl) {
        return res.status(500).json({ message: "Database configuration error" });
      }

      const client = new pg.Client({ connectionString: supabaseUrl, ssl: { rejectUnauthorized: false } });
      await client.connect();

      try {
        const result = await client.query("SELECT id, password FROM users WHERE email = $1", [email]);
        if (result.rows.length === 0 || result.rows[0].password !== password) {
          return res.status(401).json({ message: "Invalid email or password" });
        }

        await client.query("DELETE FROM users WHERE id = $1", [result.rows[0].id]);
        res.json({ message: "Account deleted successfully" });
      } finally {
        await client.end();
      }
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  });

  return httpServer;
}
