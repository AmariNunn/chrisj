import { useEffect } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { BookingForm } from "@/components/forms/BookingForm";
import { Section } from "@/components/ui/section";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { motion } from "framer-motion";
import bookingImg from "@/assets/images/booking-header.jpg";

export default function Booking() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen font-sans bg-background">
      <Navbar />
      
      <div className="relative bg-primary text-white pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <img src={bookingImg} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 to-primary" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500/10 rounded-full blur-[100px]" />
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="container mx-auto px-4 md:px-6 text-center relative z-10"
        >
          <span className="inline-block text-accent font-bold tracking-wider uppercase text-sm px-4 py-1.5 bg-accent/15 rounded-full mb-6 border border-accent/20">Schedule a Visit</span>
          <h1 className="font-display font-bold text-4xl md:text-6xl mb-4">Book Appointment</h1>
          <p className="text-white/70 max-w-xl mx-auto text-lg">
            Take the first step towards better health. Schedule your visit online or call us directly.
          </p>
        </motion.div>
      </div>

      <div className="container mx-auto px-4 md:px-6 -mt-12 mb-20 relative z-10">
        <div className="grid lg:grid-cols-3 gap-8">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="lg:col-span-1 space-y-6"
          >
            <div className="bg-white p-8 rounded-3xl shadow-xl border border-border/50 hover:shadow-2xl transition-shadow duration-500">
              <h3 className="font-display font-bold text-xl text-primary mb-6 flex items-center gap-2">
                <div className="w-1.5 h-6 bg-accent rounded-full" />
                Contact Info
              </h3>
              <div className="space-y-6">
                {[
                  { icon: MapPin, label: "Visit Us", value: "3228 Clarksville Pike, Suite 101\nNashville, TN 37218" },
                  { icon: Phone, label: "Call Us", value: "(615) 213-2145" },
                  { icon: Mail, label: "Email Us", value: "info@jordanwellnessxp.com" },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 group">
                    <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-accent/15 to-accent/5 flex items-center justify-center text-accent shrink-0 group-hover:scale-110 transition-transform">
                      <item.icon size={20} />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground text-sm">{item.label}</p>
                      <p className="text-muted-foreground text-sm whitespace-pre-line">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary to-primary/90 text-white p-8 rounded-3xl shadow-xl">
              <h3 className="font-display font-bold text-xl mb-6 flex items-center gap-2">
                <div className="w-1.5 h-6 bg-accent rounded-full" />
                Opening Hours
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <Clock className="mt-1 text-accent" />
                  <div>
                    <p className="font-semibold">Sun - Sat</p>
                    <p className="text-white/70 text-sm">11:00 AM - 2:00 PM</p>
                    <p className="text-white/70 text-sm">4:00 PM - 7:00 PM</p>
                  </div>
                </div>
                <div className="pt-4 border-t border-white/10 text-sm italic opacity-80 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                  By Appointment Only
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="lg:col-span-2"
          >
            <BookingForm />
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
