// hooks/useToast.js
"use client";
import React, { createContext, useContext, useState } from "react";

const ToastContext = createContext();

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  const addToast = (message, type) => {
    const newToast = { id: Date.now(), message, type };
    setToasts([...toasts, newToast]);
    setTimeout(() => {
      setToasts((prevToasts) =>
        prevToasts.filter((toast) => toast.id !== newToast.id)
      );
    }, 5000);
  };
  return (
    <ToastContext.Provider value={{ toasts, addToast, setToasts }}>
      {children}
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("You forgot the ToastProvider");
  }
  return context;
}
