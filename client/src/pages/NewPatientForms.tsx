import { useEffect } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { FileText, ArrowRight, ClipboardList, Clock } from "lucide-react";

export default function NewPatientForms() {
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
              <span className="text-accent font-bold tracking-wider uppercase text-sm mb-4 block" data-testid="text-forms-subtitle">
                Get Started
              </span>
              <h1 className="font-display font-bold text-4xl md:text-6xl leading-tight mb-6" data-testid="text-forms-title">
                New Patient Forms
              </h1>
              <p className="text-lg text-white/70 max-w-xl mx-auto" data-testid="text-forms-intro">
                Complete your intake forms before your first visit for a seamless experience
              </p>
            </motion.div>
          </div>
        </section>

        <Section className="bg-white">
          <div className="max-w-3xl mx-auto text-center space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="w-20 h-20 mx-auto bg-accent/10 rounded-2xl flex items-center justify-center">
                <FileText className="text-accent" size={36} />
              </div>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-primary" data-testid="text-forms-heading">
                Patient Questionnaire
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed max-w-xl mx-auto" data-testid="text-forms-description">
                To provide you with the best possible care, please complete our patient questionnaire prior to your first appointment. This helps us understand your health history, current concerns, and wellness goals.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="grid sm:grid-cols-2 gap-6"
            >
              <div className="p-6 rounded-2xl bg-muted/30 border border-border text-left space-y-3">
                <ClipboardList className="text-accent" size={28} />
                <h3 className="font-display font-semibold text-lg text-primary">Health History</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Share your medical background so we can create a personalized treatment plan tailored to your needs.
                </p>
              </div>
              <div className="p-6 rounded-2xl bg-muted/30 border border-border text-left space-y-3">
                <Clock className="text-accent" size={28} />
                <h3 className="font-display font-semibold text-lg text-primary">Save Time</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Completing forms ahead of time ensures your first visit is focused entirely on your care and consultation.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <a
                href="https://jordanwellnessxp.com/jordan-wellness-patient-questionnaire/"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="link-patient-questionnaire"
              >
                <Button size="lg" className="rounded-full px-10 bg-accent text-white shadow-lg shadow-accent/20">
                  Complete Patient Questionnaire
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </a>
            </motion.div>
          </div>
        </Section>
      </main>

      <Footer />
    </div>
  );
}
