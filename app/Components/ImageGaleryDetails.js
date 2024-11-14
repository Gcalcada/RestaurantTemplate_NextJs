"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Slider from "react-slick";

export default function MenuItemDetails({
  menuItemId,
  menuItemImageUrl,
  menuItemImageUrl2,
}) {
  // Verificação do array de imagens deve ser feita depois dos Hooks, e não condicionalmente.
  const [mainImage, setMainImage] = useState(menuItemImageUrl2[0]);
  const [isDesktop, setIsDesktop] = useState(false);

  // Hook useEffect para detectar a largura da janela
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    handleResize(); // Atualiza a condição inicial
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Este useEffect não depende de condicional, por isso sempre será chamado

  const sliderRef = useRef(null);

  // Configuração do slider
  const settings = {
    speed: 300, // Velocidade da transição
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    arrows: isDesktop, // Exibe as setas dependendo do dispositivo
    adaptiveHeight: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    afterChange: (index) => {
      setMainImage(menuItemImageUrl2[index]);
    },
  };

  const handleThumbnailClick = (index) => {
    setMainImage(menuItemImageUrl2[index]);
    sliderRef.current.slickGoTo(index);
  };

  // Componentes das setas do slider
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "rgba(0, 0, 0, 0.5)",
          color: "white",
          width: "50px",
          height: "50px",
          fontSize: "100px",
          borderRadius: "50%",
          position: "absolute",
          top: "50%",
          right: "30px",
          zIndex: 10,
          cursor: "pointer",
          transition: "background 0.3s, color 0.3s",
        }}
        onClick={onClick}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = "rgb(234, 179, 8)";
          e.currentTarget.style.color = "yellow";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = "rgba(0, 0, 0, 0.5)";
          e.currentTarget.style.color = "white";
        }}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "rgba(0, 0, 0, 0.5)",
          color: "white",
          width: "50px",
          height: "50px",
          fontSize: "100px",
          borderRadius: "50%",
          position: "absolute",
          top: "50%",
          left: "30px",
          zIndex: 10,
          cursor: "pointer",
          transition: "background 0.3s, color 0.3s",
        }}
        onClick={onClick}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = "rgb(234, 179, 8)";
          e.currentTarget.style.color = "yellow";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = "rgba(0, 0, 0, 0.5)";
          e.currentTarget.style.color = "white";
        }}
      />
    );
  }

  // Verifica se o array de imagens não está vazio antes de renderizar
  if (!Array.isArray(menuItemImageUrl2) || menuItemImageUrl2.length === 0) {
    return <div>No additional images available.</div>;
  }

  return (
    <div className="w-full lg:w-1/2">
      {/* Slider para as imagens principais */}
      <Slider ref={sliderRef} {...settings}>
        {menuItemImageUrl2.map((colhoes, index) => (
          <div key={index}>
            <div
              className="cursor-pointer justify-center items-center object-contain w-full"
              onClick={() => setMainImage(colhoes)}>
              <Image
                src={colhoes}
                alt={`Image ${index + 1} of menu item ${menuItemId}`}
                width={400}
                height={400}
                quality={100}
                className="flex object-cover w-full h-[250px] md:h-[300px] lg:h-[380px] xl:h-[400px]"
              />
            </div>
          </div>
        ))}
      </Slider>

      {/* Exibição das miniaturas fora do slider */}
      <div className="flex flex-row mt-4 gap-4">
        {menuItemImageUrl2.map((colhoes, index) => (
          <div
            key={index}
            className={`cursor-pointer ${
              mainImage === colhoes
                ? "border-4 border-yellow-500 shadow-[0px 0px 15px 5px rgba(234, 179, 8, 0.7)] transition-all duration-300 ease-in-out scale-105"
                : "border-4 border-gray-300 shadow-lg shadow-[rgba(255, 255, 255, 0.15) 0px 8px 16px] transition-all duration-300 ease-in-out"
            } hover:scale-110 hover:shadow-xl hover:shadow-[rgba(234, 179, 8, 0.5)] transition-all duration-300 ease-in-out`}
            onClick={() => handleThumbnailClick(index)}>
            <Image
              src={colhoes}
              alt={`Thumbnail ${index + 1} of menu item ${menuItemId}`}
              width={100}
              height={100}
              className="object-fill w-52 h-full"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
