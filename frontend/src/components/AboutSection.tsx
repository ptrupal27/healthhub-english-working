import { Target, Eye, Heart, Award } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <div className="inline-flex items-center gap-2 bg-secondary px-4 py-2 rounded-full mb-6">
              <Heart className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-secondary-foreground">About Us</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              About <span className="text-gradient">Us</span>
            </h2>

            <p className="text-lg text-muted-foreground mb-6">
              Shrine Hospital has been providing quality and reliable healthcare services to patients for many years.
            </p>

            <p className="text-muted-foreground mb-8">
              Our goal is to serve every patient with personal care, proper treatment and human touch. Our team consists of experienced doctors, nurses and healthcare professionals who are committed to your health.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex items-start gap-4 p-4 rounded-xl bg-secondary/50">
                <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center shrink-0">
                  <Target className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Our Mission</h3>
                  <p className="text-sm text-muted-foreground">
                    To provide the best healthcare services to every patient.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-secondary/50">
                <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center shrink-0">
                  <Eye className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Our Vision</h3>
                  <p className="text-sm text-muted-foreground">
                    To become a name of trust in the healthcare sector.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-gradient-primary rounded-2xl p-8 text-center text-primary-foreground">
                  <div className="text-4xl font-bold mb-2">15+</div>
                  <div className="text-sm opacity-90">Years of Excellence</div>
                </div>
                <div className="bg-card rounded-2xl p-8 shadow-card text-center">
                  <div className="text-4xl font-bold text-primary mb-2">50+</div>
                  <div className="text-sm text-muted-foreground">Expert Doctors</div>
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="bg-card rounded-2xl p-8 shadow-card text-center">
                  <div className="text-4xl font-bold text-primary mb-2">100+</div>
                  <div className="text-sm text-muted-foreground">Hospital Beds</div>
                </div>
                <div className="bg-secondary rounded-2xl p-8 text-center">
                  <Award className="w-12 h-12 text-primary mx-auto mb-2" />
                  <div className="text-sm font-medium text-secondary-foreground">Award Winning Care</div>
                </div>
              </div>
            </div>

            {/* Decorative Element */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
};
