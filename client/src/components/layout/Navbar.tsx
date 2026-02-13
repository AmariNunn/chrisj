import { Link, useLocation } from "wouter";
import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import logoImg from "@/assets/images/logo.jpg";

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-white/90 backdrop-blur-md shadow-sm py-3" 
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link href="/">
          <div className="flex items-center gap-2 cursor-pointer group">
            <div className="relative overflow-hidden rounded-lg w-10 h-10 md:w-12 md:h-12 border-2 border-primary/10 group-hover:border-accent/50 transition-colors">
              <img 
                src={logoImg} 
                alt="Jordan Wellness" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className={`font-display font-bold text-lg md:text-xl leading-tight ${isScrolled ? "text-primary" : "text-primary md:text-primary"}`}>
                Jordan Wellness
              </span>
              <span className={`text-[10px] uppercase tracking-wider font-semibold ${isScrolled ? "text-accent" : "text-accent"}`}>
                Experience
              </span>
            </div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex gap-6">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href}>
                <span className={`cursor-pointer text-sm font-medium transition-colors hover:text-accent ${
                  location === link.href 
                    ? "text-accent font-semibold" 
                    : isScrolled ? "text-foreground" : "text-foreground"
                }`}>
                  {link.name}
                </span>
              </Link>
            ))}
          </div>
          <Link href="/booking">
            <Button className="rounded-full px-6 bg-accent hover:bg-accent/90 text-white shadow-lg shadow-accent/20 hover:shadow-accent/40 transition-all hover:-translate-y-0.5">
              Book Now
            </Button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2 text-primary"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
        >
          {isMobileOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-border absolute w-full"
          >
            <div className="flex flex-col p-4 gap-4">
              {navLinks.map((link) => (
                <Link key={link.name} href={link.href}>
                  <span 
                    className="block p-2 text-lg font-medium text-foreground hover:bg-muted rounded-lg"
                    onClick={() => setIsMobileOpen(false)}
                  >
                    {link.name}
                  </span>
                </Link>
              ))}
              <div className="h-px bg-border my-2" />
              <Link href="/booking">
                <Button className="w-full rounded-full bg-accent hover:bg-accent/90 text-white" onClick={() => setIsMobileOpen(false)}>
                  Book Appointment
                </Button>
              </Link>
              <a href="tel:+15551234567" className="flex items-center justify-center gap-2 text-primary font-medium py-2">
                <Phone className="w-4 h-4" /> (615) 555-0123
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
