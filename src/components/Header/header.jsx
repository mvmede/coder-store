// src/components/Header/header.jsx
import React, { useState } from "react";
import logo from "../assets/logo.png";
import CartIcon from "../icons/cart";
import CloseIcon from "../icons/close";
import MenuMobile from "../menuMobile/menuMobile";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-neutral-950 text-white p-4">
      <div className="container mx-auto flex items-center md:max-w-[1480px] justify-between">
        <div className="text-xl font-bold">
          <Link to={`/`}>
            <img src={logo} alt="Logo" className="pl-4 h-10" />
          </Link>
        </div>
        <nav className="hidden md:flex flex-grow justify-center">
          <ul className="flex space-x-6">
            <li>
              <a href="/" className="font-Inter hover:text-gray-400">
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

        <div className="flex items-center space-x-4 pr-4">
          <a href="/carrinho" className="hover:text-gray-400 md:pl-20">
            <CartIcon className="h-6 w-6 " />
          </a>

          <div className="pt-2 md:hidden">
            <MenuMobile onClick={toggleMenu} />
          </div>
        </div>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0  bg-black bg-opacity-50 z-20"
          onClick={toggleMenu}
        >
          <div className="fixed right-0 top-0 w-full h-full max-w-md bg-neutral-950 p-4">
            <button onClick={toggleMenu} className="pl-4 pt-4 text-white">
              <CloseIcon className="w-6 h-6" />
            </button>
            <ul className="flex flex-col items-center font-bold space-y-16 mt-6">
              <li>
                <a
                  href="/home"
                  className="font-Inter hover:text-gray-400 text-xl"
                >
                  Home
                </a>
              </li>
              <li>
                <a href="/products" className="hover:text-gray-400 text-xl">
                  Produtos
                </a>
              </li>
              <li>
                <a href="/sobre" className="hover:text-gray-400 text-xl">
                  Sobre nós
                </a>
              </li>
              <li>
                <a href="/contato" className="hover:text-gray-400 text-xl">
                  Contato
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
