import { Section } from "@/components/ui/section";
import { motion } from "framer-motion";
import nicoleImg from "@/assets/images/team-nicole.jpg";
import chrisImg from "@/assets/images/team-chris.jpg";
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
    <Section title="Meet The Experts" subtitle="Our Team" className="bg-white relative">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="grid md:grid-cols-2 gap-12 lg:gap-20 max-w-5xl mx-auto relative z-10">
        {team.map((member, idx) => (
          <motion.div
            key={member.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.2, duration: 0.7 }}
            className="group"
          >
            <div className="relative mb-8 overflow-hidden rounded-3xl shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
              <img 
                src={member.image} 
                alt={member.name} 
                className="w-full h-[420px] object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-3 translate-y-20 group-hover:translate-y-0 transition-all duration-500 z-20">
                {[Facebook, Instagram, Linkedin].map((Icon, i) => (
                  <div key={i} className="p-3 bg-white/90 backdrop-blur-sm rounded-xl shadow-lg hover:bg-accent hover:text-white cursor-pointer transition-all duration-300 hover:-translate-y-1">
                    <Icon size={18}/>
                  </div>
                ))}
              </div>

              <div className="absolute top-4 right-4 z-20">
                <div className="px-3 py-1.5 bg-accent/90 backdrop-blur-sm text-white text-xs font-bold rounded-full uppercase tracking-wider">
                  {member.role}
                </div>
              </div>
            </div>
            
            <div className="text-center space-y-3 px-4">
              <h3 className="font-display font-bold text-2xl text-primary">{member.name}</h3>
              <div className="w-12 h-1 bg-gradient-to-r from-accent to-orange-400 rounded-full mx-auto" />
              <p className="text-muted-foreground leading-relaxed pt-1">{member.bio}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
