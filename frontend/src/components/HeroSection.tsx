import { Button } from "@/components/ui/button";
import { Calendar, Phone, Heart, Shield, Clock } from "lucide-react";

export const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen bg-gradient-hero pt-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 py-20 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[70vh]">
          {/* Content */}
          <div className="animate-slide-up">
            <div className="inline-flex items-center gap-2 bg-secondary px-4 py-2 rounded-full mb-6">
              <Heart className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-secondary-foreground">
                24x7 Healthcare Services
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
              Trusted{" "}
              <span className="text-gradient">Hospital</span>{" "}
              for your health
            </h1>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-xl">
              With modern facilities, experienced doctors and 24x7 emergency services, we take complete care of your health.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-12">
              <Button variant="hero" size="lg" asChild>
                <a href="#appointment">
                  <Calendar className="w-5 h-5" />
                  Book Appointment
                </a>
              </Button>
              <Button variant="emergency" size="lg" asChild>
                <a href="tel:+919XXXXXXXXX">
                  <Phone className="w-5 h-5" />
                  Emergency Call
                </a>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center p-4 rounded-xl bg-card shadow-card">
                <div className="text-3xl font-bold text-primary">15+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center p-4 rounded-xl bg-card shadow-card">
                <div className="text-3xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">Expert Doctors</div>
              </div>
              <div className="text-center p-4 rounded-xl bg-card shadow-card">
                <div className="text-3xl font-bold text-primary">10K+</div>
                <div className="text-sm text-muted-foreground">Happy Patients</div>
              </div>
            </div>
          </div>

          {/* Hero Image / Features */}
          <div className="relative animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              {/* Central Circle */}
              <div className="absolute inset-0 m-auto w-64 h-64 rounded-full bg-gradient-primary opacity-20 animate-pulse-soft" />
              <div className="absolute inset-0 m-auto w-48 h-48 rounded-full bg-gradient-primary opacity-40" />
              <div className="absolute inset-0 m-auto w-32 h-32 rounded-full bg-primary flex items-center justify-center">
                <Heart className="w-16 h-16 text-primary-foreground" />
              </div>

              {/* Feature Cards */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-card p-4 rounded-xl shadow-elevated animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
                    <Shield className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-foreground">Safe & Secure</p>
                    <p className="text-xs text-muted-foreground">Environment</p>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-10 left-0 bg-card p-4 rounded-xl shadow-elevated animate-float" style={{ animationDelay: "1s" }}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-foreground">24/7</p>
                    <p className="text-xs text-muted-foreground">Emergency Care</p>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-10 right-0 bg-card p-4 rounded-xl shadow-elevated animate-float" style={{ animationDelay: "2s" }}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-teal-light flex items-center justify-center">
                    <Heart className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-foreground">Expert Care</p>
                    <p className="text-xs text-muted-foreground">Best Doctors</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
