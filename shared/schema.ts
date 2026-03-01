import { pgTable, text, serial, timestamp, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const inquiries = pgTable("inquiries", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  subject: text("subject"),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

export const appointments = pgTable("appointments", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  date: timestamp("date").notNull(),
  service: text("service").notNull(),
  notes: text("notes"),
  status: text("status").default("pending"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const reviews = pgTable("reviews", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  rating: serial("rating").notNull(),
  comment: text("comment").notNull(),
  isPublished: boolean("is_published").default(false),
  createdAt: timestamp("created_at").defaultNow(),
});

export const subscribers = pgTable("subscribers", {
  id: serial("id").primaryKey(),
  email: text("email").notNull().unique(),
  createdAt: timestamp("created_at").defaultNow(),
});

export const intakeSubmissions = pgTable("intake_submissions", {
  id: serial("id").primaryKey(),
  fullName: text("full_name").notNull(),
  dateOfBirth: text("date_of_birth").notNull(),
  gender: text("gender").notNull(),
  phone: text("phone").notNull(),
  email: text("email").notNull(),
  address: text("address"),
  emergencyContactName: text("emergency_contact_name"),
  emergencyContactPhone: text("emergency_contact_phone"),
  visitReason: text("visit_reason").notNull(),
  chiefComplaint: text("chief_complaint").notNull(),
  painLevel: text("pain_level"),
  symptomDuration: text("symptom_duration"),
  makesBetter: text("makes_better"),
  makesworse: text("makes_worse"),
  currentMedications: text("current_medications"),
  previousChiropractic: text("previous_chiropractic"),
  previousSurgeriesInjuries: text("previous_surgeries_injuries"),
  medicalConditions: text("medical_conditions"),
  allergies: text("allergies"),
  occupation: text("occupation"),
  exerciseLevel: text("exercise_level"),
  sleepQuality: text("sleep_quality"),
  stressLevel: text("stress_level"),
  healthGoals: text("health_goals"),
  heardAboutUs: text("heard_about_us"),
  consentName: text("consent_name").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertIntakeSubmissionSchema = createInsertSchema(intakeSubmissions).omit({ id: true, createdAt: true });

// Zod Schemas
export const insertInquirySchema = createInsertSchema(inquiries).omit({ id: true, createdAt: true });
export const insertAppointmentSchema = createInsertSchema(appointments).omit({ id: true, createdAt: true, status: true });
export const insertReviewSchema = createInsertSchema(reviews).omit({ id: true, createdAt: true, isPublished: true });
export const insertSubscriberSchema = createInsertSchema(subscribers).omit({ id: true, createdAt: true });

// Types
export type Inquiry = typeof inquiries.$inferSelect;
export type InsertInquiry = z.infer<typeof insertInquirySchema>;

export type Appointment = typeof appointments.$inferSelect;
export type InsertAppointment = z.infer<typeof insertAppointmentSchema>;

export type Review = typeof reviews.$inferSelect;
export type InsertReview = z.infer<typeof insertReviewSchema>;

export type Subscriber = typeof subscribers.$inferSelect;
export type InsertSubscriber = z.infer<typeof insertSubscriberSchema>;

export type IntakeSubmission = typeof intakeSubmissions.$inferSelect;
export type InsertIntakeSubmission = z.infer<typeof insertIntakeSubmissionSchema>;
