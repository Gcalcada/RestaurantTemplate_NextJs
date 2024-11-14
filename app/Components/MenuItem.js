// app/Components/MenuItem.js
import Image from "next/image";
export default function MenuItem({
  name,
  description,
  price,
  image,
  addToCart,
}) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out">
      <Image
        width={200}
        height={200}
        src={image}
        alt={name}
        className="w-full h-48 object-cover rounded-lg mb-4"
      />
      <h3 className="text-lg font-semibold">{name}</h3>
      <p className="text-sm text-gray-600 mb-4">{description}</p>
      <div className="flex justify-between items-center">
        <p className="text-lg font-semibold text-blue-600">${price}</p>
        <button
          className="bg-yellow-500 text-white py-2 px-4 rounded-md hover:bg-yellow-600 transition"
          onClick={() => addToCart(name, price)}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}
