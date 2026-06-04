import { UserPlus, Database, ShoppingBag, Truck, Monitor, BarChart, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ScrollReveal, StaggerChildren } from "@/components/ScrollReveal";

const steps = [
  { icon: UserPlus, title: "Onboarding", description: "Vendor & buyer accounts set up with guided configuration." },
  { icon: Database, title: "Catalog Setup", description: "Bulk upload products with pricing, images, and inventory." },
  { icon: ShoppingBag, title: "Orders & Checkout", description: "Configure order workflows, payments, and checkout." },
  { icon: Truck, title: "Shipping & Delivery", description: "Integrate logistics and set up fulfillment rules." },
  { icon: Monitor, title: "Storefront Launch", description: "Brand your website and mobile apps, then go live." },
  { icon: BarChart, title: "Analytics & Growth", description: "Monitor performance and scale with real-time insights." },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="section-padding section-alt">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Six Steps to <span className="text-gradient">Success</span>
            </h2>
            <p className="mt-4 text-muted-foreground text-lg">
              Most teams go live in 4–6 weeks with guided onboarding.
            </p>
          </div>
        </ScrollReveal>

        <StaggerChildren className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto" staggerDelay={100}>
          {steps.map((step, index) => (
            <div key={step.title} className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full gradient-brand flex items-center justify-center text-primary-foreground font-bold text-sm">
                  {String(index + 1).padStart(2, "0")}
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </StaggerChildren>

        <ScrollReveal delay={400}>
          <div className="text-center mt-12">
            <Button asChild size="lg" className="text-base px-8 h-12">
              <Link to="/contact">
                Book a Live Demo
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default HowItWorksSection;
