import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import ashcamLogo from "@/assets/ashcam-logo.png";

const Footer = () => {
  return (
    <footer className="bg-surface-dark text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src={ashcamLogo} 
                alt="AshCam Cutting Solutions" 
                className="h-10 w-10"
              />
              <div>
                <span className="text-lg font-bold">AshCam Cutting Solutions Ltd.</span>
              </div>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              Precision Blades. Lasting Cuts.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: "Home", href: "/" },
                { name: "About Us", href: "/about" },
                { name: "Products", href: "/products" },
                { name: "Gallery", href: "/gallery" },
                { name: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-primary transition-smooth"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground">+1 647-519-2734</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground">AshCam1964@yahoo.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-primary mt-1" />
                <span className="text-muted-foreground">
                  385 Osler Street, Unit 510<br />
                  Toronto, ON, M6N 0B2
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-surface-medium mt-8 pt-8 text-center">
          <p className="text-muted-foreground">
            © 2025 AshCam Cutting Solutions Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;