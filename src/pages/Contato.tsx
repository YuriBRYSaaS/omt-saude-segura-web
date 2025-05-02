
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
                    <a href="tel:+553534690047" className="text-gray-700 hover:text-primary">
                      (35) 3469-0047
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
                      contato@omtmedicinadotrabalho.com.br
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
                      R. Carmélia Flora, 37 Centro<br />
                      Campestre - MG, CEP: 37730-000
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
                      Segunda a Sexta: 08h às 17h
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

            <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg border border-gray-100 h-fit">
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
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3711.0227009172553!2d-46.24356908503!3d-21.507755985724598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b50c83c733fc21%3A0x4b8725d916a76b58!2sR.%20Carm%C3%A9lia%20Flora%2C%2037%20-%20Centro%2C%20Campestre%20-%20MG%2C%2037730-000!5e0!3m2!1spt-BR!2sbr!4v1651654321000!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização OMT Medicina do Trabalho"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Contato;
