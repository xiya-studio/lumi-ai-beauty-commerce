import Image from "next/image";
import AdminSidebar from "@/components/AdminSidebar";
import Navbar from "@/components/Navbar";

const products = [
  {
    name: "Hydra Glow Serum",
    category: "Serum",
    price: "$49",
    stock: 32,
    image: "/products/glow-serum.jpg",
  },
  {
    name: "Rose Cream",
    category: "Moisturizer",
    price: "$59",
    stock: 18,
    image: "/products/rose-cream.jpg",
  },
  {
    name: "Lumi Cleanser",
    category: "Cleanser",
    price: "$39",
    stock: 45,
    image: "/products/lumi-cleanser.jpg",
  },
];

export default function AdminProductsPage() {
  return (
    <>
      <Navbar />

      <main className="mx-auto grid max-w-7xl gap-8 px-6 py-12 md:grid-cols-[260px_1fr]">
        <AdminSidebar />

        <section>
          <div className="mb-8 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-widest text-pink-400">
                Product Management
              </p>
              <h1 className="mt-2 text-4xl font-bold">Products</h1>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <input
                type="text"
                placeholder="Search Products..."
                className="rounded-full border px-5 py-3 outline-none"
              />

              <button className="rounded-full bg-black px-6 py-3 font-semibold text-white">
                + Add Product
              </button>
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl bg-white shadow">
            <table className="w-full text-left">
              <thead className="bg-pink-50">
                <tr>
                  <th className="px-6 py-4">Product</th>
                  <th className="px-6 py-4">Category</th>
                  <th className="px-6 py-4">Price</th>
                  <th className="px-6 py-4">Stock</th>
                  <th className="px-6 py-4">Status</th>
                </tr>
              </thead>

              <tbody>
                {products.map((product) => (
                  <tr key={product.name} className="border-t">
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-4">
                        <Image
                          src={product.image}
                          alt={product.name}
                          width={56}
                          height={56}
                          className="h-14 w-14 rounded-2xl object-cover"
                        />

                        <span className="font-semibold">{product.name}</span>
                      </div>
                    </td>

                    <td className="px-6 py-5 text-gray-600">
                      {product.category}
                    </td>

                    <td className="px-6 py-5">{product.price}</td>
                    <td className="px-6 py-5">{product.stock}</td>

                    <td className="px-6 py-5">
                      <span className="rounded-full bg-green-50 px-3 py-1 text-sm font-semibold text-green-600">
                        Active
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </>
  );
}
