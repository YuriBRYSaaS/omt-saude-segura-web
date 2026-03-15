import React from "react";
import ImageBanner from "@/components/ImageBanner";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Stethoscope,
  ShieldCheck,
  FlaskConical,
  CheckCircle,
  ArrowRight,
  Heart,
  Eye,
  Brain,
  Activity,
  FileText,
  ClipboardList,
  Scale,
  Ear,
  Radiation,
  TestTube,
  Monitor,
  Gauge,
  Waves,
  Thermometer,
  Wind,
  Beaker,
} from "lucide-react";
import medicinaImg from "@/assets/medicina-ocupacional.jpg";
import segurancaImg from "@/assets/seguranca-trabalho.jpg";
import higieneImg from "@/assets/higiene-ocupacional.jpg";

const ServiceItem = ({ text }: { text: string }) => (
  <li className="flex items-start gap-3 py-2">
    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
    <span className="text-foreground/80">{text}</span>
  </li>
);

const Servicos = () => {
  return (
    <>
      <ImageBanner
        imageUrl="https://images.unsplash.com/photo-1519389950473-47ba0277781c"
        title="Nossos Serviços"
        subtitle="Soluções completas em medicina e segurança do trabalho"
      />

      {/* Navigation Pills */}
      <div className="sticky top-16 z-30 bg-white/95 backdrop-blur-sm border-b shadow-sm">
        <div className="container-section py-3">
          <div className="flex flex-wrap justify-center gap-3">
            <a href="#medicina" className="px-5 py-2 rounded-full bg-primary text-primary-foreground font-medium text-sm hover:bg-primary-dark transition-colors">
              Medicina Ocupacional
            </a>
            <a href="#seguranca" className="px-5 py-2 rounded-full bg-primary text-primary-foreground font-medium text-sm hover:bg-primary-dark transition-colors">
              Segurança do Trabalho
            </a>
            <a href="#higiene" className="px-5 py-2 rounded-full bg-primary text-primary-foreground font-medium text-sm hover:bg-primary-dark transition-colors">
              Higiene Ocupacional
            </a>
          </div>
        </div>
      </div>

      {/* ========== MEDICINA OCUPACIONAL ========== */}
      <section id="medicina" className="py-20">
        <div className="container-section">
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            {/* Image + badge */}
            <div className="lg:w-5/12 w-full">
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <img
                  src={medicinaImg}
                  alt="Medicina Ocupacional - Exames e avaliações clínicas"
                  className="w-full h-[350px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end">
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <Stethoscope className="h-6 w-6 text-white" />
                      <span className="text-white font-montserrat font-bold text-xl">
                        Medicina Ocupacional
                      </span>
                    </div>
                    <p className="text-white/90 text-sm">
                      Avaliação clínica ocupacional completa — anamnese e exame físico
                    </p>
                  </div>
                </div>
              </div>

              {/* Highlight box */}
              <div className="mt-6 bg-primary/5 border border-primary/20 rounded-xl p-5">
                <h4 className="font-montserrat font-semibold text-foreground mb-3 flex items-center gap-2">
                  <ShieldCheck className="h-5 w-5 text-primary" />
                  Por que é importante?
                </h4>
                <p className="text-foreground/70 text-sm leading-relaxed">
                  Exames ocupacionais garantem a conformidade com as normas regulamentadoras,
                  protegem a saúde dos colaboradores e reduzem riscos de multas e afastamentos
                  para a empresa.
                </p>
              </div>
            </div>

            {/* Services list */}
            <div className="lg:w-7/12 w-full">
              <h2 className="section-title">Medicina Ocupacional</h2>
              <p className="text-foreground/70 mb-8 max-w-xl">
                Realizamos todos os exames e avaliações exigidos pelas normas
                regulamentadoras, com equipe médica especializada e estrutura completa.
              </p>

              <div className="grid sm:grid-cols-2 gap-x-8">
                <ul className="space-y-1">
                  <ServiceItem text="Exame Admissional" />
                  <ServiceItem text="Exame Periódico" />
                  <ServiceItem text="Exame de Retorno ao Trabalho" />
                  <ServiceItem text="Exame de Mudança de Riscos Ocupacionais" />
                  <ServiceItem text="Audiometria Tonal — Via Aérea, Via Óssea" />
                  <ServiceItem text="Avaliação da Acuidade Visual" />
                  <ServiceItem text="Avaliação do Campo Visual (Campimetria)" />
                </ul>
                <ul className="space-y-1">
                  <ServiceItem text="ECG — Eletrocardiograma" />
                  <ServiceItem text="Avaliação Psicossocial" />
                  <ServiceItem text="EEG — Eletroencefalograma" />
                  <ServiceItem text="Espirometria — Teste Cardiopulmonar" />
                  <ServiceItem text="Raio X" />
                  <ServiceItem text="Exames Laboratoriais" />
                </ul>
              </div>

              <div className="mt-8">
                <Link to="/contato">
                  <Button className="bg-primary hover:bg-primary-dark text-primary-foreground">
                    Agende seus exames <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== SEGURANÇA DO TRABALHO ========== */}
      <section id="seguranca" className="py-20 bg-muted/50">
        <div className="container-section">
          <div className="flex flex-col lg:flex-row-reverse gap-12 items-start">
            {/* Image */}
            <div className="lg:w-5/12 w-full">
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <img
                  src={segurancaImg}
                  alt="Segurança do Trabalho - Inspeção e laudos"
                  className="w-full h-[350px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end">
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <ShieldCheck className="h-6 w-6 text-white" />
                      <span className="text-white font-montserrat font-bold text-xl">
                        Segurança do Trabalho
                      </span>
                    </div>
                    <p className="text-white/90 text-sm">
                      Programas, laudos e gestão para um ambiente de trabalho seguro
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 bg-primary/5 border border-primary/20 rounded-xl p-5">
                <h4 className="font-montserrat font-semibold text-foreground mb-3 flex items-center gap-2">
                  <ShieldCheck className="h-5 w-5 text-primary" />
                  Prevenção, Segurança e Saúde
                </h4>
                <p className="text-foreground/70 text-sm leading-relaxed">
                  Nossos programas e laudos garantem que sua empresa esteja em
                  conformidade com todas as normas regulamentadoras, evitando multas,
                  interdições e ações trabalhistas.
                </p>
              </div>
            </div>

            {/* Services */}
            <div className="lg:w-7/12 w-full">
              <h2 className="section-title">Segurança do Trabalho</h2>
              <p className="text-foreground/70 mb-8 max-w-xl">
                Desenvolvemos programas, laudos técnicos e serviços de gestão para
                garantir a segurança e a conformidade legal da sua empresa.
              </p>

              <div className="grid sm:grid-cols-2 gap-x-8">
                <ul className="space-y-1">
                  <ServiceItem text="Gestão e Controle dos Exames Periódicos" />
                  <ServiceItem text="Gestão dos Eventos e-Social" />
                  <ServiceItem text="PGR — Programa de Gerenciamento de Risco" />
                  <ServiceItem text="PCMSO — Programa de Controle Médico e Saúde Ocupacional" />
                  <ServiceItem text="LTCAT — Laudo Técnico de Condições no Ambiente de Trabalho" />
                  <ServiceItem text="Laudo de Insalubridade" />
                  <ServiceItem text="Laudo de Periculosidade" />
                </ul>
                <ul className="space-y-1">
                  <ServiceItem text="Avaliações Quantitativas de Riscos Ambientais" />
                  <ServiceItem text="AET — Análise Ergonômica do Trabalho" />
                  <ServiceItem text="Assistência Técnica Pericial" />
                  <ServiceItem text="Auditoria ISO 9001" />
                  <ServiceItem text="POP — Elaboração de Procedimento Operacional Padrão" />
                  <ServiceItem text="PCA — Programa de Conservação Auditiva" />
                </ul>
              </div>

              <div className="mt-8">
                <Link to="/contato">
                  <Button className="bg-primary hover:bg-primary-dark text-primary-foreground">
                    Solicite uma consultoria <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== HIGIENE OCUPACIONAL ========== */}
      <section id="higiene" className="py-20">
        <div className="container-section">
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            {/* Image */}
            <div className="lg:w-5/12 w-full">
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <img
                  src={higieneImg}
                  alt="Higiene Ocupacional - Avaliações quantitativas"
                  className="w-full h-[350px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end">
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <FlaskConical className="h-6 w-6 text-white" />
                      <span className="text-white font-montserrat font-bold text-xl">
                        Higiene Ocupacional
                      </span>
                    </div>
                    <p className="text-white/90 text-sm">
                      Avaliações quantitativas de agentes ambientais e riscos ocupacionais
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 bg-primary/5 border border-primary/20 rounded-xl p-5">
                <h4 className="font-montserrat font-semibold text-foreground mb-3 flex items-center gap-2">
                  <ShieldCheck className="h-5 w-5 text-primary" />
                  Saúde e Segurança no Trabalho
                </h4>
                <p className="text-foreground/70 text-sm leading-relaxed">
                  As avaliações de higiene ocupacional identificam e quantificam agentes
                  nocivos no ambiente de trabalho, fundamentais para a elaboração de laudos
                  e programas de prevenção.
                </p>
              </div>
            </div>

            {/* Services */}
            <div className="lg:w-7/12 w-full">
              <h2 className="section-title">Higiene Ocupacional</h2>
              <p className="text-foreground/70 mb-8 max-w-xl">
                Realizamos avaliações quantitativas de agentes físicos, químicos e
                biológicos presentes no ambiente de trabalho.
              </p>

              <ul className="space-y-1 max-w-lg">
                <ServiceItem text="Dosimetria — Avaliação Quantitativa de Ruído" />
                <ServiceItem text="Avaliação de Vibração Quantitativa de Corpo Inteiro, Punho e Braços" />
                <ServiceItem text="Termômetro de Globo — Avaliação Quantitativa de Stress Térmico" />
                <ServiceItem text="Bomba de Amostragem — Avaliação Quantitativa de Agentes Químicos" />
              </ul>

              <div className="mt-8">
                <Link to="/contato">
                  <Button className="bg-primary hover:bg-primary-dark text-primary-foreground">
                    Solicite um orçamento <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-16 bg-muted/50">
        <div className="container-section">
          <div className="text-center mb-12">
            <h2 className="section-title">Perguntas Frequentes</h2>
            <p className="text-foreground/60 max-w-2xl mx-auto">
              Esclarecemos suas principais dúvidas sobre medicina e segurança do trabalho.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                q: "Quais exames ocupacionais são obrigatórios?",
                a: "São obrigatórios os exames admissionais, periódicos, de retorno ao trabalho (após afastamento superior a 30 dias), de mudança de função e demissionais. O médico coordenador do PCMSO determinará os exames complementares necessários conforme os riscos ocupacionais.",
              },
              {
                q: "Como saber quais programas minha empresa precisa?",
                a: "Os programas obrigatórios dependem do grau de risco e número de funcionários da empresa. O PCMSO e o PGR são obrigatórios para todas as empresas com empregados regidos pela CLT. Nossa equipe pode realizar uma avaliação para determinar o que sua empresa precisa.",
              },
              {
                q: "É possível realizar os exames na própria empresa?",
                a: "Sim, oferecemos o serviço in company para empresas com um número mínimo de funcionários. Nossa equipe pode se deslocar até a empresa para realizar exames clínicos e coletas para exames complementares.",
              },
              {
                q: "Qual a diferença entre PGR e PPRA?",
                a: "O PGR (Programa de Gerenciamento de Riscos) substituiu o PPRA com a nova NR-1. O PGR é mais abrangente, contemplando riscos ergonômicos e de acidentes, além de exigir um inventário de riscos mais detalhado e plano de ação.",
              },
              {
                q: "Quais as consequências de não cumprir as normas de SST?",
                a: "O não cumprimento pode resultar em multas, interdição de setores, ações civis públicas, ações trabalhistas, aumento de alíquota de SAT/RAT e dificuldades para obter certidões e financiamentos.",
              },
              {
                q: "O que é Higiene Ocupacional?",
                a: "Higiene Ocupacional é a ciência que antecipa, reconhece, avalia e controla os agentes ambientais (ruído, calor, vibração, agentes químicos) presentes no ambiente de trabalho, prevenindo doenças ocupacionais.",
              },
            ].map((faq, i) => (
              <div
                key={i}
                className="bg-background p-6 rounded-xl shadow-md border border-border"
              >
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  {faq.q}
                </h3>
                <p className="text-foreground/70 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="container-section text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-montserrat">
            Pronto para proteger seus colaboradores?
          </h2>
          <p className="text-white/90 text-xl mb-8 max-w-3xl mx-auto">
            Entre em contato conosco para uma avaliação personalizada das
            necessidades de medicina e segurança do trabalho da sua empresa.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contato">
              <Button className="bg-white text-primary hover:bg-gray-100 text-lg px-6 py-3">
                Solicitar proposta
              </Button>
            </Link>
            <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer">
              <Button
                variant="outline"
                className="text-white border-white hover:bg-white/10 text-lg px-6 py-3"
              >
                Fale pelo WhatsApp
              </Button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Servicos;
