"use client";
import { useCart } from '../Components/CartContext';
import { FaShoppingCart } from 'react-icons/fa';

export default function AddToCartButton({ item }) {  
    
    const { addToCart } = useCart();

  return (
    <button
      onClick={() => addToCart(item)}
      className="flex items-center justify-center w-full max-w-[120px] px-3 py-2 bg-green-500 text-white rounded-lg hover:bg-green-400 transition duration-300"
    >
      <FaShoppingCart className="mr-2" />
      Comprar
    </button>
  );
}