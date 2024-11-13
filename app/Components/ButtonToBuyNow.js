"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useCart } from '../Components/CartContext';
import { FaShoppingCart } from 'react-icons/fa';
import { FiMinus, FiPlus } from 'react-icons/fi';

export default function ButtonToBuyNow({ item }) {
    const { addToCart } = useCart();
    const router = useRouter();
    const [quantity, setQuantity] = useState(1);

    const handleAddToCart = () => {
        addToCart(item, quantity);
        router.push('/Cart');
    };

    const increaseQuantity = () => setQuantity(quantity + 1);
    const decreaseQuantity = () => setQuantity(quantity > 1 ? quantity - 1 : 1);

    return (
<div className="flex items-start space-x-3 p-2 rounded-lg w-full 
  border border-gray-200 dark:border-gray-600 
  shadow-sm shadow-gray-300 dark:shadow-gray-600">
            {/* Quantity Controls */}
            <div className="flex items-center rounded-full overflow-hidden">
                <button
                    onClick={decreaseQuantity}
                    className="flex items-center justify-center  bg-red-400  hover:bg-red-700 transition w-10 h-10"
                >
                    <FiMinus />
                </button>
                <span className=" flex items-center justify-center w-12 border bg-white h-10 text-black">{quantity}</span>
                <button
                    onClick={increaseQuantity}
                    className="flex items-center justify-center  bg-green-500  hover:bg-green-700 transition w-10 h-10"
                >
                    <FiPlus />
                </button>
            </div>

            {/* Buy Now Button */}
            <button
                onClick={handleAddToCart}
                className="flex items-center justify-center px-5 py-2  bg-green-500 text-white rounded-lg hover:bg-green-400 transition duration-300 shadow-md  w-full"
            >
                <FaShoppingCart className="mr-2" />
                Comprar
            </button>
        </div>
    );
}
