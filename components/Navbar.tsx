"use client";

import { useEffect, useState } from "react";
import { useCart } from "@/context/CartContext";
import Link from "next/link";

export default function Navbar() {
  const { cart } = useCart();
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <>
      <div className="bg-black py-2 text-center text-xs font-medium tracking-wider text-white">
        FREE SHIPPING ON ORDERS OVER $99 ✨
      </div>

      <header
        className={`sticky top-0 z-50 border-b transition duration-300 ${
          scrolled
            ? "border-gray-100 bg-white/90 shadow-sm backdrop-blur"
            : "border-transparent bg-white"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <h1 className="text-2xl font-light tracking-[0.3em]">LUMI</h1>

          <nav className="flex items-center gap-8 text-sm uppercase tracking-wide">
            <Link href="/">Home</Link>
            <Link href="/shop">Shop</Link>
            <Link href="/ai-quiz">AI Beauty Quiz</Link>
            <Link href="#">Book A Service</Link>
            <Link href="/admin">Admin</Link>

            <Link href="/cart" className="relative">
              🛒 Cart
              {mounted && cartCount > 0 && (
                <span className="absolute -right-4 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-pink-500 text-xs text-white">
                  {cartCount}
                </span>
              )}
            </Link>

            <Link href="/login">Login</Link>
          </nav>
        </div>
      </header>
    </>
  );
}
