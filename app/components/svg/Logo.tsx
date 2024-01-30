import React from "react";
import Image from "next/image";

interface LogoProps {
  width?: number;
  height?: number;
}

const Logo: React.FC<LogoProps> = ({ width = 1000, height = 1000 }) => {
    return (
       <img src="Logo.png" alt="My Logo" width={500} height={500} />
    );
};

export default Logo;
