// app/checkout/page.js


export default function Checkout() {
  return (
    <div>
  
      <section className="p-8">
        <h2 className="text-3xl font-semibold mb-4">Checkout</h2>
        <form>
          <input type="text" placeholder="Name" className="p-2 mb-4 w-full border rounded" />
          <input type="email" placeholder="Email" className="p-2 mb-4 w-full border rounded" />
          <input type="text" placeholder="Address" className="p-2 mb-4 w-full border rounded" />
          <button type="submit" className="bg-green-600 text-white py-2 px-4 rounded w-full">Complete Order</button>
        </form>
      </section>
    </div>
  );
}
