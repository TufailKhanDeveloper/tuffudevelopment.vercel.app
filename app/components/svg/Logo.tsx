import React from "react";
import Image from "next/image";

interface LogoProps {
  width?: number;
  height?: number;
}

const Logo: React.FC<LogoProps> = ({ width = 1000, height = 1000 }) => {
    return (
       <img src="Logo.png" alt="My Logo" width={1000} height={1000} />
    );
};

export default Logo;
