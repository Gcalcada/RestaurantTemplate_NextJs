"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import {
  FaMoon,
  FaSun,
  FaBars,
  FaTimes,
  FaHome,
  FaList,
  FaShoppingCart,
} from "react-icons/fa";
import { useCart } from "../Components/CartContext";

export default function Navbar() {
  const { cartItems } = useCart();
  const [theme, setTheme] = useState("light");
  const [menuOpen, setMenuOpen] = useState(false);
  const [checkoutOpen, setCheckoutOpen] = useState(false); // Estado do modal de checkout

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.add(savedTheme);
    } else {
      document.documentElement.classList.add("light");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleCheckout = () => setCheckoutOpen(!checkoutOpen); // Abre/fecha o modal

  const handleMenuItemClick = () => setMenuOpen(false); // Fechar o menu ao clicar no item

  return (
    <nav
      className={` items-center justify-center z-20 p-2 sm:p-4 ${
        theme === "light" ? "bg-color" : "bg-color"
      }`}>
      <div className="mx-4 sm:mx-8 md:mx-16 lg:mx-24 flex justify-between items-center">
        <Link
          href="/"
          className="text-2xl text-subtitle-3 font-bold hover:text-yellow-400">
          {" "}
          Restaurant
        </Link>

        {/* Botão de Menu Mobile */}
        <div className="lg:hidden text-2xl cursor-pointer" onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars className="text-subtitle-3" />}
        </div>

        {/* Menu Desktop */}
        <div
          className={`hidden lg:flex text-subtitle-3 space-x-6 items-center`}>
          <Link href="/" className="text-lg hover:text-yellow-400">
            Home
          </Link>
          <Link href="/menu" className="text-lg hover:text-yellow-400">
            Menu
          </Link>
          <button onClick={toggleTheme} className="text-xl">
            {theme === "light" ? (
              <FaMoon />
            ) : (
              <FaSun className="hover:text-yellow-400" />
            )}
          </button>

          {/* Carrinho */}
          <Link href="/Cart" className="text-xl relative">
            <FaShoppingCart className="hover:text-yellow-400" />
            {cartItems.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500   hover:text-yellow-400 rounded-full text-xs px-1">
                {cartItems.length}
              </span>
            )}
          </Link>
        </div>
      </div>

      {/* Menu Mobile */}
      {menuOpen && (
        <div
          className={`lg:hidden fixed inset-0 bg-opacity-80 card-menu-background flex justify-center items-center z-30 transition-all duration-300 ease-in-out`}>
          <div className="flex flex-col items-center card-menu-background w-full h-full py-10">
            <button
              onClick={toggleMenu}
              className="absolute top-6 right-6  text-3xl ">
              <FaTimes />
            </button>
            <div className="flex flex-col items-center space-y-6  w-full px-4">
              {/* Itens do menu mobile com ícones e texto */}
              <Link
                href="/"
                onClick={handleMenuItemClick}
                className="flex items-center space-x-3 text-xl   w-full py-3 text-center border-b border-white">
                <FaHome className="text-xl" />
                <span>Home</span>
              </Link>
              <Link
                href="/menu"
                onClick={handleMenuItemClick}
                className="flex items-center space-x-3 text-xl  w-full py-3 text-center border-b border-white">
                <FaList className="text-xl" />
                <span>Menu</span>
              </Link>
              <button
                onClick={toggleTheme}
                className="flex items-center space-x-3 text-xl w-full py-3 text-center border-b border-white  ">
                {theme === "light" ? <FaMoon /> : <FaSun />}
                <span>Modo</span>
              </button>

              {/* Carrinho */}
              <Link
                href="/Cart"
                onClick={handleMenuItemClick}
                className="flex items-center space-x-3 text-xl relative w-full py-3 text-center border-b border-white ">
                <FaShoppingCart />
                {cartItems.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full text-xs px-1">
                    {cartItems.length}
                  </span>
                )}
                <span>Carrinho</span>
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Modal de Checkout */}
      {checkoutOpen && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center z-30">
          <div className="bg-white w-full max-w-lg p-6 rounded-lg shadow-lg">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-semibold">Checkout</h2>
              <button onClick={toggleCheckout} className="text-2xl">
                &times;
              </button>
            </div>
            {cartItems.length === 0 ? (
              <p className="text-center text-gray-500">
                Seu carrinho está vazio!
              </p>
            ) : (
              <ul className="space-y-4 mb-4">
                {cartItems.map((item, index) => (
                  <li key={index} className="flex justify-between items-center">
                    <div>
                      <p className="font-medium">{item.name}</p>
                      <p className="text-sm text-gray-600">
                        Quantidade: {item.quantity}
                      </p>
                    </div>
                    <p className="text-lg font-semibold">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                  </li>
                ))}
              </ul>
            )}
            <div className="flex justify-between items-center border-t pt-4">
              <p className="text-lg font-semibold">Total:</p>
              <p className="text-lg font-semibold">
                ${(totalPrice || 0).toFixed(2)}
              </p>
            </div>

            <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">
              Finalizar Compra
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
