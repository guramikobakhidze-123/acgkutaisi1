import express from "express";
import { storage } from "../server/storage";
import { api } from "../shared/routes";
import { z } from "zod";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get(api.services.list.path, async (_req, res) => {
  const services = await storage.getServices();
  res.json(services);
});

app.get(api.services.get.path, async (req, res) => {
  const service = await storage.getServiceBySlug(req.params.slug);
  if (!service) return res.status(404).json({ message: "Service not found" });
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
  if (!post) return res.status(404).json({ message: "Post not found" });
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
        field: err.errors[0].path.join("."),
      });
    }
    throw err;
  }
});

export default app;
