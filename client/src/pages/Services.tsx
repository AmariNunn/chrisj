import { useEffect } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import {
  ArrowRight,
  Activity,
  Dumbbell,
  Clock,
  Snowflake,
  Sparkles,
  Crown,
  CheckCircle2,
  Users,
  Star,
  Zap,
  Heart,
  Shield,
  Target,
} from "lucide-react";
import { motion } from "framer-motion";
import chiropracticImg from "@/assets/images/service-chiropractic.jpg";
import massageImg from "@/assets/images/service-massage.jpg";
import nutritionImg from "@/assets/images/service-nutrition.jpg";
import servicesHeaderImg from "/images/services-header.jpg";
import essentialVideo from "@assets/0225_(1)(1)_1772074153901.mp4";
import bodySculptingVideo from "@assets/crisj_1772072399228.mp4";
import cryoVideo from "@assets/IMG_8944_1772074707677.mov";
import eliteVideo from "@assets/IMG_1419_1772074592270.mov";

export default function Services() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const signatureServices = [
    {
      title: "Chiropractic Care",
      icon: Activity,
      img: chiropracticImg,
      features: [
        "Private wellness setting",
        "Precision adjustments coupled with PT modalities",
        "Personalized treatment plans",
        "Unhurried treatments",
        "Auto Accident / Sports Injuries",
        "Preventative / Corrective / Longevity care",
        "All ages including Pediatric and Elderly",
      ],
    },
    {
      title: "Fitness Training Wellness Experience",
      icon: Dumbbell,
      img: nutritionImg,
      features: [
        "Private workout studio",
        "Personalized programs",
        "Corrective Exercise",
        "Performance / Strength / Conditioning",
        "Body Transformation / Weight management",
        "1-on-1 or Group Training (max 5)",
      ],
    },
    {
      title: '"Happy Hour" Wellness Experience',
      icon: Clock,
      img: massageImg,
      description:
        "ONE FULL HOUR of Relaxation therapy. Releases tension, supports recovery, reduces stress, and provides a nervous system reset.",
      features: [
        "Zero Gravity massage chair",
        "Intersegmental Traction table",
        "Heated Hydrotherapy table",
        "Theragun",
        "Jeanie Rub therapy",
      ],
    },
  ];

  const premiumServices = [
    {
      title: '"Essential" ChiroFitness Experience',
      icon: Star,
      badge: "Concierge Membership",
      price: "Starting at $299+",
      video: essentialVideo,
      features: [
        "Chiro optimization",
        "Private fitness training",
        "Happy Hour session",
        "Movement assessment",
        "Postural / mobility coaching",
        "Wellness progress tracking",
        "Member priority scheduling",
      ],
    },
    {
      title: '"Enhanced" Body Sculpting / Fat Freezing',
      icon: Sparkles,
      badge: "Non-Invasive",
      price: "Starting at $99+/session (min 6 sessions)",
      note: "NOT for weight loss",
      video: bodySculptingVideo,
      features: [
        "Abdomen",
        "Love handles",
        "Thighs",
        "Upper Arms",
        "Back fat",
        "Double Chin",
        "Neck / Face",
        "Under buttocks",
        "Obliques",
        "Gynecomastia",
      ],
    },
    {
      title: '"Elevated" Targeted Cryotherapy',
      icon: Snowflake,
      badge: "Precision Cold Therapy",
      price: "Starting at $50/treatment",
      video: cryoVideo,
      features: [
        "Reduces inflammation",
        "Accelerates recovery",
        "Skin tightening",
        "Scalp treatment alternatives",
        "Post-surgical swelling relief",
      ],
    },
    {
      title: '"Elite" VIP Experience',
      icon: Crown,
      badge: "Concierge Membership",
      price: "3-month membership required",
      video: eliteVideo,
      features: [
        "Customized by both Chiropractor and Fitness Trainer",
        "Revisited every 2 weeks",
        "All services included",
        "Up to 6 Body Sculpting sessions/month",
        "Full concierge wellness experience",
      ],
    },
  ];

  const idealFor = [
    { icon: Shield, label: "Professionals" },
    { icon: Heart, label: "Caregivers" },
    { icon: Users, label: "Parents" },
    { icon: Target, label: "Leaders" },
    { icon: Zap, label: "Athletes" },
  ];

  return (
    <div className="min-h-screen font-sans bg-background text-foreground overflow-x-hidden">
      <Navbar />

      <div className="relative h-[340px] md:h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={servicesHeaderImg}
            alt="Services"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />
        </div>
        <div className="relative z-10 text-center text-white px-4 pt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-accent font-bold tracking-wider uppercase text-sm px-4 py-1.5 bg-accent/10 rounded-full mb-4">
              Restore. Realign. Rebuild.
            </span>
            <h1
              className="font-display font-bold text-4xl md:text-6xl leading-tight"
              data-testid="text-services-title"
            >
              Our Services
            </h1>
          </motion.div>
        </div>
      </div>

      <main>
        <Section
          title="Signature Services"
          subtitle="What We Offer"
          className="bg-white"
        >
          <div className="grid md:grid-cols-3 gap-8">
            {signatureServices.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
              >
                <Card
                  className="overflow-visible h-full"
                  data-testid={`card-signature-service-${i}`}
                >
                  <div className="relative h-[200px] overflow-hidden rounded-t-md">
                    <img
                      src={service.img}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute bottom-4 left-4 w-12 h-12 rounded-md bg-accent/90 flex items-center justify-center text-white">
                      <service.icon size={24} />
                    </div>
                  </div>
                  <div className="p-6 space-y-4">
                    <h3 className="font-display font-bold text-xl text-primary">
                      {service.title}
                    </h3>
                    {service.description && (
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {service.description}
                      </p>
                    )}
                    <ul className="space-y-2">
                      {service.features.map((feature, j) => (
                        <li
                          key={j}
                          className="flex items-start gap-2 text-sm text-muted-foreground"
                        >
                          <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-14"
          >
            <Card className="p-8 overflow-visible">
              <h3 className="font-display font-bold text-xl text-primary mb-6 text-center">
                Ideal For
              </h3>
              <div className="flex flex-wrap justify-center gap-6">
                {idealFor.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 px-5 py-3 rounded-md bg-muted/50"
                    data-testid={`badge-ideal-for-${i}`}
                  >
                    <div className="w-10 h-10 rounded-md bg-accent/10 flex items-center justify-center text-accent">
                      <item.icon size={20} />
                    </div>
                    <span className="font-medium text-primary">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>
        </Section>

        <Section
          title="Premium Services"
          subtitle="Elevated Wellness"
          className="bg-[#F8F9FB]"
        >
          <div className="grid md:grid-cols-2 gap-8">
            {premiumServices.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
              >
                <Card
                  className="overflow-hidden h-full"
                  data-testid={`card-premium-service-${i}`}
                >
                  {"video" in service && service.video && (
                    <div className="relative w-full overflow-hidden bg-black" style={{ aspectRatio: "16/9" }}>
                      <video
                        src={service.video as string}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover"
                        data-testid="video-chirofitness"
                      />
                    </div>
                  )}
                  <div className="p-6 space-y-4">
                    <div className="flex items-start justify-between gap-4 flex-wrap">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-md bg-gradient-to-br from-accent/20 to-accent/10 flex items-center justify-center text-accent">
                          <service.icon size={24} />
                        </div>
                        <div>
                          <h3 className="font-display font-bold text-lg text-primary">
                            {service.title}
                          </h3>
                          <Badge variant="secondary" className="mt-1">
                            {service.badge}
                          </Badge>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-accent font-bold text-lg">
                      {service.price}
                    </div>

                    {service.note && (
                      <p className="text-sm text-muted-foreground font-medium italic">
                        Note: {service.note}
                      </p>
                    )}

                    <ul className="space-y-2">
                      {service.features.map((feature, j) => (
                        <li
                          key={j}
                          className="flex items-start gap-2 text-sm text-muted-foreground"
                        >
                          <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
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
              <h2 className="font-display font-bold text-4xl md:text-5xl text-white leading-tight">
                Ready to Begin Your{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-amber-400">
                  Wellness Journey?
                </span>
              </h2>
              <p className="text-lg text-white/70 max-w-lg mx-auto leading-relaxed">
                Book your appointment today and experience the difference of
                truly personalized care.
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
                <Button
                  size="lg"
                  className="bg-accent text-white rounded-full px-10 h-14 text-lg shadow-xl shadow-accent/30 group"
                  data-testid="button-book-appointment"
                >
                  Book Appointment
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/memberships">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white/30 text-white rounded-full px-10 h-14 text-lg backdrop-blur-sm"
                  data-testid="button-view-memberships"
                >
                  View Memberships
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
