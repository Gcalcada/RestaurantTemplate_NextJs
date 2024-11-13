// components/Cart.js
"use client";
import { useCart } from '../Components/CartContext';  // Importa o contexto do carrinho
import { FaPlus, FaMinus, FaTrash, FaCheck, FaShoppingCart } from 'react-icons/fa';  // Ícones de aumentar, diminuir, remover, aplicar e finalizar
import Image from 'next/image'; 
import BreadcrumbsComponent from "../Components/BreadcrumbsComponent";
export default function Cart() {
  const { cartItems, totalPrice, increaseQuantity, decreaseQuantity, removeItem } = useCart();

  return (
    <section className="py-8 px-4 sm:px-8 lg:px-16 darker:text-white min-h-screen mx-auto">
      <div className="mx-12">
      <BreadcrumbsComponent/>
      <h1 className="text-3xl font-bold mb-6">Menu</h1>
      {/* Conteúdo do menu */}
    </div>
      <h2 className="text-2xl sm:text-3xl font-semibold mb-6 mx-4 sm:mx-8 lg:mx-12">Carrinho de Compras</h2>
      
      <div className="bg-white shadow-md rounded-lg p-6 mx-4 sm:mx-8 md:mx-10 lg:mx-12">
        {cartItems.length === 0 ? (
          <p className="text-center text-gray-600 text-sm sm:text-base">O carrinho está vazio.</p>
        ) : (
          <div>
            <ul className="space-y-6">
              {cartItems.map(item => (
                <li key={item.id} className="flex flex-wrap justify-between items-center border-b py-6 mx-4 sm:mx-8 lg:mx-12">
                  <div className="flex items-center space-x-4 w-full sm:w-auto">
                    <Image width={100} height={100} quality={60} src={item.imageUrl} alt={item.name} className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-md shadow-md" />
                    <div className="flex-1">
                      <p className="text-base sm:text-xl font-medium text-gray-800">{item.name}</p>
                      <p className="text-xs sm:text-sm text-gray-600">Preço unitário: ${item.price.toFixed(2)}</p>
                      <p className="text-xs sm:text-sm text-gray-600">Quantidade: {item.quantity}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 sm:space-x-4 mt-4 sm:mt-0">
                    <span className="text-lg sm:text-xl font-semibold text-gray-900">${(item.price * item.quantity).toFixed(2)}</span>
                    <div className="flex items-center space-x-2 sm:space-x-4">
                      <button
                        onClick={() => increaseQuantity(item.id)}  // Função para aumentar a quantidade
                        className="bg-blue-500 text-white rounded-full p-2 sm:p-3 hover:bg-blue-600 transition"
                      >
                        <FaPlus size={16} className="sm:size={18}" />
                      </button>
                      <span className="text-base sm:text-lg text-gray-900">{item.quantity}</span>
                      <button
                        onClick={() => decreaseQuantity(item.id)}  // Função para diminuir a quantidade
                        className="bg-blue-500 text-white rounded-full p-2 sm:p-3 hover:bg-blue-600 transition"
                      >
                        <FaMinus size={16} className="sm:size={18}" />
                      </button>
                      <button
                        onClick={() => removeItem(item.id)}  // Função para remover o item
                        className="bg-red-500 text-white rounded-full p-2 sm:p-3 hover:bg-red-600 transition"
                      >
                        <FaTrash size={16} className="sm:size={18}" />
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap justify-between items-center border-t pt-6 mt-8 mx-4 sm:mx-8 lg:mx-12">
              <strong className="text-xl sm:text-2xl text-black ">Total:</strong>
              <strong className="text-xl sm:text-2xl text-black">${totalPrice.toFixed(2)}</strong>
            </div>

         {/* Campo de código de desconto */}
<div className="mt-6 mx-4 sm:mx-8 lg:mx-12">
  <label htmlFor="discountCode" className="text-xs sm:text-sm text-gray-600">Código de Desconto</label>
  <div className="flex flex-col sm:flex-row gap-2 mt-2">
    <input
      id="discountCode"
      type="text"
      placeholder="Insira o código"
      className="w-full sm:w-1/2 p-2 sm:p-3 border rounded-md text-gray-700 text-sm sm:text-base"
    />
    <button
      className="flex items-center justify-center bg-blue-600 text-white rounded-md hover:bg-blue-700 transition py-2 px-4 w-full sm:w-1/2"
    >
      <FaCheck className="mr-2" size={16} />
      Aplicar
    </button>
  </div>
</div>

{/* Botão Finalizar Compra */}
<div className="mt-6 mx-4 sm:mx-8 lg:mx-12">
  <button className="flex items-center justify-center w-full bg-green-600 text-white py-2 sm:py-3 px-4 sm:px-6 rounded-md hover:bg-green-700 transition text-sm sm:text-base">
    <FaShoppingCart className="mr-2" size={16} />
    Finalizar Compra
  </button>
</div>
          </div>
        )}
      </div>
    </section>
  );
}
