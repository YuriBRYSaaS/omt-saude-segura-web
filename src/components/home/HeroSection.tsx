
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
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
  );
};

export default HeroSection;
