import { MapPin, Phone, Mail, Clock } from "lucide-react";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Contact <span className="text-gradient">Us</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-card p-6 rounded-2xl shadow-card text-center">
            <MapPin className="w-10 h-10 text-primary mx-auto mb-4" />
            <h3 className="font-semibold text-foreground mb-2">Address</h3>
            <p className="text-sm text-muted-foreground">305, 3 rd Floor, Inifinity Business Hub, Opp. Katariya Maruti Workshop, Palanpur Canal Road, Surat, Gujarat, 395009</p>
          </div>
          <div className="bg-card p-6 rounded-2xl shadow-card text-center">
            <Phone className="w-10 h-10 text-primary mx-auto mb-4" />
            <h3 className="font-semibold text-foreground mb-2">Phone</h3>
            <p className="text-sm text-muted-foreground">+91 97240 97640</p>
          </div>
          <div className="bg-card p-6 rounded-2xl shadow-card text-center">
            <Mail className="w-10 h-10 text-primary mx-auto mb-4" />
            <h3 className="font-semibold text-foreground mb-2">Email</h3>
            <p className="text-sm text-muted-foreground">contact@shrinehostpital.in</p>
          </div>
          <div className="bg-card p-6 rounded-2xl shadow-card text-center">
            <Clock className="w-10 h-10 text-primary mx-auto mb-4" />
            <h3 className="font-semibold text-foreground mb-2">Hours</h3>
            <p className="text-sm text-muted-foreground">Monday – Sunday | 24x7</p>
          </div>
        </div>
      </div>
    </section>
  );
};
