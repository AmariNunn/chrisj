import { useEffect, useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Team } from "@/components/sections/Team";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, MapPin, Clock, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import coupleImg from "@assets/IMG_2607_1772062959050.JPG";

const chiroServiceImg = "/images/chiro-service.jpg";
const fitnessServiceImg = "/images/fitness-service.jpg";
const happyHourServiceImg = "/images/happy-hour-service.jpg";

const slideshowPhotos = [
  { id: 1, label: "Photo 1: Dr. Cox-Jordan in pink shirt \u2014 side posture adjustment on male patient in black shirt and jeans" },
  { id: 2, label: "Photo 2: Dr. Cox-Jordan in all black \u2014 adjusting seated woman's neck (black jacket, blue shirt, blue/white skirt)" },
  { id: 3, label: "Photo 3: Chris in wellness studio \u2014 black t-shirt and black hat showing weights to a couple" },
  { id: 4, label: "Photo 4: Two women in wellness studio with backs turned \u2014 one on treadmill, one on exercise bike" },
  { id: 5, label: "Photo 5: Dr. Cox-Jordan in light blue blouse standing beside patient in massage chair (patient in light green sweatshirt, grey sweatpants)" },
  { id: 6, label: "Photo 6: Dr. Cox-Jordan in red top \u2014 using theragun on male patient's upper back (patient in red t-shirt)" },
  { id: 7, label: "Photo 7: Dr. Cox-Jordan adjusting a child \u2014 both sitting on black table, silver instrument to child's upper back (child in blue shirt, black pants)" },
  { id: 8, label: "Photo 8: Chris in wellness studio \u2014 black t-shirt and hat showing a woman how to use weights" },
  { id: 9, label: "Photo 9: Woman standing in red half top with tattoos \u2014 getting a fat freezing session" },
  { id: 10, label: "Photo 10: Dr. Cox-Jordan measuring a patient's arm" },
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
    <div className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-md overflow-hidden bg-muted" data-testid="slideshow-container">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-secondary to-muted"
        >
          <div className="text-center px-6 max-w-2xl">
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed italic" data-testid={`slideshow-label-${slideshowPhotos[currentIndex].id}`}>
              {slideshowPhotos[currentIndex].label}
            </p>
          </div>
        </motion.div>
      </AnimatePresence>
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slideshowPhotos.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${i === currentIndex ? "bg-accent w-6" : "bg-foreground/20"}`}
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
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen font-sans bg-background text-foreground overflow-x-hidden">
      <Navbar />
      
      <main>
        <Hero />

        <Section className="bg-white" id="location-hours">
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-start gap-4"
            >
              <div className="w-12 h-12 rounded-md bg-accent/10 flex items-center justify-center text-accent shrink-0">
                <MapPin size={22} />
              </div>
              <div>
                <h3 className="font-display font-semibold text-lg text-primary mb-1" data-testid="text-location-title">Location</h3>
                <p className="text-muted-foreground leading-relaxed" data-testid="text-location-address">
                  3228 Clarksville Pike, Suite 101<br />
                  Nashville, TN 37218
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="flex items-start gap-4"
            >
              <div className="w-12 h-12 rounded-md bg-accent/10 flex items-center justify-center text-accent shrink-0">
                <Clock size={22} />
              </div>
              <div>
                <h3 className="font-display font-semibold text-lg text-primary mb-1" data-testid="text-hours-title">Hours</h3>
                <p className="text-muted-foreground leading-relaxed" data-testid="text-hours-info">
                  By Appointment Only<br />
                  11am to 2pm and 4pm to 7pm<br />
                  Sunday &ndash; Saturday
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex items-start gap-4"
            >
              <div className="w-12 h-12 rounded-md bg-accent/10 flex items-center justify-center text-accent shrink-0">
                <Phone size={22} />
              </div>
              <div>
                <h3 className="font-display font-semibold text-lg text-primary mb-1" data-testid="text-phone-title">Phone</h3>
                <a
                  href="tel:6154344328"
                  className="text-muted-foreground leading-relaxed transition-colors"
                  data-testid="link-phone"
                >
                  615-434-4328
                </a>
              </div>
            </motion.div>
          </div>
        </Section>

        <Section className="bg-secondary/30">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10 max-w-2xl mx-auto"
          >
            <span className="text-accent font-bold tracking-wider uppercase text-sm mb-3 block">Gallery</span>
            <h2 className="font-display font-bold text-3xl md:text-5xl text-primary leading-tight">Inside the Studio</h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <PhotoSlideshow />
          </motion.div>
        </Section>

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
                className={`font-display font-semibold leading-tight tracking-tight py-4 md:py-6 ${phrase.align} ${phrase.size} ${i % 2 === 0 ? "text-primary" : "text-gradient-gold"}`}
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
                <Link href="/about">
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
              { title: "Chiropractic Care", img: chiroServiceImg, desc: "Precision adjustments coupled with PT modalities in a private wellness setting. Personalized treatment plans for all ages." },
              { title: "Fitness Training", img: fitnessServiceImg, desc: "Private workout studio with personalized programs including corrective exercise, performance training, and body transformation." },
              { title: "\"Happy Hour\" Wellness Experience", img: happyHourServiceImg, desc: "One full hour of relaxation therapy featuring zero gravity massage, hydrotherapy, Theragun, and more." },
            ].map((service, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className="group relative overflow-hidden rounded-md shadow-lg cursor-pointer h-[420px] card-hover"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent group-hover:from-black/80 transition-all duration-500 z-10" />
                
                <img 
                  src={service.img} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                <div className="absolute bottom-0 left-0 right-0 p-8 z-20 text-white">
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
                Ready to Prioritize Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-amber-400">Health?</span>
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
              <a href="https://www.vagaro.com/us04/jordanwellnessexperience" target="_blank" rel="noopener noreferrer">
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
