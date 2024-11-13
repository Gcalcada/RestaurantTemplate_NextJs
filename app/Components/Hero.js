import Link from 'next/link';
import Image from 'next/image';
export default function Hero() {
    return (
      <section
        className="relative h-[400px] sm:h-[500px] lg:h-[600px] bg-cover bg-center text-center text-white flex items-center justify-center"
       
        
      >
<Image style={{objectFit: "cover"}}
  src={'/images/hero.jpg'}
  fill  
  alt='logo'
  
  priority
/>
        {/* background gradient */}
        <div className="absolute inset-0 bg-black opacity-40"></div>
  
        {/* Main Content */}
        <div className="relative z-10 px-6 sm:px-8 lg:px-16 py-6 sm:py-10 text-center">
          <h1 className="text-2xl sm:text-3xl lg:text-5xl font-extrabold leading-snug text-white opacity-90 transition duration-500 transform hover:scale-105 hover:opacity-100">
            Welcome to Our Restaurant
          </h1>
          <p className="mt-3 text-base sm:text-lg lg:text-xl opacity-80 max-w-md sm:max-w-lg mx-auto transition duration-500 transform hover:scale-105 hover:opacity-100">
            Discover the best flavors from our kitchen. Experience unforgettable moments.
          </p>
  
          <div className="mt-6 sm:mt-8">
            <Link
              href="/menu"
              className="px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-lg font-semibold text-white bg-yellow-500 hover:bg-yellow-400 transition-all duration-300 rounded-full shadow-lg transform hover:scale-105"
            >
              Explore Our Menu 
              <span className="ml-2 inline-block transform transition-transform duration-300 group-hover:translate-x-2">
                &rarr;
              </span>
            </Link>
          </div>
        </div>
      </section>
    );
  }
  
  