import { useEffect, useState } from "react";
import { Link } from "wouter";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, ChevronRight, ChevronLeft, ArrowRight } from "lucide-react";

// ─── UPDATE THIS with your Formspree form ID ─────────────────────────────────
// Sign up free at formspree.io → New Form → copy the ID from the endpoint URL
// e.g.  https://formspree.io/f/xpwzgkln  →  FORM_ID = "xpwzgkln"
const FORMSPREE_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID";

const STEPS = [
  "Personal Info",
  "Visit Reason",
  "Health History",
  "Lifestyle & Goals",
  "Review & Submit",
];

type FormData = {
  fullName: string;
  dateOfBirth: string;
  gender: string;
  phone: string;
  email: string;
  address: string;
  emergencyContactName: string;
  emergencyContactPhone: string;
  visitReason: string;
  chiefComplaint: string;
  painLevel: string;
  symptomDuration: string;
  makesBetter: string;
  makesWorse: string;
  previousChiropractic: string;
  currentMedications: string;
  previousSurgeriesInjuries: string;
  medicalConditions: string[];
  allergies: string;
  occupation: string;
  exerciseLevel: string;
  sleepQuality: string;
  stressLevel: string;
  healthGoals: string;
  heardAboutUs: string;
  consentAgreed: boolean;
  consentName: string;
};

const INITIAL: FormData = {
  fullName: "",
  dateOfBirth: "",
  gender: "",
  phone: "",
  email: "",
  address: "",
  emergencyContactName: "",
  emergencyContactPhone: "",
  visitReason: "",
  chiefComplaint: "",
  painLevel: "",
  symptomDuration: "",
  makesBetter: "",
  makesWorse: "",
  previousChiropractic: "",
  currentMedications: "",
  previousSurgeriesInjuries: "",
  medicalConditions: [],
  allergies: "",
  occupation: "",
  exerciseLevel: "",
  sleepQuality: "",
  stressLevel: "",
  healthGoals: "",
  heardAboutUs: "",
  consentAgreed: false,
  consentName: "",
};

const CONDITIONS = [
  "Arthritis", "Diabetes", "Heart Disease", "High Blood Pressure",
  "Osteoporosis", "Cancer (current/history)", "Herniated Disc",
  "Sciatica", "Anxiety / Depression", "Fibromyalgia", "None of the above",
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

export default function IntakeForm() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState<FormData>(INITIAL);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [step]);

  function set(field: keyof FormData, value: string | boolean | string[]) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  function toggleCondition(cond: string) {
    setForm((prev) => {
      const list = prev.medicalConditions;
      return {
        ...prev,
        medicalConditions: list.includes(cond)
          ? list.filter((c) => c !== cond)
          : [...list, cond],
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
      ...form,
      medicalConditions: form.medicalConditions.join(", ") || "None selected",
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
        {/* Page Hero */}
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

        {/* Progress Bar */}
        <div className="bg-white border-b border-border sticky top-0 z-20 shadow-sm">
          <div className="container mx-auto px-4 md:px-6 max-w-3xl py-4">
            <div className="flex items-center justify-between mb-3">
              {STEPS.map((label, i) => (
                <div key={i} className="flex-1 flex flex-col items-center gap-1">
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-colors ${
                      i < step
                        ? "bg-accent text-white"
                        : i === step
                        ? "bg-primary text-white"
                        : "bg-muted text-muted-foreground"
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
                style={{ width: `${((step) / (STEPS.length - 1)) * 100}%` }}
              />
            </div>
          </div>
        </div>

        {/* Form Body */}
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
                {/* Step 1: Personal Information */}
                {step === 0 && (
                  <FieldGroup>
                    <div>
                      <h2 className="font-display font-bold text-2xl text-primary mb-1">Personal Information</h2>
                      <p className="text-muted-foreground text-sm">Tell us a bit about yourself.</p>
                    </div>
                    <Row>
                      <div>
                        <label className={labelClass}>Full Name *</label>
                        <input data-testid="input-full-name" className={inputClass} placeholder="Jane Doe" value={form.fullName} onChange={e => set("fullName", e.target.value)} />
                      </div>
                      <div>
                        <label className={labelClass}>Date of Birth *</label>
                        <input data-testid="input-dob" type="date" className={inputClass} value={form.dateOfBirth} onChange={e => set("dateOfBirth", e.target.value)} />
                      </div>
                    </Row>
                    <Row>
                      <div>
                        <label className={labelClass}>Gender *</label>
                        <select data-testid="select-gender" className={selectClass} value={form.gender} onChange={e => set("gender", e.target.value)}>
                          <option value="">Select...</option>
                          <option>Female</option>
                          <option>Male</option>
                          <option>Non-binary</option>
                          <option>Prefer not to say</option>
                        </select>
                      </div>
                      <div>
                        <label className={labelClass}>Phone Number *</label>
                        <input data-testid="input-phone" className={inputClass} placeholder="(615) 000-0000" value={form.phone} onChange={e => set("phone", e.target.value)} />
                      </div>
                    </Row>
                    <div>
                      <label className={labelClass}>Email Address *</label>
                      <input data-testid="input-email" type="email" className={inputClass} placeholder="you@example.com" value={form.email} onChange={e => set("email", e.target.value)} />
                    </div>
                    <div>
                      <label className={labelClass}>Home Address</label>
                      <input data-testid="input-address" className={inputClass} placeholder="123 Main St, Nashville, TN 37201" value={form.address} onChange={e => set("address", e.target.value)} />
                    </div>
                    <div className="pt-2 border-t border-border/50">
                      <p className="text-sm font-semibold text-primary mb-4">Emergency Contact</p>
                      <Row>
                        <div>
                          <label className={labelClass}>Name</label>
                          <input data-testid="input-emergency-name" className={inputClass} placeholder="Contact name" value={form.emergencyContactName} onChange={e => set("emergencyContactName", e.target.value)} />
                        </div>
                        <div>
                          <label className={labelClass}>Phone</label>
                          <input data-testid="input-emergency-phone" className={inputClass} placeholder="(615) 000-0000" value={form.emergencyContactPhone} onChange={e => set("emergencyContactPhone", e.target.value)} />
                        </div>
                      </Row>
                    </div>
                  </FieldGroup>
                )}

                {/* Step 2: Reason for Visit */}
                {step === 1 && (
                  <FieldGroup>
                    <div>
                      <h2 className="font-display font-bold text-2xl text-primary mb-1">Reason for Visit</h2>
                      <p className="text-muted-foreground text-sm">Help us understand why you're coming in.</p>
                    </div>
                    <div>
                      <label className={labelClass}>Primary Reason for Visit *</label>
                      <select data-testid="select-visit-reason" className={selectClass} value={form.visitReason} onChange={e => set("visitReason", e.target.value)}>
                        <option value="">Select a service...</option>
                        <option>Chiropractic Care</option>
                        <option>Fitness Training / ChiroFitness</option>
                        <option>Body Sculpting / Fat Freezing</option>
                        <option>Targeted Cryotherapy</option>
                        <option>Relaxation Therapy (Happy Hour)</option>
                        <option>Membership Inquiry</option>
                        <option>General Wellness / Multiple Services</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <div>
                      <label className={labelClass}>Chief Complaint / Health Concern *</label>
                      <textarea data-testid="textarea-complaint" className={`${inputClass} min-h-[100px] resize-none`} placeholder="Describe your primary concern or what you'd like to address..." value={form.chiefComplaint} onChange={e => set("chiefComplaint", e.target.value)} />
                    </div>
                    <Row>
                      <div>
                        <label className={labelClass}>Pain Level (if applicable)</label>
                        <select data-testid="select-pain" className={selectClass} value={form.painLevel} onChange={e => set("painLevel", e.target.value)}>
                          <option value="">Select...</option>
                          {[0,1,2,3,4,5,6,7,8,9,10].map(n => (
                            <option key={n}>{n} – {n === 0 ? "No pain" : n <= 3 ? "Mild" : n <= 6 ? "Moderate" : "Severe"}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className={labelClass}>How Long Have You Had This?</label>
                        <select data-testid="select-duration" className={selectClass} value={form.symptomDuration} onChange={e => set("symptomDuration", e.target.value)}>
                          <option value="">Select...</option>
                          <option>Less than 1 week</option>
                          <option>1–4 weeks</option>
                          <option>1–3 months</option>
                          <option>3–6 months</option>
                          <option>6 months – 1 year</option>
                          <option>More than 1 year</option>
                          <option>Not applicable</option>
                        </select>
                      </div>
                    </Row>
                    <Row>
                      <div>
                        <label className={labelClass}>What Makes It Better?</label>
                        <input data-testid="input-better" className={inputClass} placeholder="e.g. Rest, heat, stretching..." value={form.makesBetter} onChange={e => set("makesBetter", e.target.value)} />
                      </div>
                      <div>
                        <label className={labelClass}>What Makes It Worse?</label>
                        <input data-testid="input-worse" className={inputClass} placeholder="e.g. Sitting, cold, activity..." value={form.makesWorse} onChange={e => set("makesWorse", e.target.value)} />
                      </div>
                    </Row>
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
                      <label className={labelClass}>Have you received chiropractic care before?</label>
                      <select data-testid="select-chiro-history" className={selectClass} value={form.previousChiropractic} onChange={e => set("previousChiropractic", e.target.value)}>
                        <option value="">Select...</option>
                        <option>Yes</option>
                        <option>No</option>
                      </select>
                    </div>
                    <div>
                      <label className={labelClass}>Current Medications</label>
                      <textarea data-testid="textarea-medications" className={`${inputClass} min-h-[80px] resize-none`} placeholder="List any current medications or supplements (or type 'None')..." value={form.currentMedications} onChange={e => set("currentMedications", e.target.value)} />
                    </div>
                    <div>
                      <label className={labelClass}>Previous Surgeries or Injuries</label>
                      <textarea data-testid="textarea-surgeries" className={`${inputClass} min-h-[80px] resize-none`} placeholder="Include year and area of the body if applicable (or type 'None')..." value={form.previousSurgeriesInjuries} onChange={e => set("previousSurgeriesInjuries", e.target.value)} />
                    </div>
                    <div>
                      <label className={labelClass}>Existing Medical Conditions (check all that apply)</label>
                      <div className="grid sm:grid-cols-2 gap-2 mt-2">
                        {CONDITIONS.map((cond) => (
                          <label key={cond} className="flex items-center gap-3 cursor-pointer group" data-testid={`checkbox-condition-${cond.replace(/\s+/g, "-").toLowerCase()}`}>
                            <div className={`w-5 h-5 rounded border flex items-center justify-center shrink-0 transition-colors ${form.medicalConditions.includes(cond) ? "bg-accent border-accent" : "border-border group-hover:border-accent/50"}`}>
                              {form.medicalConditions.includes(cond) && <CheckCircle2 className="w-3 h-3 text-white" />}
                            </div>
                            <span className="text-sm text-foreground/80">{cond}</span>
                            <input type="checkbox" className="sr-only" checked={form.medicalConditions.includes(cond)} onChange={() => toggleCondition(cond)} />
                          </label>
                        ))}
                      </div>
                    </div>
                    <div>
                      <label className={labelClass}>Known Allergies</label>
                      <input data-testid="input-allergies" className={inputClass} placeholder="e.g. Penicillin, latex, none..." value={form.allergies} onChange={e => set("allergies", e.target.value)} />
                    </div>
                  </FieldGroup>
                )}

                {/* Step 4: Lifestyle & Goals */}
                {step === 3 && (
                  <FieldGroup>
                    <div>
                      <h2 className="font-display font-bold text-2xl text-primary mb-1">Lifestyle & Goals</h2>
                      <p className="text-muted-foreground text-sm">Understanding your lifestyle helps us build the right plan for you.</p>
                    </div>
                    <div>
                      <label className={labelClass}>Occupation / Type of Work</label>
                      <input data-testid="input-occupation" className={inputClass} placeholder="e.g. Nurse, teacher, office worker, contractor..." value={form.occupation} onChange={e => set("occupation", e.target.value)} />
                    </div>
                    <Row>
                      <div>
                        <label className={labelClass}>Exercise Level</label>
                        <select data-testid="select-exercise" className={selectClass} value={form.exerciseLevel} onChange={e => set("exerciseLevel", e.target.value)}>
                          <option value="">Select...</option>
                          <option>Sedentary (little to no exercise)</option>
                          <option>Light (1–2 days/week)</option>
                          <option>Moderate (3–4 days/week)</option>
                          <option>Active (5+ days/week)</option>
                        </select>
                      </div>
                      <div>
                        <label className={labelClass}>Sleep Quality</label>
                        <select data-testid="select-sleep" className={selectClass} value={form.sleepQuality} onChange={e => set("sleepQuality", e.target.value)}>
                          <option value="">Select...</option>
                          <option>Poor</option>
                          <option>Fair</option>
                          <option>Good</option>
                          <option>Excellent</option>
                        </select>
                      </div>
                    </Row>
                    <div>
                      <label className={labelClass}>Current Stress Level</label>
                      <select data-testid="select-stress" className={selectClass} value={form.stressLevel} onChange={e => set("stressLevel", e.target.value)}>
                        <option value="">Select...</option>
                        <option>Low</option>
                        <option>Moderate</option>
                        <option>High</option>
                        <option>Very High</option>
                      </select>
                    </div>
                    <div>
                      <label className={labelClass}>Your Health Goals</label>
                      <textarea data-testid="textarea-goals" className={`${inputClass} min-h-[100px] resize-none`} placeholder="What are you hoping to achieve through your care at Jordan Wellness Experience?" value={form.healthGoals} onChange={e => set("healthGoals", e.target.value)} />
                    </div>
                    <div>
                      <label className={labelClass}>How Did You Hear About Us?</label>
                      <select data-testid="select-heard" className={selectClass} value={form.heardAboutUs} onChange={e => set("heardAboutUs", e.target.value)}>
                        <option value="">Select...</option>
                        <option>Google Search</option>
                        <option>Instagram</option>
                        <option>Friend or Family Referral</option>
                        <option>Doctor Referral</option>
                        <option>Flyer / In-person</option>
                        <option>Other</option>
                      </select>
                    </div>
                  </FieldGroup>
                )}

                {/* Step 5: Review & Consent */}
                {step === 4 && (
                  <FieldGroup>
                    <div>
                      <h2 className="font-display font-bold text-2xl text-primary mb-1">Review & Consent</h2>
                      <p className="text-muted-foreground text-sm">Please review your submission and sign your consent below.</p>
                    </div>

                    <div className="bg-secondary/30 rounded-lg p-5 space-y-3 text-sm">
                      <p><span className="font-semibold text-primary">Name:</span> {form.fullName || "—"}</p>
                      <p><span className="font-semibold text-primary">Date of Birth:</span> {form.dateOfBirth || "—"}</p>
                      <p><span className="font-semibold text-primary">Phone:</span> {form.phone || "—"}</p>
                      <p><span className="font-semibold text-primary">Email:</span> {form.email || "—"}</p>
                      <p><span className="font-semibold text-primary">Visit Reason:</span> {form.visitReason || "—"}</p>
                      <p><span className="font-semibold text-primary">Chief Complaint:</span> {form.chiefComplaint || "—"}</p>
                      <p><span className="font-semibold text-primary">Conditions:</span> {form.medicalConditions.length ? form.medicalConditions.join(", ") : "None selected"}</p>
                      <p><span className="font-semibold text-primary">Health Goals:</span> {form.healthGoals || "—"}</p>
                    </div>

                    <div className="bg-primary/5 border border-primary/15 rounded-lg p-5 text-sm text-foreground/80 leading-relaxed space-y-3">
                      <p className="font-semibold text-primary text-base">Consent to Care</p>
                      <p>
                        I voluntarily consent to chiropractic evaluation, treatment, and wellness services provided by Jordan Wellness Experience. I understand that results vary by individual and that I may withdraw consent at any time. The information I have provided is accurate to the best of my knowledge.
                      </p>
                      <p>
                        I authorize Jordan Wellness Experience to use this information to coordinate my personalized care plan.
                      </p>
                    </div>

                    <div>
                      <label className={labelClass}>Electronic Signature (Type Full Name) *</label>
                      <input data-testid="input-consent-name" className={inputClass} placeholder="Type your full name to sign" value={form.consentName} onChange={e => set("consentName", e.target.value)} />
                    </div>

                    <label className="flex items-start gap-3 cursor-pointer" data-testid="checkbox-consent">
                      <div
                        className={`mt-0.5 w-5 h-5 rounded border flex items-center justify-center shrink-0 transition-colors ${form.consentAgreed ? "bg-accent border-accent" : "border-border hover:border-accent/50"}`}
                        onClick={() => set("consentAgreed", !form.consentAgreed)}
                      >
                        {form.consentAgreed && <CheckCircle2 className="w-3 h-3 text-white" />}
                      </div>
                      <span className="text-sm text-foreground/80 leading-relaxed">
                        I have read and agree to the consent to care statement above. I confirm that the information provided is accurate.
                      </span>
                    </label>

                    {error && (
                      <p className="text-red-600 text-sm font-medium">{error}</p>
                    )}
                  </FieldGroup>
                )}
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
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
