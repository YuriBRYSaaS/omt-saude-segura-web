
import React from "react";
import TestimonialCard from "@/components/TestimonialCard";

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container-section">
        <div className="text-center mb-12">
          <h2 className="section-title">O que nossos clientes dizem</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A confiança de nossos clientes é nosso maior patrimônio. 
            Conheça a experiência de quem já conta com os serviços da OMT.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <TestimonialCard
            quote="A OMT trouxe tranquilidade para nossa empresa. O atendimento é ágil e a equipe muito profissional. Recomendo a todos que buscam qualidade em medicina e segurança do trabalho."
            author="Carlos Silva"
            company="Diretor de RH, Empresa X"
          />
          <TestimonialCard
            quote="A gestão dos exames ocupacionais ficou muito mais simples desde que contratamos a OMT. Os relatórios são completos e o suporte técnico é excelente."
            author="Mariana Oliveira"
            company="Gerente de RH, Empresa Y"
          />
          <TestimonialCard
            quote="Destacamos a competência técnica da equipe da OMT. Os programas de segurança do trabalho implementados trouxeram resultados concretos, reduzindo significativamente os acidentes."
            author="Roberto Santos"
            company="Gestor de QSMS, Empresa Z"
          />
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
