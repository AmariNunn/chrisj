import { Link } from "wouter";
import { Instagram, MapPin, Phone, Mail, Clock } from "lucide-react";
import logoImg from "@/assets/images/logo-new.png";

import { BOOKING_URL } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground pt-20 pb-8 relative overflow-hidden">
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
            <p className="text-primary-foreground/60 leading-relaxed" data-testid="footer-tagline">
              Where clinical precision meets lifelong vitality. A private sanctuary for strength, restoration, and whole-body care.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/jordanwellnessxp"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-md bg-white/5 border border-white/10 flex items-center justify-center hover:bg-accent hover:border-accent hover:text-white transition-all duration-300"
                data-testid="footer-instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: "The Experience", href: "/experience" },
                { name: "Services", href: "/services" },
                { name: "Membership", href: "/membership" },
                { name: "Contact", href: "/contact" },
                { name: "Testimonials", href: "/testimonials" },
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href}>
                    <span
                      className="text-primary-foreground/60 hover:text-accent transition-colors cursor-pointer block py-1"
                      data-testid={`footer-link-${link.href.slice(1)}`}
                    >
                      {link.name}
                    </span>
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:text-accent/80 transition-colors block py-1 font-medium"
                  data-testid="footer-link-book"
                >
                  Book Experience
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-5">
              <li className="flex items-start gap-3 text-primary-foreground/60">
                <div className="w-9 h-9 rounded-md bg-white/5 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4 text-accent" />
                </div>
                <span>3228 Clarksville Pike, Suite 101<br />Nashville, TN 37218</span>
              </li>
              <li className="flex items-center gap-3 text-primary-foreground/60">
                <div className="w-9 h-9 rounded-md bg-white/5 flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4 text-accent" />
                </div>
                <a href="tel:+16154145294" className="hover:text-white transition-colors" data-testid="footer-phone">
                  (615) 414-5294
                </a>
              </li>
              <li className="flex items-center gap-3 text-primary-foreground/60">
                <div className="w-9 h-9 rounded-md bg-white/5 flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4 text-accent" />
                </div>
                <a href="mailto:backdr4u@gmail.com" className="hover:text-white transition-colors" data-testid="footer-email">
                  backdr4u@gmail.com
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-lg mb-6">Hours</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-primary-foreground/60">
                <div className="w-9 h-9 rounded-md bg-white/5 flex items-center justify-center shrink-0 mt-0.5">
                  <Clock className="w-4 h-4 text-accent" />
                </div>
                <div>
                  <p className="font-semibold text-white">By Appointment Only</p>
                  <p className="mt-1">Sunday &ndash; Saturday</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/40">
          <p>&copy; {new Date().getFullYear()} Jordan Wellness Experience. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
