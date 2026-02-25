import { useState, useEffect, useCallback } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import heroImg from "@/assets/images/hero-doctor.jpg";
import slideImg1 from "@assets/IMG_2228_1772059900723.jpg";
import slideImg2 from "@assets/IMG_2364_1772059900723.jpg";
import slideImg3 from "@/assets/images/slide-2386.jpg";
import slideImg4 from "@/assets/images/slide-2406.jpg";
import slideImg5 from "@/assets/images/slide-3100.jpg";
import { MapPin, Clock, Star, ArrowRight } from "lucide-react";

const slides = [
  { src: heroImg, alt: "Jordan Wellness Team" },
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
    <div className="relative min-h-screen flex items-center pt-20 overflow-hidden hero-gradient">
      <div className="absolute top-20 right-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-float-slow" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[200px]" />

      <div className="container mx-auto px-4 md:px-6 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="space-y-8 z-10"
        >
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-accent/15 to-accent/5 text-accent text-sm font-semibold border border-accent/20 shadow-sm"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-accent animate-pulse" />
            Taking New Patients
          </motion.div>
          
          <h1 className="font-display font-extrabold text-5xl md:text-6xl lg:text-7xl leading-[1.05] text-primary">
            Your Health is <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-orange-500 to-amber-600 animate-gradient">Our Priority</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed">
            Experience holistic wellness with our expert team. We provide chiropractor services, physical therapy, and personalized nutrition plans.
          </p>

          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className="text-accent fill-accent" />
                ))}
              </div>
              <span className="font-semibold text-primary">5.0</span>
            </div>
            <div className="w-px h-5 bg-border" />
            <span>100+ Happy Patients</span>
          </div>
          
          <div className="flex flex-wrap gap-4 pt-2">
            <Link href="/booking">
              <Button size="lg" className="rounded-full px-8 py-6 text-lg bg-primary hover:bg-primary/90 shadow-xl shadow-primary/25 hover:shadow-primary/40 transition-all hover:-translate-y-1 group">
                Book Appointment
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/services">
              <Button variant="outline" size="lg" className="rounded-full px-8 py-6 text-lg border-2 border-primary/15 hover:bg-white hover:border-primary/40 hover:shadow-lg transition-all hover:-translate-y-1">
                View Services
              </Button>
            </Link>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
          className="relative z-0 lg:h-[620px] flex items-center justify-center"
        >
          <div className="relative w-full h-full max-h-[520px] lg:max-h-full">
            <div className="absolute inset-0 bg-gradient-to-tr from-accent/30 to-primary/20 rounded-[2.5rem] rotate-3 transform translate-x-4 translate-y-4 blur-sm" />
            <div className="absolute -inset-1 bg-gradient-to-tr from-accent/20 to-primary/10 rounded-[2.5rem] -rotate-2 transform -translate-x-2 -translate-y-2" />
            <div className="relative w-full h-full rounded-[2.5rem] shadow-2xl z-10 ring-1 ring-white/50 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.img
                  key={current}
                  src={slides[current].src}
                  alt={slides[current].alt}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6 }}
                  className="absolute inset-0 w-full h-full object-cover"
                  data-testid={`hero-slide-${current}`}
                />
              </AnimatePresence>
            </div>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2" data-testid="slideshow-indicators">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    i === current
                      ? "bg-white w-6"
                      : "bg-white/50 hover:bg-white/80"
                  }`}
                  data-testid={`slideshow-dot-${i}`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
            
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="absolute -bottom-6 left-4 md:-left-6 glass p-5 rounded-2xl flex items-center gap-4 z-20 max-w-[260px] animate-float-slow"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent/20 to-accent/10 flex items-center justify-center text-accent">
                <MapPin size={22} />
              </div>
              <div>
                <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-widest">Location</p>
                <p className="text-sm font-bold text-primary leading-tight">3228 Clarksville Pike, Nashville</p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="absolute top-8 -right-4 md:-right-6 glass p-5 rounded-2xl flex items-center gap-4 z-20 max-w-[220px] animate-float"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/15 to-primary/5 flex items-center justify-center text-primary">
                <Clock size={22} />
              </div>
              <div>
                <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-widest">Open Daily</p>
                <p className="text-sm font-bold text-primary">By Appointment</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
