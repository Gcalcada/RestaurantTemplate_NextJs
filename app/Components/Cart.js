"use client";
import { useCart } from "../Components/CartContext";
import { FaPlus, FaMinus, FaTrash } from "react-icons/fa";
import Image from "next/image";
import BreadcrumbsComponent from "../Components/BreadcrumbsComponent";

export default function Cart() {
  const {
    cartItems,
    totalPrice,
    increaseQuantity,
    decreaseQuantity,
    removeItem,
  } = useCart();

  return (
    <>
      <BreadcrumbsComponent />
      <section className="py-10 px-4 sm:px-6  bg-gradient-to-br  min-h-screen">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-10 text-center text-white">
            Meu Carrinho de Compras
          </h1>

          {cartItems.length === 0 ? (
            <p className="text-center text-lg text-white">
              O carrinho está vazio.
            </p>
          ) : (
            <div className="space-y-8">
              {/* Lista de itens do carrinho */}
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="p-5 card-background  cart-item rounded-lg shadow-lg flex flex-col sm:flex-row gap-4 items-center sm:items-start transition-transform hover:scale-105">
                  {/* Imagem do Produto */}
                  <div className="flex justify-start">
                    <Image
                      width={100}
                      height={100}
                      src={item.imageUrl}
                      alt={item.name}
                      className="object-cover rounded-lg border border-gray-200 w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40"
                    />
                  </div>

                  {/* Informações do Produto */}
                  <div className="flex-1 text-left sm:text-left">
                    <h2 className="text-lg font-semibold CardsTextoMenu">
                      {item.name}
                    </h2>
                    <p className="text-sm CardsTextoMenu mt-1">
                      Preço unitário:{" "}
                      <span className="price-card font-medium">
                        ${item.price.toFixed(2)}
                      </span>
                    </p>
                    <p className="text-sm CardsTextoMenu">
                      Subtotal:{" "}
                      <span className="price-card font-medium">
                        ${(item.price * item.quantity).toFixed(2)}
                      </span>
                    </p>
                    <div className="flex  items-center gap-2">
                      <button
                        onClick={() => decreaseQuantity(item.id)}
                        className=" bg-blue-600 p-2 rounded-full hover:bg-yellow-300 shadow-sm">
                        <FaMinus />
                      </button>
                      <span className="text-lg font-semibold price-card">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => increaseQuantity(item.id)}
                        className=" bg-blue-600 p-2 rounded-full hover:bg-yellow-300 shadow-sm">
                        <FaPlus />
                      </button>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-red-600 hover:text-red-800">
                        <FaTrash size={20} />
                      </button>
                    </div>
                  </div>

                  {/* Controles de Quantidade */}

                  {/* Botão de Remover */}
                </div>
              ))}
              <div className="p-6 bg-white mt-8 rounded-lg shadow-lg">
                <div className="flex justify-between items-center mb-6">
                  <p className="text-lg font-semibold text-gray-800">Total:</p>
                  <p className="text-2xl font-bold text-green-600">
                    ${totalPrice.toFixed(2)}
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="text"
                    placeholder="Código de desconto"
                    className="flex-1 p-3 border border-gray-300 rounded-md text-gray-700 shadow-sm"
                  />
                  <button className="w-full sm:w-auto bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 shadow-md">
                    Aplicar
                  </button>
                </div>
                <button className="w-full mt-4 bg-green-600 text-white py-4 rounded-lg hover:bg-green-700 shadow-md text-lg font-medium">
                  Finalizar Compra
                </button>
              </div>
              {/* Resumo e Ações */}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
