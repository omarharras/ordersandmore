import { ArrowRight, Check } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ScrollReveal, StaggerChildren } from "@/components/ScrollReveal";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "Starter",
    description: "For teams moving from manual order handling to one connected workspace.",
    price: "999",
    period: "/ month",
    cta: "Book a Demo",
    highlighted: false,
    features: ["Core order management", "Catalog and pricing tools", "Basic storefront setup", "Email support"],
  },
  {
    name: "Growth",
    description: "For growing operations that need more automation, reporting, and support.",
    price: "Contact support",
    period: "",
    cta: "Contact Support",
    highlighted: true,
    features: ["Everything in Starter", "Advanced discounts and rules", "Delivery workflow tools", "Analytics dashboard"],
  },
  {
    name: "Enterprise",
    description: "For multi-branch, high-volume, or custom implementation requirements.",
    price: "Contact support",
    period: "",
    cta: "Contact Support",
    highlighted: false,
    features: ["Custom modules and integrations", "Guided launch planning", "Priority implementation support", "Dedicated success touchpoints"],
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

              <ul className="mt-8 space-y-3 text-sm text-muted-foreground">
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
