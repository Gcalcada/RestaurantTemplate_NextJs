import Image from "next/image";

import Link from "next/link";
import { FaInfoCircle, FaShoppingCart } from "react-icons/fa";
import Breadcrumbs from "../Components/BreadcrumbsComponent";
import AddToCartButton from "../Components/Button";
import ToastMessage from "../Components/ToastMessage";
import { menuItems } from "../menuData";

export const metadata = {
  title: "Menu",
};

export default async function Menu() {
  const menuData = menuItems;
  return (
    <>
      <Breadcrumbs />

      <section>
        <div className="mx-4 sm:mx-8 md:mx-16 lg:mx-24 flex">
          <h1 className="text-2xl font-bold p-2 sm:p-4">Menu</h1>
        </div>
        <div className="grid grid-cols-1 mb-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 CardsMenu mx-4 sm:mx-8 md:mx-16 lg:mx-28  ">
          {menuData.map((item) => (
            <div
              key={item.id}
              className="CardsMenu card-background bg-white shadow-lg rounded-lg  flex flex-col ">
              <Image
                width={200}
                height={200}
                src={item.imageUrl}
                alt={item.name}
                className="w-full h-56 hover-effect rounded-lg  object-cover"
              />
              <div className=" mx-4 mt-4 mb-4 flex-1 flex flex-col justify-between">
                <div className="CardsTextoMenu">
                  <h2 className="text-2xl font-bold mb-2">{item.name}</h2>
                  <p className="text-lg sm:text-sm  mb-2">{item.ingredients}</p>
                  <p className="text-xl font-semibold  mb-4">
                    ${item.price.toFixed(2)}
                  </p>
                </div>
                <div className="botao w-1/2 flex gap-2  justify-start">
                  <Link href={`/menu/${item.id}`} passHref>
                    <button
                      aria-label={`Adicionar ${item.name} ao carrinho`}
                      className=" flex items-center justify-center  w-full  px-3 py-2 rounded-lg transition duration-300">
                      <FaInfoCircle className="mr-2" />
                      Detalhes
                    </button>
                  </Link>

                  <AddToCartButton item={item}>
                    <FaShoppingCart className="mr-2" />
                    Comprar
                  </AddToCartButton>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
