import Link from "next/link";
import Image from "next/image";

const products = [
  {
    name: "Glow Serum",
    slug: "glow-serum",
    tag: "Hydrating",
    price: "$42",
    image: "/products/glow-serum.jpg",
  },
  {
    name: "Rose Cream",
    slug: "rose-cream",
    tag: "Sensitive Skin",
    price: "$36",
    image: "/products/rose-cream.jpg",
  },
  {
    name: "Lumi Cleanser",
    slug: "lumi-cleanser",
    tag: "Daily Care",
    price: "$28",
    image: "/products/lumi-cleanser.jpg",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FFF7F3] text-[#2A1E1E]">
      <section className="mx-auto grid min-h-screen max-w-7xl animate-[fadeIn_0.8s_ease-out] items-center gap-12 px-6 py-20 lg:grid-cols-2">
        <div>
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.35em] text-[#C68A6B]">
            Lumi Beauty Commerce
          </p>

          <h1 className="text-5xl font-bold leading-tight md:text-7xl">
            AI-Powered Beauty Shopping, Made Personal.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-[#6F5A5A]">
            Lumi helps customers discover skincare and beauty products tailored
            to their skin needs, preferences, and daily routines.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/shop"
              className="rounded-full bg-[#E9A6B3] px-8 py-3 font-semibold text-white shadow-lg shadow-pink-200/60 transition hover:-translate-y-1"
            >
              Shop Now
            </Link>

            <Link
              href="/ask-lumi"
              className="rounded-full border border-[#C68A6B] px-8 py-3 font-semibold text-[#C68A6B] transition hover:-translate-y-1 hover:bg-white"
            >
              Ask Lumi
            </Link>
          </div>

          <div className="mt-12 grid max-w-lg grid-cols-3 gap-4 text-sm">
            <div>
              <p className="text-2xl font-bold">AI</p>
              <p className="text-[#8A6F6F]">Beauty Support</p>
            </div>

            <div>
              <p className="text-2xl font-bold">PayPal</p>
              <p className="text-[#8A6F6F]">Payment Flow</p>
            </div>

            <div>
              <p className="text-2xl font-bold">Admin</p>
              <p className="text-[#8A6F6F]">Dashboard</p>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-6 text-sm">
            <p>⭐⭐⭐⭐⭐ 4.9/5 Rating</p>
            <p>Trusted by 10,000+ Customers</p>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -left-8 -top-8 h-40 w-40 rounded-full bg-[#F6DDE3] blur-3xl" />
          <div className="absolute -bottom-8 right-0 h-48 w-48 rounded-full bg-[#E9A6B3] opacity-40 blur-3xl" />

          <div className="relative rounded-[2rem] border border-white/70 bg-white/60 p-6 shadow-2xl shadow-pink-100 backdrop-blur">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <p className="text-sm text-[#8A6F6F]">AI Assistant</p>
                <h2 className="text-2xl font-bold">Meet Lumi</h2>
              </div>

              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#E9A6B3] text-xl text-white">
                ✨
              </div>
            </div>

            <div className="rounded-3xl bg-[#FFF7F3] p-5">
              <p className="mb-3 text-sm font-semibold text-[#C68A6B]">
                Lumi recommends
              </p>

              <p className="text-2xl font-bold">
                A soft hydration routine for glowing skin.
              </p>

              <p className="mt-3 text-sm leading-6 text-[#6F5A5A]">
                Based on your preference for gentle skincare, Lumi suggests
                hydrating serum, rose cream, and a daily cleanser.
              </p>
            </div>

            <div className="mt-6 space-y-4">
              {products.map((product) => (
                <div
                  key={product.name}
                  className="flex items-center justify-between rounded-2xl bg-white p-4 shadow-sm"
                >
                  <div>
                    <h3 className="font-semibold">{product.name}</h3>
                    <p className="text-sm text-[#8A6F6F]">{product.tag}</p>
                  </div>

                  <p className="font-bold text-[#C68A6B]">{product.price}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-[2rem] bg-white p-8 shadow">
            <div className="mb-4 text-3xl">✨</div>

            <h3 className="mb-2 text-xl font-bold">AI Recommendations</h3>

            <p className="text-gray-600">
              Personalized beauty suggestions tailored to your skincare needs.
            </p>
          </div>

          <div className="rounded-[2rem] bg-white p-8 shadow">
            <div className="mb-4 text-3xl">🌿</div>

            <h3 className="mb-2 text-xl font-bold">Clean Ingredients</h3>

            <p className="text-gray-600">
              Carefully selected products focused on skin-friendly formulas.
            </p>
          </div>

          <div className="rounded-[2rem] bg-white p-8 shadow">
            <div className="mb-4 text-3xl">🚚</div>

            <h3 className="mb-2 text-xl font-bold">Worldwide Shipping</h3>

            <p className="text-gray-600">
              Fast and reliable delivery to customers around the world.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <p className="mb-3 text-sm uppercase tracking-widest text-pink-400">
              About Lumi
            </p>

            <h2 className="mb-6 text-4xl font-bold">
              Beauty Shopping Powered By AI
            </h2>

            <p className="leading-8 text-gray-600">
              Lumi combines AI-powered recommendations with carefully selected
              beauty products to help customers discover skincare routines that
              truly fit their needs.
            </p>
          </div>

          <div className="overflow-hidden rounded-[2rem]">
            <Image
              src="/products/glow-serum.jpg"
              alt="About Lumi"
              width={800}
              height={600}
              className="h-[400px] w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="mb-10 flex items-center justify-between">
          <h2 className="text-4xl font-bold">Customer Favorites</h2>
          <p className="text-[#8A6F6F]">Popular Picks</p>
        </div>

        <div className="flex gap-6 overflow-x-auto pb-4">
          {products.map((product) => (
            <div
              key={product.name}
              className="group min-w-[320px] rounded-[2rem] bg-white p-6 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="mb-6 overflow-hidden rounded-3xl">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={500}
                  height={500}
                  className="h-64 w-full object-cover transition duration-300 group-hover:scale-105"
                />
              </div>

              <p className="text-sm uppercase tracking-widest text-pink-400">
                {product.tag}
              </p>

              <h3 className="mt-3 text-2xl font-bold">{product.name}</h3>

              <p className="mt-3 text-xl font-semibold text-[#C68A6B]">
                {product.price}
              </p>

              <Link
                href={`/product/${product.slug}`}
                className="mt-6 block w-full rounded-full bg-black py-3 text-center font-semibold text-white"
              >
                View Product
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <h2 className="mb-10 text-center text-4xl font-bold">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {[
            [
              "How long does shipping take?",
              "Most orders arrive within 3-7 business days.",
            ],
            [
              "Are your products cruelty-free?",
              "Yes. All Lumi products are cruelty-free.",
            ],
            ["Can I return my order?", "Returns are accepted within 30 days."],
            [
              "How does Lumi AI work?",
              "Lumi analyzes your preferences and recommends suitable beauty products.",
            ],
          ].map(([q, a]) => (
            <div key={q} className="rounded-3xl bg-white p-6 shadow">
              <h3 className="font-semibold">{q}</h3>
              <p className="mt-2 text-gray-600">{a}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <h2 className="mb-10 text-center text-4xl font-bold">
          Customer Stories
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl bg-white p-8 shadow">
            <p className="mb-3 text-yellow-500">⭐⭐⭐⭐⭐</p>

            <p className="font-semibold">Sarah M.</p>

            <p className="mt-4 text-gray-600">
              Lumi helped me discover products that actually fit my skin type.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow">
            <p className="mb-3 text-yellow-500">⭐⭐⭐⭐⭐</p>

            <p className="font-semibold">Emily R.</p>

            <p className="mt-4 text-gray-600">
              The AI recommendation was surprisingly accurate and easy to use.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow">
            <p className="mb-3 text-yellow-500">⭐⭐⭐⭐⭐</p>

            <p className="font-semibold">Jessica K.</p>

            <p className="mt-4 text-gray-600">
              Beautiful products, fast shipping, and a smooth shopping
              experience.
            </p>
          </div>
        </div>
      </section>
      <footer className="border-t border-pink-100 bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-4">
          <div>
            <h3 className="text-2xl font-bold">Lumi</h3>
            <p className="mt-4 text-sm text-gray-600">
              AI-powered beauty commerce designed for modern skincare lovers.
            </p>
          </div>

          <div>
            <h4 className="mb-4 font-semibold">Company</h4>
            <ul className="space-y-2 text-gray-600">
              <li>About Us</li>
              <li>Careers</li>
              <li>Contact</li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-semibold">Support</h4>
            <ul className="space-y-2 text-gray-600">
              <li>FAQ</li>
              <li>Shipping</li>
              <li>Returns</li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-semibold">Follow Us</h4>
            <ul className="space-y-2 text-gray-600">
              <li>Instagram</li>
              <li>TikTok</li>
              <li>YouTube</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-pink-100 py-6 text-center text-sm text-gray-500">
          © 2026 Lumi Beauty Commerce. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
