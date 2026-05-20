
import Link from "next/link";

export default function DashboardLayout({ children }) {
  return (
    <div className="flex flex-col md:flex-row gap-6 ">
      {/* বামে বা ওপরে থাকবে সাইডবার মেনু min-h-[calc(100vh-160px)] */}
      <aside className="w-full md:w-64 bg-base-200/50 p-4 rounded-2xl border border-base-200 h-fit sticky top-24">
        <h2 className="text-lg font-bold px-4 mb-4 text-primary">Menu</h2>
        <ul className="menu w-full gap-1 p-0 font-medium">
          
          <li><Link href="/dashboard/add-pets">➕ Add Pet</Link></li>
          <li><Link href="/dashboard/my-listings">🐾 My Listings</Link></li>
          <li><Link href="/dashboard/my-request">📋 My Requests</Link></li>
        </ul>
      </aside>

      {/* ড্যাশবোর্ডের নির্দিষ্ট পেজের কনটেন্ট এখানে রেন্ডার হবে */}
      <section className="flex-1 bg-base-100 p-6 rounded-2xl border border-base-200 shadow-sm">
        {children}
      </section>
    </div>
  );
}