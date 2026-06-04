import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { ScrollReveal } from "@/components/ScrollReveal";

const CtaSection = () => {
  return (
    <section className="section-padding">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="gradient-brand rounded-3xl px-8 py-16 md:px-16 md:py-20 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground max-w-2xl mx-auto">
              Ready to Unify Your Commerce Operations?
            </h2>
            <p className="mt-4 text-primary-foreground/80 text-lg max-w-xl mx-auto">
              Book a personalized demo and discover how Orders & More can address your specific business challenges.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild variant="secondary" size="lg" className="text-base px-8 h-12">
                <Link to="/contact">
                  Book a Live Demo
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="text-base px-8 h-12 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground bg-transparent"
              >
                <Link to="/contact">Talk to Sales</Link>
              </Button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default CtaSection;
