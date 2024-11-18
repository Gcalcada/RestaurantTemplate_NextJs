"use client";
import { useCart } from "../Components/CartContext";
import { FaShoppingCart } from "react-icons/fa";
import { useToast } from "../hooks/useToast";
export default function AddToCartButton({ item }) {
  const { addToCart } = useCart();
  const { addToast } = useToast();
  const handleAddToCart = () => {
    if (item && item.id) {
      addToCart(item);
      addToast(`${item.name} foi adicionado ao carrinho!`, "success");
    } else if (!item || !item.id) {
      addToast("Erro ao adicionar item! Produto não encontrado.", "error");
    }
  };

  return (
    <div>
      <button
        onClick={handleAddToCart}
        className="flex  items-center justify-center  w-full   px-3 py-2 rounded-lg transition duration-300">
        <FaShoppingCart className="mr-2" />
        Comprar
      </button>
    </div>
  );
}
