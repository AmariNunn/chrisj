import { useEffect } from "react";
import { Link } from "wouter";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Team } from "@/components/sections/Team";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight, ExternalLink } from "lucide-react";
import { IntakeBanner } from "@/components/ui/IntakeBanner";

const FORMS_URL = "https://jordanwellnessxp.com/jordan-wellness-patient-questionnaire/";

const pillars = [
  {
    title: "PRECISION",
    description: "Advanced chiropractic and movement integration",
  },
  {
    title: "PERFORMANCE",
    description: "Strength, Recovery, and Cellular Optimization",
  },
  {
    title: "LONGEVITY",
    description: "Care designed for decades – not days or weeks",
  },
];

const firstVisitIncludes = [
  "Comprehensive clinical assessment",
  "Movement and posture evaluation",
  "Wellness and lifestyle discussion",
  "Personalized care strategy",
];

const idealFor = [
  "Individuals seeking long-term wellness",
  "Individuals with physical jobs requiring bending, lifting, twisting, etc.",
  "Professionals optimizing performance",
  "Parents prioritizing sustainable vitality",
  "Those ready to invest in proactive care",
];

const signatureServices = [
  "Chiropractic",
  "Fitness Training",
  "Relaxation Therapy (Happy Hour)",
];

const premiumServices = [
  "ChiroFitness",
  "Body Sculpting / Fat Freezing",
  "Targeted Cryotherapy",
  "VIP Concierge Wellness",
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

export default function Experience() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen font-sans bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <main>
        {/* Page Hero */}
        <section className="relative py-24 md:py-36 bg-primary text-white overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute w-[600px] h-[600px] bg-accent/15 rounded-full blur-[140px] -top-40 -left-40" />
            <div className="absolute w-[400px] h-[400px] bg-white/5 rounded-full blur-[100px] -bottom-40 -right-40" />
          </div>
          <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-3xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <span className="text-accent font-bold tracking-[0.25em] uppercase text-xs mb-5 block" data-testid="text-experience-eyebrow">
                The Experience Gateway
              </span>
              <h1 className="font-display font-bold text-4xl md:text-6xl leading-tight mb-8" data-testid="text-experience-title">
                Welcome to the Jordan Wellness Experience
              </h1>
              <p className="text-lg md:text-xl text-white/70 leading-relaxed max-w-2xl mx-auto" data-testid="text-experience-welcome">
                Your care starts with a personal consultation that focuses on your health history, goals for performance, and vision for long-term wellness. Our approach is to create treatment plans specifically for you, considering your needs and abilities. We're here to guide, support, and encourage you throughout your journey, and we celebrate your successes together. Thank you for trusting Jordan Wellness Experience with your wellness needs; there would be no us without you.
              </p>
            </motion.div>
          </div>
        </section>

        <IntakeBanner />

        {/* Meet the Team */}
        <Team />

        {/* What to Expect */}
        <section className="py-20 md:py-28 bg-secondary/30">
          <div className="container mx-auto px-4 md:px-6 max-w-4xl">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-center mb-14"
            >
              <span className="text-accent font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Your First Visit</span>
              <h2 className="font-display font-bold text-3xl md:text-5xl text-primary leading-tight" data-testid="text-what-to-expect-title">
                What to Expect
              </h2>
              <p className="text-muted-foreground mt-4 text-lg">Your First In-Person Visit Includes:</p>
            </motion.div>
            <div className="grid sm:grid-cols-2 gap-5 max-w-2xl mx-auto">
              {firstVisitIncludes.map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                  className="flex items-start gap-3 p-5 rounded-md bg-white border border-border/50 shadow-sm"
                  data-testid={`item-first-visit-${i}`}
                >
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span className="text-foreground/80 font-medium">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Who These Services Are For */}
        <section className="py-20 md:py-28 bg-white">
          <div className="container mx-auto px-4 md:px-6 max-w-4xl">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <span className="text-accent font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Who We Serve</span>
              <h2 className="font-display font-bold text-3xl md:text-5xl text-primary leading-tight" data-testid="text-who-for-title">Who The Services Are For</h2>
            </motion.div>
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="max-w-2xl mx-auto"
            >
              <p className="text-muted-foreground text-lg leading-relaxed mb-8 text-center">
                Our services and techniques are suitable for individuals of all ages. Our Premium Experiences and Memberships are designed for:
              </p>
              <ul className="space-y-4">
                {idealFor.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-foreground/80" data-testid={`item-ideal-for-${i}`}>
                    <span className="w-2 h-2 rounded-full bg-accent shrink-0 mt-2" />
                    <span className="text-base leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </section>

        {/* Investment Transparency */}
        <section className="py-20 md:py-28 bg-secondary/30">
          <div className="container mx-auto px-4 md:px-6 max-w-3xl text-center">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-6"
            >
              <span className="text-accent font-bold tracking-[0.2em] uppercase text-xs block">Investment Transparency</span>
              <h2 className="font-display font-bold text-3xl md:text-5xl text-primary leading-tight" data-testid="text-investment-title">
                The Initial Experience Investment
              </h2>
              <div className="inline-block bg-white border border-border/60 rounded-md px-10 py-8 shadow-sm mt-4">
                <p className="font-display font-bold text-5xl md:text-6xl text-accent mb-3" data-testid="text-investment-price">$130</p>
                <p className="text-primary font-semibold text-lg mb-2">Your private consultation and assessment</p>
                <p className="text-muted-foreground italic text-sm mt-4">
                  "Complimentary with a Membership Enrollment"
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Jordan Wellness Portfolio */}
        <section className="py-20 md:py-28 bg-white">
          <div className="container mx-auto px-4 md:px-6 max-w-3xl text-center">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-6"
            >
              <span className="text-accent font-bold tracking-[0.2em] uppercase text-xs block">New Patient Intake</span>
              <h2 className="font-display font-bold text-3xl md:text-5xl text-primary leading-tight" data-testid="text-portfolio-title">
                The Jordan Wellness Experience Portfolio
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed max-w-xl mx-auto">
                Our 4-page intake forms tell us about you — your health history, your health focus, and your long-term health interests. Complete them online and submit to get started.
              </p>
              <p className="text-muted-foreground text-base leading-relaxed italic max-w-xl mx-auto">
                After submission, we will personally reach out to you within 24 hours to coordinate your Private Assessment.
              </p>
              <div className="pt-4">
                <Link href="/intake-form">
                  <Button size="lg" className="rounded-full px-10 bg-accent text-white shadow-md shadow-accent/20 group" data-testid="button-intake-forms">
                    Complete Your Intake Forms
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* How Jordan Wellness Experience Differs */}
        <section className="py-20 md:py-28 bg-primary text-white relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute w-[500px] h-[500px] bg-accent/15 rounded-full blur-[140px] -top-40 -right-40" />
          </div>
          <div className="container mx-auto px-4 md:px-6 max-w-3xl relative z-10">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-center space-y-8"
            >
              <span className="text-accent font-bold tracking-[0.2em] uppercase text-xs block">Our Difference</span>
              <h2 className="font-display font-bold text-3xl md:text-5xl text-white leading-tight" data-testid="text-differs-title">
                The Standard of Care Redefined
              </h2>
              <p className="text-white/70 text-lg leading-relaxed" data-testid="text-differs-description">
                Jordan Wellness Experience is a private wellness sanctuary, not a volume-based clinic. Our treatments are designed for those who value personalized attention and outcomes. We do not expedite patient care or rely on generic treatment protocols. Our wellness services are innovative and performance-driven, tailored to each individual's unique requirements with the aim of restoring alignment, enhancing function, and supporting long-term health.
              </p>
            </motion.div>
          </div>
        </section>

        {/* 3 Pillars */}
        <section className="py-20 md:py-28 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="text-accent font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Our Foundation</span>
              <h2 className="font-display font-bold text-3xl md:text-5xl text-primary leading-tight" data-testid="text-pillars-title">
                Built on Three Pillars
              </h2>
            </motion.div>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {pillars.map((pillar, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, duration: 0.6 }}
                  className="text-center p-8 md:p-10 rounded-md border border-accent/20 bg-gradient-to-b from-white to-secondary/20 shadow-sm"
                  data-testid={`card-pillar-${i}`}
                >
                  <div className="w-14 h-14 rounded-md bg-accent/10 flex items-center justify-center text-accent mx-auto mb-6">
                    <span className="font-display font-bold text-2xl">{i + 1}</span>
                  </div>
                  <h3 className="font-display font-bold text-xl text-primary mb-3 tracking-widest uppercase" data-testid={`text-pillar-title-${i}`}>
                    {pillar.title}
                  </h3>
                  <div className="w-8 h-[2px] bg-accent mx-auto mb-4" />
                  <p className="text-muted-foreground leading-relaxed" data-testid={`text-pillar-desc-${i}`}>
                    {pillar.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Preview */}
        <section className="py-20 md:py-28 bg-secondary/30">
          <div className="container mx-auto px-4 md:px-6 max-w-5xl">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-center mb-14"
            >
              <span className="text-accent font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Services Overview</span>
              <h2 className="font-display font-bold text-3xl md:text-5xl text-primary leading-tight" data-testid="text-services-preview-title">
                Signature Wellness vs. Premium Wellness
              </h2>
            </motion.div>
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-white rounded-md border border-border/50 shadow-sm p-8 space-y-6"
                data-testid="card-signature-preview"
              >
                <div>
                  <span className="text-accent font-bold tracking-widest uppercase text-xs block mb-2">Signature Care</span>
                  <h3 className="font-display font-bold text-2xl text-primary">Foundational Wellness</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  Foundational wellness care for alignment, strength, and restoration. Includes Auto Accident Care, Stress-related/Episodic Treatment, Pediatric care, Weight Management, Strength and Conditioning, and more.
                </p>
                <ul className="space-y-3">
                  {signatureServices.map((s, i) => (
                    <li key={i} className="flex items-center gap-3 text-foreground/80" data-testid={`item-sig-service-${i}`}>
                      <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                      <span className="font-medium">{s}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: 0.15 }}
                className="bg-primary rounded-md shadow-sm p-8 space-y-6 text-white"
                data-testid="card-premium-preview"
              >
                <div>
                  <span className="text-accent font-bold tracking-widest uppercase text-xs block mb-2">Premium Wellness</span>
                  <h3 className="font-display font-bold text-2xl text-white">Advanced Therapies</h3>
                </div>
                <p className="text-white/65 leading-relaxed text-sm">
                  Advanced therapies for optimization, recovery, and physique refinement. Personalized priority care and priority access hours for those who expect exceptional service and results.
                </p>
                <ul className="space-y-3">
                  {premiumServices.map((s, i) => (
                    <li key={i} className="flex items-center gap-3 text-white/80" data-testid={`item-prem-service-${i}`}>
                      <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                      <span className="font-medium">{s}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
            <div className="text-center mt-10">
              <Link href="/services">
                <Button variant="outline" className="rounded-full border-2 border-primary/20 text-primary" data-testid="button-view-services-preview">
                  View All Services
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-20 bg-white border-t border-border/30">
          <div className="container mx-auto px-4 md:px-6 max-w-2xl text-center space-y-8">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h2 className="font-display font-bold text-3xl md:text-4xl text-primary leading-tight mb-3" data-testid="text-experience-cta-title">
                Ready to Begin?
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Apply for a membership or reach out with any questions — we're here for you.
              </p>
            </motion.div>
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link href="/membership">
                <Button size="lg" className="rounded-full px-10 bg-accent text-white shadow-md shadow-accent/20" data-testid="button-apply-membership">
                  Apply for Membership
                </Button>
              </Link>
              <a href="mailto:backdr4u@gmail.com">
                <Button size="lg" variant="outline" className="rounded-full px-10 border-2 border-primary/20 text-primary" data-testid="button-contact-us-experience">
                  Contact Us
                </Button>
              </a>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
