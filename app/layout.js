"use client";

import Navbar from './Components/Navbar';
import { CartProvider } from './CartContext'; // Importa o CartProvider
import "./globals.css";
import { useEffect, useState } from 'react';

export default function RootLayout({ children }) {
  const [isClient, setIsClient] = useState(false);

  // Usa useEffect para definir o estado do cliente
  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <html lang="en">
      <body>
        {isClient && ( // Renderiza o layout apenas se isClient for true
          <CartProvider> {/* Envolva o layout com o CartProvider */}
            <header>
              <Navbar />
            </header>
            {children}
          </CartProvider>
        )}
      </body>
    </html>
  );
}
