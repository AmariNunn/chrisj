import { useEffect } from "react";
import { Link } from "wouter";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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
import { BOOKING_URL } from "@/lib/constants";

const chiroServiceImg = "/images/chiro-service.jpg";
const fitnessServiceImg = "/images/fitness-service.jpg";
const happyHourServiceImg = "/images/happy-hour-service.jpg";

export default function Services() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const signatureServices = [
    {
      title: "Chiropractic Care",
      icon: Activity,
      img: chiroServiceImg,
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
      img: fitnessServiceImg,
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
      img: happyHourServiceImg,
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

      <div className="relative h-[340px] md:h-[420px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={servicesHeaderImg}
            alt="Services"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
        </div>
        <div className="relative z-10 text-center text-white px-4 pt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-4"
          >
            <span className="inline-block text-accent font-medium tracking-[0.2em] uppercase text-xs">
              Restore &middot; Realign &middot; Rebuild
            </span>
            <h1
              className="font-display font-bold text-4xl md:text-6xl leading-tight"
              data-testid="text-services-title"
            >
              Our Services
            </h1>
            <p className="text-white/70 max-w-md mx-auto text-base md:text-lg leading-relaxed">
              Personalized wellness experiences designed for lasting transformation.
            </p>
          </motion.div>
        </div>
      </div>

      <main>
        <section className="py-20 md:py-28 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16 max-w-2xl mx-auto"
            >
              <span className="text-accent font-medium tracking-[0.2em] uppercase text-xs mb-3 block">
                What We Offer
              </span>
              <h2 className="font-display font-bold text-3xl md:text-5xl text-primary leading-tight">
                Signature Services
              </h2>
            </motion.div>

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
                    <div className="relative h-[220px] overflow-hidden rounded-t-md">
                      <img
                        src={service.img}
                        alt={service.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      <div className="absolute bottom-4 left-4 w-11 h-11 rounded-md bg-accent/90 flex items-center justify-center text-white">
                        <service.icon size={22} />
                      </div>
                    </div>
                    <div className="p-6 space-y-4 flex flex-col flex-1">
                      <h3 className="font-display font-bold text-xl text-primary">
                        {service.title}
                      </h3>
                      {service.description && (
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {service.description}
                        </p>
                      )}
                      <ul className="space-y-2.5 flex-1">
                        {service.features.map((feature, j) => (
                          <li
                            key={j}
                            className="flex items-start gap-2.5 text-sm text-muted-foreground"
                          >
                            <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-auto pt-6">
                        <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
                          <Button size="lg" className="w-full rounded-full bg-accent text-white shadow-sm hover:shadow-md hover:bg-accent/90 transition-all duration-300 group" data-testid={`button-book-signature-${i}`}>
                            Book Now
                            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </Button>
                        </a>
                      </div>
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
              className="mt-16"
            >
              <Card className="p-8 overflow-visible">
                <h3 className="font-display font-bold text-xl text-primary mb-6 text-center">
                  Ideal For
                </h3>
                <div className="flex flex-wrap justify-center gap-4">
                  {idealFor.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 px-5 py-3 rounded-md bg-muted/50"
                      data-testid={`badge-ideal-for-${i}`}
                    >
                      <div className="w-10 h-10 rounded-md bg-accent/10 flex items-center justify-center text-accent">
                        <item.icon size={20} />
                      </div>
                      <span className="font-medium text-primary text-sm">
                        {item.label}
                      </span>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>
          </div>
        </section>

        <section className="py-20 md:py-28 bg-secondary/30">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16 max-w-2xl mx-auto"
            >
              <span className="text-accent font-medium tracking-[0.2em] uppercase text-xs mb-3 block">
                Elevated Wellness
              </span>
              <h2 className="font-display font-bold text-3xl md:text-5xl text-primary leading-tight">
                Premium Services
              </h2>
            </motion.div>

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
                          data-testid={`video-premium-service-${i}`}
                        />
                      </div>
                    )}
                    <div className="p-6 space-y-4 flex flex-col flex-1">
                      <div className="flex items-start justify-between gap-4 flex-wrap">
                        <div className="flex items-center gap-3">
                          <div className="w-11 h-11 rounded-md bg-gradient-to-br from-accent/20 to-accent/10 flex items-center justify-center text-accent">
                            <service.icon size={22} />
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

                      <div className="text-accent font-bold text-lg">
                        {service.price}
                      </div>

                      {service.note && (
                        <p className="text-sm text-muted-foreground font-medium italic">
                          Note: {service.note}
                        </p>
                      )}

                      <ul className="space-y-2.5 flex-1">
                        {service.features.map((feature, j) => (
                          <li
                            key={j}
                            className="flex items-start gap-2.5 text-sm text-muted-foreground"
                          >
                            <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-auto pt-6">
                        <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
                          <Button size="lg" className="w-full rounded-full bg-accent text-white shadow-sm hover:shadow-md hover:bg-accent/90 transition-all duration-300 group" data-testid={`button-book-premium-${i}`}>
                            Book Now
                            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </Button>
                        </a>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 md:py-28 bg-primary text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
            <div className="absolute w-[500px] h-[500px] bg-accent/15 rounded-full blur-[120px] -top-40 -left-40 animate-float-slow" />
            <div className="absolute w-[400px] h-[400px] bg-accent/10 rounded-full blur-[100px] -bottom-40 -right-40 animate-float-slow" />
          </div>

          <div className="relative z-10 max-w-2xl mx-auto px-4 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="space-y-5"
            >
              <h2 className="font-display font-bold text-3xl md:text-5xl text-white leading-tight">
                Ready to Begin Your{" "}
                <span className="text-accent">
                  Wellness Journey?
                </span>
              </h2>
              <p className="text-lg text-white/60 max-w-lg mx-auto leading-relaxed">
                Book your appointment today and experience the difference of
                truly personalized care.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center pt-2"
            >
              <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  className="bg-accent border-accent text-white rounded-md px-10 text-base group"
                  data-testid="button-book-appointment"
                >
                  Book Appointment
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/30 text-white rounded-md px-10 text-base backdrop-blur-sm"
                  data-testid="button-contact-us"
                >
                  Contact Us
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
