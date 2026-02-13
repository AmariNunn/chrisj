import { Link } from "wouter";
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, Clock } from "lucide-react";
import logoImg from "@/assets/images/logo.jpg";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white rounded-lg p-1 overflow-hidden">
                <img src={logoImg} alt="Jordan Wellness" className="w-full h-full object-cover" />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-xl leading-tight">Jordan Wellness</span>
                <span className="text-xs uppercase tracking-wider text-accent font-semibold">Experience</span>
              </div>
            </div>
            <p className="text-primary-foreground/70 leading-relaxed">
              110% from us EVERYTIME. Your health is our priority. We are dedicated to providing holistic wellness care that transforms lives.
            </p>
            <div className="flex gap-4">
              {[Facebook, Instagram, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-white transition-colors">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {[
                { name: "About Us", href: "/about" },
                { name: "Services", href: "/services" },
                { name: "Book Now", href: "/booking" },
                { name: "Contact Us", href: "/contact" },
                { name: "Intake Form", href: "/intake" }
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href}>
                    <span className="text-primary-foreground/70 hover:text-accent transition-colors cursor-pointer block">
                      {link.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-primary-foreground/70">
                <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <span>3228 Clarksville Pike, Suite 101<br />Nashville, TN 37218</span>
              </li>
              <li className="flex items-center gap-3 text-primary-foreground/70">
                <Phone className="w-5 h-5 text-accent shrink-0" />
                <a href="tel:+16152132145" className="hover:text-white">(615) 213-2145</a>
              </li>
              <li className="flex items-center gap-3 text-primary-foreground/70">
                <Mail className="w-5 h-5 text-accent shrink-0" />
                <a href="mailto:info@jordanwellness.com" className="hover:text-white">info@jordanwellness.com</a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6">Opening Hours</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-primary-foreground/70">
                <Clock className="w-5 h-5 text-accent shrink-0 mt-0.5" />
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

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/50">
          <p>© {new Date().getFullYear()} Jordan Wellness Experience. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
