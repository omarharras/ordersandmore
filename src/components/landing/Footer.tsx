import { Globe, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import omLogo from "@/assets/om-logo.png";

const Footer = () => {
  return (
    <footer className="border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 items-start">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <img src={omLogo} alt="Orders and More" className="w-8 h-8" />
              <span className="font-bold text-lg text-foreground">Orders & More</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              The all-in-one commerce platform for wholesalers, distributors, and multi-branch retailers.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-2">
            <span className="text-sm font-semibold text-foreground mb-1">Quick Links</span>
            <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Features</a>
            <a href="#use-cases" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Use Cases</a>
            <a href="#how-it-works" className="text-sm text-muted-foreground hover:text-foreground transition-colors">How It Works</a>
            <Link to="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Book a Live Demo</Link>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-2">
            <span className="text-sm font-semibold text-foreground mb-1">Contact</span>
            <a href="mailto:contact@iken.tech" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
              <Mail className="w-4 h-4" /> contact@iken.tech
            </a>
            <a href="https://www.iken.tech" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
              <Globe className="w-4 h-4" /> www.iken.tech
            </a>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} IKEN Technology. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
