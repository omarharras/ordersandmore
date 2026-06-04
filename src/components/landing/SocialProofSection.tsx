import { Quote, CheckCircle } from "lucide-react";
import { ScrollReveal, StaggerChildren } from "@/components/ScrollReveal";

const SocialProofSection = () => {
  return (
    <section className="section-padding">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Teams See <span className="text-gradient">Results Fast</span>
            </h2>
          </div>
        </ScrollReveal>

        <StaggerChildren className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto" staggerDelay={200}>
          {/* Testimonial */}
          <div className="bg-card rounded-2xl border border-border p-8 shadow-card flex flex-col justify-between">
            <div>
              <Quote className="w-8 h-8 text-primary/30 mb-4" />
              <blockquote className="text-foreground text-lg leading-relaxed font-medium">
                "We reduced operational overhead and finally got one view of orders and fulfillment."
              </blockquote>
            </div>
            <div className="mt-6 pt-6 border-t border-border">
              <p className="font-semibold text-foreground text-sm">Operations Manager</p>
              <p className="text-sm text-muted-foreground">Leading Distribution Company</p>
            </div>
          </div>

          {/* Mini case results */}
          <div className="bg-card rounded-2xl border border-border p-8 shadow-card">
            <h3 className="font-bold text-foreground mb-6">Key Results</h3>
            <div className="space-y-4">
              {[
                "Faster order processing across all channels",
                "Fewer fulfillment errors and returns",
                "Clear reporting for better decision-making",
                "Unified vendor and inventory management",
              ].map((result) => (
                <div key={result} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground leading-relaxed">{result}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-border">
              <blockquote className="text-sm text-foreground italic">
                "The implementation was smooth and our team was productive within weeks."
              </blockquote>
              <p className="text-xs text-muted-foreground mt-2">— IT Director, Multi-Branch Retailer</p>
            </div>
          </div>
        </StaggerChildren>
      </div>
    </section>
  );
};

export default SocialProofSection;
