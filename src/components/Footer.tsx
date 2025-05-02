
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container-section">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-montserrat text-xl font-semibold mb-4">OMT</h3>
            <p className="text-gray-300 mb-4">
              Soluções completas em medicina e segurança do trabalho para empresas
              que valorizam a saúde e o bem-estar de seus colaboradores.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary/40 transition-colors"
                aria-label="Facebook"
              >
                <svg
                  className="h-4 w-4 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="#"
                className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary/40 transition-colors"
                aria-label="Instagram"
              >
                <svg
                  className="h-4 w-4 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="#"
                className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary/40 transition-colors"
                aria-label="WhatsApp"
              >
                <svg
                  className="h-4 w-4 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.297-.497.1-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"
                  />
                  <path
                    d="M12 0C5.373 0 0 5.373 0 12c0 6.627 5.373 12 12 12s12-5.373 12-12c0-6.627-5.373-12-12-12zm6.586 16.809c-.276.773-1.076 1.448-2.022 1.68-.557.135-1.289.166-2.093-.037-3.473-1.022-6.282-5.015-6.475-5.247-.189-.23-1.526-2.03-1.526-3.868 0-1.837.983-2.738 1.33-3.113.346-.375.758-.463.993-.463.239 0 .479.001.684.019.205.017.481-.081.748.561.273.65.927 2.259 1.007 2.423.081.165.136.359.036.569-.101.21-.185.316-.352.526-.166.21-.347.44-.492.587-.148.153-.303.318-.13.623.174.305.774 1.304 1.662 2.112.515.467 1.157.861 1.618 1.046.275.111.488.145.671.015.184-.13.22-.481.333-.891.113-.41.219-.352.378-.214.159.137 1.007.893 1.177 1.044.169.15.292.225.341.375.05.149.05.892-.253 1.746z"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="#"
                className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary/40 transition-colors"
                aria-label="LinkedIn"
              >
                <svg
                  className="h-4 w-4 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                  />
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-montserrat text-xl font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white hover:underline transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link to="/sobre" className="text-gray-300 hover:text-white hover:underline transition-colors">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link to="/servicos" className="text-gray-300 hover:text-white hover:underline transition-colors">
                  Nossos Serviços
                </Link>
              </li>
              <li>
                <Link to="/contato" className="text-gray-300 hover:text-white hover:underline transition-colors">
                  Contato
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-300 hover:text-white hover:underline transition-colors">
                  Política de Privacidade
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-montserrat text-xl font-semibold mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 text-primary shrink-0 mt-0.5" />
                <span className="text-gray-300">
                  Rua Carmélia Flora, 37, Centro<br />
                  Campestre - MG, 37730-000
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-primary shrink-0" />
                <a href="tel:+551199999999" className="text-gray-300 hover:text-white hover:underline transition-colors">
                  (11) 9999-9999
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-primary shrink-0" />
                <a href="mailto:contato@omtsaude.com.br" className="text-gray-300 hover:text-white hover:underline transition-colors">
                  contato@omtsaude.com.br
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-6 mt-6 text-sm text-gray-400 text-center">
          <p>&copy; {currentYear} OMT - Ocupacional Medicina do Trabalho. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
