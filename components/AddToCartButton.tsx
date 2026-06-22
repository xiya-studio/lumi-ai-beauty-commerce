"use client";

import { useCart } from "@/context/CartContext";

type AddToCartButtonProps = {
  product: {
    id: number;
    name: string;
    price: string;
    slug: string;
  };
};

export default function AddToCartButton({ product }: AddToCartButtonProps) {
  const { addToCart } = useCart();

  return (
    <button
      onClick={() => addToCart(product)}
      className="mt-8 rounded-full bg-pink-400 px-8 py-3 font-semibold text-white"
    >
      Add to Cart
    </button>
  );
}
