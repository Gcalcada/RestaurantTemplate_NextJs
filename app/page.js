import Hero from "./Components/Hero";
import MenuHighlights from "./Components/MenuHighlights";
import About from "./Components/About";
import Testimonials from "./Components/Testimonials";
import Location from "./Components/Location";
import CallToAction from "./Components/CallToAction";
import Bot from "./Components/Bot"; // Importe o Bot
import ToastMessage from "./Components/ToastMessage";
export const metadata = {
  title: "Restaurant",
};
export default function Home() {
  return (
    <section>
      {/* Seção Hero - introdução com imagem e título */}
      <Hero />
      {/* Seção de Destaques do Menu */}
      <MenuHighlights />
      {/* Outras seções do restaurante */}
      <About />
      <Testimonials />
      <Location />
      <CallToAction />
      <ToastMessage />
      {/* Seção do Bot (apoio ao cliente) */}
      <Bot /> {/* O bot está aqui */}
    </section>
  );
}
