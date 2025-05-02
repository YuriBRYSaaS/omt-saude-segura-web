
import { useState, useEffect } from "react";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";
import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldCheck, FileText, Stethoscope, BriefcaseMedical } from "lucide-react";
import { Link } from "react-router-dom";
import PopupConsulta from "@/components/PopupConsulta";

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[92vh] flex items-center pt-16">
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: "linear-gradient(rgba(0, 0, 40, 0.7), rgba(0, 0, 40, 0.6)), url(https://images.unsplash.com/photo-1581091226825-a6a2a5aee158)",
          }}
        ></div>
        
        <div className="container-section relative z-10 py-20">
          <div className="max-w-3xl">
            <div className="animate-fade-in">
              <h1 className="font-montserrat text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Cuidando da saúde e segurança da sua empresa
              </h1>
              <p className="text-xl text-white/90 mb-8">
                Soluções completas em medicina e segurança do trabalho para empresas
                que valorizam o bem-estar de seus colaboradores.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/servicos">
                  <Button className="bg-primary hover:bg-primary-dark text-lg px-6 py-6">
                    Medicina do Trabalho
                  </Button>
                </Link>
                <Link to="/servicos">
                  <Button variant="outline" className="bg-white/10 text-white hover:bg-white/30 hover:text-white border-white/40 text-lg px-6 py-6">
                    Segurança do Trabalho
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre a OMT */}
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

      {/* Nossos Serviços */}
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

      {/* Depoimentos */}
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

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="container-section text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-montserrat">
            Pronto para cuidar da saúde e segurança da sua empresa?
          </h2>
          <p className="text-white/90 text-xl mb-8 max-w-3xl mx-auto">
            Entre em contato conosco hoje mesmo e descubra como podemos ajudar sua empresa 
            a cumprir as normas regulamentadoras e proporcionar um ambiente de trabalho 
            mais seguro e saudável.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contato">
              <Button className="bg-white text-primary hover:bg-gray-100 text-lg px-6 py-6">
                Fale com nossos especialistas
              </Button>
            </Link>
            <Link to="/servicos">
              <Button variant="outline" className="text-white border-white hover:bg-white/10 text-white text-lg px-6 py-6">
                Conhecer serviços
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Popup de consulta */}
      <PopupConsulta />
      
      {/* Botão para voltar ao topo */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`fixed bottom-6 right-6 bg-primary hover:bg-primary-dark text-white p-3 rounded-full shadow-lg transition-opacity duration-300 z-40 ${
          isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        aria-label="Voltar ao topo"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </button>
    </>
  );
};

export default Index;
