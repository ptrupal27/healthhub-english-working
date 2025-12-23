import { Stethoscope, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const doctors = [
  {
    name: "Dr. Bhaumesh",
    specialty: "General Physician",
    experience: "15+ Years",
  },
];

export const DoctorsSection = () => {
  return (
    <section
      id="doctors"
      className="w-full min-h-screen flex items-center bg-muted/30"
    >
      <div className="w-full px-4 md:px-20">
        {/* Heading */}
        <div className="text-center mb-0">
          <div className="inline-flex items-center gap-2 bg-secondary px-4 py-2 rounded-full mb-6">
            <Stethoscope className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-secondary-foreground">
              Doctor
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            <span className="text-gradient">Expert Doctor</span>
          </h2>

          <p className="text-muted-foreground max-w-2xl mx-auto">
            doctor have years of experience and specialization in patient care
          </p>
        </div>

        {/* Doctor Content */}
        <div className="flex items-center justify-center">
          {doctors.map((doctor, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-center gap-80"
            >
              
              {/* Doctor Info */}
              <div className="text-center md:text-left">
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                  {doctor.name}
                </h3>

                <p className="text-primary text-lg font-medium mb-1">
                  {doctor.specialty}
                </p>

                <p className="text-muted-foreground mb-6">
                  Experience: {doctor.experience}
                </p>

                <p className="text-muted-foreground mb-6">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni dolor similique aut recusandae ad ipsum. Aliquid, error iusto perspiciatis, cumque quia ut ipsam similique reprehenderit sunt molestiae, obcaecati et ab.
                </p>

                <Button variant="ghost" asChild>
                  <a href="#appointment">Book Appointment</a>
                </Button>
              </div>

              {/* Doctor Photo */}
              <img
                src="dr_photo.png"
                alt={doctor.name}
                className="object-cover rounded-2xl"
              />
            </div>
          ))}
        </div>

        
      </div>
    </section>
  );
};
