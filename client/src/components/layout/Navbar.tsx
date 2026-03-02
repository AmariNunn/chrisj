import { Link, useLocation } from "wouter";
import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import logoImg from "@/assets/images/logo-new.png";

import { BOOKING_URL } from "@/lib/constants";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "The Experience", href: "/experience" },
  { name: "Services", href: "/services" },
  { name: "Membership", href: "/membership" },
  { name: "Contact", href: "/contact" },
  { name: "Testimonials", href: "/testimonials" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [location] = useLocation();
  const isHome = location === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
  }, [location]);

  const showDark = isScrolled || !isHome;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        showDark
          ? "bg-white/98 backdrop-blur-2xl shadow-[0_1px_3px_rgba(0,0,0,0.08)] border-b border-black/[0.04]"
          : "bg-gradient-to-b from-black/30 to-transparent"
      }`}
      data-testid="navbar"
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-[72px]">
          <Link href="/">
            <div className="flex items-center cursor-pointer group shrink-0" data-testid="navbar-logo">
              <img
                src={logoImg}
                alt="Jordan Wellness Experience"
                className={`h-9 lg:h-11 w-auto object-contain transition-all duration-300 ${
                  showDark ? "" : "brightness-0 invert"
                }`}
              />
            </div>
          </Link>

          <div className="hidden lg:flex items-center">
            <div className="flex items-center gap-0.5">
              {navLinks.map((link) => {
                const isActive = location === link.href;
                return (
                  <Link key={link.name} href={link.href}>
                    <span
                      className={`relative cursor-pointer text-[13px] font-medium px-3 xl:px-4 py-2 rounded-md transition-all duration-200 whitespace-nowrap ${
                        isActive
                          ? showDark
                            ? "text-accent font-semibold"
                            : "text-white font-semibold"
                          : showDark
                            ? "text-foreground/70 hover:text-foreground hover:bg-muted/60"
                            : "text-white/80 hover:text-white hover:bg-white/10"
                      }`}
                      data-testid={`nav-link-${link.href.slice(1) || "home"}`}
                    >
                      {link.name}
                      {isActive && (
                        <motion.div
                          layoutId="nav-indicator"
                          className={`absolute bottom-0 left-3 right-3 h-[2px] rounded-full ${
                            showDark ? "bg-accent" : "bg-white"
                          }`}
                          transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        />
                      )}
                    </span>
                  </Link>
                );
              })}
            </div>

            <div className={`w-px h-6 mx-4 ${showDark ? "bg-border" : "bg-white/20"}`} />

            <div className="flex items-center gap-3">
              <a
                href="tel:+16154145294"
                className={`text-[13px] font-medium transition-colors whitespace-nowrap ${
                  showDark
                    ? "text-foreground/60 hover:text-foreground"
                    : "text-white/70 hover:text-white"
                }`}
                data-testid="nav-phone"
              >
                <Phone className="w-3.5 h-3.5 inline-block mr-1.5 -mt-px" />
                (615) 414-5294
              </a>
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  className="rounded-md px-5 text-[13px] bg-accent border-accent text-white font-semibold shadow-sm shadow-accent/20 transition-all"
                  data-testid="nav-book-appointment"
                >
                  Book Experience
                </Button>
              </a>
            </div>
          </div>

          <button
            className={`lg:hidden p-2 rounded-md transition-colors ${
              showDark ? "text-foreground hover:bg-muted" : "text-white hover:bg-white/10"
            }`}
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            data-testid="nav-mobile-toggle"
          >
            {isMobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="lg:hidden absolute top-full left-0 right-0 bg-white border-b border-border/50 shadow-xl"
          >
            <div className="container mx-auto px-4">
              <div className="py-3">
                {navLinks.map((link) => (
                  <Link key={link.name} href={link.href}>
                    <span
                      className={`flex items-center px-4 py-3 text-[15px] font-medium rounded-md transition-all ${
                        location === link.href
                          ? "text-accent bg-accent/5 font-semibold"
                          : "text-foreground/80 hover:text-foreground hover:bg-muted/50"
                      }`}
                      onClick={() => setIsMobileOpen(false)}
                      data-testid={`nav-mobile-${link.href.slice(1) || "home"}`}
                    >
                      {link.name}
                      {location === link.href && (
                        <div className="ml-auto w-1.5 h-1.5 rounded-full bg-accent" />
                      )}
                    </span>
                  </Link>
                ))}
              </div>

              <div className="border-t border-border/50 py-4 space-y-3">
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Button
                    className="w-full rounded-md bg-accent border-accent text-white text-[15px] font-semibold shadow-md"
                    size="lg"
                    onClick={() => setIsMobileOpen(false)}
                    data-testid="nav-mobile-book-appointment"
                  >
                    Book Experience
                  </Button>
                </a>
                <a
                  href="tel:+16154145294"
                  className="flex items-center justify-center gap-2 text-foreground/70 font-medium py-2.5 rounded-md hover:bg-muted/50 transition-colors text-[15px]"
                  data-testid="nav-mobile-phone"
                >
                  <Phone className="w-4 h-4" />
                  (615) 414-5294
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
