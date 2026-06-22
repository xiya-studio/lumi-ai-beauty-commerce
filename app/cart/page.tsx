"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import { useCart } from "@/context/CartContext";

export default function CartPage() {
  const { cart, removeFromCart } = useCart();

  const total = cart.reduce((sum, item) => {
    const price = Number(item.price.replace("$", ""));
    return sum + price * item.quantity;
  }, 0);

  return (
    <>
      <Navbar />

      <main className="mx-auto max-w-5xl px-6 py-12">
        <h1 className="mb-8 text-4xl font-bold">Shopping Cart</h1>

        {cart.length === 0 ? (
          <div className="rounded-3xl bg-white p-8 shadow">
            <p>Your cart is empty.</p>
          </div>
        ) : (
          <>
            <div className="space-y-4">
              {cart.map((item, index) => (
                <div
                  key={`${item.id}-${index}`}
                  className="rounded-3xl bg-white p-6 shadow"
                >
                  <Link
                    href={`/product/${item.slug}`}
                    className="text-xl font-semibold hover:text-pink-500"
                  >
                    {item.name}
                  </Link>
                  <p className="text-gray-500">Qty: {item.quantity}</p>
                  <p className="text-pink-500">{item.price}</p>

                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="mt-3 text-red-500 hover:text-red-700"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-3xl bg-pink-50 p-6">
              <div className="mb-6 flex justify-between text-xl font-bold">
                <span>Subtotal</span>
                <span>${total}</span>
              </div>

              <Link
                href="/checkout"
                className="mt-6 block w-full rounded-2xl bg-pink-400 py-4 text-center font-semibold text-white"
              >
                Proceed to Checkout
              </Link>
            </div>
          </>
        )}
      </main>
    </>
  );
}
