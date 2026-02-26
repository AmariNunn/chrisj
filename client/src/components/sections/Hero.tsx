import { useState, useEffect, useCallback } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import slideImg1 from "@assets/IMG_2228_1772059900723.jpg";
import slideImg2 from "@assets/IMG_2364_1772059900723.jpg";
import slideImg3 from "@/assets/images/slide-2386.jpg";
import slideImg4 from "@/assets/images/slide-2406.jpg";
import slideImg5 from "@/assets/images/slide-3100.jpg";
import { MapPin, Clock, Star, ArrowRight } from "lucide-react";

const slides = [
  { src: slideImg1, alt: "Chiropractic neck adjustment" },
  { src: slideImg2, alt: "Percussion therapy treatment" },
  { src: slideImg3, alt: "Wellness care session" },
  { src: slideImg4, alt: "Patient consultation" },
  { src: slideImg5, alt: "Clinic treatment" },
];

export function Hero() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 3000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <div className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.img
            key={current}
            src={slides[current].src}
            alt={slides[current].alt}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0 w-full h-full object-cover"
            data-testid={`hero-slide-${current}`}
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/75 to-primary/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-primary/40" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 backdrop-blur-sm text-white text-sm font-semibold border border-white/20 shadow-sm"
              data-testid="badge-new-patients"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-accent animate-pulse" />
              Taking New Patients
            </motion.div>

            <h1 className="font-display font-extrabold text-5xl md:text-6xl lg:text-7xl leading-[1.05] text-white">
              Welcome to <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-orange-400 to-amber-400 animate-gradient">
                Jordan Wellness Experience
              </span>
            </h1>

            <p className="text-sm md:text-base text-white/90 font-semibold uppercase tracking-widest max-w-lg">
              A Private Sanctuary for Strength, Restoration, and Whole-Body Care
            </p>

            <p className="text-lg md:text-xl text-white/80 max-w-lg leading-relaxed">
              Wellness is not rushed. It is not transactional. And it is never one-size-fits-all. Here, every visit is intentional, every treatment is unhurried, and every plan is built around you.
            </p>

            <div className="flex items-center gap-6 text-sm text-white/70">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className="text-accent fill-accent" />
                  ))}
                </div>
                <span className="font-semibold text-white">5.0</span>
              </div>
              <div className="w-px h-5 bg-white/30" />
              <span>100+ Happy Patients</span>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link href="/booking">
                <Button size="lg" className="rounded-full px-8 py-6 text-lg bg-accent hover:bg-accent/90 text-white shadow-xl shadow-accent/25 hover:shadow-accent/40 transition-all hover:-translate-y-1 group" data-testid="button-book-appointment">
                  Book Appointment
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/services">
                <Button variant="outline" size="lg" className="rounded-full px-8 py-6 text-lg border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 hover:shadow-lg transition-all hover:-translate-y-1" data-testid="button-view-services">
                  View Services
                </Button>
              </Link>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="bg-white/10 backdrop-blur-md border border-white/15 p-4 rounded-2xl flex items-center gap-3"
                data-testid="info-location"
              >
                <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center text-accent">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-[10px] text-white/60 font-bold uppercase tracking-widest">Location</p>
                  <p className="text-sm font-bold text-white leading-tight">3228 Clarksville Pike, Nashville</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.9 }}
                className="bg-white/10 backdrop-blur-md border border-white/15 p-4 rounded-2xl flex items-center gap-3"
                data-testid="info-hours"
              >
                <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center text-accent">
                  <Clock size={20} />
                </div>
                <div>
                  <p className="text-[10px] text-white/60 font-bold uppercase tracking-widest">Open Daily</p>
                  <p className="text-sm font-bold text-white">By Appointment</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
