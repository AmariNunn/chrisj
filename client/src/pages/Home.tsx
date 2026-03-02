import { useEffect, useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Team } from "@/components/sections/Team";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { IntakeBanner } from "@/components/ui/IntakeBanner";
import coupleImg from "@assets/IMG_2607_1772062959050.JPG";
import slidePhoto1 from "@assets/IMG_2228_1772413231480.jpeg";
import slidePhoto2 from "@assets/E1B8E3F7-0E79-4E68-BD43-D2D57827C49F_1772413227959.JPG";
import slidePhoto3 from "@/assets/images/img-2509.jpg";
import slidePhoto4 from "@assets/IMG_2636_1772413240374.jpeg";
import slidePhoto5 from "@assets/IMG_6517_1772413246373.jpeg";
import slidePhoto6 from "@/assets/images/img-4930.jpg";
import slidePhoto7 from "@/assets/images/img-4462.jpg";
import slidePhoto8 from "@/assets/images/img-4196.jpg";

const slideshowPhotos = [
  { id: 1, src: slidePhoto1, alt: "Dr. Cox-Jordan chiropractic adjustment" },
  { id: 2, src: slidePhoto2, alt: "Fitness training session" },
  { id: 3, src: slidePhoto3, alt: "Wellness care session" },
  { id: 4, src: slidePhoto4, alt: "Cryotherapy treatment" },
  { id: 5, src: slidePhoto5, alt: "Body sculpting assessment" },
  { id: 6, src: slidePhoto6, alt: "Clinic treatment" },
  { id: 7, src: slidePhoto7, alt: "Patient consultation" },
  { id: 8, src: slidePhoto8, alt: "Wellness studio" },
];

function PhotoSlideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slideshowPhotos.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-md overflow-hidden bg-muted shadow-lg" data-testid="slideshow-container">
      <AnimatePresence mode="wait">
        <motion.img
          key={currentIndex}
          src={slideshowPhotos[currentIndex].src}
          alt={slideshowPhotos[currentIndex].alt}
          initial={{ opacity: 0, scale: 1.03 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.9, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full object-cover"
          data-testid={`slideshow-img-${slideshowPhotos[currentIndex].id}`}
        />
      </AnimatePresence>
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slideshowPhotos.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`h-1.5 rounded-full transition-all duration-300 ${i === currentIndex ? "bg-white w-6" : "bg-white/40 w-1.5"}`}
            data-testid={`slideshow-dot-${i}`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="min-h-screen font-sans bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />

        <IntakeBanner />

        <section className="py-20 md:py-32 bg-white" data-testid="section-branding">
          <div className="container mx-auto px-4 md:px-6 max-w-5xl">
            {[
              { text: "Where precision care meets elevated living.", align: "text-left", size: "text-3xl md:text-5xl lg:text-6xl" },
              { text: "Wellness, refined.", align: "text-right", size: "text-4xl md:text-6xl lg:text-7xl" },
              { text: "Private care. Exceptional outcomes.", align: "text-left md:text-center", size: "text-2xl md:text-4xl lg:text-5xl" },
              { text: "Because your body deserves concierge-level care.", align: "text-right md:text-left", size: "text-2xl md:text-3xl lg:text-4xl" },
              { text: "Restore. Strengthen. Elevate. Enhance.", align: "text-center", size: "text-3xl md:text-5xl lg:text-6xl" },
              { text: "Experience care without compromise.", align: "text-left", size: "text-2xl md:text-4xl lg:text-5xl" },
              { text: "An experience reserved for the discerning.", align: "text-right", size: "text-3xl md:text-5xl lg:text-6xl" },
            ].map((phrase, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: i * 0.08 }}
                className={`font-display font-semibold leading-tight tracking-tight py-4 md:py-6 ${phrase.align} ${phrase.size} ${i % 2 === 0 ? "text-primary" : "text-gradient-brand"}`}
                data-testid={`text-branding-phrase-${i}`}
              >
                {phrase.text}
              </motion.p>
            ))}
          </div>
        </section>

        <Section className="bg-secondary/30" id="about">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-md overflow-hidden bg-muted/30 border border-border/50">
                <img
                  src={coupleImg}
                  alt="Chris and Dr. Cox-Jordan"
                  className="w-full h-full object-cover"
                  data-testid="img-about-couple"
                />
              </div>
              <div className="absolute -bottom-3 -right-3 bg-accent/10 text-accent text-xs font-semibold tracking-wider uppercase px-4 py-2 rounded-md" data-testid="text-photo-label">
                Photo: Chris &amp; Dr. Cox-Jordan
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="space-y-6"
            >
              <span className="inline-block text-accent font-semibold tracking-widest uppercase text-xs" data-testid="text-about-subtitle">Our Studio</span>
              <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-primary leading-tight" data-testid="text-about-heading">
                The Jordan Wellness Experience
              </h2>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed" data-testid="text-about-description">
                Jordan Wellness Experience is a forward thinking concept, rooted in longevity, vitality, and total body calibration. It's a private standard in life long wellness engineered for enduring strength. With every Jordan Wellness Experience, we prioritize a thoughtful and individualized approach to wellness. Our process is neither rushed nor transactional, ensuring that each session and treatment plan is tailored to the unique needs of our clients.
              </p>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed" data-testid="text-about-description-2">
                Conveniently located in Nashville, our private wellness studio was established to support professionals, caregivers, parents, leaders, athletes, and others who constantly pour into others but often overlook their own well-being. We provide a discreet and tranquil environment that respects your time, privacy, and health.
              </p>
              <div className="pt-4">
                <Link href="/experience">
                  <Button className="rounded-full px-8 bg-primary text-primary-foreground group" data-testid="button-learn-more">
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </Section>

        <Section title="Our Wellness Services" subtitle="What We Do" className="bg-white">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Chiropractic Care", img: slidePhoto1, href: "/services#chiropractic", desc: "Precision adjustments coupled with PT modalities in a private wellness setting. Personalized treatment plans for all ages." },
              { title: "Fitness Training", img: slidePhoto2, href: "/services#fitness", desc: "Private workout studio with personalized programs including corrective exercise, performance training, and body transformation." },
              { title: "\"Happy Hour\" Wellness Experience", img: slidePhoto4, href: "/services#happy-hour", desc: "One full hour of relaxation therapy featuring zero gravity massage, hydrotherapy, Theragun, and more." },
            ].map((service, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className="group relative overflow-hidden rounded-md shadow-lg cursor-pointer h-[420px] card-hover"
                onClick={() => {
                  const id = service.href.split('#')[1];
                  const element = document.getElementById(id);
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  } else {
                    window.location.href = service.href;
                  }
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent group-hover:from-black/80 transition-all duration-500 z-10" />
                
                <img 
                  src={service.img} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                <div className="absolute bottom-0 left-0 right-0 p-8 z-20 text-[#3e6fad]">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="font-display font-bold text-2xl mb-2">{service.title}</h3>
                    <p className="text-white/80 opacity-0 group-hover:opacity-100 transition-all duration-500 mb-4 leading-relaxed">
                      {service.desc}
                    </p>
                    <div className="w-12 h-12 rounded-md bg-accent flex items-center justify-center shadow-lg shadow-accent/30 group-hover:shadow-accent/50 transition-all">
                      <ArrowRight size={20} />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-14">
            <Link href="/services">
              <Button variant="outline" className="rounded-full border-2 border-primary/15 text-primary" data-testid="button-view-all-services">
                View All Services
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </Section>

        <Team />

        <Section dark className="text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
            <div className="absolute w-[500px] h-[500px] bg-accent/20 rounded-full blur-[120px] -top-40 -left-40 animate-float-slow" />
            <div className="absolute w-[400px] h-[400px] bg-accent/10 rounded-full blur-[100px] -bottom-40 -right-40" />
            <div className="absolute w-[300px] h-[300px] bg-white/5 rounded-full blur-[80px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
          </div>
          
          <div className="relative z-10 max-w-2xl mx-auto space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="space-y-6"
            >
              <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-white leading-tight">
                Ready to Prioritize Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-orange-400">Health?</span>
              </h2>
              <p className="text-lg md:text-xl text-white/70 max-w-lg mx-auto leading-relaxed">
                Book your appointment today and start your journey to a healthier, happier you.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
            >
              <a href="https://cal.com/jordanwellnessexperience" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-accent text-white rounded-full text-lg group" data-testid="button-book-cta">
                  Book Appointment
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
              <Link href="/services">
                <Button size="lg" variant="outline" className="border-2 border-white/30 text-white rounded-full text-lg backdrop-blur-sm" data-testid="button-services-cta">
                  View Services
                </Button>
              </Link>
            </motion.div>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
