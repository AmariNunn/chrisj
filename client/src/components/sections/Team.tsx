import { Section } from "@/components/ui/section";
import { motion } from "framer-motion";
import nicoleImg from "@assets/IMG_2611_1772064095430.JPG";
import chrisImg from "@assets/IMG_1722_1772064111490.JPG";
import { Facebook, Instagram, Linkedin } from "lucide-react";

const team = [
  {
    name: "Dr. Nicole Cox-Jordan",
    role: "Chiropractor",
    image: nicoleImg,
    bio: "Dr. Nicole Cox-Jordan hails from Nashville, Tennessee. She earned her Bachelor's degree from Fisk University and her Doctor of Chiropractic (DC) degree from Parker College of Chiropractic in Dallas, Texas. Notably, Dr. Cox-Jordan became the first African American female Chiropractor from Nashville. She co-founded Back 2 Back Chiropractic and Wellness Center and has positively impacted numerous lives, demonstrating exceptional bedside manner and treating every individual with respect and professionalism.",
  },
  {
    name: "Christopher Jordan, CPT",
    role: "Fitness & Nutrition Specialist",
    image: chrisImg,
    bio: "Chris graduated from Whites Creek High School and attended Tennessee State University. After being diagnosed with stage 2 hypertension at 350 pounds, he transformed his health through daily cardio and improved diet, losing over 90 pounds. He completed Certifications in Personal Training, Strength and Conditioning, and Nutrition from the International Sports Sciences Association (ISSA). Chris is passionate about helping others achieve their fitness and wellness goals.",
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
                className="w-full h-[420px] object-cover object-top transition-transform duration-700 group-hover:scale-110"
                data-testid={`img-team-${idx}`}
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
              <h3 className="font-display font-bold text-2xl text-primary" data-testid={`text-team-name-${idx}`}>{member.name}</h3>
              <div className="w-12 h-1 bg-gradient-to-r from-accent to-orange-400 rounded-full mx-auto" />
              <p className="text-muted-foreground leading-relaxed pt-1">{member.bio}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
