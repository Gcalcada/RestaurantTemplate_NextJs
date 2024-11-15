"use client";
import * as Typewriter from "react-effect-typewriter";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const [isSecondVisible, setIsSecondVisible] = useState(false); // Estado para o segundo parágrafo
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Quando o primeiro parágrafo estiver visível, inicia a visibilidade do segundo após um atraso
          setTimeout(() => setIsSecondVisible(true), 14000); // Ajuste o tempo conforme necessário (3000ms = 3 segundos)
        } else {
          setIsVisible(false);
          setIsSecondVisible(false);
        }
      },
      {
        threshold: 0.1,
      }
    );

    // Salva a referência da seção em uma variável para evitar o acesso direto durante a limpeza
    const currentSectionRef = sectionRef.current;

    if (currentSectionRef) {
      observer.observe(currentSectionRef);
    }

    return () => {
      if (currentSectionRef) {
        observer.unobserve(currentSectionRef);
      }
    };
  }, []); // Array vazio para rodar apenas uma vez

  return (
    <section
      ref={sectionRef}
      className="py-12 px-6 sm:py-16 sm:px-8 bg-yellow-500 text-white">
      <div className="max-w-7xl mx-auto grid gap-8 md:grid-cols-2 md:items-center md:gap-12">
        <div className="flex justify-center md:mb-0">
          <Image
            width={200}
            height={200}
            src="/images/chef.jpg"
            alt="Our Chef"
            className={`rounded-lg shadow-lg w-full max-w-sm sm:max-w-md object-cover transition-opacity duration-1000 ease-in-out ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          />
        </div>

        <div className="about-us-section text-center md:text-left">
          <h2 className="text-2xl sm:text-4xl font-bold mb-4">
            {isVisible && (
              <span className="inline-block">
                <Typewriter.Paragraph typingSpeed={50}>
                  About Us
                </Typewriter.Paragraph>
              </span>
            )}
          </h2>

          <div className="text-left text-base sm:text-lg mb-4 sm:mb-6 leading-relaxed">
            {isVisible && (
              <span className="inline-block">
                <Typewriter.Paragraph typingSpeed={20}>
                  At our restaurant, we believe in bringing the freshest
                  ingredients and authentic flavors to your table. Our chefs are
                  passionate about crafting delicious dishes that will make your
                  dining experience unforgettable.
                </Typewriter.Paragraph>
              </span>
            )}
          </div>

          <div className="text-left text-base sm:text-lg leading-relaxed mb-4">
            {isSecondVisible && ( // Exibe o segundo parágrafo após o primeiro
              <span className="inline-block">
                <Typewriter.Paragraph typingSpeed={30}>
                  Join us for an experience where tradition meets innovation,
                  and every dish is crafted with love and expertise. We are
                  committed to providing a memorable meal that you will want to
                  relive time and time again!
                </Typewriter.Paragraph>
              </span>
            )}
          </div>

          <div className="flex justify-center md:justify-start space-x-4 sm:space-x-6 text-yellow-300 mt-4">
            <i className="fas fa-seedling text-2xl sm:text-3xl"></i>
            <i className="fas fa-utensils text-2xl sm:text-3xl"></i>
            <i className="fas fa-glass-cheers text-2xl sm:text-3xl"></i>
          </div>
        </div>
      </div>
    </section>
  );
}
