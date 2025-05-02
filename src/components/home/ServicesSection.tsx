
import React from "react";
import { Button } from "@/components/ui/button";
import ServiceCard from "@/components/ServiceCard";
import { ArrowRight, Stethoscope, BriefcaseMedical, FileText } from "lucide-react";
import { Link } from "react-router-dom";

const ServicesSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container-section">
        <div className="text-center mb-12">
          <h2 className="section-title">Nossos Serviços</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Oferecemos soluções completas em medicina e segurança do trabalho, 
            ajudando sua empresa a cumprir as normas regulamentadoras e garantir 
            um ambiente de trabalho saudável e seguro.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard
            icon={<Stethoscope className="h-6 w-6 text-white" />}
            title="Exames Ocupacionais"
            description="Realizamos todos os exames exigidos pelas normas regulamentadoras: admissionais, periódicos, de retorno ao trabalho, de mudança de função e demissionais."
            link="/servicos"
            color="primary"
          />
          <ServiceCard
            icon={<BriefcaseMedical className="h-6 w-6 text-primary" />}
            title="Segurança do Trabalho"
            description="Desenvolvemos programas de prevenção, laudos técnicos e treinamentos para garantir a segurança no ambiente de trabalho e o cumprimento das normas."
            link="/servicos"
            color="secondary"
          />
          <ServiceCard
            icon={<FileText className="h-6 w-6 text-white" />}
            title="Programas e Laudos"
            description="Elaboramos PCMSO, PGR, LTCAT e outros documentos exigidos pelas normas regulamentadoras, garantindo a conformidade legal da sua empresa."
            link="/servicos"
            color="primary"
          />
        </div>
        
        <div className="mt-12 text-center">
          <Link to="/servicos">
            <Button className="bg-primary hover:bg-primary-dark">
              Ver todos os serviços <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
