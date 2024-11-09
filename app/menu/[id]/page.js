"use client";
import React, { useState, useEffect } from 'react';
import { menuItems } from '../../menuData'; 
import { useCart } from '../../CartContext'; 
import { FaStar } from 'react-icons/fa'; 
import {use } from 'react';
import Image from 'next/image'
export default function MenuItemDetails({ params }) {
  const { id } = use(params);  // get the id from url
  const menuItem = menuItems.find(item => item.id.toString() === id); // search for the item on jsonfile
  const { addToCart } = useCart();
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [ratingFood, setRatingFood] = useState(0);
  const [ratingService, setRatingService] = useState(0);
  const [ratingRestaurant, setRatingRestaurant] = useState(0);
  const [userName, setUserName] = useState('');

  // Load comentaries from localstorage
  useEffect(() => {
    const storedComments = localStorage.getItem('comments');
    if (storedComments) {
      setComments(JSON.parse(storedComments));
    }
  }, []);

  // Função para salvar os comentários no localStorage
  const saveCommentsToLocalStorage = (comments) => {
    localStorage.setItem('comments', JSON.stringify(comments));
  };

  const handleCommentSubmit = async (event) => {
    event.preventDefault();

    if (newComment.trim()) {
      const newCommentData = {
        id: comments.length + 1,  
        name: userName || 'Usuário Anônimo',
        comment: newComment,
        ratings: {
          food: ratingFood,
          service: ratingService,
          restaurant: ratingRestaurant,
        },
        date: new Date().toISOString(),
      };

      // update the comentaries 
      const updatedComments = [newCommentData, ...comments];
      setComments(updatedComments);

      // save comentaries on localstorage
      saveCommentsToLocalStorage(updatedComments);

      // Clean fields
      setNewComment('');
      setRatingFood(0);
      setRatingService(0);
      setRatingRestaurant(0);
      setUserName('');
    }
  };

  const renderStars = (rating, setRating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <FaStar
          key={i}
          className={`cursor-pointer ${i <= rating ? 'text-yellow-500' : 'text-gray-300'}`}
          onClick={() => setRating(i)}
        />
      );
    }
    return stars;
  };

  return (
    <section className="py-12 px-6 sm:px-8 lg:px-16 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-start lg:items-center">
          <div className="w-full lg:w-1/2 mb-6 lg:mb-0 flex justify-center">
            <Image
            width={200} height={200}
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
              <strong>Tempo de Cozimento:</strong> {menuItem.cookingTime}
            </p>
            <p className="text-sm sm:text-md md:text-lg dark:text-gray-300 mb-4">
              <strong>Descrição:</strong> {menuItem.description || 'Prato clássico italiano com massa fresca e molho delicioso.'}
            </p>
            <p className="text-lg sm:text-xl md:text-2xl font-semibold dark:text-gray-100 mb-6">
              <strong>Preço:</strong> ${menuItem.price || '18.99'}
            </p>
            <button onClick={() => addToCart(menuItem)} className="px-6 py-3 bg-yellow-500 text-white rounded-lg hover:bg-yellow-400 transition duration-300 text-sm sm:text-base dark:bg-yellow-600 dark:hover:bg-yellow-500">
              Add to Cart
            </button>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-xl font-semibold  dark:text-white mb-6">Comentários</h2>

          {/* Comment section */}
          <div className="space-y-4">
            {comments.map(comment => (
              <div key={comment.id} className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-md">
                <div className="flex items-center space-x-4">
                  <div>
                    <p className="font-semibold text-gray-800 dark:text-gray-800">{comment.name}</p>
                    <div className="flex space-x-2 mb-2">
                      <span className="text-yellow-500">Food: {comment.ratings.food}/5</span>
                      <span className="text-yellow-500">Service: {comment.ratings.service}/5</span>
                      <span className="text-yellow-500">Restaurant: {comment.ratings.restaurant}/5</span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-800">{comment.comment}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-800 mt-2">{new Date(comment.date).toLocaleDateString()}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Form Section */}
          <div className="mt-8">
            <h3 className="text-lg font-semibold  dark:text-white mb-4">Deixe seu Comentário</h3>
            <form onSubmit={handleCommentSubmit} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <div className="space-y-4">
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-md text-black focus:outline-none border focus:ring-2 focus:ring-yellow-500"
                  placeholder="Seu nome"
                  value={userName}
                  onChange={e => setUserName(e.target.value)}
                  required
                />
                <textarea
                  className="w-full px-4 py-3 rounded-md text-black  border focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  placeholder="Escreva seu comentário..."
                  value={newComment}
                  onChange={e => setNewComment(e.target.value)}
                  required
                />
              <div className="flex flex-wrap gap-4 mb-4">
  <div className="flex-1 min-w-[150px]">
    <label className="block text-sm text-gray-700 dark:text-gray-200">Food Rating</label>
    <div className="flex space-x-2 justify-start mt-2">
      {renderStars(ratingFood, setRatingFood)}
    </div>
  </div>

  <div className="flex-1 min-w-[150px]">
    <label className="block text-sm text-gray-700 dark:text-gray-200">Service Rating</label>
    <div className="flex space-x-2 justify-start mt-2">
      {renderStars(ratingService, setRatingService)}
    </div>
  </div>

  <div className="flex-1 min-w-[150px]">
    <label className="block text-sm text-gray-700 dark:text-gray-200">Restaurant Rating</label>
    <div className="flex space-x-2 justify-start mt-2">
      {renderStars(ratingRestaurant, setRatingRestaurant)}
    </div>
  </div>
</div>


                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-yellow-500 text-white rounded-lg hover:bg-yellow-400 transition duration-300 text-sm sm:text-base dark:bg-yellow-600 dark:hover:bg-yellow-500"
                >
                  Enviar Comentário
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
