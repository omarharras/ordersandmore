import { Settings, Zap, BarChart3 } from "lucide-react";
import { ScrollReveal, StaggerChildren } from "@/components/ScrollReveal";

const outcomes = [
  { icon: Settings, title: "Operational Control", description: "Unified orders, pricing, and fulfillment workflows—managed from one place." },
  { icon: Zap, title: "Speed & Automation", description: "Fewer manual steps, fewer errors, and faster processing across your team." },
  { icon: BarChart3, title: "Visibility & Insights", description: "Real-time dashboards and reporting so you always know what's happening." },
];

const OutcomesSection = () => {
  return (
    <section className="section-padding">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              What You <span className="text-gradient">Get</span>
            </h2>
            <p className="mt-4 text-muted-foreground text-lg">
              Business outcomes that matter—not just features.
            </p>
          </div>
        </ScrollReveal>

        <StaggerChildren className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto" staggerDelay={150}>
          {outcomes.map((outcome) => (
            <div
              key={outcome.title}
              className="text-center p-8 rounded-2xl border border-border hover:border-primary/30 hover:shadow-card-hover transition-all"
            >
              <div className="w-14 h-14 rounded-xl gradient-brand flex items-center justify-center mx-auto mb-5">
                <outcome.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-bold text-foreground text-lg mb-2">{outcome.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{outcome.description}</p>
            </div>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
};

export default OutcomesSection;
