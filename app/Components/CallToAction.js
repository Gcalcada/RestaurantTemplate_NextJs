import Link from 'next/link';

export default function CallToAction() {
    return (
        <section className="py-12 px-4 sm:py-16 bg-black text-center text-white">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 text-white">
                Ready to Taste Our Delicious Dishes?
            </h2>
            <p className="text-base sm:text-lg mb-6 sm:mb-8">
                Book a table now or explore our menu online.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8">
                <Link
                    href="/Reservations"
                    className="w-full sm:w-auto px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg font-semibold text-white bg-yellow-500 hover:bg-yellow-400 transition-all duration-300 rounded-full"
                >
                    Reserve a Table
                </Link>
                <Link
                    href="/menu"
                    className="w-full sm:w-auto px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg font-semibold text-black bg-white hover:bg-gray-100 transition-all duration-300 rounded-full"
                >
                    Explore the Menu
                </Link>
            </div>
        </section>
    );
}
