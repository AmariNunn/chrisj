import { Section } from "@/components/ui/section";
import { motion } from "framer-motion";
import nicoleImg from "@assets/Screenshot_2026-02-12_at_6.40.57_PM_1770944145492.png";
import chrisImg from "@assets/Screenshot_2026-02-12_at_6.41.05_PM_1770944145492.png";
import { Facebook, Instagram, Linkedin } from "lucide-react";

const team = [
  {
    name: "Dr. Nicole Cox-Jordan",
    role: "Chiropractor",
    image: nicoleImg,
    bio: "Dr. Nicole Cox-Jordan is a board-certified chiropractor with over 15 years of experience. She specializes in spinal adjustments, prenatal care, and holistic pain management.",
  },
  {
    name: "Christopher Jordan",
    role: "Fitness & Nutrition Specialist",
    image: chrisImg,
    bio: "Christopher brings a wealth of knowledge in sports physiology and nutrition. He creates personalized fitness plans that complement chiropractic care for total body wellness.",
  }
];

export function Team() {
  return (
    <Section title="Meet The Experts" subtitle="Our Team" className="bg-white">
      <div className="grid md:grid-cols-2 gap-12 lg:gap-20 max-w-5xl mx-auto">
        {team.map((member, idx) => (
          <motion.div
            key={member.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.2 }}
            className="group"
          >
            <div className="relative mb-6 overflow-hidden rounded-3xl">
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
              <img 
                src={member.image} 
                alt={member.name} 
                className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-105"
              />
              
              {/* Social Overlay */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-4 translate-y-20 group-hover:translate-y-0 transition-transform duration-300 z-20">
                <div className="p-3 bg-white rounded-full shadow-lg hover:text-accent cursor-pointer"><Facebook size={18}/></div>
                <div className="p-3 bg-white rounded-full shadow-lg hover:text-accent cursor-pointer"><Instagram size={18}/></div>
                <div className="p-3 bg-white rounded-full shadow-lg hover:text-accent cursor-pointer"><Linkedin size={18}/></div>
              </div>
            </div>
            
            <div className="text-center space-y-2">
              <h3 className="font-display font-bold text-2xl text-primary">{member.name}</h3>
              <p className="text-accent font-medium uppercase tracking-wide text-sm">{member.role}</p>
              <p className="text-muted-foreground leading-relaxed pt-2">{member.bio}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
