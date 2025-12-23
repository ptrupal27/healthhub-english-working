import { 
  Stethoscope, 
  Ambulance, 
  Scissors, 
  HeartPulse, 
  Baby, 
  Microscope, 
  Pill,
  ArrowRight
} from "lucide-react";

const services = [
  {
    icon: Stethoscope,
    title: "General Medicine",
    titleGu: "General Medicine",
    description: "Comprehensive healthcare for all ages",
  },
  {
    icon: Ambulance,
    title: "Emergency Care (24x7)",
    titleGu: "Emergency Care (24x7)",
    description: "Round the clock emergency services",
  },
  {
    icon: Scissors,
    title: "Surgery & Operation",
    titleGu: "Surgery & Operation",
    description: "Advanced surgical procedures",
  },
  {
    icon: HeartPulse,
    title: "ICU & Critical Care",
    titleGu: "ICU & Critical Care",
    description: "Intensive care unit with modern facilities",
  },
  {
    icon: Baby,
    title: "Maternity & Child Care",
    titleGu: "Maternity & Child Care",
    description: "Complete care for mothers and children",
  },
  {
    icon: Microscope,
    title: "Diagnostic & Lab",
    titleGu: "Diagnostic & Lab",
    description: "Accurate diagnostic services",
  },
  {
    icon: Pill,
    title: "Pharmacy Services",
    titleGu: "Pharmacy Services",
    description: "24/7 pharmacy with quality medicines",
  },
];

export const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-secondary px-4 py-2 rounded-full mb-6">
            <HeartPulse className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-secondary-foreground">Our Services</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We provide various types of medical services
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-card p-6 rounded-2xl shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-2 border border-transparent hover:border-primary/20"
            >
              <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              
              <h3 className="text-lg font-semibold text-foreground mb-1">{service.title}</h3>
              <p className="text-sm text-primary font-medium mb-2">{service.titleGu}</p>
              <p className="text-sm text-muted-foreground mb-4">{service.description}</p>
              
              <a
                href="#appointment"
                className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all"
              >
                Learn More
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
