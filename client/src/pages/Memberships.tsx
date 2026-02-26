import { useEffect } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "wouter";
import {
  ArrowRight,
  Clock,
  BadgePercent,
  Shield,
  Zap,
  HeartPulse,
  Cpu,
  Users,
  CreditCard,
  Crown,
  Star,
  Snowflake,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";
import bookingHeaderImg from "@/assets/images/booking-header.jpg";

export default function Memberships() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const benefits = [
    {
      icon: Clock,
      title: "Priority Access Hours",
      desc: "7am to 7pm (24-48 hrs notice required)",
    },
    {
      icon: BadgePercent,
      title: "Discounted Services",
      desc: "Save with bundled service packages",
    },
    {
      icon: Shield,
      title: "Discreet, Private Experience",
      desc: "A private wellness setting tailored to your comfort",
    },
    {
      icon: Zap,
      title: "Elite Performance Optimization",
      desc: "Cutting-edge techniques for peak performance",
    },
    {
      icon: HeartPulse,
      title: "Proactive Health & Longevity",
      desc: "Proactive health and longevity planning",
    },
    {
      icon: Cpu,
      title: "VIP Wellness Technology",
      desc: "VIP access to cutting edge wellness technology",
    },
    {
      icon: Users,
      title: "Perks for Family & Friends",
      desc: "Birthday parties, Bridal/Bachelorette, Girls Night Out, and more",
    },
    {
      icon: CreditCard,
      title: "Additional Body Sculpting",
      desc: "Body Sculpting available at an additional charge for members",
    },
  ];

  return (
    <div className="min-h-screen font-sans bg-background text-foreground overflow-x-hidden">
      <Navbar />

      <div className="relative h-[340px] md:h-[420px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={bookingHeaderImg}
            alt="Membership & Packages"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />
        </div>
        <div className="relative z-10 text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block text-accent font-bold tracking-wider uppercase text-sm px-4 py-1.5 bg-accent/10 rounded-full mb-4 backdrop-blur-sm">
              Exclusive Access
            </span>
            <h1
              className="font-display font-bold text-4xl md:text-6xl text-white leading-tight"
              data-testid="text-page-title"
            >
              Membership & Packages
            </h1>
            <p className="text-white/70 text-lg mt-4 max-w-xl mx-auto">
              Tailored wellness plans designed for those who invest in their health
            </p>
          </motion.div>
        </div>
      </div>

      <main>
        <Section className="bg-white">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h2 className="font-display font-bold text-3xl md:text-4xl text-primary">
                How It Works
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                At Jordan Wellness Experience, memberships and packages give you access to our most comprehensive and personalized care options.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6 text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.6 }}
              >
                <Card className="p-6 h-full">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-md bg-accent/10 flex items-center justify-center shrink-0">
                      <Crown className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-lg text-primary mb-2">
                        Memberships Required
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Memberships are required for the <strong>"Essential" ChiroFitness Experience</strong> and the <strong>"Elite" VIP Experience</strong>. These concierge-level programs provide ongoing, personalized care.
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <Card className="p-6 h-full">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-md bg-accent/10 flex items-center justify-center shrink-0">
                      <Star className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-lg text-primary mb-2">
                        Packages Available
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Packages are available for the <strong>"Enhanced" Body Sculpting/Fat Freezing</strong> and <strong>"Elevated" Targeted Cryotherapy</strong> services, allowing you to purchase multi-session bundles.
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-md bg-accent/10 flex items-center justify-center shrink-0">
                    <Snowflake className="w-6 h-6 text-accent" />
                  </div>
                  <div className="text-left">
                    <h3 className="font-display font-bold text-lg text-primary mb-2">
                      Cryotherapy Add-On
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Targeted Cryotherapy can be added on to both <strong>Signature</strong> and <strong>Premium</strong> services for enhanced recovery, inflammation reduction, and skin rejuvenation benefits.
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </Section>

        <Section
          title="Membership Benefits"
          subtitle="Why Join"
          className="bg-[#F8F9FB]"
        >
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
              >
                <Card className="p-6 h-full text-center" data-testid={`card-benefit-${i}`}>
                  <div className="w-14 h-14 mx-auto rounded-md bg-gradient-to-br from-accent/15 to-accent/5 flex items-center justify-center mb-4">
                    <benefit.icon className="w-7 h-7 text-accent" />
                  </div>
                  <h3 className="font-display font-bold text-base text-primary mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {benefit.desc}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </Section>

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
              <Sparkles className="w-10 h-10 text-accent mx-auto" />
              <h2 className="font-display font-bold text-4xl md:text-5xl text-white leading-tight">
                Ready to Elevate Your{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-amber-400">
                  Wellness?
                </span>
              </h2>
              <p className="text-lg md:text-xl text-white/70 max-w-lg mx-auto leading-relaxed">
                Schedule a consultation to discover which membership or package is right for you.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <Link href="/booking">
                <Button
                  size="lg"
                  className="bg-accent text-white hover:bg-accent/90 rounded-full px-10 h-14 text-lg shadow-xl shadow-accent/30 hover:shadow-accent/50 transition-all hover:-translate-y-1 group"
                  data-testid="button-book-appointment"
                >
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
