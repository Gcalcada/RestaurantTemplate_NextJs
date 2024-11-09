// app/Components/Testimonials.js
import Image from 'next/image';

export default function Testimonials() {
    const testimonials = [
        { name: 'John Doe', text: 'The best pizza I have ever had! Highly recommend this place!', image: '/images/customer1.jpg', rating: 5 },
        { name: 'Jane Smith', text: 'Wonderful service and an amazing atmosphere. Will definitely return!', image: '/images/customer2.jpg', rating: 4 },
    ];

    return (
        <section className="py-16 text-center dark:bg-gray-800 dark:text-white">
            <h2 className="text-4xl sm:text-3xl md:text-4xl font-bold mb-8">What Our Customers Say</h2>
            <div className="flex flex-wrap justify-center gap-6 md:gap-12 mx-2">
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="p-6 rounded-lg shadow-lg max-w-sm w-full dark:bg-gray-700 dark:text-white">
                        {/* Client photo*/}
                        <div className="flex items-center justify-center mb-4">
                            <Image
                                width={200} height={200}
                                src={testimonial.image}
                                alt={testimonial.name}
                                className="h-16 w-16 object-cover rounded-full border-2 dark:border-gray-500"
                            />
                        </div>
                        {/* Text test */}
                        <p className="text-lg sm:text-base italic mb-4 dark:text-gray-300">&quot;{testimonial.text}&quot;</p>

                        {/* Evaluation by stars */}
                        <div className="flex justify-center mb-4">
                            {[...Array(5)].map((_, i) => (
                                <svg
                                    key={i}
                                    xmlns="http://www.w3.org/2000/svg"
                                    className={`h-5 w-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10 15.27l4.28 2.23-1.09-4.72 3.68-3.25-4.8-.39L10 2 7.93 9.14l-4.8.39 3.68 3.25-1.09 4.72L10 15.27z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            ))}
                        </div>

                        {/* Nome do cliente */}
                        <p className="font-semibold sm:text-sm dark:text-gray-300">{testimonial.name}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
