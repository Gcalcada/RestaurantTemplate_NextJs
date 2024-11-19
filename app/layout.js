// app/layout.js
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from "./Components/Navbar";
import { CartProvider } from "./Components/CartContext";
import "./globals.css";
import Footer from "./Components/Footer";
import { ToastProvider } from "./hooks/useToast";
import ToastMessage from "./Components/ToastMessage";
export const metadata = {
  title: {
    template: "%s - My App",
    default: "My App",
  },
  description: "Restaurant website",
  metadataBase: new URL("https://localhost:3000"),
};

export default function RootLayout({ children }) {
  return (
    <html suppressHydrationWarning={true} lang="EN">
      <head />
      <body>
        <ToastProvider>
          <CartProvider>
            <header aria-hidden="false">
              <Navbar />
            </header>
            <ToastMessage />
            <main aria-hidden="false" role="main">
              {children}
            </main>
            <Footer aria-hidden="false" />
          </CartProvider>
        </ToastProvider>
      </body>
    </html>
  );
}
