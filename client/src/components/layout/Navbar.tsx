import { Link, useLocation } from "wouter";
import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import logoImg from "@/assets/images/logo-new.png";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Reviews", href: "/reviews" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? "bg-white/95 backdrop-blur-xl shadow-lg shadow-black/5 py-2" 
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link href="/">
          <div className="flex items-center cursor-pointer group" data-testid="navbar-logo">
            <img 
              src={logoImg} 
              alt="Jordan Wellness Experience" 
              className={`h-10 md:h-12 w-auto object-contain group-hover:opacity-90 transition-all duration-300 ${
                isScrolled ? "" : "brightness-0 invert"
              }`}
            />
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <div className="flex gap-1">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href}>
                <span className={`cursor-pointer text-sm font-medium px-4 py-2 rounded-full transition-all duration-300 ${
                  location === link.href 
                    ? "text-accent bg-accent/10 font-semibold" 
                    : isScrolled 
                      ? "text-foreground hover:text-accent hover:bg-accent/5"
                      : "text-white/90 hover:text-white hover:bg-white/10"
                }`}>
                  {link.name}
                </span>
              </Link>
            ))}
          </div>
          <Link href="/booking">
            <Button className="rounded-full px-6 py-5 bg-accent hover:bg-accent/90 text-white shadow-lg shadow-accent/25 hover:shadow-accent/40 transition-all hover:-translate-y-0.5 font-semibold">
              Book Now
            </Button>
          </Link>
        </div>

        <button 
          className={`md:hidden p-2.5 rounded-xl transition-colors ${
            isScrolled ? "text-primary hover:bg-muted" : "text-white hover:bg-white/10"
          }`}
          onClick={() => setIsMobileOpen(!isMobileOpen)}
        >
          {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white/95 backdrop-blur-xl border-b border-border/50 absolute w-full shadow-xl"
          >
            <div className="flex flex-col p-5 gap-2">
              {navLinks.map((link) => (
                <Link key={link.name} href={link.href}>
                  <span 
                    className={`block p-3 text-lg font-medium rounded-xl transition-all ${
                      location === link.href 
                        ? "bg-accent/10 text-accent font-semibold" 
                        : "text-foreground hover:bg-muted"
                    }`}
                    onClick={() => setIsMobileOpen(false)}
                  >
                    {link.name}
                  </span>
                </Link>
              ))}
              <div className="h-px bg-border my-2" />
              <Link href="/booking">
                <Button className="w-full rounded-xl py-6 bg-accent hover:bg-accent/90 text-white text-lg shadow-lg" onClick={() => setIsMobileOpen(false)}>
                  Book Appointment
                </Button>
              </Link>
              <a href="tel:+16152132145" className="flex items-center justify-center gap-2 text-primary font-medium py-3 rounded-xl hover:bg-muted transition-colors">
                <Phone className="w-4 h-4" /> (615) 213-2145
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
