'use client';

import React, { useState, useEffect } from 'react';
import { FaStar } from 'react-icons/fa';

const CommentSection = () => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [ratingFood, setRatingFood] = useState(0);
  const [ratingService, setRatingService] = useState(0);
  const [ratingRestaurant, setRatingRestaurant] = useState(0);
  const [userName, setUserName] = useState('');

  // Load comments from localStorage
  useEffect(() => {
    const storedComments = localStorage.getItem('comments');
    if (storedComments) {
      setComments(JSON.parse(storedComments));
    }
  }, []);

  // Save comments to localStorage
  const saveCommentsToLocalStorage = (comments) => {
    localStorage.setItem('comments', JSON.stringify(comments));
  };

  const handleCommentSubmit = (event) => {
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

      // Update the comments
      const updatedComments = [newCommentData, ...comments];
      setComments(updatedComments);

      // Save comments to localStorage
      saveCommentsToLocalStorage(updatedComments);

      // Reset fields
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
    <div className="mt-12 w-full mx-auto">
      <div className="space-y-4">
        {comments.map(comment => (
          <div key={comment.id} className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-md">
            <div className="flex items-center space-x-4">
              <div>
                <p className="font-semibold text-gray-800 dark:text-gray-200">{comment.name}</p>
                <div className="flex space-x-2 mb-2">
                  <span className="text-yellow-500">Food: {comment.ratings.food}/5</span>
                  <span className="text-yellow-500">Service: {comment.ratings.service}/5</span>
                  <span className="text-yellow-500">Restaurant: {comment.ratings.restaurant}/5</span>
                </div>
                <p className="text-gray-600 dark:text-gray-400">{comment.comment}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">{new Date(comment.date).toLocaleDateString()}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <h3 className="text-lg font-semibold dark:text-white mb-4">Deixe o seu Comentário</h3>
        <form onSubmit={handleCommentSubmit} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg">
          <div className="space-y-4">
            <input
              type="text"
              className="w-full px-4 py-2 rounded-md text-black focus:outline-none border focus:ring-2 focus:ring-yellow-500"
              placeholder="Seu nome"
              value={userName}
              onChange={e => setUserName(e.target.value)}
              required
            />
            <textarea
              className="w-full px-4 py-2 rounded-md text-black border focus:outline-none focus:ring-2 focus:ring-yellow-500"
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
  );
};

export default CommentSection;
