import { useState, useEffect, useCallback } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import slideImg1 from "@assets/IMG_2228_1772059900723.jpg";
import slideImg2 from "@assets/IMG_2364_1772059900723.jpg";
import slideImg3 from "@/assets/images/slide-2386.jpg";
import slideImg4 from "@/assets/images/slide-2406.jpg";
import slideImg5 from "@/assets/images/slide-3100.jpg";
import { ArrowRight } from "lucide-react";

const VAGARO_URL = "https://www.vagaro.com/us04/jordanwellnessexperience";

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
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <>
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <AnimatePresence mode="wait">
            <motion.img
              key={current}
              src={slides[current].src}
              alt={slides[current].alt}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              className="absolute inset-0 w-full h-full object-cover"
              data-testid={`hero-slide-${current}`}
            />
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="space-y-8"
          >
            <h1 className="font-display font-bold text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-[1.05] text-white tracking-tight" data-testid="text-hero-title">
              Jordan Wellness<br />Experience
            </h1>

            <p className="text-base md:text-lg lg:text-xl text-white/80 font-light tracking-[0.2em] uppercase max-w-2xl mx-auto" data-testid="text-hero-tagline">
              Where Clinical Precision Meets Lifelong Wellness
            </p>

            <div className="flex flex-wrap gap-4 justify-center pt-6">
              <a href={VAGARO_URL} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="rounded-full px-10 bg-accent text-accent-foreground border-accent shadow-lg transition-all group" data-testid="button-book-appointment">
                  Book Appointment
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
              <Link href="/services">
                <Button variant="outline" size="lg" className="rounded-full px-10 border-2 border-white/30 text-white backdrop-blur-sm transition-all" data-testid="button-view-services">
                  View Services
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="bg-primary text-primary-foreground overflow-hidden py-3" data-testid="marquee-banner">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...Array(8)].map((_, i) => (
            <span key={i} className="mx-8 text-sm md:text-base font-light tracking-[0.25em] uppercase flex items-center gap-8">
              <span>Now Accepting New Patients</span>
              <span className="text-accent">&#x2726;</span>
            </span>
          ))}
        </div>
      </div>
    </>
  );
}
