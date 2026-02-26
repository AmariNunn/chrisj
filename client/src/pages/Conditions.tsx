import { useEffect, type ElementType } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/ui/section";
import { motion } from "framer-motion";
import { 
  Bone, 
  Dumbbell, 
  Snowflake, 
  Scissors, 
  Heart
} from "lucide-react";

interface ConditionCategory {
  title: string;
  icon: ElementType;
  color: string;
  conditions: string[];
}

const categories: ConditionCategory[] = [
  {
    title: "Chiropractic Care",
    icon: Bone,
    color: "from-blue-500/10 to-primary/10",
    conditions: [
      "Automobile Accident Injuries",
      "Sports Injuries",
      "Spinal Alignment Issues",
      "Chronic Pain",
      "Pediatric Conditions",
      "Elderly Care",
    ],
  },
  {
    title: "Fitness Training",
    icon: Dumbbell,
    color: "from-accent/10 to-orange-500/10",
    conditions: [
      "Corrective Exercise Needs",
      "Body Transformation",
      "Strength & Conditioning",
      "Performance Enhancement",
    ],
  },
  {
    title: "Targeted Cryotherapy",
    icon: Snowflake,
    color: "from-cyan-500/10 to-blue-500/10",
    conditions: [
      "Inflammation",
      "Post-Surgical Swelling",
      "Alopecia / Hair Loss",
      "Acne / Eczema / Psoriasis",
      "Fine Lines & Wrinkles",
      "Dark Spots & Puffiness",
    ],
  },
  {
    title: "Body Sculpting / Fat Freezing",
    icon: Scissors,
    color: "from-rose-500/10 to-pink-500/10",
    conditions: [
      "Stubborn Body Fat — Abdomen",
      "Love Handles",
      "Thighs",
      "Upper Arms",
      "Back Fat",
      "Double Chin",
      "Neck",
      "Face",
      "Under Buttocks",
      "Obliques",
      "Gynecomastia",
    ],
  },
  {
    title: '"Happy Hour" Wellness Experience',
    icon: Heart,
    color: "from-purple-500/10 to-violet-500/10",
    conditions: [
      "Stress",
      "Tension",
      "Nervous System Issues",
      "Recovery Needs",
    ],
  },
];

export default function Conditions() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen font-sans bg-background text-foreground overflow-x-hidden">
      <Navbar />

      <div className="relative pt-32 pb-20 bg-primary overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-primary" />
        <div className="absolute w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px] -top-40 -right-40" />
        <div className="absolute w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[100px] -bottom-40 -left-40" />
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block text-accent font-bold tracking-wider uppercase text-sm px-4 py-1.5 bg-accent/10 rounded-full mb-4">
              How We Help
            </span>
            <h1 className="font-display font-bold text-4xl md:text-6xl text-white leading-tight" data-testid="text-conditions-title">
              Conditions We Treat
            </h1>
            <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto mt-6 leading-relaxed">
              From injury recovery to performance optimization, we address a wide range of conditions through our integrated wellness services.
            </p>
          </motion.div>
        </div>
      </div>

      <main>
        <Section className="bg-white">
          <div className="space-y-16">
            {categories.map((category, catIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: catIndex * 0.1, duration: 0.6 }}
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center text-accent shadow-lg`}>
                    <category.icon size={28} />
                  </div>
                  <h2 className="font-display font-bold text-2xl md:text-3xl text-primary" data-testid={`text-category-${catIndex}`}>
                    {category.title}
                  </h2>
                </div>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {category.conditions.map((condition, condIndex) => (
                    <motion.div
                      key={condition}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: condIndex * 0.05, duration: 0.4 }}
                      className="p-5 rounded-2xl bg-gradient-to-br from-muted/30 to-muted/10 border border-transparent hover:border-accent/10 transition-all duration-300 group"
                      data-testid={`card-condition-${catIndex}-${condIndex}`}
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent/20 to-accent/10 flex items-center justify-center text-accent shrink-0">
                          <svg width="14" height="14" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 3L4.5 8.5L2 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                        <span className="font-medium text-primary">{condition}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
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
                Not Sure Where to <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-amber-400">Start?</span>
              </h2>
              <p className="text-lg md:text-xl text-white/70 max-w-lg mx-auto leading-relaxed">
                Book a consultation and let our team create a personalized treatment plan tailored to your specific needs.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <a href="/booking">
                <button className="bg-accent text-white hover:bg-accent/90 rounded-full px-10 h-14 text-lg shadow-xl shadow-accent/30 hover:shadow-accent/50 transition-all hover:-translate-y-1 font-semibold" data-testid="button-book-consultation">
                  Book a Consultation
                </button>
              </a>
            </motion.div>
          </div>
        </Section>
      </main>

      <Footer />
    </div>
  );
}
