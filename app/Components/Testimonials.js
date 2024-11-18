import Image from "next/image";

export default function Testimonials() {
  const testimonials = [
    {
      name: "John Doe",
      text: "The best pizza I have ever had! Highly recommend this place!",
      image: "/images/customer1.jpg",
      rating: 5,
    },
    {
      name: "Jane Smith",
      text: "Wonderful service and an amazing atmosphere. Will definitely return!",
      image: "/images/customer2.jpg",
      rating: 4,
    },
    {
      name: "Gail Boyd",
      text: "The best restaurant you’ll find! Great ambiance, delicious food, and amazing music ",
      image: "/images/customer3.jpg",
      rating: 5,
    },
  ];

  return (
    <section className="py-10 text-center bg-color">
      <h2 className="text-xl sm:text-4xl md:text-5xl lg:text-4xl font-bold mb-8 text-title-3">
        What Our Customers Say
      </h2>
      <div className="testimonial grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="p-4 mt-2 rounded-lg shadow-lg bg-gradient-to-r card-background transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:cursor-pointer">
            {/* Client photo */}
            <div className="flex items-center justify-center mb-4">
              <Image
                width={200}
                height={200}
                src={testimonial.image}
                alt={testimonial.name}
                quality={60}
                className="h-20 w-20 object-cover rounded-full border-4 border-white shadow-lg"
              />
            </div>

            {/* Testimonial text */}
            <p className="text-base sm:text-lg md:text-xl italic mb-4 text-white text-left">
              &quot;{testimonial.text}&quot;
            </p>

            {/* Star rating */}
            <div className="flex justify-center mb-4">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-5 w-5 transition-all duration-200 ${
                    i < testimonial.rating
                      ? "text-yellow-500 transform scale-110"
                      : "text-gray-300"
                  }`}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M10 15.27l4.28 2.23-1.09-4.72 3.68-3.25-4.8-.39L10 2 7.93 9.14l-4.8.39 3.68 3.25-1.09 4.72L10 15.27z"
                    clipRule="evenodd"
                  />
                </svg>
              ))}
            </div>

            {/* Client name */}
            <p className="font-semibold sm:text-sm md:text-base text-white">
              {testimonial.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
