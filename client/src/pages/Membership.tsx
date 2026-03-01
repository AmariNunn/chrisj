import { useEffect } from "react";
import { Link } from "wouter";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Star, Sparkles, Snowflake, Crown, CheckCircle2, ExternalLink } from "lucide-react";

const FORMS_URL = "https://jordanwellnessxp.com/jordan-wellness-patient-questionnaire/";

const tiers = [
  {
    icon: Star,
    label: "Essential",
    name: "Essential Jordan Wellness Experience",
    subtitle: "ChiroFitness",
    description: "Chiropractic Wellness integrated with Performance and Recovery Optimization",
    details: [],
    accent: false,
  },
  {
    icon: Sparkles,
    label: "Enhanced",
    name: "Enhanced Jordan Wellness Experience",
    subtitle: "Body Sculpting / Fat Freezing",
    description: "Aesthetic optimization with advanced fat freezing technology. Choose your path:",
    details: [
      "Option A: Body Sculpting / Fat Freezing",
      "Option B: Body Sculpting / Fat Freezing + Chiropractic Care",
      "Option C: Body Sculpting / Fat Freezing + Toning & Nutrition",
    ],
    treatmentAreas: [
      "Abdomen", "Beer belly", "FUPA", "Upper Arms", "Thighs",
      "Obliques", "Back fat / Bra fat", "Love handles", "Man boobs",
      "Double Chin", "Neck", "Jowl line",
    ],
    addon: "Option to ADD-ON an additional Premium service",
    accent: true,
  },
  {
    icon: Snowflake,
    label: "Elevated",
    name: "Elevated Jordan Wellness Experience",
    subtitle: "Targeted Cryotherapy",
    description: "A form of cold therapy that focuses on a specific area of the body rather than treating the whole body at once. Quick, non-invasive approach used for a variety of therapeutic and performance-related goals.",
    details: [],
    benefits: [
      "Pain Relief & Inflammation Reduction",
      "Faster recovery after workouts, strains, sports injuries, or post-surgical swelling",
      "Skin & Cosmetic effects — Wrinkles, fine lines, dark spots, puffiness; Eczema, Psoriasis",
      "Scalp treatments — Alopecia / Hair breakage, thinning",
    ],
    note: "Minimum package for monthly membership: 6 sessions",
    accent: false,
  },
  {
    icon: Crown,
    label: "Elite",
    name: "Elite Jordan Wellness Experience",
    subtitle: "VIP Concierge",
    description: "This membership grants you access to all available services, subject to your health history and assessment.",
    details: [],
    perks: [
      "Priority Access and Priority Hours to Chiropractor and Fitness Trainer",
      "6 Complimentary Body Sculpting / Fat Freezing sessions per month (one treatment area of choice)",
      "6 Cryotherapy sessions per month",
      "Perks, passes, and discounts for family and friends",
      "Birthday Perks & Birthday Parties",
      "Girls Night Out & Bridal Parties",
    ],
    accent: true,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

export default function Membership() {
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
          <div className="container mx-auto px-4 md:px-6 relative z-10 text-center max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <span className="text-accent font-bold tracking-[0.25em] uppercase text-xs mb-5 block" data-testid="text-membership-eyebrow">
                Private Membership Model
              </span>
              <h1 className="font-display font-bold text-4xl md:text-6xl leading-tight mb-8" data-testid="text-membership-title">
                Jordan Wellness Memberships
              </h1>
              <p className="text-lg text-white/70 leading-relaxed" data-testid="text-membership-subtitle">
                Premium private wellness experiences, crafted for the long-term
              </p>
            </motion.div>
          </div>
        </section>

        {/* Membership Model Intro */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 md:px-6 max-w-3xl text-center">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-6"
            >
              <span className="text-accent font-bold tracking-[0.2em] uppercase text-xs block">How It Works</span>
              <h2 className="font-display font-bold text-2xl md:text-4xl text-primary leading-tight" data-testid="text-membership-model-title">
                Our Membership Model
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed" data-testid="text-membership-model-desc">
                Our Premium Jordan Wellness Experiences operate under a private membership model. Memberships are valid for three months, with the option to renew or cancel at the end of the third month. Treatment plans are evaluated and adjusted biweekly, accompanied by periodic check-ins. Aesthetic services include Before and After photographs, as well as weigh-ins when applicable. Delivering exceptional care requires deliberate planning, dedicated attention, time, and consistency.
              </p>
            </motion.div>
          </div>
        </section>

        {/* 4 Membership Tiers */}
        <section className="py-16 md:py-24 bg-secondary/30">
          <div className="container mx-auto px-4 md:px-6 max-w-5xl">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-center mb-14"
            >
              <span className="text-accent font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Choose Your Level</span>
              <h2 className="font-display font-bold text-3xl md:text-5xl text-primary leading-tight" data-testid="text-tiers-title">
                Membership Tiers
              </h2>
            </motion.div>
            <div className="space-y-8">
              {tiers.map((tier, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                  className={`rounded-md border shadow-sm overflow-hidden ${tier.accent ? "bg-primary border-primary text-white" : "bg-white border-border/50"}`}
                  data-testid={`card-tier-${i}`}
                >
                  <div className="p-8 md:p-10">
                    <div className="flex flex-col md:flex-row md:items-start gap-6">
                      <div className={`w-14 h-14 rounded-md flex items-center justify-center shrink-0 ${tier.accent ? "bg-white/10" : "bg-accent/10"}`}>
                        <tier.icon className={`w-7 h-7 ${tier.accent ? "text-accent" : "text-accent"}`} />
                      </div>
                      <div className="flex-1 space-y-4">
                        <div>
                          <span className={`text-xs font-bold tracking-[0.2em] uppercase mb-2 block ${tier.accent ? "text-accent" : "text-accent"}`}>
                            {tier.label}
                          </span>
                          <h3 className={`font-display font-bold text-xl md:text-2xl mb-1 ${tier.accent ? "text-white" : "text-primary"}`} data-testid={`text-tier-name-${i}`}>
                            {tier.name}
                          </h3>
                          <p className={`font-semibold text-base ${tier.accent ? "text-white/80" : "text-accent"}`}>
                            {tier.subtitle}
                          </p>
                        </div>
                        <p className={`leading-relaxed ${tier.accent ? "text-white/70" : "text-muted-foreground"}`} data-testid={`text-tier-desc-${i}`}>
                          {tier.description}
                        </p>

                        {tier.details && tier.details.length > 0 && (
                          <ul className="space-y-2">
                            {tier.details.map((d, j) => (
                              <li key={j} className={`flex items-start gap-2.5 text-sm ${tier.accent ? "text-white/80" : "text-muted-foreground"}`}>
                                <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                                <span>{d}</span>
                              </li>
                            ))}
                          </ul>
                        )}

                        {(tier as any).treatmentAreas && (
                          <div>
                            <p className="text-sm font-semibold text-muted-foreground mb-2">Treatment Areas:</p>
                            <div className="flex flex-wrap gap-2">
                              {(tier as any).treatmentAreas.map((area: string, j: number) => (
                                <span key={j} className="px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium" data-testid={`badge-area-${j}`}>
                                  {area}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}

                        {(tier as any).addon && (
                          <p className="text-sm italic text-muted-foreground">
                            + {(tier as any).addon}
                          </p>
                        )}

                        {(tier as any).benefits && (
                          <ul className="space-y-2">
                            {(tier as any).benefits.map((b: string, j: number) => (
                              <li key={j} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                                <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                                <span>{b}</span>
                              </li>
                            ))}
                          </ul>
                        )}

                        {(tier as any).note && (
                          <p className={`text-sm font-medium italic ${tier.accent ? "text-white/60" : "text-muted-foreground"}`}>
                            Note: {(tier as any).note}
                          </p>
                        )}

                        {(tier as any).perks && (
                          <ul className="space-y-2">
                            {(tier as any).perks.map((p: string, j: number) => (
                              <li key={j} className="flex items-start gap-2.5 text-sm text-white/80">
                                <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                                <span>{p}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 md:py-28 bg-white">
          <div className="container mx-auto px-4 md:px-6 max-w-2xl text-center space-y-8">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h2 className="font-display font-bold text-3xl md:text-4xl text-primary leading-tight mb-3" data-testid="text-membership-cta-title">
                Ready to Invest in Your Wellness?
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Apply for a membership today or contact us with any questions about which tier is right for you.
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
              <a href={FORMS_URL} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="rounded-full px-10 bg-accent text-white shadow-md shadow-accent/20 group" data-testid="button-apply-membership">
                  Apply for Membership
                  <ExternalLink className="ml-2 w-4 h-4" />
                </Button>
              </a>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="rounded-full px-10 border-2 border-primary/20 text-primary" data-testid="button-contact-membership">
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
