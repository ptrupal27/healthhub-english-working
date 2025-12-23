import { UserCheck, Stethoscope, Clock, Sparkles, IndianRupee } from "lucide-react";

const features = [
  {
    icon: UserCheck,
    title: "Experienced Doctors",
    titleEn: "Experienced Doctors",
    description: "Certified and experienced medical professionals",
  },
  {
    icon: Stethoscope,
    title: "Modern Equipment",
    titleEn: "Modern Equipment",
    description: "Latest medical technology and equipment",
  },
  {
    icon: Clock,
    title: "24/7 Emergency",
    titleEn: "24/7 Emergency",
    description: "Round the clock emergency services available",
  },
  {
    icon: Sparkles,
    title: "Clean Environment",
    titleEn: "Clean Environment",
    description: "Clean and safe hospital environment",
  },
  {
    icon: IndianRupee,
    title: "Affordable Treatment",
    titleEn: "Affordable Treatment",
    description: "Quality treatment at reasonable cost",
  },
];

export const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Choose <span className="text-gradient">Shrine Hospital</span>?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We prioritize your health and provide the best treatment
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-card p-6 rounded-2xl shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <feature.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
              <p className="text-sm text-primary font-medium mb-2">{feature.titleEn}</p>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
