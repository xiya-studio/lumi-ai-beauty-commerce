import Navbar from "@/components/Navbar";
import ProductCard from "@/components/ProductCard";
import { products } from "@/lib/products";

export default function ShopPage() {
  return (
    <>
      <Navbar />

      <main className="mx-auto max-w-7xl px-6 py-12">
        <h1 className="mb-8 text-4xl font-bold">Shop</h1>

        <div className="mb-8 flex flex-wrap gap-3">
          <button className="rounded-full bg-black px-5 py-2 text-white">
            All
          </button>

          <button className="rounded-full border px-5 py-2">Serum</button>

          <button className="rounded-full border px-5 py-2">Moisturizer</button>

          <button className="rounded-full border px-5 py-2">Cleanser</button>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              image={product.image}
              name={product.name}
              price={product.price}
              category={product.category}
              slug={product.slug}
            />
          ))}
        </div>
      </main>
    </>
  );
}
