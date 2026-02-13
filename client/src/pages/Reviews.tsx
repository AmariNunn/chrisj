import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { useReviews, useCreateReview } from "@/hooks/use-api";
import { Star, Loader2, Quote } from "lucide-react";
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
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Your Name</FormLabel>
              <FormControl><Input placeholder="Name" {...field} /></FormControl>
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
                  <SelectTrigger>
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
              <FormControl><Textarea placeholder="Share your experience..." {...field} /></FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full" disabled={mutation.isPending}>
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
      
      <div className="bg-primary text-white pt-32 pb-16 text-center">
        <h1 className="font-display font-bold text-4xl mb-4">Client Testimonials</h1>
        <p className="opacity-80">See what others are saying about the Jordan Wellness Experience.</p>
      </div>

      <Section>
        <div className="flex justify-between items-center mb-10">
          <h2 className="font-display font-bold text-2xl text-primary">Recent Reviews</h2>
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <Button className="rounded-full bg-accent hover:bg-accent/90">Write a Review</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Share Your Experience</DialogTitle>
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
              <div key={i} className="p-8 rounded-3xl bg-white shadow-lg border border-border relative">
                <Quote className="absolute top-6 right-6 text-accent/20" size={40} />
                <div className="flex gap-1 mb-4 text-accent">
                  {Array.from({ length: review.rating }).map((_, j) => (
                    <Star key={j} size={16} fill="currentColor" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 italic">"{review.comment}"</p>
                <div className="font-bold text-primary">{review.name}</div>
              </div>
            ))}
            {/* Hardcoded sample review if DB empty */}
            {(!reviews || reviews.length === 0) && (
              <div className="p-8 rounded-3xl bg-white shadow-lg border border-border relative">
                <Quote className="absolute top-6 right-6 text-accent/20" size={40} />
                <div className="flex gap-1 mb-4 text-accent">
                  <Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" />
                </div>
                <p className="text-muted-foreground mb-6 italic">"Dr. Nicole is amazing! My back pain is gone after just a few sessions. Highly recommend."</p>
                <div className="font-bold text-primary">Sarah Johnson</div>
              </div>
            )}
          </div>
        )}
      </Section>
      
      <Footer />
    </div>
  );
}
