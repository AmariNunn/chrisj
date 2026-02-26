import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Star, Quote, ExternalLink } from "lucide-react";
import { useEffect } from "react";
import { motion } from "framer-motion";

const reviews = [
  {
    name: "Sarah M.",
    rating: 5,
    comment: "Dr. Nicole is absolutely amazing! My back pain is completely gone after just a few sessions. The private, unhurried setting is unlike any clinic I've been to. Highly recommend!",
    service: "Chiropractic Care",
  },
  {
    name: "James T.",
    rating: 5,
    comment: "Chris is a phenomenal trainer. He understood exactly where I was starting from and built a program that actually works. Down 30 lbs and feeling stronger than ever.",
    service: "Fitness Training",
  },
  {
    name: "Denise W.",
    rating: 5,
    comment: "The Happy Hour experience is pure bliss. One hour of total relaxation — the zero gravity chair and hydrotherapy table alone are worth every penny. I leave feeling like a new person.",
    service: "Happy Hour Wellness",
  },
  {
    name: "Marcus L.",
    rating: 5,
    comment: "I was in a car accident and Dr. Nicole helped me recover so much faster than I expected. She genuinely cares about her patients and it shows in every visit.",
    service: "Chiropractic Care",
  },
  {
    name: "Tiffany R.",
    rating: 5,
    comment: "The Essential ChiroFitness membership is the best investment I've made for my health. Having both chiro and fitness under one roof with two experts who actually collaborate is game-changing.",
    service: "Essential ChiroFitness",
  },
  {
    name: "Kevin B.",
    rating: 5,
    comment: "I've tried so many gyms and trainers. Chris is different — he listens, he adjusts, and he holds you accountable without being harsh. The private studio is a huge bonus.",
    service: "Fitness Training",
  },
];

export default function Reviews() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="relative bg-primary text-white pt-32 pb-20 text-center overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500/10 rounded-full blur-[100px]" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative z-10"
        >
          <span className="inline-block text-accent font-bold tracking-wider uppercase text-sm px-4 py-1.5 bg-accent/15 rounded-full mb-6 border border-accent/20">Testimonials</span>
          <h1 className="font-display font-bold text-4xl md:text-6xl mb-4">Client Testimonials</h1>
          <p className="opacity-70 max-w-xl mx-auto text-lg">See what others are saying about the Jordan Wellness Experience.</p>
        </motion.div>
      </div>

      <Section>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-12">
          <div>
            <h2 className="font-display font-bold text-2xl text-primary">Recent Reviews</h2>
            <p className="text-muted-foreground text-sm mt-1">Real experiences from our patients and clients</p>
          </div>
          <a
            href="https://www.google.com/search?q=jordan+wellness+experience+nashville"
            target="_blank"
            rel="noopener noreferrer"
            data-testid="button-write-review"
          >
            <Button className="rounded-full bg-accent hover:bg-accent/90 shadow-lg shadow-accent/20 hover:shadow-accent/40 transition-all hover:-translate-y-1 group">
              <ExternalLink className="mr-2 w-4 h-4" />
              Write a Google Review
            </Button>
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="p-8 rounded-3xl bg-white shadow-lg border border-border/50 relative card-hover hover:border-accent/20 group"
              data-testid={`card-review-${i}`}
            >
              <Quote className="absolute top-6 right-6 text-accent/10 group-hover:text-accent/20 transition-colors" size={44} />
              <div className="flex gap-1 mb-3">
                {Array.from({ length: review.rating }).map((_, j) => (
                  <Star key={j} size={16} className="text-accent fill-accent" />
                ))}
              </div>
              <p className="text-xs font-bold uppercase tracking-wider text-accent/70 mb-3">{review.service}</p>
              <p className="text-muted-foreground mb-6 italic leading-relaxed">"{review.comment}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center text-white font-bold text-sm">
                  {review.name.charAt(0)}
                </div>
                <div className="font-bold text-primary">{review.name}</div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-14 text-center"
        >
          <p className="text-muted-foreground mb-4">Had a great experience? Share it with others!</p>
          <a
            href="https://www.google.com/search?q=jordan+wellness+experience+nashville"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="outline" className="rounded-full px-8 border-2 border-primary/15 text-primary hover:bg-primary hover:text-white transition-all">
              Leave a Google Review
              <ExternalLink className="ml-2 w-4 h-4" />
            </Button>
          </a>
        </motion.div>
      </Section>

      <Footer />
    </div>
  );
}
