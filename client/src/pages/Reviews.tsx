import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { useReviews, useCreateReview } from "@/hooks/use-api";
import { Star, Loader2, Quote, MessageSquarePlus } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertReviewSchema, type InsertReview } from "@shared/schema";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import { z } from "zod";
import { motion } from "framer-motion";

function ReviewForm({ onClose }: { onClose: () => void }) {
  const mutation = useCreateReview();
  const form = useForm<InsertReview>({
    resolver: zodResolver(insertReviewSchema),
    defaultValues: {
      name: "",
      rating: 5,
      comment: "",
    },
  });

  const onSubmit = (data: InsertReview) => {
    mutation.mutate(data, {
      onSuccess: () => onClose(),
    });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Your Name</FormLabel>
              <FormControl><Input placeholder="Name" className="rounded-xl h-12 bg-muted/30 border-transparent focus:bg-white focus:border-primary/20 transition-all" {...field} /></FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="rating"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Rating</FormLabel>
              <Select 
                onValueChange={(val) => field.onChange(parseInt(val))} 
                defaultValue={String(field.value)}
              >
                <FormControl>
                  <SelectTrigger className="rounded-xl h-12 bg-muted/30 border-transparent focus:bg-white focus:border-primary/20 transition-all">
                    <SelectValue placeholder="Select rating" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {[5, 4, 3, 2, 1].map(num => (
                    <SelectItem key={num} value={String(num)}>{num} Stars</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="comment"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Your Review</FormLabel>
              <FormControl><Textarea placeholder="Share your experience..." className="rounded-xl min-h-[100px] bg-muted/30 border-transparent focus:bg-white focus:border-primary/20 transition-all resize-none" {...field} /></FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full h-12 rounded-xl bg-primary hover:bg-primary/90 shadow-lg" disabled={mutation.isPending}>
          {mutation.isPending ? "Submitting..." : "Submit Review"}
        </Button>
      </form>
    </Form>
  );
}

export default function Reviews() {
  const { data: reviews, isLoading } = useReviews();
  const [open, setOpen] = useState(false);

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
            <p className="text-muted-foreground text-sm mt-1">Real experiences from our patients</p>
          </div>
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <Button className="rounded-full bg-accent hover:bg-accent/90 shadow-lg shadow-accent/20 hover:shadow-accent/40 transition-all hover:-translate-y-1 group">
                <MessageSquarePlus className="mr-2 w-4 h-4" />
                Write a Review
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] rounded-2xl">
              <DialogHeader>
                <DialogTitle className="font-display text-xl">Share Your Experience</DialogTitle>
              </DialogHeader>
              <ReviewForm onClose={() => setOpen(false)} />
            </DialogContent>
          </Dialog>
        </div>

        {isLoading ? (
          <div className="flex justify-center py-20"><Loader2 className="animate-spin text-primary" size={40} /></div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews?.map((review, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="p-8 rounded-3xl bg-white shadow-lg border border-border/50 relative card-hover hover:border-accent/20 group"
              >
                <Quote className="absolute top-6 right-6 text-accent/10 group-hover:text-accent/20 transition-colors" size={44} />
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: review.rating }).map((_, j) => (
                    <Star key={j} size={16} className="text-accent fill-accent" />
                  ))}
                  {Array.from({ length: 5 - review.rating }).map((_, j) => (
                    <Star key={j} size={16} className="text-muted-foreground/20" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 italic leading-relaxed">"{review.comment}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center text-white font-bold text-sm">
                    {review.name.charAt(0)}
                  </div>
                  <div className="font-bold text-primary">{review.name}</div>
                </div>
              </motion.div>
            ))}
            {(!reviews || reviews.length === 0) && (
              <div className="p-8 rounded-3xl bg-white shadow-lg border border-border/50 relative">
                <Quote className="absolute top-6 right-6 text-accent/10" size={44} />
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={16} className="text-accent fill-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 italic leading-relaxed">"Dr. Nicole is amazing! My back pain is gone after just a few sessions. Highly recommend."</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center text-white font-bold text-sm">S</div>
                  <div className="font-bold text-primary">Sarah Johnson</div>
                </div>
              </div>
            )}
          </div>
        )}
      </Section>
      
      <Footer />
    </div>
  );
}
