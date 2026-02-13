import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import heroImg from "@assets/Screenshot_2026-02-12_at_6.40.23_PM_1770944158720.png";
import { Calendar, MapPin, Clock } from "lucide-react";

export function Hero() {
  return (
    <div className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[#F8F9FB]">
      {/* Background Shapes */}
      <div className="absolute top-0 right-0 w-[50vw] h-[80vh] bg-blue-100/50 rounded-bl-[100px] -z-10 blur-3xl opacity-60" />
      <div className="absolute bottom-0 left-0 w-[30vw] h-[50vh] bg-orange-100/50 rounded-tr-[100px] -z-10 blur-3xl opacity-60" />

      <div className="container mx-auto px-4 md:px-6 grid lg:grid-cols-2 gap-12 items-center">
        {/* Content */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 z-10"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-semibold border border-accent/20">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            Taking New Patients
          </div>
          
          <h1 className="font-display font-extrabold text-5xl md:text-6xl lg:text-7xl leading-[1.1] text-primary">
            Your Health is <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-orange-600">Our Priority</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed">
            Experience holistic wellness with our expert team. We provide chiropractor services, physical therapy, and personalized nutrition plans.
          </p>
          
          <div className="flex flex-wrap gap-4 pt-4">
            <Link href="/booking">
              <Button size="lg" className="rounded-full px-8 py-6 text-lg bg-primary hover:bg-primary/90 shadow-xl shadow-primary/20">
                Book Appointment
              </Button>
            </Link>
            <Link href="/services">
              <Button variant="outline" size="lg" className="rounded-full px-8 py-6 text-lg border-primary/20 hover:bg-white hover:border-primary/50">
                View Services
              </Button>
            </Link>
          </div>
        </motion.div>

        {/* Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative z-0 lg:h-[600px] flex items-center justify-center"
        >
          <div className="relative w-full h-full max-h-[500px] lg:max-h-full">
            <div className="absolute inset-0 bg-gradient-to-tr from-accent to-primary opacity-20 rounded-[2.5rem] rotate-3 transform translate-x-4 translate-y-4" />
            <img 
              src={heroImg} 
              alt="Jordan Wellness Team" 
              className="w-full h-full object-cover rounded-[2.5rem] shadow-2xl z-10 relative"
            />
            
            {/* Floating Card 1 */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="absolute -bottom-8 left-4 md:-left-8 glass p-4 rounded-2xl flex items-center gap-3 z-20 max-w-[240px]"
            >
              <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-accent">
                <MapPin size={20} />
              </div>
              <div>
                <p className="text-xs text-muted-foreground font-semibold uppercase">Location</p>
                <p className="text-sm font-bold text-primary">3228 Clarksville Pike, Nashville</p>
              </div>
            </motion.div>

            {/* Floating Card 2 */}
            <motion.div 
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="absolute top-8 -right-4 md:-right-8 glass p-4 rounded-2xl flex items-center gap-3 z-20 max-w-[200px]"
            >
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <Clock size={20} />
              </div>
              <div>
                <p className="text-xs text-muted-foreground font-semibold uppercase">Open Daily</p>
                <p className="text-sm font-bold text-primary">By Appointment</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
