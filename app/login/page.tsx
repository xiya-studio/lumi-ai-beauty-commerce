import Navbar from "@/components/Navbar";

export default function LoginPage() {
  return (
    <>
      <Navbar />

      <main className="mx-auto flex min-h-[80vh] max-w-md items-center px-6">
        <div className="w-full rounded-3xl bg-white p-8 shadow">
          <h1 className="mb-6 text-center text-4xl font-bold">Welcome Back</h1>

          <div className="space-y-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full rounded-2xl border p-4 outline-none focus:border-pink-400"
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full rounded-2xl border p-4 outline-none focus:border-pink-400"
            />

            <button className="w-full rounded-2xl bg-pink-400 py-4 font-semibold text-white">
              Sign In
            </button>

            <button className="w-full rounded-2xl border py-4 font-semibold">
              Continue with Google
            </button>
          </div>
        </div>
      </main>
    </>
  );
}
