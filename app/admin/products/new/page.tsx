import Navbar from "@/components/Navbar";

export default function NewProductPage() {
  return (
    <>
      <Navbar />

      <main className="mx-auto max-w-3xl px-6 py-12">
        <h1 className="mb-8 text-4xl font-bold">Add Product</h1>

        <div className="rounded-3xl bg-white p-8 shadow">
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Product Name"
              className="w-full rounded-2xl border p-4 outline-none focus:border-pink-400"
            />

            <input
              type="text"
              placeholder="Category"
              className="w-full rounded-2xl border p-4 outline-none focus:border-pink-400"
            />

            <input
              type="text"
              placeholder="Price"
              className="w-full rounded-2xl border p-4 outline-none focus:border-pink-400"
            />

            <button className="w-full rounded-2xl bg-pink-400 py-4 font-semibold text-white">
              Save Product
            </button>
          </div>
        </div>
      </main>
    </>
  );
}
