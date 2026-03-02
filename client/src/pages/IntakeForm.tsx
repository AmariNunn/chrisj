import { useEffect, useState } from "react";
import { Link } from "wouter";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, ChevronRight, ChevronLeft, ArrowRight } from "lucide-react";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xbdavkwp";

const STEPS = [
  "Patient Info",
  "Health Goals",
  "Health History",
  "Lifestyle & Services",
  "Membership & Consent",
];

type FormData = {
  fullName: string;
  todayDate: string;
  dateOfBirth: string;
  age: string;
  maritalStatus: string;
  sex: string;
  preferredPronouns: string;
  occupation: string;
  employer: string;
  homeAddress: string;
  cityStateZip: string;
  cellPhone: string;
  email: string;
  preferredContact: string;
  emergencyContact: string;
  emergencyRelationship: string;
  emergencyPhone: string;
  referredBy: string;
  primaryGoals: string[];
  wellnessGoal1: string;
  wellnessGoal2: string;
  wellnessGoal3: string;
  currentConcerns: string[];
  concernStarted: string;
  previousTreatment: string;
  previousTreatmentDetails: string;
  personalHistory: string[];
  surgeries: string;
  medications: string;
  hasAllergies: string;
  allergyDetails: string;
  pregnant: string;
  exerciseFrequency: string;
  stressLevel: string;
  sleepQuality: string;
  nutritionalStyle: string;
  signatureServices: string[];
  premiumServices: string[];
  experiencePreference: string[];
  membershipOption: string;
  consentDate: string;
  consentName: string;
  consentAgreed: boolean;
};

const INITIAL: FormData = {
  fullName: "",
  todayDate: "",
  dateOfBirth: "",
  age: "",
  maritalStatus: "",
  sex: "",
  preferredPronouns: "",
  occupation: "",
  employer: "",
  homeAddress: "",
  cityStateZip: "",
  cellPhone: "",
  email: "",
  preferredContact: "",
  emergencyContact: "",
  emergencyRelationship: "",
  emergencyPhone: "",
  referredBy: "",
  primaryGoals: [],
  wellnessGoal1: "",
  wellnessGoal2: "",
  wellnessGoal3: "",
  currentConcerns: [],
  concernStarted: "",
  previousTreatment: "",
  previousTreatmentDetails: "",
  personalHistory: [],
  surgeries: "",
  medications: "",
  hasAllergies: "",
  allergyDetails: "",
  pregnant: "",
  exerciseFrequency: "",
  stressLevel: "",
  sleepQuality: "",
  nutritionalStyle: "",
  signatureServices: [],
  premiumServices: [],
  experiencePreference: [],
  membershipOption: "",
  consentDate: "",
  consentName: "",
  consentAgreed: false,
};

const PRIMARY_GOALS = [
  "Auto Injury Recovery",
  "Performance Optimization",
  "Pain Relief",
  "Longevity & Preventative Care",
  "Body Sculpting/Fat Freezing",
  "Stress",
  "Targeted Cryotherapy",
  "Postural Correction",
  "Weight Mgmt",
  "Sports Injury",
  "Nutritional Coaching",
  "Other",
];

const CURRENT_CONCERNS = [
  "Neck pain/stiffness",
  "Back pain/stiffness",
  "Sciatica",
  "Headaches/Migraines",
  "Joint Pain",
  "Muscle Tightness",
  "Chronic fatigue",
  "Limited Mobility",
  "Weight Issues",
  "Stress/Burnout",
  "Vertigo",
  "Insomnia",
  "Alopecia/Hair loss",
  "Acne",
  "Eczema/Psoriasis",
  "Wrinkles/Fine lines/Dark spots",
  "Other",
];

const PERSONAL_HISTORY = [
  "High Blood Pressure",
  "Heart Disease",
  "Stroke",
  "Heart Attack",
  "Diabetes",
  "Thyroid disorder",
  "Autoimmune Disease",
  "Cancer",
  "Gout",
  "Osteoporosis/Osteopenia",
  "High Cholesterol",
  "Arthritis",
  "Anxiety/Depression",
  "Glaucoma",
  "Other",
];

const SIGNATURE_SERVICES = [
  "Chiropractic",
  "Fitness Training",
  "Happy Hour/Relaxation Therapy",
];

const PREMIUM_SERVICES = [
  'ChiroFitness – "Essential Jordan Wellness Experience"',
  'Body Sculpting/Fat Freezing – "Enhanced Jordan Wellness Experience"',
  'Targeted Cryotherapy – "Elevated Jordan Wellness Experience"',
  'VIP Concierge – "Elite Jordan Wellness Experience"',
];

const EXPERIENCE_PREFERENCES = [
  "Pain focused clinical care",
  "Athletic performance driven",
  "Aesthetic & Body contour focused",
  "Stress recovery & Nervous System reset",
  "Executive-level Concierge/Long term wellness",
];

const inputClass =
  "w-full rounded-md border border-border bg-white px-4 py-3 text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/40 transition";
const labelClass = "block text-sm font-semibold text-primary mb-1.5";
const selectClass = `${inputClass} appearance-none cursor-pointer`;

function FieldGroup({ children }: { children: React.ReactNode }) {
  return <div className="space-y-5">{children}</div>;
}

function Row({ children }: { children: React.ReactNode }) {
  return <div className="grid sm:grid-cols-2 gap-5">{children}</div>;
}

function SectionDivider({ title }: { title: string }) {
  return (
    <div className="pt-2 border-t border-border/50">
      <p className="text-sm font-bold text-primary mb-4 uppercase tracking-wider">{title}</p>
    </div>
  );
}

function CheckboxGroup({
  options,
  selected,
  onToggle,
  testPrefix,
}: {
  options: string[];
  selected: string[];
  onToggle: (val: string) => void;
  testPrefix: string;
}) {
  return (
    <div className="grid sm:grid-cols-2 gap-2 mt-2">
      {options.map((opt) => (
        <label key={opt} className="flex items-center gap-3 cursor-pointer group" data-testid={`${testPrefix}-${opt.replace(/\s+/g, "-").toLowerCase()}`}>
          <div
            className={`w-5 h-5 rounded border flex items-center justify-center shrink-0 transition-colors ${selected.includes(opt) ? "bg-accent border-accent" : "border-border group-hover:border-accent/50"}`}
            onClick={() => onToggle(opt)}
          >
            {selected.includes(opt) && <CheckCircle2 className="w-3 h-3 text-white" />}
          </div>
          <span className="text-sm text-foreground/80 leading-snug">{opt}</span>
          <input type="checkbox" className="sr-only" checked={selected.includes(opt)} onChange={() => onToggle(opt)} />
        </label>
      ))}
    </div>
  );
}

export default function IntakeForm() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState<FormData>(INITIAL);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [step]);

  function set(field: keyof FormData, value: string | boolean | string[]) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  function toggle(field: "primaryGoals" | "currentConcerns" | "personalHistory" | "signatureServices" | "premiumServices" | "experiencePreference", val: string) {
    setForm((prev) => {
      const list = prev[field] as string[];
      return {
        ...prev,
        [field]: list.includes(val) ? list.filter((v) => v !== val) : [...list, val],
      };
    });
  }

  async function handleSubmit() {
    if (!form.consentAgreed || !form.consentName.trim()) {
      setError("Please sign and check the consent box to continue.");
      return;
    }
    setError("");
    setSubmitting(true);

    const payload = {
      "Patient Name": form.fullName,
      "Today's Date": form.todayDate,
      "Date of Birth": form.dateOfBirth,
      "Age": form.age,
      "Marital Status": form.maritalStatus,
      "Sex": form.sex,
      "Preferred Pronouns": form.preferredPronouns,
      "Occupation": form.occupation,
      "Employer": form.employer,
      "Home Address": form.homeAddress,
      "City, State, Zip": form.cityStateZip,
      "Cell #": form.cellPhone,
      "Email": form.email,
      "Preferred Contact Method": form.preferredContact,
      "Emergency Contact": form.emergencyContact,
      "Emergency Relationship": form.emergencyRelationship,
      "Emergency Phone": form.emergencyPhone,
      "Referred By": form.referredBy,
      "Primary Health Goals": form.primaryGoals.join(", ") || "None",
      "Wellness Goal 1": form.wellnessGoal1,
      "Wellness Goal 2": form.wellnessGoal2,
      "Wellness Goal 3": form.wellnessGoal3,
      "Current Health Concerns": form.currentConcerns.join(", ") || "None",
      "When Concern Began": form.concernStarted,
      "Previous Treatment": form.previousTreatment,
      "Previous Treatment Details": form.previousTreatmentDetails,
      "Personal Health History": form.personalHistory.join(", ") || "None",
      "Surgeries and Dates": form.surgeries,
      "Current Medications/Vitamins/Supplements": form.medications,
      "Has Allergies": form.hasAllergies,
      "Allergy Details": form.allergyDetails,
      "Pregnant or Trying to Conceive": form.pregnant,
      "Exercise Frequency": form.exerciseFrequency,
      "Stress Level": form.stressLevel,
      "Sleep Quality": form.sleepQuality,
      "Nutritional Style": form.nutritionalStyle,
      "Signature Services of Interest": form.signatureServices.join(", ") || "None",
      "Premium Services of Interest": form.premiumServices.join(", ") || "None",
      "Experience Preference": form.experiencePreference.join(", ") || "None",
      "Membership Option": form.membershipOption,
      "Consent Signature": form.consentName,
      "Consent Date": form.consentDate,
    };

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        setError("Something went wrong. Please try again or email us directly at backdr4u@gmail.com.");
      }
    } catch {
      setError("Network error. Please try again or email us directly at backdr4u@gmail.com.");
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className="min-h-screen font-sans bg-background text-foreground overflow-x-hidden">
        <Navbar />
        <main className="flex items-center justify-center min-h-[80vh] px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-lg"
          >
            <div className="w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-8">
              <CheckCircle2 className="text-accent w-10 h-10" />
            </div>
            <h1 className="font-display font-bold text-3xl md:text-4xl text-primary mb-4">
              Thank You!
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Your intake questionnaire has been received. Our team will personally reach out within <strong>24 hours</strong> to coordinate your Private Assessment.
            </p>
            <Link href="/">
              <Button size="lg" className="rounded-full px-10 bg-accent text-white shadow-md shadow-accent/20">
                Return Home
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </motion.div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen font-sans bg-background text-foreground overflow-x-hidden">
      <Navbar />

      <main>
        <section className="relative py-16 md:py-24 bg-primary text-white overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute w-[500px] h-[500px] bg-accent/15 rounded-full blur-[120px] -top-40 -left-40" />
            <div className="absolute w-[400px] h-[400px] bg-white/5 rounded-full blur-[100px] -bottom-40 -right-40" />
          </div>
          <div className="container mx-auto px-4 md:px-6 relative z-10 text-center max-w-3xl">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <span className="text-accent font-bold tracking-wider uppercase text-sm mb-4 block">
                New Client Questionnaire
              </span>
              <h1 className="font-display font-bold text-4xl md:text-5xl leading-tight mb-4">
                Patient Intake Form
              </h1>
              <p className="text-white/70 text-lg max-w-xl mx-auto">
                Please complete all sections so we can provide you with the most personalized care possible.
              </p>
            </motion.div>
          </div>
        </section>

        <div className="bg-white border-b border-border sticky top-0 z-20 shadow-sm">
          <div className="container mx-auto px-4 md:px-6 max-w-3xl py-4">
            <div className="flex items-center justify-between mb-3">
              {STEPS.map((label, i) => (
                <div key={i} className="flex-1 flex flex-col items-center gap-1">
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-colors ${
                      i < step ? "bg-accent text-white" : i === step ? "bg-primary text-white" : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {i < step ? <CheckCircle2 className="w-4 h-4" /> : i + 1}
                  </div>
                  <span className={`hidden md:block text-[10px] font-medium text-center leading-tight ${i === step ? "text-primary" : "text-muted-foreground"}`}>
                    {label}
                  </span>
                </div>
              ))}
            </div>
            <div className="w-full bg-muted rounded-full h-1.5">
              <div
                className="bg-accent h-1.5 rounded-full transition-all duration-500"
                style={{ width: `${(step / (STEPS.length - 1)) * 100}%` }}
              />
            </div>
          </div>
        </div>

        <section className="py-12 md:py-16 bg-secondary/20">
          <div className="container mx-auto px-4 md:px-6 max-w-3xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={step}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.35 }}
                className="bg-white rounded-xl border border-border/50 shadow-sm p-8 md:p-10"
              >
                {/* Step 1: Patient Information */}
                {step === 0 && (
                  <FieldGroup>
                    <div>
                      <h2 className="font-display font-bold text-2xl text-primary mb-1">Patient Information</h2>
                      <p className="text-muted-foreground text-sm">Tell us a bit about yourself.</p>
                    </div>
                    <Row>
                      <div>
                        <label className={labelClass}>Name *</label>
                        <input data-testid="input-full-name" className={inputClass} placeholder="Full name" value={form.fullName} onChange={e => set("fullName", e.target.value)} />
                      </div>
                      <div>
                        <label className={labelClass}>Today's Date</label>
                        <input data-testid="input-today-date" type="date" className={inputClass} value={form.todayDate} onChange={e => set("todayDate", e.target.value)} />
                      </div>
                    </Row>
                    <Row>
                      <div>
                        <label className={labelClass}>Date of Birth</label>
                        <input data-testid="input-dob" type="date" className={inputClass} value={form.dateOfBirth} onChange={e => set("dateOfBirth", e.target.value)} />
                      </div>
                      <div>
                        <label className={labelClass}>Age</label>
                        <input data-testid="input-age" className={inputClass} placeholder="Age" value={form.age} onChange={e => set("age", e.target.value)} />
                      </div>
                    </Row>
                    <Row>
                      <div>
                        <label className={labelClass}>Marital Status</label>
                        <select data-testid="select-marital" className={selectClass} value={form.maritalStatus} onChange={e => set("maritalStatus", e.target.value)}>
                          <option value="">Select...</option>
                          <option>Married (M)</option>
                          <option>Single (S)</option>
                          <option>Divorced (D)</option>
                          <option>Widowed (W)</option>
                        </select>
                      </div>
                      <div>
                        <label className={labelClass}>Sex</label>
                        <select data-testid="select-sex" className={selectClass} value={form.sex} onChange={e => set("sex", e.target.value)}>
                          <option value="">Select...</option>
                          <option>Male (M)</option>
                          <option>Female (F)</option>
                        </select>
                      </div>
                    </Row>
                    <Row>
                      <div>
                        <label className={labelClass}>Preferred Pronouns</label>
                        <input data-testid="input-pronouns" className={inputClass} placeholder="e.g. She/Her, He/Him, They/Them" value={form.preferredPronouns} onChange={e => set("preferredPronouns", e.target.value)} />
                      </div>
                      <div>
                        <label className={labelClass}>Occupation</label>
                        <input data-testid="input-occupation" className={inputClass} placeholder="Your occupation" value={form.occupation} onChange={e => set("occupation", e.target.value)} />
                      </div>
                    </Row>
                    <div>
                      <label className={labelClass}>Employer</label>
                      <input data-testid="input-employer" className={inputClass} placeholder="Employer name" value={form.employer} onChange={e => set("employer", e.target.value)} />
                    </div>
                    <div>
                      <label className={labelClass}>Home Address</label>
                      <input data-testid="input-address" className={inputClass} placeholder="Street address" value={form.homeAddress} onChange={e => set("homeAddress", e.target.value)} />
                    </div>
                    <div>
                      <label className={labelClass}>City, State, Zip</label>
                      <input data-testid="input-city-state-zip" className={inputClass} placeholder="Nashville, TN 37218" value={form.cityStateZip} onChange={e => set("cityStateZip", e.target.value)} />
                    </div>
                    <Row>
                      <div>
                        <label className={labelClass}>Cell # *</label>
                        <input data-testid="input-cell" className={inputClass} placeholder="(615) 000-0000" value={form.cellPhone} onChange={e => set("cellPhone", e.target.value)} />
                      </div>
                      <div>
                        <label className={labelClass}>Email *</label>
                        <input data-testid="input-email" type="email" className={inputClass} placeholder="you@example.com" value={form.email} onChange={e => set("email", e.target.value)} />
                      </div>
                    </Row>
                    <div>
                      <label className={labelClass}>Preferred Method of Communication</label>
                      <select data-testid="select-preferred-contact" className={selectClass} value={form.preferredContact} onChange={e => set("preferredContact", e.target.value)}>
                        <option value="">Select...</option>
                        <option>Call</option>
                        <option>Text</option>
                        <option>Email</option>
                      </select>
                    </div>
                    <SectionDivider title="Emergency Contact" />
                    <Row>
                      <div>
                        <label className={labelClass}>Emergency Contact Name</label>
                        <input data-testid="input-emergency-name" className={inputClass} placeholder="Full name" value={form.emergencyContact} onChange={e => set("emergencyContact", e.target.value)} />
                      </div>
                      <div>
                        <label className={labelClass}>Relationship</label>
                        <input data-testid="input-emergency-relationship" className={inputClass} placeholder="e.g. Spouse, Parent" value={form.emergencyRelationship} onChange={e => set("emergencyRelationship", e.target.value)} />
                      </div>
                    </Row>
                    <div>
                      <label className={labelClass}>Emergency Contact Phone #</label>
                      <input data-testid="input-emergency-phone" className={inputClass} placeholder="(615) 000-0000" value={form.emergencyPhone} onChange={e => set("emergencyPhone", e.target.value)} />
                    </div>
                    <div>
                      <label className={labelClass}>Referred By</label>
                      <input data-testid="input-referred-by" className={inputClass} placeholder="Name or source" value={form.referredBy} onChange={e => set("referredBy", e.target.value)} />
                    </div>
                  </FieldGroup>
                )}

                {/* Step 2: Primary Health Goals & Current Health Concerns */}
                {step === 1 && (
                  <FieldGroup>
                    <div>
                      <h2 className="font-display font-bold text-2xl text-primary mb-1">Primary Health Goals</h2>
                      <p className="text-muted-foreground text-sm">Help us understand what brings you to Jordan Wellness Experience.</p>
                    </div>
                    <div>
                      <label className={labelClass}>What brings you to Jordan Wellness Experience? (Check all that apply)</label>
                      <CheckboxGroup options={PRIMARY_GOALS} selected={form.primaryGoals} onToggle={(v) => toggle("primaryGoals", v)} testPrefix="goal" />
                    </div>
                    <div>
                      <label className={labelClass}>What are your top 3 Wellness Goals?</label>
                      <div className="space-y-3">
                        <input data-testid="input-wellness-goal-1" className={inputClass} placeholder="1." value={form.wellnessGoal1} onChange={e => set("wellnessGoal1", e.target.value)} />
                        <input data-testid="input-wellness-goal-2" className={inputClass} placeholder="2." value={form.wellnessGoal2} onChange={e => set("wellnessGoal2", e.target.value)} />
                        <input data-testid="input-wellness-goal-3" className={inputClass} placeholder="3." value={form.wellnessGoal3} onChange={e => set("wellnessGoal3", e.target.value)} />
                      </div>
                    </div>

                    <SectionDivider title="Current Health Concerns" />
                    <div>
                      <label className={labelClass}>Current Health Concerns (Check all that apply)</label>
                      <CheckboxGroup options={CURRENT_CONCERNS} selected={form.currentConcerns} onToggle={(v) => toggle("currentConcerns", v)} testPrefix="concern" />
                    </div>
                    <div>
                      <label className={labelClass}>When did this begin?</label>
                      <input data-testid="input-concern-started" className={inputClass} placeholder="e.g. 3 months ago, last year..." value={form.concernStarted} onChange={e => set("concernStarted", e.target.value)} />
                    </div>
                    <div>
                      <label className={labelClass}>Have you received treatment for this before?</label>
                      <select data-testid="select-previous-treatment" className={selectClass} value={form.previousTreatment} onChange={e => set("previousTreatment", e.target.value)}>
                        <option value="">Select...</option>
                        <option>Yes</option>
                        <option>No</option>
                      </select>
                    </div>
                    {form.previousTreatment === "Yes" && (
                      <div>
                        <label className={labelClass}>If yes, what kind of treatment and when?</label>
                        <textarea data-testid="textarea-treatment-details" className={`${inputClass} min-h-[80px] resize-none`} placeholder="Describe the treatment and approximate date..." value={form.previousTreatmentDetails} onChange={e => set("previousTreatmentDetails", e.target.value)} />
                      </div>
                    )}
                  </FieldGroup>
                )}

                {/* Step 3: Health History */}
                {step === 2 && (
                  <FieldGroup>
                    <div>
                      <h2 className="font-display font-bold text-2xl text-primary mb-1">Health History</h2>
                      <p className="text-muted-foreground text-sm">Your medical background helps us care for you safely.</p>
                    </div>
                    <div>
                      <label className={labelClass}>Do you have a personal history of: (Check all that apply)</label>
                      <CheckboxGroup options={PERSONAL_HISTORY} selected={form.personalHistory} onToggle={(v) => toggle("personalHistory", v)} testPrefix="history" />
                    </div>
                    <div>
                      <label className={labelClass}>List Surgeries and Dates</label>
                      <textarea data-testid="textarea-surgeries" className={`${inputClass} min-h-[80px] resize-none`} placeholder="e.g. Knee surgery – 2018, Appendectomy – 2015 (or type 'None')" value={form.surgeries} onChange={e => set("surgeries", e.target.value)} />
                    </div>
                    <div>
                      <label className={labelClass}>Current Medications, Vitamins, Supplements</label>
                      <textarea data-testid="textarea-medications" className={`${inputClass} min-h-[80px] resize-none`} placeholder="List all medications, vitamins, or supplements (or type 'None')" value={form.medications} onChange={e => set("medications", e.target.value)} />
                    </div>
                    <div>
                      <label className={labelClass}>Do you have any allergies?</label>
                      <select data-testid="select-allergies" className={selectClass} value={form.hasAllergies} onChange={e => set("hasAllergies", e.target.value)}>
                        <option value="">Select...</option>
                        <option>Yes</option>
                        <option>No</option>
                      </select>
                    </div>
                    {form.hasAllergies === "Yes" && (
                      <div>
                        <label className={labelClass}>If yes, please list:</label>
                        <input data-testid="input-allergy-details" className={inputClass} placeholder="e.g. Penicillin, latex, peanuts..." value={form.allergyDetails} onChange={e => set("allergyDetails", e.target.value)} />
                      </div>
                    )}
                    <div>
                      <label className={labelClass}>Are you pregnant or trying to conceive?</label>
                      <select data-testid="select-pregnant" className={selectClass} value={form.pregnant} onChange={e => set("pregnant", e.target.value)}>
                        <option value="">Select...</option>
                        <option>Yes</option>
                        <option>No</option>
                      </select>
                    </div>
                  </FieldGroup>
                )}

                {/* Step 4: Lifestyle & Services */}
                {step === 3 && (
                  <FieldGroup>
                    <div>
                      <h2 className="font-display font-bold text-2xl text-primary mb-1">Lifestyle & Services</h2>
                      <p className="text-muted-foreground text-sm">Help us tailor your experience to your life.</p>
                    </div>

                    <SectionDivider title="Lifestyle Profile" />
                    <Row>
                      <div>
                        <label className={labelClass}>Exercise Frequency</label>
                        <select data-testid="select-exercise" className={selectClass} value={form.exerciseFrequency} onChange={e => set("exerciseFrequency", e.target.value)}>
                          <option value="">Select...</option>
                          <option>None</option>
                          <option>1–2x/week</option>
                          <option>3–4x/week</option>
                          <option>5+x/week</option>
                        </select>
                      </div>
                      <div>
                        <label className={labelClass}>Stress Level</label>
                        <select data-testid="select-stress" className={selectClass} value={form.stressLevel} onChange={e => set("stressLevel", e.target.value)}>
                          <option value="">Select...</option>
                          <option>Low</option>
                          <option>Moderate</option>
                          <option>High</option>
                        </select>
                      </div>
                    </Row>
                    <Row>
                      <div>
                        <label className={labelClass}>Sleep Quality</label>
                        <select data-testid="select-sleep" className={selectClass} value={form.sleepQuality} onChange={e => set("sleepQuality", e.target.value)}>
                          <option value="">Select...</option>
                          <option>Excellent</option>
                          <option>Fair</option>
                          <option>Poor</option>
                        </select>
                      </div>
                      <div>
                        <label className={labelClass}>Nutritional Style</label>
                        <select data-testid="select-nutrition" className={selectClass} value={form.nutritionalStyle} onChange={e => set("nutritionalStyle", e.target.value)}>
                          <option value="">Select...</option>
                          <option>Balanced</option>
                          <option>High Protein</option>
                          <option>Keto</option>
                          <option>Vegetarian</option>
                          <option>Other</option>
                        </select>
                      </div>
                    </Row>

                    <SectionDivider title="Services of Interest" />
                    <div>
                      <label className={labelClass}>Signature Services (select all that apply)</label>
                      <CheckboxGroup options={SIGNATURE_SERVICES} selected={form.signatureServices} onToggle={(v) => toggle("signatureServices", v)} testPrefix="sig-service" />
                    </div>
                    <div>
                      <label className={labelClass}>Premium Services (select all that apply)</label>
                      <CheckboxGroup options={PREMIUM_SERVICES} selected={form.premiumServices} onToggle={(v) => toggle("premiumServices", v)} testPrefix="prem-service" />
                    </div>

                    <SectionDivider title="Experience Preference" />
                    <div>
                      <label className={labelClass}>How would you like your experience tailored? (Check all that apply)</label>
                      <CheckboxGroup options={EXPERIENCE_PREFERENCES} selected={form.experiencePreference} onToggle={(v) => toggle("experiencePreference", v)} testPrefix="exp-pref" />
                    </div>
                  </FieldGroup>
                )}

                {/* Step 5: Membership & Consent */}
                {step === 4 && (
                  <FieldGroup>
                    <div>
                      <h2 className="font-display font-bold text-2xl text-primary mb-1">Membership & Consent</h2>
                      <p className="text-muted-foreground text-sm">Select your membership option and sign to complete your questionnaire.</p>
                    </div>

                    <SectionDivider title="Membership Options" />
                    <div className="space-y-3">
                      {[
                        {
                          value: "Signature Services – Non-Membership",
                          label: "Signature Services – Non-Membership",
                          desc: "Pay per visit services",
                        },
                        {
                          value: "Premium Services – Private Wellness Membership",
                          label: "Premium Services – Private, Discreet Wellness Membership",
                          desc: "Integrated treatment plan by both Chiropractor and Fitness trainer, with the option to renew/cancel in month 3; one-on-one precision care by both providers; Priority Access to providers and Priority Hours; family and friend perks",
                        },
                        {
                          value: "I would like guidance selecting the right plan for me",
                          label: "I would like guidance selecting the right plan for me",
                          desc: "",
                        },
                      ].map((opt) => (
                        <label key={opt.value} className="flex items-start gap-3 cursor-pointer p-4 rounded-lg border border-border hover:border-accent/40 transition-colors" data-testid={`membership-${opt.value.replace(/\s+/g, "-").toLowerCase().slice(0, 20)}`}>
                          <div
                            className={`mt-0.5 w-5 h-5 rounded-full border flex items-center justify-center shrink-0 transition-colors ${form.membershipOption === opt.value ? "bg-accent border-accent" : "border-border"}`}
                            onClick={() => set("membershipOption", opt.value)}
                          >
                            {form.membershipOption === opt.value && <div className="w-2.5 h-2.5 rounded-full bg-white" />}
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-primary leading-snug">{opt.label}</p>
                            {opt.desc && <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{opt.desc}</p>}
                          </div>
                          <input type="radio" className="sr-only" checked={form.membershipOption === opt.value} onChange={() => set("membershipOption", opt.value)} />
                        </label>
                      ))}
                    </div>

                    <SectionDivider title="Informed Consent & Acknowledgement" />
                    <div className="bg-primary/5 border border-primary/15 rounded-lg p-5 text-sm text-foreground/80 leading-relaxed">
                      <p>
                        "I understand that services provided at Jordan Wellness Experience are wellness based and may include Chiropractic care, Fitness training, Relaxation therapy, Targeted Cryotherapy, and/or Body Sculpting/Fat Freezing procedures. I acknowledge that I have disclosed my health history accurately."
                      </p>
                    </div>

                    <Row>
                      <div>
                        <label className={labelClass}>Signature (Type Full Name) *</label>
                        <input data-testid="input-consent-name" className={inputClass} placeholder="Type your full name to sign" value={form.consentName} onChange={e => set("consentName", e.target.value)} />
                      </div>
                      <div>
                        <label className={labelClass}>Date</label>
                        <input data-testid="input-consent-date" type="date" className={inputClass} value={form.consentDate} onChange={e => set("consentDate", e.target.value)} />
                      </div>
                    </Row>

                    <label className="flex items-start gap-3 cursor-pointer" data-testid="checkbox-consent">
                      <div
                        className={`mt-0.5 w-5 h-5 rounded border flex items-center justify-center shrink-0 transition-colors ${form.consentAgreed ? "bg-accent border-accent" : "border-border hover:border-accent/50"}`}
                        onClick={() => set("consentAgreed", !form.consentAgreed)}
                      >
                        {form.consentAgreed && <CheckCircle2 className="w-3 h-3 text-white" />}
                      </div>
                      <span className="text-sm text-foreground/80 leading-relaxed">
                        I have read and agree to the consent statement above. I confirm that the information provided is accurate.
                      </span>
                    </label>

                    {error && (
                      <p className="text-red-600 text-sm font-medium">{error}</p>
                    )}
                  </FieldGroup>
                )}
              </motion.div>
            </AnimatePresence>

            <div className="flex justify-between items-center mt-8">
              <Button
                variant="outline"
                size="lg"
                className="rounded-full border-2 border-primary/20 text-primary px-8"
                onClick={() => setStep((s) => Math.max(0, s - 1))}
                disabled={step === 0}
                data-testid="button-prev-step"
              >
                <ChevronLeft className="mr-1 w-4 h-4" />
                Back
              </Button>

              {step < STEPS.length - 1 ? (
                <Button
                  size="lg"
                  className="rounded-full px-10 bg-accent text-white shadow-md shadow-accent/20"
                  onClick={() => setStep((s) => Math.min(STEPS.length - 1, s + 1))}
                  data-testid="button-next-step"
                >
                  Next
                  <ChevronRight className="ml-1 w-4 h-4" />
                </Button>
              ) : (
                <Button
                  size="lg"
                  className="rounded-full px-10 bg-accent text-white shadow-md shadow-accent/20"
                  onClick={handleSubmit}
                  disabled={submitting}
                  data-testid="button-submit-intake"
                >
                  {submitting ? "Submitting…" : "Submit Questionnaire"}
                  {!submitting && <ArrowRight className="ml-2 w-4 h-4" />}
                </Button>
              )}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
