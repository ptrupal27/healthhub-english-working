import { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { AboutSection } from "@/components/AboutSection";
import { DoctorsSection } from "@/components/DoctorsSection";
import { ServicesSection } from "@/components/ServicesSection";
import { AppointmentSection } from "@/components/AppointmentSection";
import { LabSection } from "@/components/LabSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { AdminLogin } from "@/components/AdminLogin";
import { AdminPanel } from "@/components/AdminPanel";

const Index = () => {
  const [currentView, setCurrentView] = useState("home");

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1);
      if (hash === "admin-panel" && localStorage.getItem("adminLoggedIn")) {
        setCurrentView("admin-panel");
      } else if (hash === "admin") {
        setCurrentView("admin");
      } else {
        setCurrentView("home");
      }
    };

    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  if (currentView === "admin-panel") {
    return <AdminPanel />;
  }

  if (currentView === "admin") {
    return <AdminLogin />;
  }

  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <WhyChooseUs />
      <AboutSection />
      <DoctorsSection />
      <ServicesSection />
      <AppointmentSection />
      <LabSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
