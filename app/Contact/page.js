// app/contact/page.js
import Navbar from '../Components/Navbar';
export const metadata = {
  title: "Contacts", // Set the title for the page
};
export default function Contact() {
  return (
    <div>
      <Navbar />
      <section className="p-8 text-center">
        <h2 className="text-3xl font-semibold mb-4">Contact Us</h2>
        <p className="text-lg">For reservations or inquiries, please call us at (123) 456-7890 or email us at contact@restaurant.com.</p>
      </section>
    </div>
  );
}
