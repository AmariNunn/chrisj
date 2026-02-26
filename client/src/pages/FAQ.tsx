import { useEffect } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/ui/section";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";
import bookingHeaderImg from "@/assets/images/booking-header.jpg";

const faqItems = [
  {
    question: "What services do you offer?",
    answer:
      "We offer a full range of wellness services including Chiropractic Care, Fitness Training, our signature \"Happy Hour\" Wellness Experience, Body Sculpting/Fat Freezing, Targeted Cryotherapy, and our exclusive VIP Experience. Each service is delivered in a private, unhurried setting tailored to your individual needs.",
  },
  {
    question: "Do I need a membership?",
    answer:
      "Memberships are required for the \"Essential\" ChiroFitness Experience and the \"Elite\" VIP Experience. Packages are available for \"Enhanced\" Body Sculpting and \"Elevated\" Cryotherapy services. Our Signature Services — Chiropractic Care, Fitness Training, and the \"Happy Hour\" Wellness Experience — can be booked individually without a membership.",
  },
  {
    question: "What is the \"Happy Hour\" Wellness Experience?",
    answer:
      "The \"Happy Hour\" Wellness Experience is ONE FULL HOUR of relaxation therapy that includes a Zero Gravity massage chair, Intersegmental Traction table, Heated Hydrotherapy table, Theragun, and Jeanie Rub therapy. It releases tension, supports recovery, reduces stress, and provides a nervous system reset.",
  },
  {
    question: "How does Body Sculpting/Fat Freezing work?",
    answer:
      "Body Sculpting uses non-invasive fat freezing technology to target stubborn body fat in areas such as the abdomen, love handles, thighs, upper arms, back, double chin, neck, face, under buttocks, obliques, and gynecomastia. Packages start at $99+/session with a minimum of 6 sessions. Please note: Body Sculpting is NOT a weight loss treatment — it targets specific areas of stubborn fat.",
  },
  {
    question: "What is Targeted Cryotherapy?",
    answer:
      "Targeted Cryotherapy is precision cold therapy that reduces inflammation, accelerates recovery, promotes skin tightening, and offers scalp treatment alternatives. It can address conditions like post-surgical swelling, alopecia, acne, eczema, psoriasis, fine lines, dark spots, and puffiness. Packages start at $50/treatment, and Cryotherapy can be added on to both Signature and Premium services.",
  },
  {
    question: "What are the Priority Access Hours?",
    answer:
      "Members enjoy Priority Access Hours from 7am to 7pm with 24-48 hours notice. This provides flexible scheduling in our private wellness setting, ensuring you receive the personalized attention you deserve at times that work best for your schedule.",
  },
  {
    question: "Do you accept walk-ins?",
    answer:
      "We are an appointment-only wellness studio. This allows us to provide the private, unhurried, and intentional care that defines the Jordan Wellness Experience. Please book your appointment in advance to secure your preferred time.",
  },
  {
    question: "What should I bring to my first visit?",
    answer:
      "For your first visit, please wear comfortable clothing and bring any relevant medical records or imaging. Arrive a few minutes early to complete any necessary intake forms. Our team will conduct a thorough assessment to build a personalized treatment plan around your unique needs and goals.",
  },
  {
    question: "Can I bring a group for training?",
    answer:
      "Yes! Our Fitness Training Wellness Experience offers both 1-on-1 and Group Training sessions in our private workout studio. Group sessions accommodate a maximum of 5 participants, ensuring personalized attention for everyone in the group.",
  },
  {
    question: "Is Body Sculpting the same as weight loss?",
    answer:
      "No. Body Sculpting is NOT a weight loss treatment. It is a non-invasive procedure designed to target and reduce stubborn pockets of fat in specific areas of the body. It is ideal for individuals who are close to their desired weight but have areas of fat that are resistant to diet and exercise.",
  },
];

export default function FAQ() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen font-sans bg-background text-foreground overflow-x-hidden">
      <Navbar />

      <div className="relative h-[340px] md:h-[400px] flex items-center justify-center overflow-hidden">
        <img
          src={bookingHeaderImg}
          alt="FAQ"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/70 to-primary/90" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative z-10 text-center text-white px-4"
        >
          <span className="inline-block text-accent font-bold tracking-wider uppercase text-sm mb-4">
            Get Answers
          </span>
          <h1 className="font-display font-bold text-4xl md:text-6xl mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-white/70 text-lg max-w-xl mx-auto">
            Everything you need to know about Jordan Wellness Experience
          </p>
        </motion.div>
      </div>

      <main>
        <Section className="bg-white">
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqItems.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05, duration: 0.5 }}
                >
                  <AccordionItem
                    value={`item-${i}`}
                    className="border border-border/50 rounded-md px-6 data-[state=open]:shadow-md transition-shadow"
                    data-testid={`faq-item-${i}`}
                  >
                    <AccordionTrigger
                      className="text-left text-base font-semibold text-primary hover:text-accent transition-colors py-5"
                      data-testid={`faq-trigger-${i}`}
                    >
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent
                      className="text-muted-foreground leading-relaxed pb-5"
                      data-testid={`faq-answer-${i}`}
                    >
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </div>
        </Section>
      </main>

      <Footer />
    </div>
  );
}
