import AdminSidebar from "@/components/AdminSidebar";
import Navbar from "@/components/Navbar";

const stats = [
  { label: "Total Products", value: "24", change: "+12%" },
  { label: "Total Orders", value: "128", change: "+18%" },
  { label: "Revenue", value: "$12,480", change: "+24%" },
  { label: "Active Users", value: "842", change: "+9%" },
];

const sales = [
  { month: "Jan", value: "45%" },
  { month: "Feb", value: "60%" },
  { month: "Mar", value: "72%" },
  { month: "Apr", value: "88%" },
  { month: "May", value: "76%" },
];

const recentOrders = [
  { customer: "Emily Rose", product: "Hydra Glow Serum", total: "$49" },
  { customer: "Mia Chen", product: "Rose Cream", total: "$59" },
  { customer: "Sophia Lin", product: "Lumi Cleanser", total: "$39" },
];

const recentActivities = [
  { title: "Emily purchased Glow Serum", time: "2 min ago" },
  { title: "Mia created an account", time: "15 min ago" },
  { title: "Order #1024 completed", time: "1 hour ago" },
];

export default function AdminPage() {
  return (
    <>
      <Navbar />

      <main className="mx-auto grid max-w-7xl gap-8 px-6 py-12 md:grid-cols-[260px_1fr]">
        <AdminSidebar />

        <section>
          <div className="mb-8">
            <p className="text-sm uppercase tracking-widest text-pink-400">
              Lumi Admin
            </p>
            <h1 className="mt-2 text-4xl font-bold">Dashboard Overview</h1>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {stats.map((item) => (
              <div key={item.label} className="rounded-3xl bg-white p-6 shadow">
                <p className="text-sm text-gray-500">{item.label}</p>
                <h2 className="mt-3 text-3xl font-bold">{item.value}</h2>
                <p className="mt-3 text-sm font-semibold text-green-600">
                  {item.change} this month
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 grid gap-8 xl:grid-cols-[1.2fr_0.8fr]">
            <div className="rounded-3xl bg-white p-8 shadow">
              <div className="mb-8 flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold">Sales Overview</h2>
                  <p className="mt-1 text-sm text-gray-500">
                    Monthly revenue performance
                  </p>
                </div>

                <span className="rounded-full bg-pink-50 px-4 py-2 text-sm font-semibold text-pink-500">
                  2026
                </span>
              </div>

              <div className="flex h-64 items-end gap-5">
                {sales.map((item) => (
                  <div
                    key={item.month}
                    className="flex flex-1 flex-col items-center gap-3"
                  >
                    <div className="flex h-52 w-full items-end rounded-full bg-pink-50">
                      <div
                        className="w-full rounded-full bg-pink-300"
                        style={{ height: item.value }}
                      />
                    </div>

                    <p className="text-sm font-medium text-gray-500">
                      {item.month}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-8">
              <div className="rounded-3xl bg-white p-8 shadow">
                <h2 className="mb-6 text-2xl font-bold">Recent Orders</h2>

                <div className="space-y-5">
                  {recentOrders.map((order) => (
                    <div
                      key={order.customer}
                      className="rounded-2xl border border-pink-100 p-4"
                    >
                      <p className="font-semibold">{order.customer}</p>
                      <p className="mt-1 text-sm text-gray-500">
                        {order.product}
                      </p>
                      <p className="mt-3 font-bold text-[#C68A6B]">
                        {order.total}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-3xl bg-white p-8 shadow">
                <h2 className="mb-6 text-2xl font-bold">Recent Activity</h2>

                <div className="space-y-5">
                  {recentActivities.map((activity) => (
                    <div
                      key={activity.title}
                      className="rounded-2xl bg-pink-50 p-4"
                    >
                      <p className="font-semibold">{activity.title}</p>
                      <p className="mt-1 text-sm text-gray-500">
                        {activity.time}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
