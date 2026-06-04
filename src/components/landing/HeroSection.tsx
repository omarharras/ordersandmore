import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-dashboard.png";
import { ScrollReveal } from "@/components/ScrollReveal";

const HeroSection = () => {
  return (
    <section className="pt-28 pb-16 md:pt-36 md:pb-24">
      <div className="container mx-auto px-4 text-center">
        <ScrollReveal>
          <div className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-1.5 mb-6">
            <span className="text-xs font-semibold text-accent-foreground">Built for Wholesalers, Distributors & Multi-Branch Retailers</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-foreground leading-tight max-w-4xl mx-auto">
            Unify Your{" "}
            <span className="text-gradient">E-Commerce Operations</span>{" "}
            in One System
          </h1>

          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Centralize orders, catalog, pricing, shipping, and storefronts into one platform—so your team moves faster with fewer errors.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="text-base px-8 h-12">
              <Link to="/contact">
                Book a Live Demo
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-base px-8 h-12">
              <a href="#how-it-works">See How It Works</a>
            </Button>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={400}>
          <div className="mt-16 max-w-5xl mx-auto">
            <img
              src={heroImage}
              alt="Orders & More unified commerce platform — dashboard, orders, pricing, inventory, delivery, and analytics panels connected in one system"
              className="w-full rounded-2xl shadow-card"
            />
            <p className="mt-4 text-sm text-muted-foreground">
              Real-time visibility across orders, pricing, fulfillment, and storefronts.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default HeroSection;
