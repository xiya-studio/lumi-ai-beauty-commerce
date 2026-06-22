import Link from "next/link";

export default function AdminSidebar() {
  return (
    <aside className="w-64 rounded-3xl bg-white p-6 shadow">
      <h2 className="mb-6 text-xl font-bold">Admin</h2>

      <nav className="space-y-3">
        <Link href="/admin" className="block rounded-xl p-3 hover:bg-pink-50">
          Dashboard
        </Link>

        <Link
          href="/admin/products"
          className="block rounded-xl p-3 hover:bg-pink-50"
        >
          Products
        </Link>

        <Link
          href="/admin/orders"
          className="block rounded-xl p-3 hover:bg-pink-50"
        >
          Orders
        </Link>

        <Link
          href="/admin/users"
          className="block rounded-xl p-3 hover:bg-pink-50"
        >
          Users
        </Link>

        <Link href="#" className="block rounded-xl p-3 hover:bg-pink-50">
          Analytics
        </Link>
      </nav>
    </aside>
  );
}
