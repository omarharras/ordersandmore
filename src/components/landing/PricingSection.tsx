import { ArrowRight, Check } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ScrollReveal, StaggerChildren } from "@/components/ScrollReveal";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "Basic Plan",
    description: "Perfect for getting started - launch your online store with essential features at a low cost.",
    price: "999",
    period: "/ month",
    cta: "Book a Demo",
    highlighted: false,
    features: [
      "Professional online store setup",
      "Unlimited products and orders",
      "SSL certificate",
      "Free subdomain in Orders and More",
      "Customizable themes",
      "Wishlist for users",
    ],
  },
  {
    name: "Professional Plan",
    description: "Ideal for growing brands - unlock advanced tools to boost sales and streamline operations.",
    price: "Contact support",
    period: "",
    cta: "Contact Support",
    highlighted: true,
    features: [
      "Stock tracking",
      "Store admin dashboard",
      "Device compatibility",
      "Multi-language support",
      "Preview edits before publishing",
      "Cash on delivery",
    ],
  },
  {
    name: "Enterprise Plan",
    description: "For serious sellers - enjoy full access, integrations, and premium features for scaling your business.",
    price: "Contact support",
    period: "",
    cta: "Contact Support",
    highlighted: false,
    features: [
      "Advanced analytics and reporting",
      "SMS integration",
      "Custom payment gateways",
      "Adding custom pages",
      "Product variations",
      "Integration with couriers",
    ],
  },
];

const PricingSection = () => {
  return (
    <section id="pricing" className="section-padding">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Pricing <span className="text-gradient">Options</span>
            </h2>
            <p className="mt-4 text-muted-foreground text-lg">
              Choose the plan that matches your current operation, then expand as your commerce workflows grow.
            </p>
          </div>
        </ScrollReveal>

        <StaggerChildren className="grid gap-6 md:grid-cols-3 max-w-6xl mx-auto" staggerDelay={120}>
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={cn(
                "relative flex h-full flex-col rounded-xl border bg-card p-6 shadow-card transition-all hover:shadow-card-hover",
                plan.highlighted ? "border-primary/40 ring-1 ring-primary/20" : "border-border"
              )}
            >
              {plan.highlighted && (
                <div className="absolute right-6 top-6 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">
                  Recommended
                </div>
              )}

              <div className="pr-24 md:pr-0 lg:pr-24">
                <h3 className="text-xl font-semibold text-foreground">{plan.name}</h3>
                <p className="mt-3 min-h-16 text-sm leading-relaxed text-muted-foreground">{plan.description}</p>
              </div>

              <div className="mt-8 flex items-baseline gap-2">
                <span
                  className={cn(
                    "font-bold tracking-tight text-foreground",
                    plan.period ? "text-4xl" : "text-3xl"
                  )}
                >
                  {plan.price}
                </span>
                {plan.period && <span className="text-sm font-medium text-muted-foreground">{plan.period}</span>}
              </div>

              <ul className="mt-8 flex-1 space-y-3 text-sm text-muted-foreground">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex gap-3">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent-foreground" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                asChild
                size="lg"
                variant={plan.highlighted ? "default" : "outline"}
                className="mt-8 h-12 w-full text-base"
              >
                <Link to="/contact">
                  {plan.cta}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
};

export default PricingSection;
