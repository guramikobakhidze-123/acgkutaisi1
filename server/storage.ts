import { db } from "./db";
import {
  services,
  teamMembers,
  posts,
  contactRequests,
  type Service,
  type TeamMember,
  type Post,
  type ContactRequest,
  type InsertContactRequest
} from "@shared/schema";
import { eq } from "drizzle-orm";

export interface IStorage {
  getServices(): Promise<Service[]>;
  getServiceBySlug(slug: string): Promise<Service | undefined>;
  
  getTeamMembers(): Promise<TeamMember[]>;
  
  getPosts(): Promise<Post[]>;
  getPostBySlug(slug: string): Promise<Post | undefined>;
  
  createContactRequest(request: InsertContactRequest): Promise<ContactRequest>;
}

export class DatabaseStorage implements IStorage {
  async getServices(): Promise<Service[]> {
    return await db.select().from(services);
  }

  async getServiceBySlug(slug: string): Promise<Service | undefined> {
    const [service] = await db.select().from(services).where(eq(services.slug, slug));
    return service;
  }

  async getTeamMembers(): Promise<TeamMember[]> {
    return await db.select().from(teamMembers);
  }

  async getPosts(): Promise<Post[]> {
    return await db.select().from(posts);
  }

  async getPostBySlug(slug: string): Promise<Post | undefined> {
    const [post] = await db.select().from(posts).where(eq(posts.slug, slug));
    return post;
  }

  async createContactRequest(request: InsertContactRequest): Promise<ContactRequest> {
    const [contact] = await db.insert(contactRequests).values(request).returning();
    return contact;
  }
}

export const storage = new DatabaseStorage();
