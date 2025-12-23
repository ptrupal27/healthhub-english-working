import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Phone, Menu, X } from "lucide-react";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  // { href: "#doctors", label: "Doctors" },
  // { href: "#services", label: "Services" },
  { href: "#appointment", label: "Appointment" },
  // { href: "#lab", label: "Laboratory" },
  { href: "#contact", label: "Contact" },
  { href: "#admin", label: "Admin" },
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-card"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xl">
                <img width="213" height="240" src="shrine.png" alt="Shrine Hospital" decoding="async" /></span>
            </div>
            <div>
              <h1 className="font-bold text-xl text-foreground">Shrine Hospital</h1>
              <p className="text-xs text-muted-foreground">Humanity | Honesty | Happiness</p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Emergency Button */}
          <div className="hidden md:flex items-center gap-4">
            <a href="tel:++91 97240 97640" className="flex items-center gap-2 text-coral font-semibold">
              <Phone className="w-5 h-5" />
              <span>+91 97240 97640</span>
            </a>
            <Button variant="emergency" size="sm">
              Emergency
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <Button variant="emergency" className="mt-4">
                <Phone className="w-4 h-4" />
                Emergency Call
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};
