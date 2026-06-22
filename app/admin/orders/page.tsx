import AdminSidebar from "@/components/AdminSidebar";
import Navbar from "@/components/Navbar";

const orders = [
  {
    id: "ORD-1001",
    customer: "Emily Rose",
    total: "$126",
    status: "Paid",
  },
  {
    id: "ORD-1002",
    customer: "Mia Chen",
    total: "$84",
    status: "Pending",
  },
  {
    id: "ORD-1003",
    customer: "Sophia Lin",
    total: "$36",
    status: "Paid",
  },
];

export default function AdminOrdersPage() {
  return (
    <>
      <Navbar />

      <main className="mx-auto grid max-w-7xl gap-8 px-6 py-12 md:grid-cols-[260px_1fr]">
        <AdminSidebar />

        <section>
          <h1 className="mb-8 text-4xl font-bold">Order Management</h1>

          <div className="overflow-hidden rounded-3xl bg-white shadow">
            <table className="w-full">
              <thead className="bg-pink-50">
                <tr>
                  <th className="p-4 text-left">Order ID</th>
                  <th className="p-4 text-left">Customer</th>
                  <th className="p-4 text-left">Total</th>
                  <th className="p-4 text-left">Status</th>
                </tr>
              </thead>

              <tbody>
                {orders.map((order) => (
                  <tr key={order.id} className="border-t">
                    <td className="p-4">{order.id}</td>
                    <td className="p-4">{order.customer}</td>
                    <td className="p-4">{order.total}</td>
                    <td className="p-4">{order.status}</td>
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
