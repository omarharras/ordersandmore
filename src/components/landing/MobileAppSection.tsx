import mobileAppShowcase from "@/assets/mobile-app-showcase.png";
import { ScrollReveal } from "@/components/ScrollReveal";

const MobileAppSection = () => {
  return (
    <section id="mobile-app" className="section-padding">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-foreground md:text-4xl">
              A Mobile App Experience for <span className="text-gradient">Every Order</span>
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Give customers and teams a clean mobile experience for browsing products, tracking orders, and managing
              daily operations.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={220}>
          <div className="mx-auto mt-12 max-w-6xl">
            <img
              src={mobileAppShowcase}
              alt="Orders & More mobile app showcase with storefront, order management, delivery tracking, catalog, and analytics screens"
              className="w-full rounded-2xl shadow-card"
            />
            <p className="mt-4 text-center text-sm text-muted-foreground">
              Storefront, order management, delivery tracking, catalog, and analytics workflows in one mobile experience.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default MobileAppSection;
