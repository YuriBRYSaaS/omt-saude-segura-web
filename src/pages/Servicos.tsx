
import React from "react";
import ImageBanner from "@/components/ImageBanner";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { FileText, FileMedical, BriefcaseMedical, ShieldCheck, CheckCircle } from "lucide-react";

const Servicos = () => {
  return (
    <>
      <ImageBanner 
        imageUrl="https://images.unsplash.com/photo-1519389950473-47ba0277781c" 
        title="Nossos Serviços" 
        subtitle="Soluções completas em medicina e segurança do trabalho"
      />

      {/* Medicina do Trabalho */}
      <section id="medicina" className="py-16">
        <div className="container-section">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/2">
              <div className="mb-8">
                <h2 className="section-title">Medicina do Trabalho</h2>
                <p className="text-gray-700">
                  Oferecemos serviços especializados em medicina ocupacional para garantir 
                  a saúde dos colaboradores e o cumprimento das exigências legais.
                </p>
              </div>
              
              <div className="space-y-8">
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                  <div className="flex items-start">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center mr-4 shrink-0">
                      <FileMedical className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">Exames Ocupacionais</h3>
                      <p className="text-gray-700 mb-4">
                        Realizamos todos os tipos de exames exigidos pela legislação:
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-primary mr-2" />
                          <span className="text-gray-700">Exames Admissionais</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-primary mr-2" />
                          <span className="text-gray-700">Exames Periódicos</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-primary mr-2" />
                          <span className="text-gray-700">Exames de Retorno ao Trabalho</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-primary mr-2" />
                          <span className="text-gray-700">Exames de Mudança de Função</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-primary mr-2" />
                          <span className="text-gray-700">Exames Demissionais</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                  <div className="flex items-start">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center mr-4 shrink-0">
                      <FileText className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">Programas e Laudos</h3>
                      <p className="text-gray-700 mb-4">
                        Desenvolvemos e implementamos programas exigidos pela legislação:
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-primary mr-2" />
                          <span className="text-gray-700">PCMSO - Programa de Controle Médico de Saúde Ocupacional</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-primary mr-2" />
                          <span className="text-gray-700">Relatórios Anuais do PCMSO</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-primary mr-2" />
                          <span className="text-gray-700">Gestão do ASO (Atestado de Saúde Ocupacional)</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                  <div className="flex items-start">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center mr-4 shrink-0">
                      <BriefcaseMedical className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">Serviços Complementares</h3>
                      <p className="text-gray-700 mb-4">
                        Oferecemos uma variedade de serviços complementares em medicina ocupacional:
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-primary mr-2" />
                          <span className="text-gray-700">Coletas laboratoriais in company</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-primary mr-2" />
                          <span className="text-gray-700">Exames complementares específicos</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-primary mr-2" />
                          <span className="text-gray-700">Coordenação do PCMSO</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-primary mr-2" />
                          <span className="text-gray-700">Assessoria médica especializada</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6">
                  <Link to="/contato">
                    <Button className="bg-primary hover:bg-primary-dark">
                      Agende seus exames agora
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2 space-y-6">
              <img 
                src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81" 
                alt="Medicina do Trabalho" 
                className="w-full h-auto rounded-lg shadow-lg mb-6"
              />
              
              <div className="bg-primary/10 p-6 rounded-lg border border-primary/20">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Por que realizar exames ocupacionais?
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <ShieldCheck className="h-5 w-5 text-primary mr-3 shrink-0 mt-0.5" />
                    <span className="text-gray-700">
                      <strong>Conformidade legal:</strong> Cumprimento das normas regulamentadoras do 
                      Ministério do Trabalho, evitando multas e sanções.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <ShieldCheck className="h-5 w-5 text-primary mr-3 shrink-0 mt-0.5" />
                    <span className="text-gray-700">
                      <strong>Prevenção de doenças:</strong> Monitoramento contínuo da saúde dos 
                      colaboradores, identificando riscos antes que se tornem problemas graves.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <ShieldCheck className="h-5 w-5 text-primary mr-3 shrink-0 mt-0.5" />
                    <span className="text-gray-700">
                      <strong>Redução de absenteísmo:</strong> Colaboradores mais saudáveis 
                      resultam em menor índice de faltas e afastamentos.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <ShieldCheck className="h-5 w-5 text-primary mr-3 shrink-0 mt-0.5" />
                    <span className="text-gray-700">
                      <strong>Aumento da produtividade:</strong> Ambientes de trabalho mais 
                      seguros e saudáveis contribuem para maior eficiência e bem-estar.
                    </span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Diferenciais dos nossos serviços de Medicina do Trabalho
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 shrink-0 mt-0.5" />
                    <span className="text-gray-700">
                      Equipe médica especializada em medicina do trabalho
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 shrink-0 mt-0.5" />
                    <span className="text-gray-700">
                      Estrutura completa para realização de exames
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 shrink-0 mt-0.5" />
                    <span className="text-gray-700">
                      Sistema integrado de gestão de exames ocupacionais
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 shrink-0 mt-0.5" />
                    <span className="text-gray-700">
                      Atendimento personalizado e ágil
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 shrink-0 mt-0.5" />
                    <span className="text-gray-700">
                      Opção de atendimento in company para empresas
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Segurança do Trabalho */}
      <section id="seguranca" className="py-16 bg-gray-50">
        <div className="container-section">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/2 order-2 lg:order-1 space-y-6">
              <img 
                src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7" 
                alt="Segurança do Trabalho" 
                className="w-full h-auto rounded-lg shadow-lg mb-6"
              />
              
              <div className="bg-primary/10 p-6 rounded-lg border border-primary/20">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Benefícios da Segurança do Trabalho
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <ShieldCheck className="h-5 w-5 text-primary mr-3 shrink-0 mt-0.5" />
                    <span className="text-gray-700">
                      <strong>Proteção aos colaboradores:</strong> Ambientes mais seguros reduzem 
                      drasticamente o número de acidentes e doenças ocupacionais.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <ShieldCheck className="h-5 w-5 text-primary mr-3 shrink-0 mt-0.5" />
                    <span className="text-gray-700">
                      <strong>Conformidade legal:</strong> Cumprimento das normas regulamentadoras, 
                      evitando multas, interdições e ações trabalhistas.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <ShieldCheck className="h-5 w-5 text-primary mr-3 shrink-0 mt-0.5" />
                    <span className="text-gray-700">
                      <strong>Redução de custos:</strong> Menor incidência de acidentes significa 
                      economia com afastamentos, substituições e indenizações.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <ShieldCheck className="h-5 w-5 text-primary mr-3 shrink-0 mt-0.5" />
                    <span className="text-gray-700">
                      <strong>Melhoria da imagem corporativa:</strong> Empresas que investem em 
                      segurança são mais bem vistas por colaboradores, clientes e parceiros.
                    </span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Diferenciais dos nossos serviços em Segurança do Trabalho
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 shrink-0 mt-0.5" />
                    <span className="text-gray-700">
                      Profissionais especializados e com vasta experiência de campo
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 shrink-0 mt-0.5" />
                    <span className="text-gray-700">
                      Abordagem preventiva e proativa na identificação e controle de riscos
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 shrink-0 mt-0.5" />
                    <span className="text-gray-700">
                      Metodologia de trabalho baseada em dados e evidências
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 shrink-0 mt-0.5" />
                    <span className="text-gray-700">
                      Soluções personalizadas para cada tipo de empresa e atividade
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 shrink-0 mt-0.5" />
                    <span className="text-gray-700">
                      Acompanhamento contínuo e suporte na implementação das recomendações
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="lg:w-1/2 order-1 lg:order-2">
              <div className="mb-8">
                <h2 className="section-title">Segurança do Trabalho</h2>
                <p className="text-gray-700">
                  Nossa equipe especializada em segurança do trabalho oferece soluções 
                  completas para garantir ambientes seguros e conformidade legal.
                </p>
              </div>
              
              <div className="space-y-8">
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                  <div className="flex items-start">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center mr-4 shrink-0">
                      <FileText className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">Programas e Laudos</h3>
                      <p className="text-gray-700 mb-4">
                        Desenvolvemos e implementamos programas exigidos pela legislação:
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-primary mr-2" />
                          <span className="text-gray-700">PGR - Programa de Gerenciamento de Riscos</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-primary mr-2" />
                          <span className="text-gray-700">LTCAT - Laudo Técnico das Condições Ambientais de Trabalho</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-primary mr-2" />
                          <span className="text-gray-700">Laudos de Insalubridade e Periculosidade</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-primary mr-2" />
                          <span className="text-gray-700">Análise Ergonômica do Trabalho</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-primary mr-2" />
                          <span className="text-gray-700">Plano de Prevenção e Proteção Contra Incêndios (PPCI)</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                  <div className="flex items-start">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center mr-4 shrink-0">
                      <ShieldCheck className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">Consultoria e Assessoria</h3>
                      <p className="text-gray-700 mb-4">
                        Serviços especializados para garantir a segurança no ambiente de trabalho:
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-primary mr-2" />
                          <span className="text-gray-700">Avaliação e gestão de riscos ocupacionais</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-primary mr-2" />
                          <span className="text-gray-700">Adequação às normas regulamentadoras</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-primary mr-2" />
                          <span className="text-gray-700">Análise e prevenção de acidentes de trabalho</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-primary mr-2" />
                          <span className="text-gray-700">Dimensionamento de SESMT</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-primary mr-2" />
                          <span className="text-gray-700">Assessoria para CIPA</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                  <div className="flex items-start">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center mr-4 shrink-0">
                      <BriefcaseMedical className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">Treinamentos</h3>
                      <p className="text-gray-700 mb-4">
                        Oferecemos treinamentos obrigatórios e complementares:
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-primary mr-2" />
                          <span className="text-gray-700">NR-10 (Segurança em Instalações Elétricas)</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-primary mr-2" />
                          <span className="text-gray-700">NR-11 (Operação de Equipamentos)</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-primary mr-2" />
                          <span className="text-gray-700">NR-12 (Segurança em Máquinas e Equipamentos)</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-primary mr-2" />
                          <span className="text-gray-700">NR-33 (Espaços Confinados)</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-primary mr-2" />
                          <span className="text-gray-700">NR-35 (Trabalho em Altura)</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-primary mr-2" />
                          <span className="text-gray-700">Primeiros socorros e brigada de incêndio</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6">
                  <Link to="/contato">
                    <Button className="bg-primary hover:bg-primary-dark">
                      Solicite uma consultoria
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ */}
      <section id="faq" className="py-16">
        <div className="container-section">
          <div className="text-center mb-12">
            <h2 className="section-title">Perguntas Frequentes</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Esclarecemos suas principais dúvidas sobre medicina e segurança do trabalho.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                Quais exames ocupacionais são obrigatórios?
              </h3>
              <p className="text-gray-700">
                São obrigatórios os exames admissionais, periódicos, de retorno ao trabalho 
                (após afastamento superior a 30 dias), de mudança de função e demissionais. 
                O médico coordenador do PCMSO determinará os exames complementares necessários 
                conforme os riscos ocupacionais.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                Como saber quais programas minha empresa precisa implementar?
              </h3>
              <p className="text-gray-700">
                Os programas obrigatórios dependem do grau de risco e número de funcionários da 
                empresa. O PCMSO e o PGR são obrigatórios para todas as empresas com empregados 
                regidos pela CLT. Nossa equipe pode realizar uma avaliação para determinar exatamente 
                o que sua empresa precisa.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                É possível realizar os exames na própria empresa?
              </h3>
              <p className="text-gray-700">
                Sim, oferecemos o serviço in company para empresas com um número mínimo de funcionários. 
                Nossa equipe pode se deslocar até a empresa para realizar exames clínicos e coletas para 
                exames complementares, otimizando tempo e reduzindo a ausência dos colaboradores.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                Qual a diferença entre PGR e PPRA?
              </h3>
              <p className="text-gray-700">
                O PGR (Programa de Gerenciamento de Riscos) substituiu o PPRA (Programa de Prevenção de 
                Riscos Ambientais) com a nova NR-1. O PGR é mais abrangente, contemplando não apenas os 
                riscos ambientais, mas também os riscos ergonômicos e de acidentes, além de exigir um 
                inventário de riscos mais detalhado e plano de ação.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                Quais são as consequências de não cumprir as normas de SST?
              </h3>
              <p className="text-gray-700">
                O não cumprimento pode resultar em multas que variam conforme o porte da empresa e a 
                gravidade da infração, interdição de setores ou da empresa inteira, ações civis públicas, 
                ações trabalhistas, aumento de alíquota de SAT/RAT e dificuldades para obter certidões 
                e financiamentos.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                Qual a periodicidade dos treinamentos de segurança?
              </h3>
              <p className="text-gray-700">
                A periodicidade varia conforme a norma regulamentadora. Por exemplo, treinamentos de 
                NR-10 têm validade de 2 anos, NR-33 e NR-35 de 1 ano. Já outros, como da CIPA, são 
                realizados a cada novo mandato. Consulte nossa equipe para verificar a periodicidade 
                específica para sua empresa.
              </p>
            </div>
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
            Entre em contato conosco hoje mesmo para uma avaliação personalizada 
            das necessidades de medicina e segurança do trabalho da sua empresa.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contato">
              <Button className="bg-white text-primary hover:bg-gray-100 text-lg px-6 py-3">
                Solicitar proposta
              </Button>
            </Link>
            <a href="tel:+551199999999">
              <Button variant="outline" className="text-white border-white hover:bg-white/10 text-lg px-6 py-3">
                Ligue: (11) 9999-9999
              </Button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Servicos;
