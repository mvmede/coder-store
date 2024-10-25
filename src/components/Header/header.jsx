// src/components/Header/header.jsx
import React from "react";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <header className="bg-neutral-950 text-white p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-xl font-bold">
          <img src={logo} alt="Logo" className="h-10" />{" "}
        </div>

        {/* Navegação */}
        <nav className="flex-1 text-center">
          <ul className="flex justify-center space-x-6">
            <li>
              <a href="/home" className="font-Inter hover:text-gray-400">
                Home
              </a>
            </li>
            <li>
              <a href="/products" className="hover:text-gray-400">
                Produtos
              </a>
            </li>
            <li>
              <a href="/sobre" className="hover:text-gray-400">
                Sobre nós
              </a>
            </li>
            <li>
              <a href="/contato" className="hover:text-gray-400">
                Contato
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
