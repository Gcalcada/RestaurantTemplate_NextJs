"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useCart } from "../CartContext";
import { menuItems } from "../menuData";
import Image from "next/image";
const Bot = () => {
  const [step, setStep] = useState(0);
  const [userResponse, setUserResponse] = useState("");
  const { addToCart } = useCart();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const handleResponse = (response) => {
    setUserResponse(response);
    if (step === 0) {
      setStep(1);
    } else if (step === 1) {
      setStep(2);
    } else if (step === 2) {
      setStep(3);
    }
  };

  const renderMenu = () => {
    return (
      <div className="mt-4 space-y-4 max-h-60 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300">
        <p className="text-base font-medium text-center">Escolha um dos nossos pratos deliciosos:</p>
        <ul className="space-y-4">
          {menuItems.map((dish) => (
            <li key={dish.id} className="bg-white p-3 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold">{dish.name}</h3>
              <p className="text-gray-600 text-sm">{dish.description}</p>
              <p className="font-bold text-green-600 text-sm">Preço: ${dish.price.toFixed(2)}</p>
              <Image width={200} height={200} quality={60} src={dish.imageUrl} alt={dish.name} className="w-full h-28 object-cover mt-2 rounded-lg" />
              <button
                onClick={() => handlePurchase(dish)}
                className="mt-3 w-full bg-green-500 text-white py-1 rounded-lg text-sm"
              >
                Adicionar ao Carrinho
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  const handlePurchase = (dish) => {
    addToCart(dish);
    setStep(3);
  };

  const goToCart = () => {
    router.push("/Cart");
  };

  return (
    <>
      {!isOpen && (
        <div className="fixed bottom-4 right-4 z-50">
          <button
            onClick={() => setIsOpen(true)}
            className="bg-blue-500 text-white rounded-full p-3 shadow-lg text-sm"
          >
            🗨️
          </button>
        </div>
      )}

      {isOpen && (
        <div className="fixed bottom-4 right-4 z-50 max-w-[95vw] w-full sm:max-w-xs bg-white text-gray-800 p-3 rounded-xl shadow-lg overflow-hidden">
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-semibold text-sm">Olá! Eu sou o assistente virtual do restaurante.</h3>
            <button onClick={() => setIsOpen(false)} className="text-lg text-gray-400 hover:text-gray-600">
              ❌
            </button>
          </div>

          <div className="space-y-3">
            {step === 0 && (
              <div>
                <p className="text-sm">Você está à procura de um lanche hoje?</p>
                <button
                  onClick={() => handleResponse("Sim")}
                  className="w-full bg-green-500 text-white py-1 rounded-lg text-sm mt-2"
                >
                  Sim
                </button>
                <button
                  onClick={() => handleResponse("Não")}
                  className="w-full bg-gray-600 text-white py-1 rounded-lg text-sm mt-2"
                >
                  Não, obrigado
                </button>
              </div>
            )}

            {step === 1 && userResponse && (
              <div>
                <p className="text-sm">Ótimo! Aqui estão alguns dos nossos pratos mais populares.</p>
                {renderMenu()}
              </div>
            )}

            {step === 2 && (
              <div>
                <p className="text-sm">Ótima escolha! Adicionei o prato ao seu carrinho.</p>
                <button
                  onClick={goToCart}
                  className="w-full bg-blue-500 text-white py-1 rounded-lg text-sm mt-2"
                >
                  Ver Carrinho
                </button>
              </div>
            )}

            {step === 3 && (
              <div>
                <p className="text-sm">Está pronto para finalizar sua compra?</p>
                <button
                  onClick={goToCart}
                  className="w-full bg-blue-500 text-white py-1 rounded-lg text-sm mt-2"
                >
                  Finalizar Compra
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Bot;
