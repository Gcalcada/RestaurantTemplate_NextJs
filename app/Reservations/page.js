"use client";
import React, { useState } from 'react';

const ReservationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    peopleCount: 1,
    reservationDate: '',
    reservationTime: '',
    specialRequest: '',
  });
  const [reservationStatus, setReservationStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.reservationDate || !formData.reservationTime) {
      setReservationStatus('Please fill in all required fields.');
      return;
    }

    const now = new Date();
    const reservationDate = new Date(formData.reservationDate + ' ' + formData.reservationTime);
    if (reservationDate <= now) {
      setReservationStatus('Please choose a future date and time.');
      return;
    }

    // without any backend 
    setReservationStatus('Your reservation has been successfully submitted!');
    setFormData({
      name: '',
      peopleCount: 1,
      reservationDate: '',
      reservationTime: '',
      specialRequest: '',
    });
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-md">
      <h1 className="text-2xl font-semibold text-center text-gray-800 mb-6">Reserve Your Table</h1>

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm text-gray-700">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
            placeholder="Enter your name"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="peopleCount" className="block text-sm text-gray-700">Number of People</label>
          <input
            type="number"
            id="peopleCount"
            name="peopleCount"
            value={formData.peopleCount}
            onChange={handleChange}
            min="1"
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
            placeholder="Number of people"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="reservationDate" className="block text-sm text-gray-700">Reservation Date</label>
          <input
            type="date"
            id="reservationDate"
            name="reservationDate"
            value={formData.reservationDate}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="reservationTime" className="block text-sm text-gray-700">Reservation Time</label>
          <input
            type="time"
            id="reservationTime"
            name="reservationTime"
            value={formData.reservationTime}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="specialRequest" className="block text-sm text-gray-700">Special Request (optional)</label>
          <textarea
            id="specialRequest"
            name="specialRequest"
            value={formData.specialRequest}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
            placeholder="Any special requests?"
            rows="3"
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 bg-yellow-400 text-white rounded-md hover:bg-yellow-500"
        >
          Reserve Now
        </button>
      </form>

      {reservationStatus && (
        <div className={`mt-4 text-center ${reservationStatus.includes('success') ? 'text-green-600' : 'text-red-600'}`}>
          {reservationStatus}
        </div>
      )}
    </div>
  );
};

export default ReservationForm;
