import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

import { ArrowLeft, CheckCircle, Video, Settings, MessageSquare, CalendarCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import omLogo from "@/assets/om-logo.svg";
import PhoneInput, { isValidPhoneNumber, type Country } from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { supabase } from "@/integrations/supabase/client";
import { ScrollReveal, StaggerChildren } from "@/components/ScrollReveal";
import SEO from "@/components/SEO";

const whatYouGet = [
  { icon: Video, text: "Live walkthrough tailored to your workflow" },
  { icon: Settings, text: "Recommendations for setup & rollout" },
  { icon: MessageSquare, text: "Q&A with a product expert" },
  { icon: CalendarCheck, text: "Implementation timeline and next steps" },
];

const ContactPage = () => {
  const { toast } = useToast();
  
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [phone, setPhone] = useState<string | undefined>("");
  const [defaultCountry, setDefaultCountry] = useState<Country>("EG");
  const [form, setForm] = useState({
    fullName: "",
    companyName: "",
    jobTitle: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    fetch("https://ipapi.co/json/")
      .then((res) => res.json())
      .then((data) => {
        if (data?.country_code) {
          setDefaultCountry(data.country_code as Country);
        }
      })
      .catch(() => {});
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.fullName.trim() || !form.companyName.trim() || !form.email.trim()) {
      toast({ title: "Please fill in all required fields.", variant: "destructive" });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email.trim())) {
      toast({ title: "Please enter a valid email address.", variant: "destructive" });
      return;
    }

    if (phone && !isValidPhoneNumber(phone)) {
      toast({ title: "Please enter a valid phone number.", variant: "destructive" });
      return;
    }

    setSubmitting(true);
    const payload = {
      full_name: form.fullName.trim(),
      company_name: form.companyName.trim(),
      email: form.email.trim(),
      job_title: form.jobTitle.trim() || null,
      phone: phone || null,
      message: form.message.trim() || null,
    };
    try {
      const { error } = await supabase.from("demo_requests").insert(payload);
      if (error) throw error;

      // Fire-and-forget email notification
      supabase.functions.invoke("notify-demo-request", { body: payload }).catch(console.error);

      setSubmitted(true);
    } catch (err) {
      toast({ title: "Something went wrong. Please try again.", variant: "destructive" });
    } finally {
      setSubmitting(false);
    }
  };

    setAgreed: undefined; // removed
  const handleReset = () => {
    setSubmitted(false);
    setForm({ fullName: "", companyName: "", jobTitle: "", email: "", message: "" });
    setPhone("");
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Book a Live Demo — Orders & More"
        description="Schedule a personalized demo of Orders & More. See how our unified platform streamlines orders, pricing, shipping, and storefronts for your business."
        canonical="/contact"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: "Book a Live Demo",
          description: "Schedule a personalized demo of Orders & More.",
          url: "https://iken-om.lovable.app/contact",
          mainEntity: {
            "@type": "Organization",
            name: "Orders & More",
            url: "https://iken-om.lovable.app",
          },
        }}
      />
      {/* Navbar */}
      <nav className="border-b border-border bg-background/80 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto flex items-center justify-between h-16 px-4">
          <Link to="/" className="flex items-center gap-2">
            <img src={omLogo} alt="Orders and More" className="w-8 h-8 rounded-lg" />
            <span className="font-bold text-lg text-foreground">Orders & More</span>
          </Link>
          <Link to="/" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </nav>

      <section className="container mx-auto px-4 py-12 md:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 max-w-6xl mx-auto items-start">
          {/* Left — Content */}
          <div className="space-y-10">
            <ScrollReveal>
              <div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground leading-tight">
                  Book a{" "}
                  <span className="text-gradient">Live Demo</span>
                </h1>
                <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
                  See how Orders & More can streamline your operations. Our team will walk you through the best setup for your business.
                </p>
              </div>
            </ScrollReveal>

            {/* What You'll Get */}
            <ScrollReveal delay={200}>
              <div>
                <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-5">
                  What You'll Get
                </h3>
                <StaggerChildren className="space-y-4" staggerDelay={100}>
                  {whatYouGet.map((item) => (
                    <div key={item.text} className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-accent flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-4 h-4 text-accent-foreground" />
                      </div>
                      <span className="text-sm text-foreground font-medium">{item.text}</span>
                    </div>
                  ))}
                </StaggerChildren>
              </div>
            </ScrollReveal>
          </div>

          {/* Right — Form Card or Thank You */}
          <ScrollReveal delay={300}>
          <div className="lg:sticky lg:top-24">
            {submitted ? (
              <div className="rounded-2xl border border-border bg-card shadow-card-hover p-8 text-center">
                <div className="w-16 h-16 rounded-full gradient-brand flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-8 h-8 text-primary-foreground" />
                </div>
                <h2 className="text-xl font-bold text-foreground mb-2">Thanks — we received your request!</h2>
                <p className="text-muted-foreground mb-8">
                  We'll contact you within 1 business day to schedule your demo.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Button asChild variant="outline" size="lg">
                    <Link to="/">Back to Home</Link>
                  </Button>
                  <Button size="lg" onClick={handleReset}>
                    Book Another Demo
                  </Button>
                </div>
              </div>
            ) : (
              <div className="rounded-2xl border border-border bg-card shadow-card-hover p-8">
                <h2 className="text-xl font-bold text-foreground">Get started with Orders & More</h2>
                <p className="text-sm text-muted-foreground mt-1 mb-6">
                  Tell us a bit — our team will reply within 1 business day.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="fullName" className="text-sm font-semibold text-foreground">
                      Full Name<span className="text-destructive">*</span>
                    </Label>
                    <Input id="fullName" name="fullName" value={form.fullName} onChange={handleChange} className="mt-1.5 bg-muted/50" maxLength={100} required />
                  </div>

                  <div>
                    <Label htmlFor="companyName" className="text-sm font-semibold text-foreground">
                      Company Name<span className="text-destructive">*</span>
                    </Label>
                    <Input id="companyName" name="companyName" value={form.companyName} onChange={handleChange} className="mt-1.5 bg-muted/50" maxLength={100} required />
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-sm font-semibold text-foreground">
                      Business Email<span className="text-destructive">*</span>
                    </Label>
                    <Input id="email" name="email" type="email" value={form.email} onChange={handleChange} className="mt-1.5 bg-muted/50" maxLength={255} required />
                  </div>

                  <div>
                    <Label htmlFor="jobTitle" className="text-sm font-semibold text-foreground">
                      Job Title <span className="text-xs text-muted-foreground font-normal">(optional)</span>
                    </Label>
                    <Input id="jobTitle" name="jobTitle" value={form.jobTitle} onChange={handleChange} className="mt-1.5 bg-muted/50" maxLength={100} />
                  </div>

                  <div>
                    <Label htmlFor="phone" className="text-sm font-semibold text-foreground">
                      Phone Number <span className="text-xs text-muted-foreground font-normal">(optional)</span>
                    </Label>
                    <PhoneInput international defaultCountry={defaultCountry} value={phone} onChange={setPhone} className="mt-1.5 phone-input-custom" />
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-sm font-semibold text-foreground">
                      Tell Us About Your Business <span className="text-xs text-muted-foreground font-normal">(optional)</span>
                    </Label>
                    <Textarea id="message" name="message" value={form.message} onChange={handleChange} className="mt-1.5 min-h-[80px] bg-muted/50" maxLength={1000} />
                  </div>


                  <Button type="submit" size="lg" className="w-full text-base h-12" disabled={submitting}>
                    {submitting ? "Submitting…" : "Book a Live Demo"}
                  </Button>
                </form>
              </div>
            )}
          </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
