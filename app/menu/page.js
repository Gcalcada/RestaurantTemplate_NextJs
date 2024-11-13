import Image from 'next/image';
import Link from 'next/link';
import { FaInfoCircle, FaShoppingCart } from 'react-icons/fa';
import Breadcrumbs from '../Components/BreadcrumbsComponent'; 
import AddToCartButton from '../Components/Button';
import { Container  } from '@mui/material';
// Supondo que você tenha os dados no arquivo `menuData.js`
import { menuItems } from '../menuData'; // Pode ser importado diretamente

export const metadata = {
  title: "Menu",
};

export default async function Menu() {
  // Dados do menu são importados diretamente (pode ser estático ou de uma API)
  const menuData = menuItems;

 

  return (
    <section className="py-8 px-4 sm:px-8 lg:px-16">
      <div className="px-4 sm:px-8 lg:px-16">
        <Breadcrumbs />
        <h1 className="text-3xl font-bold mb-6">Menu</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 CardsMenu">
        {menuData.map(item => (
          <div key={item.id} className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col">
            <Image width={200} height={200}
              src={item.imageUrl}
              alt={item.name}
              className="w-full h-56 object-cover"
            />
            <div className="CardsTextoMenu mx-4 mt-4 mb-4 flex-1 flex flex-col justify-between">
              <div>
                <h2 className="text-2xl text-gray-600 font-bold mb-2">{item.name}</h2>
                <p className="text-lg sm:text-sm text-gray-600 mb-2">{item.ingredients}</p>
                <p className="text-xl font-semibold text-gray-800 mb-4">${item.price.toFixed(2)}</p>
              </div>
              <div className="flex flex-row items-center mt-auto  ">
                <Link href={`/menu/${item.id}`} passHref>
                  <button
                    aria-label={`Adicionar ${item.name} ao carrinho`}
                    className="flex flex-wrap items-center justify-between px-3 py-2 mr-2  bg-green-500 text-white rounded-lg hover:bg-green-400 transition duration-300"
                  >
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
  );
}
