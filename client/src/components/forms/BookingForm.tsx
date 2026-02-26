import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { z } from "zod";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(7, "Please enter a valid phone number"),
  service: z.string().min(1, "Please select a service"),
  notes: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

export function BookingForm() {
  const [submitted, setSubmitted] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      service: "",
      notes: "",
    },
  });

  function onSubmit(values: FormValues) {
    const subject = encodeURIComponent(`Appointment Request – ${values.service}`);
    const body = encodeURIComponent(
      `Name: ${values.name}\nEmail: ${values.email}\nPhone: ${values.phone}\nService: ${values.service}\nNotes: ${values.notes || "None"}`
    );
    window.location.href = `mailto:info@jordanwellnessxp.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-border flex flex-col items-center justify-center text-center min-h-[300px] gap-4">
        <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center">
          <CheckCircle2 className="text-accent" size={36} />
        </div>
        <h3 className="font-display font-bold text-2xl text-primary">Request Sent!</h3>
        <p className="text-muted-foreground max-w-sm">
          Your appointment request has been sent to our team. We'll reach out to confirm your visit shortly.
        </p>
        <Button
          variant="outline"
          className="rounded-xl mt-2"
          onClick={() => { setSubmitted(false); form.reset(); }}
        >
          Submit Another Request
        </Button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-border">
      <div className="mb-8">
        <h3 className="font-display font-bold text-2xl text-primary mb-2">Book Your Visit</h3>
        <p className="text-muted-foreground">Select a service and we'll be in touch to confirm your appointment.</p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input placeholder="John Doe" className="rounded-xl h-12 bg-muted/30 border-transparent focus:bg-white focus:border-primary/20 transition-all" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email Address</FormLabel>
                  <FormControl>
                    <Input placeholder="john@example.com" type="email" className="rounded-xl h-12 bg-muted/30 border-transparent focus:bg-white focus:border-primary/20 transition-all" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl>
                    <Input placeholder="(615) 000-0000" className="rounded-xl h-12 bg-muted/30 border-transparent focus:bg-white focus:border-primary/20 transition-all" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="service"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Service</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="rounded-xl h-12 bg-muted/30 border-transparent focus:bg-white focus:border-primary/20 transition-all">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="Chiropractic Care">Chiropractic Care</SelectItem>
                      <SelectItem value="Fitness Training">Fitness Training</SelectItem>
                      <SelectItem value="Happy Hour Wellness">Happy Hour Wellness Experience</SelectItem>
                      <SelectItem value="Essential ChiroFitness">Essential ChiroFitness Experience</SelectItem>
                      <SelectItem value="Body Sculpting">Enhanced Body Sculpting / Fat Freezing</SelectItem>
                      <SelectItem value="Cryotherapy">Elevated Targeted Cryotherapy</SelectItem>
                      <SelectItem value="Elite VIP">Elite VIP Experience</SelectItem>
                      <SelectItem value="New Patient Exam">New Patient Exam</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="notes"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Notes (Optional)</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Tell us about your goals or any concerns..."
                    className="rounded-xl min-h-[100px] bg-muted/30 border-transparent focus:bg-white focus:border-primary/20 transition-all resize-none"
                    {...field}
                    value={field.value ?? ""}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            size="lg"
            className="w-full h-14 rounded-xl text-lg bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20"
            data-testid="button-submit-booking"
          >
            Request Appointment
          </Button>
        </form>
      </Form>
    </div>
  );
}
