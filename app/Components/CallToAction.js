import Link from "next/link";

export default function CallToAction() {
  return (
    <section className=" mx-2 py-12 px-4 sm:py-16 bg-color text-center ">
      <h2 className="text-2xl sm:text-4xl font-bold mb-4 sm:mb-6 text-title-3">
        Ready to Taste Our Delicious Dishes?
      </h2>
      <p className="text-base sm:text-lg mb-6 sm:mb-8 text-subtitle-3">
        Book a table now or explore our menu online.
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8">
        <Link
          href="/Reservations"
          className="px-8 py-4 sm:px-8 lg:px-12 text-sm sm:text-lg lg:text-xl font-semibold text-white button-bg-color2 transition-all duration-300 rounded-[12px] shadow-lg transform hover:scale-105 hover:opacity-90 hover:shadow-lg hover:shadow-purple-400 hover:text-purle-400 group"
          aria-label="Click to Reserve a table">
          Reserve a Table
        </Link>
        <Link
          href="/menu"
          className="px-8 py-4 sm:px-8 lg:px-12 text-sm sm:text-lg lg:text-xl font-semibold text-white button-bg-color transition-all duration-300 rounded-[12px] shadow-lg transform hover:scale-105 hover:opacity-90 hover:shadow-lg hover:shadow-yellow-500 hover:text-yellow-500 group "
          aria-label="Click to explore the menu">
          Explore the Menu
        </Link>
      </div>
    </section>
  );
}
