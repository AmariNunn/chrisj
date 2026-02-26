import { useEffect } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/ui/section";
import { Team } from "@/components/sections/Team";
import { motion } from "framer-motion";
import coupleImg from "@assets/IMG_2607_1772062959050.JPG";
import { Sparkles } from "lucide-react";

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen font-sans bg-background text-foreground overflow-x-hidden">
      <Navbar />

      <main>
        <section className="relative py-20 md:py-28 bg-primary text-white overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute w-[500px] h-[500px] bg-accent/15 rounded-full blur-[120px] -top-40 -left-40" />
            <div className="absolute w-[400px] h-[400px] bg-white/5 rounded-full blur-[100px] -bottom-40 -right-40" />
          </div>
          <div className="container mx-auto px-4 md:px-6 relative z-10 text-center max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <span className="text-accent font-bold tracking-wider uppercase text-sm mb-4 block" data-testid="text-about-subtitle">
                Our Story
              </span>
              <h1 className="font-display font-bold text-4xl md:text-6xl leading-tight mb-6" data-testid="text-about-title">
                About Jordan Wellness Experience
              </h1>
              <p className="text-lg text-white/70 max-w-xl mx-auto" data-testid="text-about-intro">
                Where clinical precision meets lifelong wellness
              </p>
            </motion.div>
          </div>
        </section>

        <Section className="bg-white">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-tr from-accent/20 to-primary/10 rounded-[2rem] rotate-2 blur-sm" />
              <div className="absolute -inset-2 bg-gradient-to-bl from-primary/10 to-accent/10 rounded-[2rem] -rotate-1" />
              <img
                src={coupleImg}
                alt="Dr. Nicole Cox-Jordan and Christopher Jordan"
                className="rounded-3xl shadow-2xl relative z-10 w-full ring-1 ring-white/50"
                data-testid="img-about-couple"
              />
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="absolute -bottom-6 -right-6 bg-white/90 backdrop-blur-sm p-4 rounded-2xl z-20 shadow-xl animate-float-slow"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center">
                    <Sparkles className="text-accent" size={24} />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-primary">15+</p>
                    <p className="text-xs text-muted-foreground font-medium">Years Experience</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="space-y-6"
            >
              <span className="inline-block text-accent font-bold tracking-wider uppercase text-sm px-4 py-1.5 bg-accent/10 rounded-full">
                The Studio
              </span>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-primary leading-tight" data-testid="text-studio-heading">
                A Private Wellness Sanctuary in Nashville
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed" data-testid="text-studio-description">
                <p>
                  At Jordan Wellness Experience, wellness is not rushed. It is not transactional. And it is never one-size-fits-all. Every visit is intentional, every treatment is unhurried, and every plan is built around you.
                </p>
                <p>
                  Located in Nashville, this private wellness studio was created for those who quietly carry a lot &mdash; professionals, caregivers, parents, leaders, and athletes. Whether you are recovering from injury, managing chronic tension, or simply investing in your long-term health, we meet you where you are and build from there.
                </p>
                <p>
                  Our studio combines chiropractic care, personalized fitness training, and restoration therapies in one thoughtfully designed space. No waiting rooms full of strangers. No cookie-cutter treatment plans. Just real, measurable results in a setting that respects your time, your privacy, and your goals.
                </p>
              </div>
            </motion.div>
          </div>
        </Section>

        <Team />
      </main>

      <Footer />
    </div>
  );
}
