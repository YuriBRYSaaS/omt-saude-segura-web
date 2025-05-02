
import React from "react";

interface ImageBannerProps {
  imageUrl: string;
  title: string;
  subtitle?: string;
}

const ImageBanner = ({ imageUrl, title, subtitle }: ImageBannerProps) => {
  return (
    <div 
      className="relative h-[30vh] md:h-[40vh] bg-cover bg-center flex items-center justify-center"
      style={{ 
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${imageUrl})`
      }}
    >
      <div className="text-center px-4">
        <h1 className="font-montserrat text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2">
          {title}
        </h1>
        {subtitle && (
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
};

export default ImageBanner;
