import { useEffect, useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, ArrowRight, Send, Clock } from "lucide-react";
import { SiInstagram } from "react-icons/si";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await apiRequest("POST", "/api/inquiries", {
        name: formData.name,
        email: formData.email,
        subject: `Contact from ${formData.name}${formData.phone ? ` (${formData.phone})` : ""}`,
        message: formData.message,
      });

      toast({
        title: "Message Sent",
        description: "Thank you for reaching out. We'll get back to you soon!",
      });

      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "615-414-5294",
      href: "tel:6154145294",
    },
    {
      icon: Mail,
      label: "Email",
      value: "backdr4u@gmail.com",
      href: "mailto:backdr4u@gmail.com",
    },
    {
      icon: MapPin,
      label: "Address",
      value: "3228 Clarksville Pike, Suite 101, Nashville, TN 37218",
      href: "https://maps.google.com/?q=3228+Clarksville+Pike+Suite+101+Nashville+TN+37218",
    },
    {
      icon: Clock,
      label: "Hours",
      value: "By Appointment Only — Sun–Sat",
      href: undefined,
    },
  ];

  return (
    <div className="min-h-screen font-sans bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <main>
        <section className="relative py-20 md:py-28 bg-primary text-white overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute w-[500px] h-[500px] bg-accent/15 rounded-full blur-[120px] -top-40 -left-40" />
            <div className="absolute w-[400px] h-[400px] bg-white/5 rounded-full blur-[100px] -bottom-40 -right-40" />
          </div>
          <div className="container mx-auto px-4 md:px-6 relative z-10 text-center max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <h1 className="font-display font-bold text-4xl md:text-6xl leading-tight mb-6" data-testid="text-contact-title">
                Contact Us
              </h1>
              <p className="text-lg text-white/70 max-w-xl mx-auto" data-testid="text-contact-intro">We'd love to hear from you. Reach out to ask any questions or concerns.</p>
            </motion.div>
          </div>
        </section>

        <Section className="bg-white">
          <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="space-y-8"
            >
              <div>
                <h2 className="font-display font-bold text-3xl md:text-4xl text-primary" data-testid="text-contact-heading">
                  Let's Connect
                </h2>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, idx) => (
                  <motion.div
                    key={info.label}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1, duration: 0.5 }}
                    className="flex items-start gap-4"
                    data-testid={`contact-info-${info.label.toLowerCase()}`}
                  >
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                      <info.icon className="text-accent" size={22} />
                    </div>
                    <div>
                      <p className="font-semibold text-primary text-sm mb-1">{info.label}</p>
                      {info.href ? (
                        <a
                          href={info.href}
                          target={info.label === "Address" ? "_blank" : undefined}
                          rel={info.label === "Address" ? "noopener noreferrer" : undefined}
                          className="text-muted-foreground hover:text-accent transition-colors"
                          data-testid={`link-contact-${info.label.toLowerCase()}`}
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-muted-foreground">{info.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="flex items-center gap-4 pt-2">
                <a
                  href="https://www.instagram.com/jordanwellnessxp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors"
                  data-testid="link-instagram"
                >
                  <SiInstagram size={20} />
                  <span className="text-sm font-medium">@jordanwellnessxp</span>
                </a>
              </div>

              <div className="pt-4">
                <a
                  href="https://cal.com/jordanwellnessexperience"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="link-book-appointment-contact"
                >
                  <Button size="lg" className="rounded-full px-10 bg-accent text-white shadow-lg shadow-accent/20">
                    Book Experience
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <form onSubmit={handleSubmit} className="space-y-6 p-8 rounded-2xl bg-muted/30 border border-border" data-testid="form-contact">
                <h3 className="font-display font-bold text-2xl text-primary mb-2">Send a Message</h3>

                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    placeholder="Your full name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    data-testid="input-contact-name"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    data-testid="input-contact-email"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="(555) 123-4567"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    data-testid="input-contact-phone"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="How can we help you?"
                    className="min-h-[120px]"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    data-testid="input-contact-message"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full rounded-full bg-primary text-white"
                  disabled={isSubmitting}
                  data-testid="button-submit-contact"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                  <Send className="ml-2 w-4 h-4" />
                </Button>
              </form>
            </motion.div>
          </div>
        </Section>

      </main>
      <Footer />
    </div>
  );
}
