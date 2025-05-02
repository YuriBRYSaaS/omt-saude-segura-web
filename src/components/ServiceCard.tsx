
import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
  color?: "primary" | "secondary";
}

const ServiceCard = ({
  icon,
  title,
  description,
  link,
  color = "primary",
}: ServiceCardProps) => {
  const bgColor = color === "primary" 
    ? "bg-gradient-to-br from-primary to-primary-light" 
    : "bg-gradient-to-br from-accent to-secondary";
    
  const textColor = color === "primary" ? "text-white" : "text-gray-800";

  return (
    <div className="rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 h-full">
      <div className={`p-6 ${bgColor}`}>
        <div className="h-14 w-14 rounded-lg bg-white/25 flex items-center justify-center mb-4">
          {icon}
        </div>
        <h3 className={`font-montserrat text-xl font-semibold mb-2 ${textColor}`}>
          {title}
        </h3>
        <p className={`mb-4 ${color === "primary" ? "text-white/90" : "text-gray-700"}`}>
          {description}
        </p>
        <Link to={link} className={`group inline-flex items-center font-medium ${color === "primary" ? "text-white" : "text-primary"}`}>
          Saiba mais <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
