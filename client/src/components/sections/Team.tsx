import { motion } from "framer-motion";
import nicoleImg from "@assets/IMG_2611_1772064095430.JPG";
import chrisImg from "@assets/IMG_1722_1772064111490.JPG";

const team = [
  {
    name: "Dr. Nicole Cox-Jordan",
    role: "Licensed Chiropractor",
    credentials: "DC — Licensed in TN & TX",
    image: nicoleImg,
    imageLabel: "Photo: Dr. Nicole Cox-Jordan",
    bio: [
      "Dr. Nicole Cox-Jordan hails from Nashville, Tennessee. She completed her education at Davidson County Public Schools and graduated from Whites Creek High School. She earned her Bachelor's degree from Fisk University in Nashville. Subsequently, Dr. Cox-Jordan obtained her Doctor of Chiropractic (DC) degree from Parker College of Chiropractic in Dallas, Texas. Upon completing her studies, she returned to her community to practice. Notably, Dr. Cox-Jordan became the first African American female Chiropractor to practice in the state of Tennessee.",
      "Dr. Cox-Jordan has 25+ years of Chiropractic experience; by teaming up with her husband Chris, they are better equipped to offer a unique, fun, and comprehensive wellness experience.",
    ],
  },
  {
    name: "Christopher Jordan, CPT",
    role: "Fitness & Nutrition Specialist",
    credentials: "ISSA Certified — Fitness Training, Strength & Conditioning, Nutritional Counseling, Kinesiotaping",
    image: chrisImg,
    imageLabel: "Photo: Christopher Jordan, CPT",
    bio: [
      "Chris graduated from Whites Creek High School and attended Tennessee State University, majoring in Architectural Engineering. He then relocated to Everett, Washington, where he lived for the next 9 years and began his career in the communications industry.",
      "At one point, Chris weighed 350 pounds and was diagnosed with stage 2 hypertension. Over time, he aimed to lose 100 pounds in hopes of managing his blood pressure without medication. For the next 3 years, he followed a routine of daily cardio and improved diet. As a result of these lifestyle changes, Chris now maintains a weight of 260 pounds, suitable for his 6'5\" frame.",
      "Chris started his first business years ago called Healthy Meal Prep by Chris. He prepared affordable, healthy entrees and snacks to demonstrate that eating healthy can be interesting, flavorful, and cost-effective. Chris aimed to better serve his clients by completing Certifications from the International Sports Sciences Association (ISSA). ISSA Certified in Fitness Training, Strength and Conditioning, Nutritional Counseling, and Kinesiotaping. In his spare time, he works out, relaxes, and spends time with his family. Chris is a long-standing member of The Temple Church in Nashville, TN.",
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
                      className="w-full h-[480px] object-cover object-center"
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
                  <p className="text-muted-foreground text-sm mt-1" data-testid={`text-team-credentials-${idx}`}>
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
