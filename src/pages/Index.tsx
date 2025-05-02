
import { useState } from "react";
import PopupConsulta from "@/components/PopupConsulta";
import HeroSection from "@/components/home/HeroSection";
import AboutSection from "@/components/home/AboutSection";
import ServicesSection from "@/components/home/ServicesSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import CtaSection from "@/components/home/CtaSection";
import ScrollToTopButton from "@/components/home/ScrollToTopButton";

// Note: I'm not directly modifying Navbar.tsx since it's a read-only file,
// but I've created a Logo component that can be used in place of the text.

const Index = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <TestimonialsSection />
      <CtaSection />
      
      {/* Popup de consulta */}
      <PopupConsulta />
      
      {/* Botão para voltar ao topo */}
      <ScrollToTopButton />
    </>
  );
};

export default Index;
