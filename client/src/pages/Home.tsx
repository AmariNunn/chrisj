import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Team } from "@/components/sections/Team";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { Activity, Heart, ShieldCheck, Star } from "lucide-react";
import chiropracticImg from "@/assets/images/service-chiropractic.jpg";
import massageImg from "@/assets/images/service-massage.jpg";
import nutritionImg from "@/assets/images/service-nutrition.jpg";
import coupleImg from "@/assets/images/about-couple.jpg";

export default function Home() {
  return (
    <div className="min-h-screen font-sans bg-background text-foreground overflow-x-hidden">
      <Navbar />
      
      <main>
        <Hero />

        {/* Features / Guarantee */}
        <Section className="bg-white">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              { icon: ShieldCheck, title: "Trusted Clinic", desc: "Certified professionals dedicated to your care." },
              { icon: Heart, title: "110% Guarantee", desc: "We give 110% from us EVERYTIME. Your health is priority." },
              { icon: Activity, title: "Expert Care", desc: "Advanced techniques for faster recovery." },
            ].map((feature, i) => (
              <div key={i} className="p-8 rounded-3xl bg-muted/30 hover:bg-muted/50 transition-colors">
                <div className="w-16 h-16 mx-auto bg-white rounded-full flex items-center justify-center text-accent shadow-lg mb-6">
                  <feature.icon size={32} />
                </div>
                <h3 className="font-display font-bold text-xl mb-3 text-primary">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.desc}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* About Preview */}
        <Section className="bg-[#F8F9FB]">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-accent rounded-3xl rotate-3 opacity-20 transform translate-x-4 translate-y-4" />
              <img 
                src={coupleImg} 
                alt="Happy Couple" 
                className="rounded-3xl shadow-xl relative z-10 w-full"
              />
            </div>
            <div className="space-y-6">
              <span className="text-accent font-bold tracking-wider uppercase text-sm">About Us</span>
              <h2 className="font-display font-bold text-4xl md:text-5xl text-primary leading-tight">
                Whatever life throws at you, we've got your BACK!
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                At Jordan Wellness Experience, we believe in a whole-body approach to health. Whether you are recovering from an injury, dealing with chronic pain, or looking to improve your overall fitness, our team is here to guide you every step of the way.
              </p>
              <ul className="space-y-4 pt-4">
                {["Personalized Treatment Plans", "Holistic Wellness Approach", "Experienced Specialists"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 font-medium text-primary">
                    <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center text-accent">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 3L4.5 8.5L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="pt-4">
                <Link href="/about">
                  <Button className="rounded-full px-8 bg-primary text-white hover:bg-primary/90">
                    Learn More About Us
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </Section>

        {/* Services Preview */}
        <Section title="Our Wellness Services" subtitle="What We Do">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Chiropractic Care", img: chiropracticImg, desc: "Spinal adjustments to relieve pain and improve function." },
              { title: "Massage Therapy", img: massageImg, desc: "Therapeutic massage to relax muscles and reduce stress." },
              { title: "Nutrition Planning", img: nutritionImg, desc: "Custom meal plans to fuel your body and mind." },
            ].map((service, i) => (
              <div key={i} className="group relative overflow-hidden rounded-3xl shadow-lg cursor-pointer h-[400px]">
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors z-10" />
                
                <img 
                  src={service.img} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                <div className="absolute bottom-0 left-0 right-0 p-8 z-20 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="font-display font-bold text-2xl mb-2">{service.title}</h3>
                  <p className="text-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mb-4">
                    {service.desc}
                  </p>
                  <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/services">
              <Button variant="outline" className="rounded-full px-8 border-primary text-primary hover:bg-primary hover:text-white">
                View All Services
              </Button>
            </Link>
          </div>
        </Section>

        <Team />

        {/* CTA Section */}
        <Section dark className="text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute w-96 h-96 bg-accent rounded-full blur-3xl -top-20 -left-20" />
            <div className="absolute w-96 h-96 bg-white rounded-full blur-3xl -bottom-20 -right-20" />
          </div>
          
          <div className="relative z-10 max-w-2xl mx-auto space-y-8">
            <h2 className="font-display font-bold text-4xl md:text-5xl text-white">
              Ready to Prioritize Your Health?
            </h2>
            <p className="text-lg text-white/80">
              Book your appointment today and start your journey to a healthier, happier you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/booking">
                <Button size="lg" className="bg-accent text-white hover:bg-accent/90 rounded-full px-10 h-14 text-lg">
                  Book Appointment
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary rounded-full px-10 h-14 text-lg">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </Section>
      </main>

      <Footer />
    </div>
  );
}
