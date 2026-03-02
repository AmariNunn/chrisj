import { motion } from "framer-motion";
import nicoleImg from "@assets/IMG_2611_1772064095430.JPG";
import chrisImg from "@assets/IMG_1722_1772064111490.JPG";

const team = [
  {
    name: "Dr. Nicole Cox-Jordan",
    role: "Licensed Chiropractor",
    credentials: "DC — Licensed in TN\nCertified in Subzero Aesthetics & Orthopedic Cryotherapy",
    image: nicoleImg,
    imageLabel: "Photo: Dr. Nicole Cox-Jordan",
    bio: [
      "Dr. Nicole Cox-Jordan is a Nashville native and the first African American female Chiropractor to practice in the state of Tennessee. With over 25 years of experience, she provides a unique, unhurried, and comprehensive wellness experience alongside her husband Chris.",
      "She earned her Doctor of Chiropractic (DC) degree from Parker College of Chiropractic in Dallas, Texas, after completing her undergraduate studies at Fisk University. Her commitment to lifelong wellness is reflected in her personalized approach to patient care.",
    ],
  },
  {
    name: "Christopher Jordan, CPT",
    role: "Fitness & Nutrition Specialist",
    credentials: "ISSA Certified — Fitness Training, Strength & Conditioning, Nutritional Counseling, Kinesiotaping",
    image: chrisImg,
    imageLabel: "Photo: Christopher Jordan, CPT",
    bio: [
      "Chris is an ISSA Certified Fitness Trainer and Nutrition Specialist who transformed his own health by losing 100 pounds through disciplined cardio and diet. His journey inspired him to help others achieve their own health goals through personalized programs and nutritional counseling.",
      "A Nashville native and long-standing member of The Temple Church, Chris brings a passion for community health and practical, effective wellness strategies to every client interaction.",
    ],
  },
];

export function Team() {
  return (
    <section className="py-20 md:py-32 bg-white relative" id="team">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-24"
        >
          <span className="text-accent font-semibold tracking-[0.2em] uppercase text-sm mb-4 block" data-testid="text-team-subtitle">
            Our Team
          </span>
          <h2 className="font-display font-bold text-3xl md:text-5xl text-primary leading-tight" data-testid="text-team-title">
            Meet The Experts
          </h2>
          <div className="w-16 h-[2px] bg-accent mx-auto mt-6" />
        </motion.div>

        <div className="space-y-24 md:space-y-32 max-w-6xl mx-auto">
          {team.map((member, idx) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.7 }}
              className={`flex flex-col ${idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-8 md:gap-16 items-center`}
              data-testid={`card-team-${idx}`}
            >
              <div className="w-full md:w-5/12 flex-shrink-0">
                <div className="relative">
                  <div className="relative overflow-hidden rounded-md">
                    <img
                      src={member.image}
                      alt={member.imageLabel}
                      className="w-full h-auto min-h-[480px] object-contain bg-muted/5"
                      data-testid={`img-team-${idx}`}
                    />
                  </div>
                  <div className="absolute -bottom-3 -right-3 w-full h-full border border-accent/30 rounded-md -z-10" />
                </div>
                <p className="text-xs text-muted-foreground mt-4 italic text-center" data-testid={`text-team-photo-label-${idx}`}>
                  {member.imageLabel}
                </p>
              </div>

              <div className="w-full md:w-7/12 space-y-5">
                <div>
                  <span className="text-accent font-semibold tracking-[0.15em] uppercase text-xs block mb-2" data-testid={`text-team-role-${idx}`}>
                    {member.role}
                  </span>
                  <h3 className="font-display font-bold text-2xl md:text-3xl text-primary" data-testid={`text-team-name-${idx}`}>
                    {member.name}
                  </h3>
                  <p className="text-muted-foreground text-sm mt-1 whitespace-pre-line" data-testid={`text-team-credentials-${idx}`}>
                    {member.credentials}
                  </p>
                  <div className="w-10 h-[2px] bg-accent mt-4" />
                </div>

                <div className="space-y-4">
                  {member.bio.map((paragraph, pIdx) => (
                    <p
                      key={pIdx}
                      className="text-foreground/80 leading-relaxed text-[0.95rem]"
                      data-testid={`text-team-bio-${idx}-${pIdx}`}
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
