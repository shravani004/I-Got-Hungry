import Image from "next/image";
import React from "react";

const Hero = ({ children, url, alt }) => {
  return (
    <div>
      <Image
        src={url}
        width={900}
        height={400}
        alt={alt}
        className="w-full h-32 sm:h-48 object-cover"
      />
    </div>
  );
};

export default Hero;
