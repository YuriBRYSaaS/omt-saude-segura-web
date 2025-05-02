
import React from "react";
import ImageBanner from "@/components/ImageBanner";
import ContactForm from "@/components/ContactForm";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Contato = () => {
  return (
    <>
      <ImageBanner 
        imageUrl="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" 
        title="Entre em Contato" 
        subtitle="Estamos prontos para atender sua empresa"
      />
      
      <section className="py-16">
        <div className="container-section">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="section-title">Fale Conosco</h2>
              <p className="text-gray-700 mb-6">
                Entre em contato com a OMT e descubra como podemos ajudar sua empresa 
                a cuidar da saúde e segurança de seus colaboradores.
              </p>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-1">Telefone</h3>
                    <a href="tel:+551199999999" className="text-gray-700 hover:text-primary">
                      (11) 9999-9999
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-1">E-mail</h3>
                    <a href="mailto:contato@omtsaude.com.br" className="text-gray-700 hover:text-primary">
                      contato@omtsaude.com.br
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-1">Endereço</h3>
                    <address className="text-gray-700 not-italic">
                      Av. Paulista, 1000, Bela Vista<br />
                      São Paulo - SP, CEP: 01310-100
                    </address>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-1">Horário de Atendimento</h3>
                    <p className="text-gray-700">
                      Segunda a Sexta: 08h às 18h<br />
                      Sábado: 08h às 12h
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Como podemos ajudar?
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="h-2 w-2 rounded-full bg-primary mr-2"></span>
                    <span className="text-gray-700">Agendamento de exames ocupacionais</span>
                  </li>
                  <li className="flex items-center">
                    <span className="h-2 w-2 rounded-full bg-primary mr-2"></span>
                    <span className="text-gray-700">Dúvidas sobre normas regulamentadoras</span>
                  </li>
                  <li className="flex items-center">
                    <span className="h-2 w-2 rounded-full bg-primary mr-2"></span>
                    <span className="text-gray-700">Contratação de serviços em segurança</span>
                  </li>
                  <li className="flex items-center">
                    <span className="h-2 w-2 rounded-full bg-primary mr-2"></span>
                    <span className="text-gray-700">Orçamentos para programas e laudos</span>
                  </li>
                  <li className="flex items-center">
                    <span className="h-2 w-2 rounded-full bg-primary mr-2"></span>
                    <span className="text-gray-700">Agendamento de visita técnica</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg border border-gray-100">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">Envie uma mensagem</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
      
      {/* Mapa */}
      <section className="py-10 bg-gray-50">
        <div className="container-section">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Nossa localização</h2>
          <div className="rounded-lg overflow-hidden shadow-lg h-[400px]">
            {/* Iframe para Google Maps - Em uma implementação real, seria inserido o iframe correto do Google Maps */}
            <div className="w-full h-full flex items-center justify-center bg-gray-200 text-gray-600">
              <p className="text-center">
                <MapPin className="h-10 w-10 mx-auto mb-4 text-primary/60" />
                Mapa do Google estaria inserido aqui<br />
                Av. Paulista, 1000, Bela Vista, São Paulo - SP
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contato;
