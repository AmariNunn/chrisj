import { useEffect } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Team } from "@/components/sections/Team";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, Sparkles, Shield, Clock, Users, Star } from "lucide-react";
import { motion } from "framer-motion";
import coupleImg from "@assets/IMG_2607_1772062959050.JPG";

export default function Experience() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen font-sans bg-background text-foreground overflow-x-hidden">
      <Navbar />

      <div className="relative h-[340px] md:h-[420px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-primary" />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 to-primary" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500/5 rounded-full blur-[100px]" />
        <div className="relative z-10 text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block text-accent font-bold tracking-wider uppercase text-sm px-4 py-1.5 bg-accent/10 rounded-full mb-4" data-testid="text-page-subtitle">
              About Us
            </span>
            <h1 className="font-display font-bold text-4xl md:text-6xl text-white leading-tight" data-testid="text-page-title">
              The Experience
            </h1>
          </motion.div>
        </div>
      </div>

      <main>
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
                alt="Jordan Wellness Experience"
                className="rounded-3xl shadow-2xl relative z-10 w-full ring-1 ring-white/50"
                data-testid="img-experience-couple"
              />
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="absolute -bottom-6 -right-6 glass p-4 rounded-2xl z-20 animate-float-slow"
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
                Welcome
              </span>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-primary leading-tight" data-testid="text-welcome-heading">
                Whatever life throws at you, we've got your{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-orange-600">BACK!</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed" data-testid="text-welcome-description">
                At Jordan Wellness Experience, wellness is not rushed. It is not transactional. And it is never one-size-fits-all. We created this private wellness studio for those who are looking for more than a quick appointment &mdash; for those who want to be seen, heard, and cared for with real intention.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Every visit is designed around you &mdash; your body, your goals, your lifestyle. Whether you're here for chiropractic care, fitness training, or a moment of restoration, you'll experience the kind of unhurried, attentive care that makes all the difference.
              </p>
            </motion.div>
          </div>
        </Section>

        <Section className="bg-[#F8F9FB]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16 max-w-3xl mx-auto"
          >
            <span className="text-accent font-bold tracking-wider uppercase text-sm mb-3 block">
              Our Sanctuary
            </span>
            <h2 className="font-display font-bold text-3xl md:text-5xl text-primary leading-tight">
              A Private Wellness Setting
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-6">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-lg text-muted-foreground leading-relaxed text-center"
              data-testid="text-sanctuary-description"
            >
              Located in Nashville, this private wellness studio was created for those who quietly carry a lot &mdash; professionals, caregivers, parents, leaders, athletes, and anyone who pours into others and rarely pours back into themselves. Here, you'll find a space that honors your time, your privacy, and your well-being.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            {[
              {
                icon: Shield,
                title: "Intentional Care",
                desc: "Every treatment is thoughtfully designed around your unique needs, not a one-size-fits-all protocol.",
              },
              {
                icon: Clock,
                title: "Unhurried Appointments",
                desc: "We take the time to listen, assess, and treat. No rushing, no assembly line. Just focused attention on you.",
              },
              {
                icon: Users,
                title: "Private Setting",
                desc: "A discreet, comfortable environment where you can relax and focus on your health without distraction.",
              },
              {
                icon: Star,
                title: "Whole-Body Approach",
                desc: "We address the full picture of your wellness, combining chiropractic, fitness, and restorative therapies.",
              },
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className="p-8 rounded-3xl bg-white border border-transparent hover:border-accent/10 hover:shadow-xl transition-all duration-500 text-center group"
                data-testid={`card-feature-${i}`}
              >
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-accent/15 to-accent/5 rounded-2xl flex items-center justify-center text-accent shadow-lg mb-6 group-hover:scale-110 transition-transform duration-500">
                  <feature.icon size={30} />
                </div>
                <h3 className="font-display font-bold text-xl mb-3 text-primary">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </Section>

        <Team />

        <Section dark className="text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
            <div className="absolute w-[500px] h-[500px] bg-accent/20 rounded-full blur-[120px] -top-40 -left-40 animate-float-slow" />
            <div className="absolute w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px] -bottom-40 -right-40 animate-float" />
          </div>

          <div className="relative z-10 max-w-2xl mx-auto space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="space-y-6"
            >
              <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-white leading-tight">
                Ready to Experience the{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-amber-400">Difference?</span>
              </h2>
              <p className="text-lg md:text-xl text-white/70 max-w-lg mx-auto leading-relaxed" data-testid="text-cta-description">
                Book your appointment today and discover what intentional, unhurried wellness care feels like.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
            >
              <Link href="/booking">
                <Button size="lg" className="bg-accent text-white hover:bg-accent/90 rounded-full px-10 h-14 text-lg shadow-xl shadow-accent/30 hover:shadow-accent/50 transition-all hover:-translate-y-1 animate-pulse-glow group" data-testid="button-book-appointment">
                  Book Appointment
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </Section>
      </main>

      <Footer />
    </div>
  );
}
