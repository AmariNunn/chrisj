import { useEffect, useState } from "react";
import { Link } from "wouter";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowRight } from "lucide-react";

const faqs = [
  {
    question: "Why do you focus on Memberships instead of pay per visits?",
    answer:
      "Lasting results require consistency. Our membership structure ensures regular alignment, recovery, and strength support so your body performs optimally year round.",
  },
  {
    question: "How often should I come in?",
    answer:
      "Your frequency depends on your goals. Some members prioritize maintenance and longevity, while others focus on performance enhancement or body composition. We design a plan that aligns with your lifestyle.",
  },
  {
    question: "What makes Jordan Wellness Experience different from a traditional chiropractic office?",
    answer:
      "We go beyond adjustments. Our approach integrates structural alignment, muscle performance, nervous system support, and recovery optimization – creating a comprehensive wellness experience rather than episodic treatment.",
  },
  {
    question: "Can families join?",
    answer:
      "Yes, we offer customized membership options for families who want consistent, high-level care under one wellness plan.",
  },
  {
    question: "What is your cancellation policy?",
    answer:
      "Memberships require a 3 month commitment at which point you can renew or cancel. We follow the treatment plan with bi-weekly modifications when necessary.\n\nWith Non-Members who pay per visit, we require advance notice for cancellations to preserve scheduling access for those who need our services. No Shows are assessed a $45 missed appointment fee that must be paid before additional services are rendered.",
  },
  {
    question: "How do I get started?",
    answer:
      "Click Begin Experience and follow the questionnaire. Make sure to submit and we'll be in touch within 24–48 hours to schedule your first appointment. For established patients, click Begin Experience and follow the Established Patient questionnaire.",
  },
  {
    question: "Do you accept insurance?",
    answer:
      "If you opt for Chiropractic Care only, the answer is yes — we currently accept some insurances (AETNA, BCBS, United, UMR). If your deductible for the year has been met, your insurance will pay a portion towards your chiropractic care. You may have a co-pay and/or a balance after each visit. If your deductible has not been fully met, your insurance will not pay anything towards your care and you are considered a CASH patient. Specific insurance policy details are verified and discussed with you before treatment is rendered.",
  },
];

function FAQItem({ question, answer, index }: { question: string; answer: string; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      className="border border-border/60 rounded-xl overflow-hidden bg-white shadow-sm"
      data-testid={`faq-item-${index}`}
    >
      <button
        className="w-full flex items-center justify-between gap-4 px-7 py-6 text-left group"
        onClick={() => setOpen((o) => !o)}
        data-testid={`faq-toggle-${index}`}
      >
        <span className="font-display font-semibold text-base md:text-lg text-primary leading-snug group-hover:text-accent transition-colors">
          {question}
        </span>
        <div className={`shrink-0 w-8 h-8 rounded-full border border-border flex items-center justify-center transition-all duration-300 ${open ? "bg-accent border-accent rotate-180" : "group-hover:border-accent/50"}`}>
          <ChevronDown className={`w-4 h-4 transition-colors ${open ? "text-white" : "text-muted-foreground"}`} />
        </div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="px-7 pb-6 border-t border-border/40">
              {answer.split("\n\n").map((para, i) => (
                <p key={i} className={`text-muted-foreground leading-relaxed text-sm md:text-base ${i > 0 ? "mt-3" : "mt-4"}`}>
                  {para}
                </p>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="min-h-screen font-sans bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <main>
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
              <span className="text-accent font-bold tracking-[0.25em] uppercase text-xs mb-5 block" data-testid="text-faq-eyebrow">
                Have Questions?
              </span>
              <h1 className="font-display font-bold text-4xl md:text-6xl leading-tight mb-6" data-testid="text-faq-title">
                Frequently Asked Questions
              </h1>
              <p className="text-lg md:text-xl text-white/70 leading-relaxed max-w-xl mx-auto" data-testid="text-faq-subtitle">
                Everything you need to know about the Jordan Wellness Experience. Can't find an answer? Reach out — we're happy to help.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-20 md:py-28 bg-secondary/20">
          <div className="container mx-auto px-4 md:px-6 max-w-3xl">
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <FAQItem key={i} question={faq.question} answer={faq.answer} index={i} />
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 md:py-24 bg-primary text-white relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute w-[500px] h-[500px] bg-accent/15 rounded-full blur-[140px] -top-40 -right-40" />
          </div>
          <div className="container mx-auto px-4 md:px-6 max-w-2xl text-center relative z-10 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="space-y-4"
            >
              <h2 className="font-display font-bold text-3xl md:text-4xl text-white leading-tight" data-testid="text-faq-cta-title">
                Still Have Questions?
              </h2>
              <p className="text-white/65 text-lg leading-relaxed">
                Our team is here to help. Reach out and we'll get back to you within 24 hours.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link href="/intake-form">
                <Button size="lg" className="rounded-full px-10 bg-accent text-white shadow-md shadow-accent/20 group" data-testid="button-faq-begin">
                  Begin Your Experience
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="rounded-full px-10 border-2 border-white/30 text-white backdrop-blur-sm" data-testid="button-faq-contact">
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
