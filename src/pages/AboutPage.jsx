// src/pages/AboutPage.jsx
import React from "react";
import logo from "../components/assets/logo.png";

const AboutPage = () => {
  return (
    <div>
      <main className="pt-36 bg-neutral-900  min-h-screen h-full">
        <img
          src={logo}
          alt="Logo"
          className="md:w-64 w-56 flex mx-auto mb-20 mt-24 md:mt-32"
        />

        <div className="text-gray-50 text-center md:px-48 px-8 ">
          <h1 className="text-3xl uppercase mb-8 font-bold bg-gradient-to-r from-[#DD4A2D] to-[#5BAEBC] bg-clip-text text-transparent">
            Sobre nós{" "}
          </h1>
          <p className="md:text-lg text-md mt-4">
            Somos uma loja especializada em periféricos de alta qualidade,
            oferecendo uma ampla gama de produtos para gamers e profissionais.
            Em nosso catálogo, você encontrará teclados, mouses, headsets e
            outros acessórios das melhores marcas do mercado. Nosso objetivo é
            garantir uma experiência de compra prática e confiável, atendendo a
            todas as suas necessidades tecnológicas.
          </p>
        </div>
      </main>
    </div>
  );
};

export default AboutPage;
