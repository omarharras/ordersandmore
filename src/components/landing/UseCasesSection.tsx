import { Warehouse, Store, Globe, Layers } from "lucide-react";
import { ScrollReveal, StaggerChildren } from "@/components/ScrollReveal";

const useCases = [
  { icon: Warehouse, title: "Wholesalers & Distributors", description: "Tiered pricing, bulk ordering, multi-warehouse shipping, and vendor coordination in one system." },
  { icon: Store, title: "Multi-Branch Retailers", description: "Centralized catalog, branch-level pricing, unified inventory, and consolidated reporting." },
  { icon: Globe, title: "Marketplace Operators", description: "Multi-vendor onboarding, commission management, and shared logistics infrastructure." },
  { icon: Layers, title: "B2B Brands with Complex Pricing", description: "Customer-specific pricing, approval workflows, repeat ordering, and account-level discounts." },
];

const UseCasesSection = () => {
  return (
    <section id="use-cases" className="section-padding">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Built <span className="text-gradient">For</span>
            </h2>
            <p className="mt-4 text-muted-foreground text-lg">
              Purpose-built for businesses that need operational control at scale.
            </p>
          </div>
        </ScrollReveal>

        <StaggerChildren className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto" staggerDelay={120}>
          {useCases.map((uc) => (
            <div
              key={uc.title}
              className="rounded-xl border border-border p-6 hover:border-primary/30 hover:shadow-card-hover transition-all"
            >
              <div className="w-11 h-11 rounded-lg gradient-brand flex items-center justify-center mb-4">
                <uc.icon className="w-5 h-5 text-primary-foreground" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{uc.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{uc.description}</p>
            </div>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
};

export default UseCasesSection;
