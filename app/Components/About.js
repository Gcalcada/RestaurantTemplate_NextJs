// app/Components/About.js
import Image from "next/image";
export default function About() {
    return (
        <section className="py-12 px-6 sm:py-16 sm:px-8 bg-yellow-500 text-white">
            <div className="max-w-7xl mx-auto grid gap-8 md:grid-cols-2 md:items-center md:gap-12">
              
                <div className="flex justify-center md:mb-0">
                    <Image width={200} height={200}
                        src="/images/chef.jpg"
                        alt="Our Chef"
                        className="rounded-lg shadow-lg w-full max-w-sm sm:max-w-md object-cover"
                    />
                </div>

             
                <div className="text-center md:text-left">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-4">About Us</h2>
                    <p className="text-base sm:text-lg mb-4 sm:mb-6 leading-relaxed">
                        At our restaurant, we believe in bringing the freshest ingredients and authentic flavors to your table.
                        Our chefs are passionate about crafting delicious dishes that will make your dining experience unforgettable.
                    </p>
                    <p className="text-base sm:text-lg leading-relaxed mb-4">
                        Join us for an experience where tradition meets innovation, and every dish is crafted with love and expertise. We are committed to providing a memorable meal that you will want to relive time and time again!
                    </p>
                 
                    <div className="flex justify-center md:justify-start space-x-4 sm:space-x-6 text-yellow-300 mt-4">
                        <i className="fas fa-seedling text-2xl sm:text-3xl"></i>
                        <i className="fas fa-utensils text-2xl sm:text-3xl"></i>
                        <i className="fas fa-glass-cheers text-2xl sm:text-3xl"></i>
                    </div>
                </div>
            </div>
        </section>
    );
}
