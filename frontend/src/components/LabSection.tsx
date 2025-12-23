import { Microscope, Droplet, Activity, Scan } from "lucide-react";

const tests = [
  { icon: Droplet, name: "Blood Test", nameGu: "Blood Test" },
  { icon: Scan, name: "X-Ray", nameGu: "X-Ray" },
  { icon: Activity, name: "ECG", nameGu: "ECG" },
  { icon: Microscope, name: "MRI / CT Scan", nameGu: "MRI / CT Scan" },
];

export const LabSection = () => {
  return (
    <section id="lab" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Advanced <span className="text-gradient">Diagnostic Lab</span>
          </h2>
          <p className="text-muted-foreground">We provide fast and accurate reports through modern laboratory</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tests.map((test, index) => (
            <div key={index} className="bg-card p-8 rounded-2xl shadow-card text-center hover:shadow-elevated transition-all hover:-translate-y-2">
              <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center mx-auto mb-4">
                <test.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">{test.name}</h3>
              <p className="text-sm text-primary">{test.nameGu}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
