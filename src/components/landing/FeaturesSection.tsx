import { useState } from "react";
import {
  ShoppingCart, Tag, CreditCard, Truck, Package, Link2, BarChart3, Layout, Headphones, ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { ScrollReveal } from "@/components/ScrollReveal";

const buckets = [
  {
    label: "Control",
    features: [
      { icon: ShoppingCart, title: "Order Management", description: "Track, coordinate, and automate orders across vendors in real time." },
      { icon: Tag, title: "Pricing & Discounts", description: "Set tiered pricing, volume discounts, and promo rules that update automatically." },
      { icon: CreditCard, title: "Payment & Checkout", description: "Accept payments with integrated gateways and tax-compliant invoicing." },
    ],
  },
  {
    label: "Operations",
    features: [
      { icon: Truck, title: "Delivery & Shipping", description: "Automate fulfillment with multi-zone rules, tracking, and logistics integration." },
      { icon: Package, title: "Catalog & Vendor Management", description: "Centralize product data, manage thousands of SKUs, and onboard vendors easily." },
      { icon: Link2, title: "Integrations", description: "Connect ERP, accounting, and logistics tools through pre-built connectors." },
    ],
  },
  {
    label: "Growth",
    features: [
      { icon: BarChart3, title: "Analytics & Reporting", description: "Monitor KPIs with real-time dashboards and exportable reports." },
      { icon: Layout, title: "Storefront Builder", description: "Launch branded websites and mobile apps with themes or custom development." },
      { icon: Headphones, title: "Customer & Support Portal", description: "Give customers order tracking, notifications, and self-service tools." },
    ],
  },
];

const FeaturesSection = () => {
  const [active, setActive] = useState(0);

  return (
    <section id="features" className="section-padding section-alt">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Comprehensive <span className="text-gradient">Feature Set</span>
            </h2>
            <p className="mt-4 text-muted-foreground text-lg">
              Integrated modules that work together seamlessly, providing complete control over your operations.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div className="flex items-center justify-center gap-2 mb-10">
            {buckets.map((bucket, i) => (
              <button
                key={bucket.label}
                onClick={() => setActive(i)}
                className={cn(
                  "px-5 py-2 rounded-full text-sm font-semibold transition-all",
                  active === i
                    ? "gradient-brand text-primary-foreground shadow-card"
                    : "bg-muted text-muted-foreground hover:text-foreground"
                )}
              >
                {bucket.label}
              </button>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {buckets[active].features.map((feature) => (
              <div
                key={feature.title}
                className="bg-card rounded-xl border border-border p-6 hover:border-primary/30 hover:shadow-card-hover transition-all"
              >
                <div className="w-11 h-11 rounded-lg bg-accent flex items-center justify-center mb-4">
                  <feature.icon className="w-5 h-5 text-accent-foreground" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" className="text-base px-8 h-12">
              <Link to="/contact">
                Book a Live Demo
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            <p className="text-sm text-muted-foreground mt-3">See all modules in action — tailored to your business.</p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default FeaturesSection;
