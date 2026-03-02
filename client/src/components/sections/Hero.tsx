import { useState, useEffect, useCallback } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Clock } from "lucide-react";
import slideImg1 from "@assets/IMG_2228_1772413231480.jpeg";
import slideImg2 from "@assets/E1B8E3F7-0E79-4E68-BD43-D2D57827C49F_1772413227959.JPG";
import slideImg3 from "@/assets/images/img-2509.jpg";
import slideImg4 from "@assets/IMG_2636_1772413240374.jpeg";
import slideImg5 from "@assets/IMG_6517_1772413246373.jpeg";
import slideImg6 from "@/assets/images/img-4930.jpg";
import slideImg7 from "@/assets/images/img-4462.jpg";
import slideImg8 from "@/assets/images/img-4196.jpg";

const slides = [
  { src: slideImg1, alt: "Dr. Cox-Jordan chiropractic adjustment" },
  { src: slideImg2, alt: "Fitness training session" },
  { src: slideImg3, alt: "Wellness care session" },
  { src: slideImg4, alt: "Cryotherapy treatment" },
  { src: slideImg5, alt: "Body sculpting assessment" },
  { src: slideImg6, alt: "Clinic treatment" },
  { src: slideImg7, alt: "Patient consultation" },
  { src: slideImg8, alt: "Wellness studio" },
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
              By Appt Only &nbsp;·&nbsp; Sun–Sat
            </span>
          </div>
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
