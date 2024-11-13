"use client";
import { useCart } from '../Components/CartContext';
import { FaShoppingCart } from 'react-icons/fa';

export default function AddToCartButton({ item }) {  
    
    const { addToCart } = useCart();

  return (
    <button
      onClick={() => addToCart(item)}
      className="flex flex-wrap  items-center justify-center    px-3 py-2 rounded-lg transition duration-300"
    >
      <FaShoppingCart className="mr-2" />
      Comprar
    </button>
  );
}