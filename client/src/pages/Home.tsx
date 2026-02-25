import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Team } from "@/components/sections/Team";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Activity, Heart, ShieldCheck, ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import chiropracticImg from "@/assets/images/service-chiropractic.jpg";
import massageImg from "@/assets/images/service-massage.jpg";
import nutritionImg from "@/assets/images/service-nutrition.jpg";
import coupleImg from "@assets/IMG_2607_1772062959050.JPG";

export default function Home() {
  return (
    <div className="min-h-screen font-sans bg-background text-foreground overflow-x-hidden">
      <Navbar />
      
      <main>
        <Hero />

        <Section className="bg-white relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-accent to-transparent rounded-full" />
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              { icon: ShieldCheck, title: "Trusted Clinic", desc: "Certified professionals dedicated to your care.", color: "from-blue-500/10 to-primary/10" },
              { icon: Heart, title: "110% Guarantee", desc: "We give 110% from us EVERYTIME. Your health is priority.", color: "from-rose-500/10 to-pink-500/10" },
              { icon: Activity, title: "Expert Care", desc: "Advanced techniques for faster recovery.", color: "from-accent/10 to-orange-500/10" },
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className="p-10 rounded-3xl bg-gradient-to-br from-muted/30 to-muted/10 hover:shadow-xl transition-all duration-500 card-hover border border-transparent hover:border-accent/10 group"
              >
                <div className={`w-18 h-18 mx-auto bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center text-accent shadow-lg mb-6 group-hover:scale-110 transition-transform duration-500 w-[72px] h-[72px]`}>
                  <feature.icon size={34} />
                </div>
                <h3 className="font-display font-bold text-xl mb-3 text-primary">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </Section>

        <Section className="bg-[#F8F9FB]">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-tr from-accent/20 to-primary/10 rounded-[2rem] rotate-2 blur-sm" />
              <div className="absolute -inset-2 bg-gradient-to-bl from-primary/10 to-accent/10 rounded-[2rem] -rotate-1" />
              <img 
                src={coupleImg} 
                alt="Happy Couple" 
                className="rounded-3xl shadow-2xl relative z-10 w-full ring-1 ring-white/50"
              />
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="absolute -bottom-6 -right-6 glass p-4 rounded-2xl z-20 animate-float-slow"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center">
                    <Sparkles className="text-accent" size={24} />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-primary">15+</p>
                    <p className="text-xs text-muted-foreground font-medium">Years Experience</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="space-y-6"
            >
              <span className="inline-block text-accent font-bold tracking-wider uppercase text-sm px-4 py-1.5 bg-accent/10 rounded-full">About Us</span>
              <h2 className="font-display font-bold text-4xl md:text-5xl text-primary leading-tight">
                Whatever life throws at you, we've got your <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-orange-600">BACK!</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                At Jordan Wellness Experience, we believe in a whole-body approach to health. Whether you are recovering from an injury, dealing with chronic pain, or looking to improve your overall fitness, our team is here to guide you every step of the way.
              </p>
              <ul className="space-y-4 pt-4">
                {["Personalized Treatment Plans", "Holistic Wellness Approach", "Experienced Specialists"].map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    className="flex items-center gap-4 font-medium text-primary"
                  >
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent/20 to-accent/10 flex items-center justify-center text-accent shrink-0">
                      <svg width="14" height="14" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 3L4.5 8.5L2 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    {item}
                  </motion.li>
                ))}
              </ul>
              <div className="pt-6">
                <Link href="/about">
                  <Button className="rounded-full px-8 py-6 bg-primary text-white hover:bg-primary/90 shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all hover:-translate-y-1 group">
                    Learn More About Us
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
              { title: "Chiropractic Care", img: chiropracticImg, desc: "Spinal adjustments to relieve pain and improve function." },
              { title: "Massage Therapy", img: massageImg, desc: "Therapeutic massage to relax muscles and reduce stress." },
              { title: "Nutrition Planning", img: nutritionImg, desc: "Custom meal plans to fuel your body and mind." },
            ].map((service, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className="group relative overflow-hidden rounded-3xl shadow-lg cursor-pointer h-[420px] card-hover"
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
                    <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center shadow-lg shadow-accent/30 group-hover:shadow-accent/50 transition-all">
                      <ArrowRight size={20} />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-14">
            <Link href="/services">
              <Button variant="outline" className="rounded-full px-10 py-6 border-2 border-primary/15 text-primary hover:bg-primary hover:text-white hover:border-primary transition-all duration-500 hover:-translate-y-1 text-base">
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
            <div className="absolute w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px] -bottom-40 -right-40 animate-float" />
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
              <Link href="/booking">
                <Button size="lg" className="bg-accent text-white hover:bg-accent/90 rounded-full px-10 h-14 text-lg shadow-xl shadow-accent/30 hover:shadow-accent/50 transition-all hover:-translate-y-1 animate-pulse-glow group">
                  Book Appointment
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="border-2 border-white/30 text-white hover:bg-white hover:text-primary rounded-full px-10 h-14 text-lg backdrop-blur-sm transition-all hover:-translate-y-1">
                  Contact Us
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
