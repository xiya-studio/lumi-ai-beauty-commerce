import Link from "next/link";
import Navbar from "@/components/Navbar";
import QuizSelector from "@/components/QuizSelector";

export default function AiQuizPage() {
  return (
    <>
      <Navbar />

      <main className="bg-[#FFF7F3]">
        <section className="mx-auto max-w-5xl px-6 py-16">
          <p className="mb-3 text-sm uppercase tracking-widest text-pink-400">
            Personalized Beauty
          </p>

          <h1 className="mb-5 text-5xl font-bold">
            Find Your Perfect Beauty Routine
          </h1>

          <p className="mb-10 max-w-2xl text-lg leading-8 text-gray-600">
            Answer a few quick questions and Lumi will generate a personalized
            beauty profile with product recommendations.
          </p>

          <QuizSelector />

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/shop"
              className="rounded-full bg-black px-6 py-3 font-semibold text-white"
            >
              Browse Products
            </Link>

            <Link
              href="/"
              className="rounded-full border border-pink-200 bg-white px-6 py-3 font-semibold text-gray-700"
            >
              Back to Home
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
