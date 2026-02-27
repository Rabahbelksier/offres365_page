import { pgTable, text, serial, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const messageUsers = pgTable("message_users", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  messages: text("messages").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertMessageSchema = createInsertSchema(messageUsers).omit({ id: true, createdAt: true });

export type MessageUser = typeof messageUsers.$inferSelect;
export type InsertMessage = z.infer<typeof insertMessageSchema>;
