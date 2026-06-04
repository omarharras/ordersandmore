import { Blocks, Layers, Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ScrollReveal, StaggerChildren } from "@/components/ScrollReveal";

const reasons = [
  { icon: Blocks, title: "Modular Architecture", description: "Pay for what you use. Start with the modules you need today and expand as you grow." },
  { icon: Layers, title: "Integrated Delivery & Storefront", description: "Logistics and customer-facing experiences are built-in—no separate systems to maintain." },
  { icon: Users, title: "Implementation Support & Guided Launch", description: "Our team works alongside yours from setup through go-live and beyond." },
];

const WhyUsSection = () => {
  return (
    <section id="why-us" className="section-padding section-alt">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Why <span className="text-gradient">Orders & More</span>?
            </h2>
          </div>
        </ScrollReveal>

        <StaggerChildren className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto" staggerDelay={120}>
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="bg-card rounded-xl p-6 shadow-card hover:shadow-card-hover transition-shadow"
            >
              <div className="w-11 h-11 rounded-lg bg-accent flex items-center justify-center mb-4">
                <reason.icon className="w-5 h-5 text-accent-foreground" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{reason.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </StaggerChildren>

        <ScrollReveal delay={300}>
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

export default WhyUsSection;
