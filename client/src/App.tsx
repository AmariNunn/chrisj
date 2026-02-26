import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

import Home from "@/pages/Home";
import Experience from "@/pages/Experience";
import Services from "@/pages/Services";
import Memberships from "@/pages/Memberships";
import Conditions from "@/pages/Conditions";
import FAQ from "@/pages/FAQ";
import Booking from "@/pages/Booking";
import Reviews from "@/pages/Reviews";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/experience" component={Experience} />
      <Route path="/services" component={Services} />
      <Route path="/memberships" component={Memberships} />
      <Route path="/conditions" component={Conditions} />
      <Route path="/faq" component={FAQ} />
      <Route path="/booking" component={Booking} />
      <Route path="/reviews" component={Reviews} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
