import { DollarSign, Eye, TrendingDown, Puzzle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ScrollReveal, StaggerChildren } from "@/components/ScrollReveal";

const painPoints = [
  {
    icon: DollarSign,
    title: "Paying for Tools That Don't Connect",
    description: "Multiple subscriptions, add-ons, and integration fees stack up—without delivering a unified experience.",
  },
  {
    icon: Eye,
    title: "No Single Source of Truth",
    description: "Conflicting data across disconnected systems leads to errors, delays, and missed opportunities.",
  },
  {
    icon: TrendingDown,
    title: "Slow Operations & Manual Work",
    description: "Copy-paste workflows, spreadsheets, and manual approvals slow your team down every day.",
  },
  {
    icon: Puzzle,
    title: "Integration Breaks & Support Headaches",
    description: "Custom APIs and middleware create technical debt, fragile connections, and constant maintenance.",
  },
];

const PainPointsSection = () => {
  return (
    <section className="section-padding section-alt">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Fragmented Tools <span className="text-gradient">Hold You Back</span>
            </h2>
            <p className="mt-4 text-muted-foreground text-lg">
              Managing commerce across disconnected systems costs you time, money, and control.
            </p>
          </div>
        </ScrollReveal>

        <StaggerChildren className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto" staggerDelay={120}>
          {painPoints.map((point) => (
            <div
              key={point.title}
              className="bg-card rounded-xl p-6 shadow-card hover:shadow-card-hover transition-shadow"
            >
              <div className="w-11 h-11 rounded-lg bg-accent flex items-center justify-center mb-4">
                <point.icon className="w-5 h-5 text-accent-foreground" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{point.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{point.description}</p>
            </div>
          ))}
        </StaggerChildren>

        <ScrollReveal delay={300}>
          <p className="text-center mt-10 text-muted-foreground max-w-xl mx-auto">
            Orders & More replaces scattered tools with one operational backbone.
          </p>

          <div className="text-center mt-6">
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

export default PainPointsSection;
