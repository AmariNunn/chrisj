import { ClipboardList, ArrowRight } from "lucide-react";
import { FORMS_URL } from "@/lib/constants";

export function IntakeBanner() {
  return (
    <div className="w-full bg-accent/10 border-y border-accent/20">
      <div className="container mx-auto px-4 md:px-6 py-3 flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-accent/15 flex items-center justify-center shrink-0">
            <ClipboardList className="w-4 h-4 text-accent" />
          </div>
          <p className="text-sm font-medium text-primary/80 text-center sm:text-left">
            <span className="font-semibold text-primary">New Patient?</span>{" "}
            Complete your intake forms before your first visit for a seamless experience.
          </p>
        </div>
        <a
          href={FORMS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:text-accent/80 transition-colors whitespace-nowrap group"
          data-testid="banner-intake-form-link"
        >
          Complete Intake Form
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
        </a>
      </div>
    </div>
  );
}
