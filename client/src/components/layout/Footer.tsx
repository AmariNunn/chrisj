import { Link } from "wouter";
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, Clock, Heart } from "lucide-react";
import logoImg from "@/assets/images/logo-new.png";

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-primary to-primary/95 text-primary-foreground pt-20 pb-8 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500/5 rounded-full blur-[100px]" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <div className="space-y-6">
            <div className="flex items-center" data-testid="footer-logo">
              <img 
                src={logoImg} 
                alt="Jordan Wellness Experience" 
                className="h-12 w-auto object-contain brightness-0 invert"
              />
            </div>
            <p className="text-primary-foreground/60 leading-relaxed">
              110% from us EVERYTIME. Your health is our priority. We are dedicated to providing holistic wellness care that transforms lives.
            </p>
            <div className="flex gap-3">
              {[Facebook, Instagram, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-accent hover:border-accent hover:text-white transition-all duration-300 hover:-translate-y-1">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display font-bold text-lg mb-6 flex items-center gap-2">
              <div className="w-1.5 h-5 bg-accent rounded-full" />
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { name: "The Experience", href: "/experience" },
                { name: "Services", href: "/services" },
                { name: "Membership & Packages", href: "/memberships" },
                { name: "Conditions", href: "/conditions" },
                { name: "FAQ", href: "/faq" },
                { name: "Book Now", href: "/booking" }
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href}>
                    <span className="text-primary-foreground/60 hover:text-accent transition-colors cursor-pointer block py-1 hover:translate-x-1 transform transition-transform duration-300">
                      {link.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-lg mb-6 flex items-center gap-2">
              <div className="w-1.5 h-5 bg-accent rounded-full" />
              Contact Us
            </h4>
            <ul className="space-y-5">
              <li className="flex items-start gap-3 text-primary-foreground/60">
                <div className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4 text-accent" />
                </div>
                <span>3228 Clarksville Pike, Suite 101<br />Nashville, TN 37218</span>
              </li>
              <li className="flex items-center gap-3 text-primary-foreground/60">
                <div className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4 text-accent" />
                </div>
                <a href="tel:+16154145294" className="hover:text-white transition-colors">(615) 414-5294</a>
              </li>
              <li className="flex items-center gap-3 text-primary-foreground/60">
                <div className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4 text-accent" />
                </div>
                <a href="mailto:info@jordanwellnessxp.com" className="hover:text-white transition-colors">info@jordanwellnessxp.com</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-lg mb-6 flex items-center gap-2">
              <div className="w-1.5 h-5 bg-accent rounded-full" />
              Opening Hours
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-primary-foreground/60">
                <div className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center shrink-0 mt-0.5">
                  <Clock className="w-4 h-4 text-accent" />
                </div>
                <div>
                  <p className="font-semibold text-white">By Appointment Only</p>
                  <p className="mt-1">Sun - Sat</p>
                  <p>11:00 AM - 2:00 PM</p>
                  <p>4:00 PM - 7:00 PM</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/40">
          <p className="flex items-center gap-1">
            © {new Date().getFullYear()} Jordan Wellness Experience. Made with <Heart className="w-3.5 h-3.5 text-accent fill-accent" /> All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
