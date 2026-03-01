import { useState, useEffect, useCallback } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Clock } from "lucide-react";
import slideImg1 from "@assets/IMG_2228_1772059900723.jpg";
import slideImg2 from "@assets/IMG_2364_1772059900723.jpg";
import slideImg3 from "@/assets/images/slide-2386.jpg";
import slideImg4 from "@/assets/images/slide-2406.jpg";
import slideImg5 from "@/assets/images/slide-3100.jpg";
import slideImg6 from "@assets/IMG_5085_1772390113181.jpg";
import slideImg7 from "@assets/IMG_6517_1772390113182.jpg";
import slideImg8 from "@/assets/images/img-3944.jpg";
import slideImg9 from "@/assets/images/img-4930.jpg";
import slideImg10 from "@/assets/images/img-5103.jpg";

const slides = [
  { src: slideImg1, alt: "Dr. Cox-Jordan chiropractic neck adjustment" },
  { src: slideImg2, alt: "Percussion therapy treatment" },
  { src: slideImg3, alt: "Wellness care session" },
  { src: slideImg4, alt: "Patient consultation" },
  { src: slideImg5, alt: "Clinic treatment" },
  { src: slideImg6, alt: "Wellness studio session" },
  { src: slideImg7, alt: "Jordan Wellness Experience" },
  { src: slideImg8, alt: "Chiropractic care" },
  { src: slideImg9, alt: "Fitness training session" },
  { src: slideImg10, alt: "Body wellness treatment" },
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
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/75" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto pb-24">
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
              Where Clinical Precision Meets Lifelong Vitality
            </p>

            <div className="flex flex-wrap gap-4 justify-center pt-6">
              <Link href="/experience">
                <Button size="lg" className="rounded-full px-10 bg-accent text-accent-foreground border-accent shadow-lg transition-all group" data-testid="button-begin-experience">
                  Begin Your Experience
                </Button>
              </Link>
              <Link href="/services">
                <Button variant="outline" size="lg" className="rounded-full px-10 border-2 border-white/30 text-white backdrop-blur-sm transition-all" data-testid="button-view-services">
                  Services
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 z-10 bg-black/50 backdrop-blur-sm border-t border-white/10 py-3 px-4" data-testid="hero-location-strip">
          <div className="container mx-auto flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-8 text-white/75 text-xs tracking-wider">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-accent shrink-0" />
              3228 Clarksville Pike, Suite 101, Nashville, TN 37218
            </span>
            <span className="hidden sm:block text-white/30">|</span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-accent shrink-0" />
              By Appt Only &nbsp;·&nbsp; 11am–2pm &amp; 4pm–7pm &nbsp;·&nbsp; Sun–Sat
            </span>
          </div>
        </div>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${i === current ? "bg-accent w-6" : "bg-white/30 w-1.5"}`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
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
