
import { storage } from "./storage";

export async function seedDatabase() {
  const existingReviews = await storage.getReviews();
  if (existingReviews.length === 0) {
    await storage.createReview({
      name: "Sarah M.",
      rating: 5,
      comment: "Prevention, Wellness, and Self Care are at the forefront of what we do. We treat the whole body so you can have a whole life. Highly recommended!",
      isPublished: true
    });
    await storage.createReview({
      name: "James T.",
      rating: 5,
      comment: "Whatever life throws at you, they've got your BACK! The team is incredibly professional and caring.",
      isPublished: true
    });
    await storage.createReview({
      name: "Emily R.",
      rating: 5,
      comment: "Best wellness experience in Nashville. Dr. Nicole and Chris are amazing!",
      isPublished: true
    });
    console.log("Seeded database with initial reviews");
  }
}
