import React from "react";
import Link from 'next/link'
import { footerDocumentation, footerIcon } from "./Footer";

const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <footer className="relative flex flex-col-reverse md:flex-row justify-between items-center w-full min-h-[100px] bg-[#000014] px-4 md:px-8 lg:px-20 py-6 md:py-0 gap-6 md:gap-4 mt-[100px]">
      {/* Copyright section */}
      <div className="text-center md:text-left">
        <p className="text-sm md:text-base text-gray-600">
          copyright@Autoswappr {date}
        </p>
      </div>

      {/* Social icons section */}
      <div className="flex items-center gap-6">
        {footerIcon.map((icon, index) => (
          <Link
            key={index}
            href={icon.path}
            className="text-sm md:text-xl hover:opacity-80 cursor-pointer"
          >
            <icon.icons />
            {/* w-4 h-4 md:w-5 md:h-5  */}
          </Link>
        ))}
      </div>

      {/* Navigation section */}
      <div className="flex flex-row items-center gap-4 md:gap-8">
        {footerDocumentation.map((doc, index) => (
          <Link
            key={index}
            href={doc.path}
            className="text-sm md:text-base hover:opacity-80 cursor-pointer"
          >
            {doc.name}
          </Link>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
