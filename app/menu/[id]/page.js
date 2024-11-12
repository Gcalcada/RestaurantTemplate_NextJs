import React from 'react';
import { menuItems } from '../../menuData';
import CommentSection from '../../Components/CommentSection';
import Breadcrumbs from '@/app/Components/BreadcrumbsComponent';

export const metadata = {
  title: "Details", // Set the title for the page
};

// Use async function to handle the async params properly
export default async function MenuItemDetails({ params }) {
  const { id } = await params; // Await the 'params' object

  // Find the menu item by ID
  const menuItem = menuItems.find(item => item.id === parseInt(id));

  if (!menuItem) {
    return <div>Item not found</div>;
  }

  return (
  
    
    <section className="py-12 px-6 sm:px-8 lg:px-16 dark:bg-gray-900">
   
      <div className="max-w-6xl mx-auto">
      <Breadcrumbs />
        <div className="flex flex-col lg:flex-row items-start lg:items-center">
          <div className="w-full lg:w-1/2 mb-6 lg:mb-0 flex justify-center">
         
            <img
              width={200}
              height={200}
              src={menuItem.imageUrl}
              alt={menuItem.name}
              className="w-full h-full object-cover rounded-lg shadow-lg transition-transform transform hover:scale-105"
              style={{ maxHeight: 'calc(100vh - 150px)' }}
            />
          </div>
          <div className="w-full lg:w-1/2 lg:pl-12 flex flex-col justify-between">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-yellow-600 dark:text-yellow-400 mb-4">
              {menuItem.name}
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl dark:text-gray-300 mb-6">
              {menuItem.ingredients}
            </p>
            <p className="text-sm sm:text-md md:text-lg dark:text-gray-300 mb-4">
              <strong>Chef:</strong> {menuItem.chef}
            </p>
            <p className="text-sm sm:text-md md:text-lg dark:text-gray-300 mb-4">
              <strong>Tempo de Cozimento:</strong> {menuItem.cookingTime} min
            </p>
            <p className="text-sm sm:text-md md:text-lg dark:text-gray-300 mb-6">
              <strong>Preço:</strong> ${menuItem.price.toFixed(2)}
            </p>
          </div>
        </div>
      </div>

      <CommentSection /> {/* Render the comment section here */}
    </section>
   
  );
}
