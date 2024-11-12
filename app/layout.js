// app/layout.js
import Navbar from './Components/Navbar';
import { CartProvider } from './Components/CartContext';
import "./globals.css";
import BreadcrumbsComponent from './Components/BreadcrumbsComponent';
// Update metadataBase to a string (use toString())
export const metadata = {
  title: {
    template: '%s - My App',
    default: 'My App',
  },
  description: 'Default description for SEO',
  metadataBase: new URL('https://localhost:3000'), // Use string directly
};

export default function RootLayout({ children }) {
  return (
    <html suppressHydrationWarning={true}>
      <head />
      <body>
      
        {/* O CartProvider envolve todo o conteúdo para que o contexto esteja acessível */}
        <CartProvider>
          <header>
            <Navbar />
          </header>
          <main>
         
            {children}
            
          </main>
        </CartProvider>
      </body>
    </html>
  );
}
