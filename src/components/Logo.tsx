
import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "" }) => {
  return (
    <Link to="/" className={`inline-block ${className}`}>
      <img 
        src="/lovable-uploads/47f710ae-8c4d-4114-b82c-3917c521a0a7.png" 
        alt="OMT Medicina e Segurança do Trabalho" 
        className="h-12 w-auto"
      />
    </Link>
  );
};

export default Logo;
