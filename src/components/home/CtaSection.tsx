
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CtaSection = () => {
  return (
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
            <Button variant="outline" className="text-primary border-white hover:bg-white/10 text-lg px-6 py-6">
              Conhecer serviços
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
