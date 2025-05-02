
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldCheck, FileText, Stethoscope, BriefcaseMedical } from "lucide-react";
import { Link } from "react-router-dom";

const AboutSection = () => {
  return (
    <section className="py-20 bg-white" id="sobre">
      <div className="container-section">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="section-title">Sobre a OMT</h2>
            <p className="text-gray-600 mb-6">
              A Ocupacional Medicina do Trabalho (OMT) é uma clínica especializada 
              que oferece soluções completas em medicina e segurança do trabalho. 
              Nosso compromisso é garantir a saúde e a segurança dos colaboradores 
              enquanto ajudamos as empresas a cumprir todas as exigências legais.
            </p>
            <p className="text-gray-600 mb-6">
              Com uma equipe multidisciplinar formada por médicos, enfermeiros, 
              técnicos e engenheiros de segurança do trabalho, a OMT se destaca 
              pela qualidade no atendimento e pela expertise técnica.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                  <ShieldCheck className="h-5 w-5 text-primary" />
                </div>
                <span className="font-medium">Conformidade com NRs</span>
              </div>
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                  <FileText className="h-5 w-5 text-primary" />
                </div>
                <span className="font-medium">Certificações</span>
              </div>
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                  <Stethoscope className="h-5 w-5 text-primary" />
                </div>
                <span className="font-medium">Equipe especializada</span>
              </div>
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                  <BriefcaseMedical className="h-5 w-5 text-primary" />
                </div>
                <span className="font-medium">Soluções integradas</span>
              </div>
            </div>
            <Link to="/sobre">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary/5">
                Conheça mais sobre nós <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
          <div className="relative">
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
                alt="Equipe OMT"
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-lg hidden md:block">
              <h3 className="text-2xl font-bold text-primary">10+</h3>
              <p className="text-gray-600">Anos de experiência</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
