import React from "react";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-neutral-950 text-white">
      <div className="container mx-auto flex flex-col py-24 items-center md:flex-row justify-between">
        <div className="flex-shrink-0 mb-4 md:mb-0">
          <img src={logo} alt="Logo" className="w-56" />
        </div>

        <nav className="flex space-x-4 mb-4 mt-8 md:mb-4">
          <a href="/home" className="hover:underline">
            Home
          </a>
          <a href="/sobre" className="hover:underline">
            Sobre
          </a>
          <a href="/produtos" className="hover:underline">
            Produtos
          </a>
          <a href="/contato" className="hover:underline">
            Contato
          </a>
        </nav>
      </div>

      <div className="text-center text-sm md:text-sm pb-8 mt-4 md:mx-0  mx-8 md:mt-2">
        <p>
          Site desenvolvido para o projeto do curso da Coderhouse por Gustavo
          Mamede.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
