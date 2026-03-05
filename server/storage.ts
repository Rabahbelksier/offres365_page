import { db } from "./db";
import { getSupabaseDb } from "./supabaseDb";
import { messageUsers, users, type MessageUser, type InsertMessage, type User } from "@shared/schema";
import { eq } from "drizzle-orm";

export interface IStorage {
  createMessage(message: InsertMessage): Promise<MessageUser>;
  getUserByEmail(email: string): Promise<User | undefined>;
  deleteUser(id: number): Promise<void>;
}

export class DatabaseStorage implements IStorage {
  async createMessage(insertMessage: InsertMessage): Promise<MessageUser> {
    const [message] = await db
      .insert(messageUsers)
      .values(insertMessage)
      .returning();
    return message;
  }

  async getUserByEmail(email: string): Promise<User | undefined> {
    const [user] = await getSupabaseDb().select().from(users).where(eq(users.email, email));
    return user;
  }

  async deleteUser(id: number): Promise<void> {
    await getSupabaseDb().delete(users).where(eq(users.id, id));
  }
}

export const storage = new DatabaseStorage();
