// src/components/LogoSlider.jsx

import React from "react";

const logos = [
  {
    name: "Airbnb",
    src: "https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_Bélo.svg",
  },
  {
    name: "Google",
    src: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
  },
  {
    name: "Microsoft",
    src: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
  },
  {
    name: "Spotify",
    src: "https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg",
  },
  {
    name: "Amazon",
    src: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
  },
  {
    name: "Netflix",
    src: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
  },
];

const LogoSlider = () => {
  return (
    <div className="bg-white py-8 overflow-hidden mt-8">
      <div className="flex items-center animate-scroll whitespace-nowrap">
        {/* Duplicate logos for infinite scroll */}
        {[...logos, ...logos].map((logo, index) => (
          <div
            key={index}
            className="flex-shrink-0 px-6 sm:px-10 md:px-16 lg:px-20"
          >
            <img
              src={logo.src}
              alt={logo.name}
              className="h-8 sm:h-10 md:h-12 lg:h-16 object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoSlider;
