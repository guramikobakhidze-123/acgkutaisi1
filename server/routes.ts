import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";
import { services, teamMembers, posts } from "@shared/schema";
import { db } from "./db";

async function seedDatabase() {
  const existingServices = await storage.getServices();
  if (existingServices.length === 0) {
    await db.insert(services).values([
      {
        title: "ფინანსური აუდიტი",
        slug: "financial-audit",
        description: "ჩვენი გუნდი უზრუნველყოფს ფინანსური ანგარიშგების სიზუსტესა და სანდოობას.",
        fullContent: "ჩვენ გთავაზობთ სრულ ფინანსურ აუდიტს საერთაშორისო სტანდარტების შესაბამისად...",
        icon: "Calculator"
      },
      {
        title: "საგადასახადო კონსულტაცია",
        slug: "tax-consulting",
        description: "საგადასახადო რისკების მართვა და ოპტიმიზაცია თქვენი ბიზნესისთვის.",
        fullContent: "ჩვენი საგადასახადო ექსპერტები დაგეხმარებიან საგადასახადო ვალდებულებების სწორად დაგეგმვაში...",
        icon: "FileText"
      },
      {
        title: "ბიზნეს კონსულტაცია",
        slug: "business-advisory",
        description: "სტრატეგიული დაგეგმარება და ბიზნეს პროცესების ეფექტიანობის ზრდა.",
        fullContent: "გთავაზობთ კომპლექსურ ბიზნეს კონსულტაციებს კომპანიის განვითარების ყველა ეტაპზე...",
        icon: "TrendingUp"
      }
    ]);

    await db.insert(teamMembers).values([
      {
        name: "გიორგი ბერიძე",
        role: "მმართველი პარტნიორი",
        bio: "15 წლიანი გამოცდილება აუდიტსა და ფინანსურ მენეჯმენტში.",
        imageUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop"
      },
      {
        name: "ნინო მაისურაძე",
        role: "აუდიტის დეპარტამენტის უფროსი",
        bio: "ACCA სერტიფიცირებული აუდიტორი საერთაშორისო გამოცდილებით.",
        imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop"
      }
    ]);

    await db.insert(posts).values([
      {
        title: "ახალი საგადასახადო რეგულაციები 2025",
        slug: "new-tax-regulations-2025",
        summary: "მნიშვნელოვანი ცვლილებები მოგების გადასახადის კანონმდებლობაში.",
        content: "2025 წლიდან ძალაში შედის ახალი საგადასახადო რეგულაციები, რომლებიც გავლენას მოახდენს...",
        coverImageUrl: "https://images.unsplash.com/photo-1554224155-98406852d0aa?w=800&h=400&fit=crop"
      },
      {
        title: "როგორ მოვემზადოთ აუდიტისთვის?",
        slug: "how-to-prepare-for-audit",
        summary: "პრაქტიკული რჩევები ფინანსური აუდიტის პროცესის გასამარტივებლად.",
        content: "აუდიტის პროცესი შეიძლება იყოს სტრესული, თუმცა სწორი მომზადებით...",
        coverImageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=400&fit=crop"
      }
    ]);
  }
}

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // Seed data on startup
  seedDatabase().catch(console.error);

  app.get(api.services.list.path, async (_req, res) => {
    const services = await storage.getServices();
    res.json(services);
  });

  app.get(api.services.get.path, async (req, res) => {
    const service = await storage.getServiceBySlug(req.params.slug);
    if (!service) {
      return res.status(404).json({ message: "Service not found" });
    }
    res.json(service);
  });

  app.get(api.team.list.path, async (_req, res) => {
    const members = await storage.getTeamMembers();
    res.json(members);
  });

  app.get(api.posts.list.path, async (_req, res) => {
    const posts = await storage.getPosts();
    res.json(posts);
  });

  app.get(api.posts.get.path, async (req, res) => {
    const post = await storage.getPostBySlug(req.params.slug);
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }
    res.json(post);
  });

  app.post(api.contact.submit.path, async (req, res) => {
    try {
      const input = api.contact.submit.input.parse(req.body);
      const request = await storage.createContactRequest(input);
      res.status(201).json(request);
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({
          message: err.errors[0].message,
          field: err.errors[0].path.join('.'),
        });
      }
      throw err;
    }
  });

  return httpServer;
}
