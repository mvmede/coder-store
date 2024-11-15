import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const BannerRotativo = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const banners = [
    {
      id: 1,
      imageUrl:
        "https://www.pbtech.com/imglib/blockimage/20230728151318_Picture-of-the-Razer-Store-at-PB-Tech.webp",
      alt: "Promoção 1",
      title: "Grande Desconto de Fim de Ano!",
      description: "Aproveite descontos incríveis em toda linha RAZER.",
    },
    {
      id: 2,
      imageUrl:
        "https://cdn.awsli.com.br/1920x1920/2578/2578127/banner/2-f9ddaayecw.png",
      alt: "Promoção 2",
      title: "Novidades para o Seu Escritório",
      description: "Confira os lançamentos da nossa linha de Notebooks.",
    },
  ];

  const nextBanner = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
  };

  const prevBanner = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + banners.length) % banners.length
    );
  };

  useEffect(() => {
    const interval = setInterval(nextBanner, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full">
      <motion.div
        className="w-full h-[400px] bg-gray-200"
        key={banners[currentIndex].id}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="w-full h-full relative">
          <img
            src={banners[currentIndex].imageUrl}
            alt={banners[currentIndex].alt}
            className="w-full h-full object-cover rounded-md"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-60 rounded-md"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center px-4 sm:px-8 md:px-20">
            <h2 className="text-base md:text-3xl font-bold">
              {banners[currentIndex].title}
            </h2>
            <p className="mt-2 text-sm md:text-xl">
              {banners[currentIndex].description}
            </p>
          </div>
        </div>
      </motion.div>

      <div className="absolute top-1/2 left-0 right-0 flex justify-between px-4">
        <button
          onClick={prevBanner}
          className="bg-black bg-opacity-50 text-white px-4 py-2 rounded-full"
        >
          &#8592;
        </button>
        <button
          onClick={nextBanner}
          className="bg-black bg-opacity-50 text-white px-4 py-2 rounded-full"
        >
          &#8594;
        </button>
      </div>
    </div>
  );
};

export default BannerRotativo;
