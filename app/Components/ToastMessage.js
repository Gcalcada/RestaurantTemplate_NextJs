"use client";
import React from "react";
import { useToast } from "../hooks/useToast";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ErrorIcon from "@mui/icons-material/Error";
import WarningIcon from "@mui/icons-material/Warning";
import CloseIcon from "@mui/icons-material/Close";
const ToastMessage = () => {
  const { toasts, setToasts } = useToast();
  const getToastClass = (type) => {
    switch (type) {
      case "success":
        return "bg-green-100 text-green-500";
      case "danger":
        return "bg-red-100 text-red-500";
      case "warning":
        return "bg-orange-100 text-orange-500";
      default:
        return "bg-white text-gray-500";
    }
  };
  const getToastIcon = (type) => {
    switch (type) {
      case "success":
        return <CheckCircleIcon className="text-green-500" />;
      case "danger":
        return <ErrorIcon className="text-red-500" />;
      case "warning":
        return <WarningIcon className="text-orange-500" />;
      default:
        return <CheckCircleIcon className="text-gray-500" />; // ícone padrão
    }
  };

  const handleClose = (id) => {
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
  };
  return (
    <div className="fixed mx-4   flex  justify-between items-center z-50">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className={`flex items-center w-full ml-4 sm:ml-8 md:ml-16 lg:ml-24 xl:ml-24 rounded-lg border border-white p-4 mb-4 text-white card-menu-background  shadow ${getToastClass(
            toast.type
          )} transition-all duration-300 ease-in-out`}
          role="alert">
          <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8">
            {getToastIcon(toast.type)}
          </div>
          <div className="mx-2 text-sm sm:text-base font-normal text-white">
            {toast.message}
          </div>
          <button
            type="button"
            className="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
            aria-label="Close"
            onClick={() => handleClose(toast.id)} // Chama a função de fechar
          >
            <CloseIcon aria-label="Close" className="text-gray-500" />
          </button>
        </div>
      ))}
    </div>
  );
};

export default ToastMessage;
