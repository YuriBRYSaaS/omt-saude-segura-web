
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import Logo from "./Logo";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-white shadow-md py-2" 
          : "bg-white/80 backdrop-blur-sm py-4"
      }`}
    >
      <div className="container-section flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <Logo />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <Link
            to="/"
            className={`font-medium hover:text-primary transition-colors ${
              location.pathname === "/" ? "text-primary" : "text-gray-600"
            }`}
          >
            Início
          </Link>
          <Link
            to="/sobre"
            className={`font-medium hover:text-primary transition-colors ${
              location.pathname === "/sobre" ? "text-primary" : "text-gray-600"
            }`}
          >
            Sobre
          </Link>
          <Link
            to="/servicos"
            className={`font-medium hover:text-primary transition-colors ${
              location.pathname === "/servicos" ? "text-primary" : "text-gray-600"
            }`}
          >
            Serviços
          </Link>
          <Link
            to="/contato"
            className={`font-medium hover:text-primary transition-colors ${
              location.pathname === "/contato" ? "text-primary" : "text-gray-600"
            }`}
          >
            Contato
          </Link>
          <Button variant="default" className="bg-primary hover:bg-primary-dark">
            <Phone className="mr-2 h-4 w-4" />
            (31) 3469-0047
          </Button>
        </div>

        {/* Mobile Navigation Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none"
          aria-label="Menu"
        >
          <svg
            className="h-6 w-6 text-gray-600"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16m-7 6h7" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="container px-4 py-4 flex flex-col space-y-3">
            <Link
              to="/"
              className={`px-2 py-1 rounded-md font-medium ${
                location.pathname === "/" ? "text-primary bg-blue-50" : "text-gray-600"
              }`}
              onClick={() => setIsOpen(false)}
            >
              Início
            </Link>
            <Link
              to="/sobre"
              className={`px-2 py-1 rounded-md font-medium ${
                location.pathname === "/sobre" ? "text-primary bg-blue-50" : "text-gray-600"
              }`}
              onClick={() => setIsOpen(false)}
            >
              Sobre
            </Link>
            <Link
              to="/servicos"
              className={`px-2 py-1 rounded-md font-medium ${
                location.pathname === "/servicos" ? "text-primary bg-blue-50" : "text-gray-600"
              }`}
              onClick={() => setIsOpen(false)}
            >
              Serviços
            </Link>
            <Link
              to="/contato"
              className={`px-2 py-1 rounded-md font-medium ${
                location.pathname === "/contato" ? "text-primary bg-blue-50" : "text-gray-600"
              }`}
              onClick={() => setIsOpen(false)}
            >
              Contato
            </Link>
            <Button variant="default" className="bg-primary hover:bg-primary-dark w-full">
              <Phone className="mr-2 h-4 w-4" />
              (31) 3469-0047
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
