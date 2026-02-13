import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";
import { insertInquirySchema, insertAppointmentSchema, insertReviewSchema, insertSubscriberSchema } from "@shared/schema";
import { seedDatabase } from "./seed";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // Seed the database
  await seedDatabase();

  // Inquiries
  app.post(api.inquiries.create.path, async (req, res) => {
    try {
      const input = insertInquirySchema.parse(req.body);
      await storage.createInquiry(input);
      res.status(201).json({ success: true, message: "Inquiry received" });
    } catch (err) {
      if (err instanceof z.ZodError) {
        res.status(400).json({ message: err.errors[0].message });
      } else {
        res.status(500).json({ message: "Internal Server Error" });
      }
    }
  });

  // Appointments
  app.post(api.appointments.create.path, async (req, res) => {
    try {
      // Allow date string from JSON to be coerced to Date object
      const input = insertAppointmentSchema.parse({
        ...req.body,
        date: new Date(req.body.date)
      });
      await storage.createAppointment(input);
      res.status(201).json({ success: true, message: "Appointment request received" });
    } catch (err) {
      if (err instanceof z.ZodError) {
        res.status(400).json({ message: err.errors[0].message });
      } else {
        res.status(500).json({ message: "Internal Server Error" });
      }
    }
  });

  // Reviews
  app.get(api.reviews.list.path, async (req, res) => {
    const reviews = await storage.getReviews();
    res.json(reviews);
  });

  app.post(api.reviews.create.path, async (req, res) => {
    try {
      const input = insertReviewSchema.parse(req.body);
      await storage.createReview(input);
      res.status(201).json({ success: true, message: "Review submitted" });
    } catch (err) {
      if (err instanceof z.ZodError) {
        res.status(400).json({ message: err.errors[0].message });
      } else {
        res.status(500).json({ message: "Internal Server Error" });
      }
    }
  });

  // Subscribers
  app.post(api.subscribers.create.path, async (req, res) => {
    try {
      const input = insertSubscriberSchema.parse(req.body);
      await storage.createSubscriber(input);
      res.status(201).json({ success: true, message: "Subscribed successfully" });
    } catch (err) {
      if (err instanceof z.ZodError) {
        res.status(400).json({ message: err.errors[0].message });
      } else {
        // Handle duplicate email error
        res.status(500).json({ message: "Internal Server Error" });
      }
    }
  });

  return httpServer;
}
