import ProductCard from "@/components/ProductCard";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import AddToCartButton from "@/components/AddToCartButton";
import { products } from "@/lib/products";

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const product = products.find((item) => item.slug === id);

  if (!product) {
    return (
      <>
        <Navbar />
        <main className="mx-auto max-w-5xl px-6 py-12">
          <h1 className="text-4xl font-bold">Product Not Found</h1>
        </main>
      </>
    );
  }

  return (
    <>
      <Navbar />

      <main className="mx-auto max-w-5xl px-6 py-12">
        <div className="grid gap-10 md:grid-cols-2">
          <div className="overflow-hidden rounded-3xl">
            <Image
              src={product.image}
              alt={product.name}
              width={800}
              height={800}
              className="h-96 w-full object-cover"
            />
          </div>

          <div>
            <p className="mb-3 text-sm uppercase tracking-wider text-pink-400">
              {product.category}
            </p>

            <h1 className="text-5xl font-bold">{product.name}</h1>

            <p className="mt-5 text-2xl font-semibold text-pink-500">
              {product.price}
            </p>

            <p className="mt-6 leading-7 text-gray-600">
              A beauty product selected by Lumi to support your daily skincare
              routine with a soft, clean, and personalized shopping experience.
            </p>

            <div className="mt-8 space-y-3 text-sm">
              <div className="flex justify-between border-b pb-2">
                <span className="text-gray-500">Skin Type</span>
                <span>All Skin Types</span>
              </div>

              <div className="flex justify-between border-b pb-2">
                <span className="text-gray-500">Volume</span>
                <span>50ml</span>
              </div>

              <div className="flex justify-between border-b pb-2">
                <span className="text-gray-500">Made In</span>
                <span>France</span>
              </div>
            </div>

            <AddToCartButton
              product={{
                id: product.id,
                name: product.name,
                price: product.price,
                slug: product.slug,
              }}
            />
          </div>
        </div>

        <section className="mt-24">
          <h2 className="mb-8 text-3xl font-bold">You May Also Like</h2>

          <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
            {products
              .filter((item) => item.id !== product.id)
              .map((item) => (
                <ProductCard
                  key={item.id}
                  id={item.id}
                  slug={item.slug}
                  name={item.name}
                  price={item.price}
                  category={item.category}
                  image={item.image}
                />
              ))}
          </div>
        </section>

        <section className="mt-24">
          <h2 className="mb-8 text-3xl font-bold">Customer Reviews</h2>

          <div className="space-y-6">
            <div className="rounded-3xl bg-white p-8 shadow-lg">
              <div className="mb-4 flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-pink-200" />

                <div>
                  <p className="font-semibold">Sarah M.</p>
                  <p className="text-sm text-gray-400">Verified Customer</p>
                </div>
              </div>

              <p className="mb-3 text-yellow-500">⭐⭐⭐⭐⭐</p>

              <p className="text-gray-600">
                My skin feels smoother and more hydrated after only one week.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-lg">
              <div className="mb-4 flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-pink-200" />

                <div>
                  <p className="font-semibold">Emily R.</p>
                  <p className="text-sm text-gray-400">Verified Customer</p>
                </div>
              </div>

              <p className="mb-3 text-yellow-500">⭐⭐⭐⭐⭐</p>

              <p className="text-gray-600">
                Love the lightweight texture and clean ingredients.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
