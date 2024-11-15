// app/Components/Location.js
import "animate.css";

export default function Location() {
  return (
    <section className="py-12 px-4 text-center justify-center bg-yellow-500 text-white">
      {/* Título com animação de fadeInUp */}
      <h2 className="text-2xl sm:text-4xl font-bold mb-4 sm:mb-6 animate__animated animate__fadeInUp">
        Find Us
      </h2>

      {/* Texto com animação de fadeInUp com um delay */}
      <p className="text-base sm:text-xl mb-4 sm:mb-6 animate__animated animate__fadeInUp animate__delay-1s">
        We are located in the heart of the city. Come visit us!
      </p>

      {/* Contêiner do Google Maps com animação fadeInUp */}
      <div className="w-full h-64 sm:h-72 lg:h-96 bg-gray-300 rounded-md overflow-hidden animate__animated animate__fadeInUp animate__delay-2s">
        {/* Embed do Google Maps */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.491724578263!2d106.72721821528949!3d-6.91340279511604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f385f55f1e47%3A0x1325b54fcb8332ed!2sRestaurant%20Name!5e0!3m2!1sen!2sid!4v1626948664078!5m2!1sen!2sid"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        />
      </div>
    </section>
  );
}
