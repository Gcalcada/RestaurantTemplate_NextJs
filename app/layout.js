// app/layout.js
import Navbar from './Components/Navbar';
import { CartProvider } from './Components/CartContext';
import "./globals.css";

// Update metadataBase to a string (use toString())
export const metadata = {
  title: {
    template: '%s - My App',
    default: 'My App',
  },
  description: 'Default description for SEO',
  metadataBase: 'https://localhost:3000', // Use string directly
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>
        <CartProvider>
          <header>
            <Navbar />
          </header>
          {children} {/* This will render the page content */}
        </CartProvider>
      </body>
    </html>
  );
}
