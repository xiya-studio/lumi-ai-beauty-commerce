"use client";

import Navbar from "@/components/Navbar";
import { useCart } from "@/context/CartContext";
import Link from "next/link";
import { useEffect } from "react";

export default function CheckoutSuccessPage() {
  const { clearCart } = useCart();

  useEffect(() => {
    clearCart();
  }, []);

  return (
    <>
      <Navbar />

      <main className="mx-auto flex max-w-3xl flex-col items-center px-6 py-20 text-center">
        <div className="mb-6 text-6xl">🎉</div>

        <h1 className="mb-4 text-5xl font-bold">Order Successful</h1>

        <p className="mb-8 text-gray-600">
          Thank you for your purchase. Your order has been received and is being
          processed.
        </p>

        <Link
          href="/shop"
          className="rounded-2xl bg-pink-400 px-8 py-4 font-semibold text-white"
        >
          Continue Shopping
        </Link>
      </main>
    </>
  );
}
