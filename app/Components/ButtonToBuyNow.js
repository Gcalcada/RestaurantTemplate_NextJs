"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useCart } from "../Components/CartContext";
import { FaShoppingCart } from "react-icons/fa";

export default function ButtonToBuyNow({ item }) {
  const { addToCart } = useCart();
  const router = useRouter();
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    addToCart(item, quantity);
    router.push("/Cart");
  };

  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => setQuantity(quantity > 1 ? quantity - 1 : 1);

  return (
    <>
      {/* Quantity Controls */}
      <div className="flex mb-6 mt-4 gap-4">
        <div
          className="flex border items-center   h-16 w-26 "
          style={{ borderRadius: "16px" }}>
          <button
            onClick={decreaseQuantity}
            className="px-3 py-1  bg-yellow-500 text-black rounded-r-xl hover:bg-yellow-600 focus:outline-none transition duration-200">
            -
          </button>
          <span className="mx-4 text-xl">{quantity}</span>
          <button
            onClick={increaseQuantity}
            className="px-3 py-1  bg-yellow-500 text-black items-start  rounded-l-xl hover:bg-yellow-600 focus:outline-none transition duration-200">
            +
          </button>
        </div>

        {/* Buy Now Button */}
        <button
          onClick={handleAddToCart}
          className="flex items-center justify-center bg-yellow-500 text-gray-900 border border-transparent hover:bg-yellow-400 transition duration-300 shadow-md h-16 w-52 rounded-lg dark:bg-yellow-600 dark:text-white dark:hover:bg-yellow-500">
          <FaShoppingCart className="mr-2" />
          Comprar
        </button>
      </div>
    </>
  );
}
