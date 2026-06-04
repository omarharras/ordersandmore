import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";

import PainPointsSection from "@/components/landing/PainPointsSection";
import OutcomesSection from "@/components/landing/OutcomesSection";
import FeaturesSection from "@/components/landing/FeaturesSection";
import UseCasesSection from "@/components/landing/UseCasesSection";
import HowItWorksSection from "@/components/landing/HowItWorksSection";

import WhyUsSection from "@/components/landing/WhyUsSection";
import PricingSection from "@/components/landing/PricingSection";
import CtaSection from "@/components/landing/CtaSection";
import Footer from "@/components/landing/Footer";
import SEO from "@/components/SEO";

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Orders & More",
  url: "https://iken-om.lovable.app",
  description: "Unified e-commerce platform for wholesalers, distributors, and multi-branch retailers.",
  foundingDate: "2024",
  sameAs: [],
};

const webPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Orders & More — Unified E-Commerce Platform",
  description: "Centralize orders, catalog, pricing, shipping, and storefronts in one platform built for wholesalers, distributors, and multi-branch retailers.",
  url: "https://iken-om.lovable.app",
  isPartOf: { "@type": "WebSite", name: "Orders & More", url: "https://iken-om.lovable.app" },
};

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Orders & More — Unified E-Commerce Platform for Wholesalers & Retailers"
        description="Centralize orders, catalog, pricing, shipping, and storefronts in one platform built for wholesalers, distributors, and multi-branch retailers."
        canonical="/"
        jsonLd={[organizationJsonLd, webPageJsonLd]}
      />
      <Navbar />
      <HeroSection />
      
      <PainPointsSection />
      <OutcomesSection />
      <FeaturesSection />
      <UseCasesSection />
      <HowItWorksSection />
      
      <WhyUsSection />
      <PricingSection />
      <CtaSection />
      <Footer />
    </div>
  );
};

export default Index;
