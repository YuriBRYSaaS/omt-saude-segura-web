
import React from "react";
import ImageBanner from "@/components/ImageBanner";
import { ShieldCheck, Users, FileText, BriefcaseMedical } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Sobre = () => {
  return (
    <>
      <ImageBanner 
        imageUrl="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" 
        title="Sobre a OMT" 
        subtitle="Conheça nossa história, missão e equipe de especialistas"
      />
      
      <section className="py-16">
        <div className="container-section">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="section-title">Nossa História</h2>
              <p className="text-gray-700 mb-4">
                Fundada há mais de 10 anos, a Ocupacional Medicina do Trabalho (OMT) nasceu com o propósito 
                de oferecer soluções completas em medicina e segurança do trabalho, com foco na saúde e 
                bem-estar dos colaboradores e na conformidade legal das empresas.
              </p>
              <p className="text-gray-700 mb-4">
                Ao longo de nossa trajetória, construímos uma reputação sólida no mercado, baseada em 
                valores como excelência técnica, atendimento humanizado e compromisso com resultados. 
                Nossa clínica cresceu e evoluiu para atender às necessidades cada vez mais complexas 
                das empresas, sempre acompanhando as mudanças na legislação e incorporando novas 
                tecnologias e práticas.
              </p>
              <p className="text-gray-700">
                Hoje, a OMT é reconhecida como referência em serviços ocupacionais, ajudando 
                empresas de diferentes portes e segmentos a promover ambientes de trabalho mais 
                seguros e saudáveis, além de garantir o cumprimento das normas regulamentadoras.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Nossa Missão</h3>
                <p className="text-gray-700">
                  Promover a saúde e segurança no ambiente de trabalho, oferecendo soluções integradas 
                  que valorizem o bem-estar dos colaboradores e contribuam para o desenvolvimento 
                  sustentável das organizações.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Nossa Visão</h3>
                <p className="text-gray-700">
                  Ser referência nacional em medicina e segurança do trabalho, reconhecida pela 
                  excelência técnica, inovação e compromisso com a promoção da saúde ocupacional.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Nossos Valores</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• Ética e transparência em todas as relações</li>
                  <li>• Compromisso com a qualidade e resultados</li>
                  <li>• Valorização das pessoas e respeito à diversidade</li>
                  <li>• Inovação e melhoria contínua</li>
                  <li>• Responsabilidade social e ambiental</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-gray-50">
        <div className="container-section">
          <div className="text-center mb-12">
            <h2 className="section-title">Nossa Equipe</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Contamos com uma equipe multidisciplinar de profissionais altamente qualificados
              e especializados em medicina e segurança do trabalho.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Médicos do Trabalho</h3>
              <p className="text-gray-600">
                Especialistas com formação em medicina do trabalho, responsáveis pelos exames ocupacionais, 
                coordenação do PCMSO e avaliação da saúde dos colaboradores.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <BriefcaseMedical className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Enfermeiros</h3>
              <p className="text-gray-600">
                Profissionais de enfermagem do trabalho que atuam na realização de exames, coleta de 
                material para exames laboratoriais e apoio às atividades médicas.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <ShieldCheck className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Engenheiros de Segurança</h3>
              <p className="text-gray-600">
                Engenheiros especializados em segurança do trabalho, responsáveis por análises de risco, 
                elaboração de laudos técnicos e implementação de medidas preventivas.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <FileText className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Técnicos de Segurança</h3>
              <p className="text-gray-600">
                Técnicos em segurança do trabalho que realizam inspeções, treinamentos e auxiliam na 
                implementação de programas de prevenção de acidentes e doenças ocupacionais.
              </p>
            </div>
          </div>
          
          <div className="mt-12 bg-white p-6 md:p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Diferenciais da nossa equipe</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mr-3 shrink-0 mt-0.5">
                      <ShieldCheck className="h-3 w-3 text-primary" />
                    </span>
                    <span className="text-gray-700">
                      <strong className="font-medium">Formação especializada:</strong> Todos os profissionais possuem 
                      formação específica em suas áreas de atuação e constante atualização.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mr-3 shrink-0 mt-0.5">
                      <ShieldCheck className="h-3 w-3 text-primary" />
                    </span>
                    <span className="text-gray-700">
                      <strong className="font-medium">Abordagem integrada:</strong> Trabalhamos de forma 
                      multidisciplinar, integrando medicina e segurança para resultados mais efetivos.
                    </span>
                  </li>
                </ul>
              </div>
              <div>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mr-3 shrink-0 mt-0.5">
                      <ShieldCheck className="h-3 w-3 text-primary" />
                    </span>
                    <span className="text-gray-700">
                      <strong className="font-medium">Experiência comprovada:</strong> Profissionais com ampla 
                      experiência em diferentes segmentos e portes de empresas.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mr-3 shrink-0 mt-0.5">
                      <ShieldCheck className="h-3 w-3 text-primary" />
                    </span>
                    <span className="text-gray-700">
                      <strong className="font-medium">Atualização constante:</strong> Equipe sempre atualizada 
                      sobre mudanças na legislação e novas técnicas e procedimentos.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Certificações */}
      <section className="py-16">
        <div className="container-section">
          <div className="text-center mb-12">
            <h2 className="section-title">Certificações e Associações</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A OMT possui certificações que atestam nossa qualidade e compromisso com a excelência 
              em medicina e segurança do trabalho.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8 items-center">
            <div className="p-4 bg-white border rounded-lg shadow-sm flex items-center justify-center h-32 w-48">
              <div className="text-center">
                <div className="h-12 w-12 mx-auto mb-2">
                  <ShieldCheck className="h-full w-full text-primary" />
                </div>
                <p className="text-gray-700 font-medium">ISO 9001</p>
              </div>
            </div>
            <div className="p-4 bg-white border rounded-lg shadow-sm flex items-center justify-center h-32 w-48">
              <div className="text-center">
                <div className="h-12 w-12 mx-auto mb-2">
                  <ShieldCheck className="h-full w-full text-primary" />
                </div>
                <p className="text-gray-700 font-medium">ABMT</p>
              </div>
            </div>
            <div className="p-4 bg-white border rounded-lg shadow-sm flex items-center justify-center h-32 w-48">
              <div className="text-center">
                <div className="h-12 w-12 mx-auto mb-2">
                  <ShieldCheck className="h-full w-full text-primary" />
                </div>
                <p className="text-gray-700 font-medium">ANAMT</p>
              </div>
            </div>
            <div className="p-4 bg-white border rounded-lg shadow-sm flex items-center justify-center h-32 w-48">
              <div className="text-center">
                <div className="h-12 w-12 mx-auto mb-2">
                  <ShieldCheck className="h-full w-full text-primary" />
                </div>
                <p className="text-gray-700 font-medium">CRM</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="container-section text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-montserrat">
            Quer conhecer mais sobre nossos serviços?
          </h2>
          <p className="text-white/90 text-xl mb-8 max-w-3xl mx-auto">
            Entre em contato conosco hoje mesmo e descubra como podemos ajudar sua empresa 
            a cuidar da saúde e segurança de seus colaboradores.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contato">
              <Button className="bg-white text-primary hover:bg-gray-100 text-lg px-6 py-3">
                Fale com um especialista
              </Button>
            </Link>
            <Link to="/servicos">
              <Button variant="outline" className="text-white border-white hover:bg-white/10 text-lg px-6 py-3">
                Ver nossos serviços
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Sobre;
