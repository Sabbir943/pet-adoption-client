'use client'
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import toast from "react-hot-toast";

export default function DashboardLayout({ children }) {
  // Simple handler placeholder for logout functionality
  const handleLogOut = async () => {
     await authClient.signOut();
     toast.success("Logged out successfully!!");
   };

  return (
    <div className="flex flex-col  dark:bg-zinc-950 border border-foreground/10 md:flex-row gap-6 min-h-[calc(100vh-120px)] p-4 md:p-6 bg-[#FAF8F5]">
      {/* Sidebar Menu */}
      <aside className="w-full md:w-64 p-5 bg-white dark:bg-zinc-950 border border-foreground/10 rounded-2xl    h-fit md:h-[calc(100vh-160px)] sticky top-24 flex flex-col justify-between shadow-sm">
        
        {/* Top Section: Navigation Links */}
        <div>
          <h2 className="text-md font-bold tracking-wider uppercase px-3 mb-4 text-gray-400">
            Dashboard Menu
          </h2>
          <ul className="flex flex-col gap-1.5 font-medium text-gray-600">
            <li>
              <Link 
                href="/dashboard/add-pets" 
                className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-gray-50 hover:text-[#0B2C3D] transition-colors"
              >
                <span className="text-lg">➕</span> Add Pet
              </Link>
            </li>
            <li>
              <Link 
                href="/dashboard/my-listings" 
                className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-gray-50 hover:text-[#0B2C3D] transition-colors"
              >
                <span className="text-lg">🐾</span> My Listings
              </Link>
            </li>
            <li>
              <Link 
                href="/dashboard/my-request" 
                className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-gray-50 hover:text-[#0B2C3D] transition-colors"
              >
                <span className="text-lg">📋</span> My Requests
              </Link>
            </li>
          </ul>
        </div>

        {/* Bottom Section: Separator & Logout Button */}
        <div className="mt-6 pt-4 border-t border-gray-100">
          <button 
            onClick={handleLogOut}
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl font-medium text-[#E04D3C] hover:bg-red-50/60 transition-colors text-left group"
          >
            {/* Clean SVG Logout Icon */}
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5 transform group-hover:translate-x-0.5 transition-transform" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
            Logout Account
          </button>
        </div>

      </aside>

      {/* Main Content Area */}
      <section className="flex-1 p-6 rounded-2xl  dark:bg-zinc-950  border-foreground/10 border  bg-white shadow-sm">
        {children}
      </section>
    </div>
  );
}