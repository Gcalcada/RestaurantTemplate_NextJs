// app/layout.js
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from "./Components/Navbar";
import { CartProvider } from "./Components/CartContext";
import "./globals.css";
import Footer from "./Components/Footer";

export const metadata = {
  title: {
    template: "%s - My App",
    default: "My App",
  },
  description: "Default description for SEO",
  metadataBase: new URL("https://localhost:3000"), // Use string directly
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
          <main>{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
