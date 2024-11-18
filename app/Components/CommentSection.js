"use client";
import React, { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";

const CommentSection = ({ productId }) => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [ratingFood, setRatingFood] = useState(0);
  const [ratingService, setRatingService] = useState(0);
  const [ratingRestaurant, setRatingRestaurant] = useState(0);
  const [userName, setUserName] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const commentsPerPage = 3;

  // Carregar comentários específicos do produto a partir do localStorage
  useEffect(() => {
    const storedComments = localStorage.getItem(`comments-${productId}`);
    if (storedComments) {
      setComments(JSON.parse(storedComments));
    }
  }, [productId]);

  // Salvar comentários específicos do produto no localStorage
  const saveCommentsToLocalStorage = (comments) => {
    localStorage.setItem(`comments-${productId}`, JSON.stringify(comments));
  };

  const handleCommentSubmit = (event) => {
    event.preventDefault();

    if (newComment.trim()) {
      const newCommentData = {
        id: comments.length + 1,
        name: userName || "Usuário Anônimo",
        comment: newComment,
        ratings: {
          food: ratingFood,
          service: ratingService,
          restaurant: ratingRestaurant,
        },
        date: new Date().toISOString(),
      };

      const updatedComments = [newCommentData, ...comments];
      setComments(updatedComments);

      saveCommentsToLocalStorage(updatedComments);

      setNewComment("");
      setRatingFood(0);
      setRatingService(0);
      setRatingRestaurant(0);
      setUserName("");
      setCurrentPage(1); // Redefine para a primeira página
    }
  };

  const renderStars = (rating, setRating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <FaStar
        key={i + 1}
        className={`cursor-pointer ${
          i + 1 <= rating ? "text-yellow-500" : "text-gray-300"
        }`}
        onClick={() => setRating(i + 1)}
      />
    ));
  };

  const indexOfLastComment = currentPage * commentsPerPage;
  const indexOfFirstComment = indexOfLastComment - commentsPerPage;
  const currentComments = comments.slice(
    indexOfFirstComment,
    indexOfLastComment
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="animate-rgb-gradient card-background w-full mx-auto mb-10  transition-all duration-500 ease-in-out p-4 rounded-xl shadow-lg">
      {/* Formulário de comentários */}
      <div className="">
        <h3 className="text-2xl font-semibold text-white mb-6">
          Deixe o seu Comentário
        </h3>
        <form
          onSubmit={handleCommentSubmit}
          className="bg-white p-6 rounded-lg  shadow-lg transform hover:scale-[1.01] transition-all">
          <div className="space-y-5">
            <input
              type="text"
              className="w-full px-5 py-3 rounded-md text-white bg-gray-800  border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              placeholder="Seu nome"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              required
            />
            <textarea
              className="w-full px-5 py-3 rounded-md text-white bg-gray-800  border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              placeholder="Escreva seu comentário..."
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              required
            />
            <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 items-center justify-center  ">
              <div className="w-fit">
                <label className="block text-sm text-gray-800 ">
                  Avaliação da Comida
                </label>
                <div className="flex space-x-2 justify-start mt-2">
                  {renderStars(ratingFood, setRatingFood)}
                </div>
              </div>

              <div className="w-fit">
                <label className="block text-sm text-gray-800">
                  Avaliação do Atendimento
                </label>
                <div className="flex space-x-2 justify-start mt-2">
                  {renderStars(ratingService, setRatingService)}
                </div>
              </div>

              <div className="w-fit">
                <label className="block text-sm text-gray-800 ">
                  Avaliação do Restaurante
                </label>
                <div className="flex space-x-2 justify-start mt-2">
                  {renderStars(ratingRestaurant, setRatingRestaurant)}
                </div>
              </div>
            </div>
          </div>
          <div className="mt-4">
            <button
              type="submit"
              className="w-full px-6 py-3 bg-yellow-500 text-white rounded-lg hover:bg-yellow-400 transition duration-300 text-sm sm:text-base ">
              Enviar Comentário
            </button>
          </div>
        </form>
      </div>

      {/* Comentários */}
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 ">
        {currentComments.map((comment) => (
          <div
            key={comment.id}
            className="bg-white shadow-lg transform hover:scale-[1.02] p-6 rounded-lg  border border-gray-200  transition duration-300 hover:shadow-xl">
            <div className="flex items-center mb-4">
              <div className="bg-gray-200rounded-full w-14 h-14 flex items-center justify-center text-lg font-bold text-gray-700 border border-black rounded-xl">
                {comment.name.charAt(0)}
              </div>
              <div className="ml-4">
                <p className="text-lg font-semibold text-gray-800 ">
                  {comment.name}
                </p>
                <p className="text-xs text-gray-500 ">
                  {new Date(comment.date).toLocaleDateString()}
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center">
                <span className="text-yellow-500">
                  <span className="mr-2">🍲</span> Comida:{" "}
                  {comment.ratings.food}/5
                </span>
              </div>
              <div className="flex items-center">
                <span className="text-yellow-500">
                  <span className="mr-2">🍽️</span> Atendimento:{" "}
                  {comment.ratings.service}/5
                </span>
              </div>
              <div className="flex items-center">
                <span className="text-yellow-500">
                  <span className="mr-2">🏠</span> Restaurante:{" "}
                  {comment.ratings.restaurant}/5
                </span>
              </div>
            </div>
            <p className="text-gray-700  mt-4">{comment.comment}</p>
          </div>
        ))}
      </div>

      {/* Paginação */}
      {comments.length > commentsPerPage && (
        <div className="flex justify-center space-x-4 mt-8">
          {[...Array(Math.ceil(comments.length / commentsPerPage))].map(
            (_, index) => (
              <button
                key={index}
                onClick={() => paginate(index + 1)}
                aria-label={`Go to page number ${index + 1}`}
                className={`px-4 py-2 rounded-md text-lg ${
                  currentPage === index + 1
                    ? "bg-yellow-500 text-white"
                    : "bg-gray-200 text-gray-700"
                }`}>
                {index + 1}
              </button>
            )
          )}
        </div>
      )}
    </div>
  );
};

export default CommentSection;
