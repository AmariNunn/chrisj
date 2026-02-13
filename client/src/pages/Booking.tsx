import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { BookingForm } from "@/components/forms/BookingForm";
import { Section } from "@/components/ui/section";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Booking() {
  return (
    <div className="min-h-screen font-sans bg-background">
      <Navbar />
      
      {/* Header */}
      <div className="bg-primary text-white pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="font-display font-bold text-4xl md:text-6xl mb-4">Book Appointment</h1>
          <p className="text-white/70 max-w-xl mx-auto text-lg">
            Take the first step towards better health. Schedule your visit online or call us directly.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 -mt-10 mb-20 relative z-10">
        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Contact Info Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white p-8 rounded-3xl shadow-lg border border-border">
              <h3 className="font-display font-bold text-xl text-primary mb-6">Contact Info</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Visit Us</p>
                    <p className="text-muted-foreground text-sm">3228 Clarksville Pike, Suite 101<br/>Nashville, TN 37218</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Call Us</p>
                    <p className="text-muted-foreground text-sm">(615) 213-2145</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Email Us</p>
                    <p className="text-muted-foreground text-sm">info@jordanwellness.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-primary text-white p-8 rounded-3xl shadow-lg">
              <h3 className="font-display font-bold text-xl mb-6">Opening Hours</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <Clock className="mt-1 text-accent" />
                  <div>
                    <p className="font-semibold">Sun - Sat</p>
                    <p className="text-white/70 text-sm">11:00 AM - 2:00 PM</p>
                    <p className="text-white/70 text-sm">4:00 PM - 7:00 PM</p>
                  </div>
                </div>
                <div className="pt-4 border-t border-white/10 text-sm italic opacity-80">
                  * By Appointment Only
                </div>
              </div>
            </div>
          </div>

          {/* Booking Form */}
          <div className="lg:col-span-2">
            <BookingForm />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
