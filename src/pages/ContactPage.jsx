// src/pages/ContactPage.jsx
import React from "react";
import { FaLinkedin, FaEnvelope, FaInstagram } from "react-icons/fa";

const ContactPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-neutral-900 text-gray-50">
      <h1 className="text-3xl uppercase mb-16 font-bold bg-gradient-to-r from-[#DD4A2D] to-[#5BAEBC] bg-clip-text text-transparent">
        Contato
      </h1>
      <img
        src="https://media.licdn.com/dms/image/v2/D4D03AQGLdbL7f9vGTA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1724866788273?e=1736985600&v=beta&t=v1JwYogcuFjxtgpi7PSDnUKVEBqb43oyTduE-BO-RYw"
        alt="Minha Foto"
        className="w-56 h-56 rounded-full mb-16 object-cover"
      />
      <h2 className="text-2xl mb-4">Gustavo Mamede</h2>
      <div className="flex space-x-6 text-3xl">
        <a
          href="https://www.linkedin.com/in/gustavomamede99/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-gray-200"
        >
          <FaLinkedin />
        </a>
        <a
          href="mailto:gustavomamede99@gmail.com"
          className="text-gray-400 hover:text-gray-200"
        >
          <FaEnvelope />
        </a>
        <a
          href="https://www.instagram.com/mvmede"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-gray-200"
        >
          <FaInstagram />
        </a>
      </div>
    </div>
  );
};

export default ContactPage;
