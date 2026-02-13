import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  title?: string;
  subtitle?: string;
  dark?: boolean;
}

export function Section({ children, className, id, title, subtitle, dark = false }: SectionProps) {
  return (
    <section 
      id={id} 
      className={cn(
        "py-16 md:py-24 relative overflow-hidden",
        dark ? "bg-primary text-white" : "bg-background",
        className
      )}
    >
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {(title || subtitle) && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16 max-w-3xl mx-auto"
          >
            {subtitle && (
              <span className="text-accent font-bold tracking-wider uppercase text-sm mb-3 block">
                {subtitle}
              </span>
            )}
            {title && (
              <h2 className={cn(
                "font-display font-bold text-3xl md:text-5xl leading-tight",
                dark ? "text-white" : "text-primary"
              )}>
                {title}
              </h2>
            )}
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
}
