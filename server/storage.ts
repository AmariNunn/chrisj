import {
  inquiries, appointments, reviews, subscribers,
  type Inquiry, type InsertInquiry,
  type Appointment, type InsertAppointment,
  type Review, type InsertReview,
  type Subscriber, type InsertSubscriber
} from "@shared/schema";
import { db } from "./db";
import { eq } from "drizzle-orm";

export interface IStorage {
  createInquiry(inquiry: InsertInquiry): Promise<Inquiry>;
  createAppointment(appointment: InsertAppointment): Promise<Appointment>;
  createReview(review: InsertReview): Promise<Review>;
  getReviews(): Promise<Review[]>;
  createSubscriber(subscriber: InsertSubscriber): Promise<Subscriber>;
}

export class DatabaseStorage implements IStorage {
  async createInquiry(insertInquiry: InsertInquiry): Promise<Inquiry> {
    const [inquiry] = await db.insert(inquiries).values(insertInquiry).returning();
    return inquiry;
  }

  async createAppointment(insertAppointment: InsertAppointment): Promise<Appointment> {
    const [appointment] = await db.insert(appointments).values(insertAppointment).returning();
    return appointment;
  }

  async createReview(insertReview: InsertReview): Promise<Review> {
    const [review] = await db.insert(reviews).values(insertReview).returning();
    return review;
  }

  async getReviews(): Promise<Review[]> {
    return await db.select().from(reviews).where(eq(reviews.isPublished, true));
  }

  async createSubscriber(insertSubscriber: InsertSubscriber): Promise<Subscriber> {
    const [subscriber] = await db.insert(subscribers).values(insertSubscriber).returning();
    return subscriber;
  }
}

export const storage = new DatabaseStorage();
