import AdminSidebar from "@/components/AdminSidebar";
import Navbar from "@/components/Navbar";

const users = [
  {
    name: "Emily Rose",
    email: "emily@example.com",
    role: "Customer",
    status: "Active",
  },
  {
    name: "Mia Chen",
    email: "mia@example.com",
    role: "Customer",
    status: "Active",
  },
  {
    name: "Sophia Lin",
    email: "sophia@example.com",
    role: "Admin",
    status: "Active",
  },
];

export default function AdminUsersPage() {
  return (
    <>
      <Navbar />

      <main className="mx-auto grid max-w-7xl gap-8 px-6 py-12 md:grid-cols-[260px_1fr]">
        <AdminSidebar />

        <section>
          <h1 className="mb-8 text-4xl font-bold">User Management</h1>

          <div className="overflow-hidden rounded-3xl bg-white shadow">
            <table className="w-full">
              <thead className="bg-pink-50">
                <tr>
                  <th className="p-4 text-left">Name</th>
                  <th className="p-4 text-left">Email</th>
                  <th className="p-4 text-left">Role</th>
                  <th className="p-4 text-left">Status</th>
                </tr>
              </thead>

              <tbody>
                {users.map((user) => (
                  <tr key={user.email} className="border-t">
                    <td className="p-4">{user.name}</td>
                    <td className="p-4">{user.email}</td>
                    <td className="p-4">{user.role}</td>
                    <td className="p-4">{user.status}</td>
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
