import { Building2 } from "lucide-react";
import { ScrollReveal, StaggerChildren } from "@/components/ScrollReveal";

const logos = ["RetailCo", "WholeSale+", "DistributeX", "MegaMart", "TradeHub"];

const TrustBarSection = () => {
  return (
    <section className="py-12 border-y border-border bg-muted/30">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <p className="text-center text-sm font-medium text-muted-foreground mb-8">
            Trusted by teams in retail, wholesale, and distribution
          </p>
        </ScrollReveal>

        <StaggerChildren className="flex flex-wrap items-center justify-center gap-8 md:gap-14 mb-10" staggerDelay={80}>
          {logos.map((name) => (
            <div key={name} className="flex items-center gap-2 text-muted-foreground/50">
              <Building2 className="w-5 h-5" />
              <span className="font-semibold text-sm tracking-wide">{name}</span>
            </div>
          ))}
        </StaggerChildren>

        <StaggerChildren className="flex flex-wrap items-center justify-center gap-6 md:gap-10 text-sm text-muted-foreground" staggerDelay={100} baseDelay={200}>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            Go live in 4–6 weeks
          </span>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            Reduce manual ops
          </span>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            Centralize workflows
          </span>
        </StaggerChildren>
      </div>
    </section>
  );
};

export default TrustBarSection;
