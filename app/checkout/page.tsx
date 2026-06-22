import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function CheckoutPage() {
  return (
    <>
      <Navbar />

      <main className="mx-auto max-w-4xl px-6 py-12">
        <h1 className="mb-8 text-4xl font-bold">Checkout</h1>

        <div className="rounded-3xl bg-white p-8 shadow">
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full rounded-2xl border p-4"
            />

            <input
              type="email"
              placeholder="Email"
              className="w-full rounded-2xl border p-4"
            />

            <input
              type="text"
              placeholder="Phone Number"
              className="w-full rounded-2xl border p-4"
            />

            <textarea
              placeholder="Shipping Address"
              className="h-32 w-full rounded-2xl border p-4"
            />

            <select className="w-full rounded-2xl border p-4">
              <option>Credit Card</option>
              <option>Apple Pay</option>
              <option>Google Pay</option>
            </select>

            <Link
              href="/checkout/success"
              className="block w-full rounded-2xl bg-pink-400 py-4 text-center font-semibold text-white"
            >
              Place Order
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
