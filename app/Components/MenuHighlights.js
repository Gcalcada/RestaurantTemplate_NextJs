// app/Components/MenuHighlights.js
import Image from "next/image";

export default function MenuHighlights() {
  const menuItems = [
    {
      name: "Pizza Margherita",
      description: "Classic pizza with mozzarella and basil",
      price: 12.99,
      image: "/images/pizza.jpg",
    },
    {
      name: "Spaghetti Carbonara",
      description: "Pasta with creamy sauce and pancetta",
      price: 14.99,
      image: "/images/spaghetti.jpg",
    },
    {
      name: "Caesar Salad",
      description: "Crisp romaine lettuce with Caesar dressing",
      price: 9.99,
      image: "/images/salad.jpg",
    },
  ];

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8  text-center">
      <h2 className="text-2xl text-title-3 sm:text-4xl font-bold mb-6 sm:mb-8">
        Healthy Dishes
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mx-auto max-w-screen-lg ">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className=" p-4 sm:p-6 rounded-lg card-background  shadow-xl mx-4 ">
            <Image
              width={200}
              height={200}
              src={item.image}
              alt={item.name}
              className="h-40 w-full object-cover rounded-md mb-4"
            />
            <h3
              className="dark-title text-xl sm:text-2xl font-semibold 
                        ">
              {item.name}
            </h3>
            <p className="text-subtitle-3 mt-2 text-sm sm:text-base">
              {item.description}
            </p>
            <p className="mt-4 text-lg price-card sm:text-xl font-semibold text-ca">
              ${item.price}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
