"use client";

import { useState } from "react";

const quizResults = {
  Dry: {
    product: "Glow Serum",
    skinType: "Dry Skin",
    concern: "Dehydration & Dullness",
    confidence: "94%",
  },
  Oily: {
    product: "Lumi Cleanser",
    skinType: "Oily Skin",
    concern: "Excess Oil & Pores",
    confidence: "91%",
  },
  Sensitive: {
    product: "Rose Cream",
    skinType: "Sensitive Skin",
    concern: "Redness & Irritation",
    confidence: "96%",
  },
  Combination: {
    product: "Glow Serum + Rose Cream",
    skinType: "Combination Skin",
    concern: "Uneven Balance",
    confidence: "93%",
  },
};

type SkinType = keyof typeof quizResults;

export default function QuizSelector() {
  const [selected, setSelected] = useState<SkinType | "">("");

  const result = selected ? quizResults[selected] : null;

  return (
    <div className="rounded-[2rem] bg-white p-8 shadow-xl">
      <p className="mb-3 text-sm uppercase tracking-widest text-pink-400">
        AI Beauty Quiz
      </p>

      <h2 className="mb-6 text-3xl font-bold">What is your skin type?</h2>

      <div className="grid gap-4 md:grid-cols-4">
        {(Object.keys(quizResults) as SkinType[]).map((type) => (
          <button
            key={type}
            onClick={() => setSelected(type)}
            className={`rounded-2xl border p-4 transition ${
              selected === type
                ? "border-pink-400 bg-pink-50 text-pink-600"
                : "hover:bg-pink-50"
            }`}
          >
            {type}
          </button>
        ))}
      </div>

      {result && (
        <div className="mt-8 rounded-[2rem] bg-gradient-to-br from-pink-50 to-orange-50 p-8">
          <p className="text-sm uppercase tracking-widest text-pink-500">
            ✨ Your Beauty Profile
          </p>

          <h3 className="mt-3 text-3xl font-bold">{result.skinType}</h3>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl bg-white p-5 shadow-sm">
              <p className="text-sm text-gray-500">Main Concern</p>
              <p className="mt-2 font-semibold">{result.concern}</p>
            </div>

            <div className="rounded-2xl bg-white p-5 shadow-sm">
              <p className="text-sm text-gray-500">Recommended Product</p>
              <p className="mt-2 font-semibold">{result.product}</p>
            </div>

            <div className="rounded-2xl bg-white p-5 shadow-sm">
              <p className="text-sm text-gray-500">AI Confidence</p>
              <p className="mt-2 font-semibold">{result.confidence}</p>
            </div>
          </div>

          <div className="mt-8 flex gap-4">
            <button className="rounded-full bg-black px-6 py-3 font-semibold text-white">
              Shop Recommended Products
            </button>

            <button
              onClick={() => setSelected("")}
              className="rounded-full border px-6 py-3 font-semibold"
            >
              Try Again
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
