import { Star, Quote } from "lucide-react";

const testimonials = [
  { name: "Sunil Chaporkar", text: "Dr Amit Patel is a very good Doctor and he treats us well to be fit and fine fast. I recommend his hospital for all my friends and relatives.", rating: 5 },
  
  { name: "Anil Patel", text: "Excellent hospital with good infrastructure and patient friendly environment Doctor Bhaumesh Rajdev takes utmost care towards well-being of patients by his clinical skills , knowledge and empathetic nature Will definitely recommend for best treatment in Adajan pal area", rating: 5 },
];

export const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Patient <span className="text-gradient">Testimonials</span></h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-card p-8 rounded-2xl shadow-card">
              <Quote className="w-10 h-10 text-primary/30 mb-4" />
              <p className="text-foreground mb-4">"{t.text}"</p>
              <div className="flex items-center gap-1 mb-2">{[...Array(t.rating)].map((_, j) => <Star key={j} className="w-4 h-4 fill-gold text-gold" />)}</div>
              <p className="font-semibold text-foreground">{t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
