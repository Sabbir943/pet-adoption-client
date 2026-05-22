import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    
    <footer className="bg-zinc-950 text-zinc-400 px-6 md:px-16 py-16 border-t border-zinc-900 mt-auto">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight">
            PawNest<span className="text-pink-500">🐾</span>
          </h1>
          <p className="mt-4 max-w-xl text-sm md:text-base text-zinc-400">
            Connecting sweet animals with loving homes. Your premier platform for local pet adoption and animal care support.
          </p>
        </div>

        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        
          <div className="space-y-3">
            <h3 className="text-white font-bold text-sm tracking-wider">NEWSLETTER</h3>
            <p className="text-sm text-zinc-400">
              Subscribe for adoption updates, inspiring success stories, and pet care tips.
            </p>
            <div className="flex items-center bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 focus-within:border-zinc-700 transition-all">
              <input
                type="email"
                placeholder="Enter email"
                className="bg-transparent outline-none flex-1 text-sm text-white placeholder:text-zinc-600"
              />
              <span className="text-white font-bold cursor-pointer hover:translate-x-0.5 transition-transform">↗</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-sm tracking-wider mb-4">QUICK LINKS</h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-white transition-colors"><Link href="/home">Home</Link></li>
              <li className="hover:text-white transition-colors"><Link href="/allPets">Adopt Pets</Link></li>
              <li className="hover:text-white transition-colors"><Link href="/dashboard/my-listings">My Listings</Link></li>
              <li className="hover:text-white transition-colors"><Link href="/dashboard">Dashboard</Link></li>
            </ul>
          </div>

          
          <div>
            <h3 className="text-white font-bold text-sm tracking-wider mb-4">SUPPORT</h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-white cursor-pointer transition-colors">Help Center</li>
              <li className="hover:text-white cursor-pointer transition-colors">Adoption Guidelines</li>
              <li className="hover:text-white cursor-pointer transition-colors">Terms of Service</li>
              <li className="hover:text-white cursor-pointer transition-colors">Privacy Policy</li>
            </ul>
          </div>

          
          <div>
            <h3 className="text-white font-bold text-sm tracking-wider mb-4">CONTACT US</h3>
            <ul className="space-y-2 text-sm text-zinc-400">
              <li className="hover:text-white transition-colors">+880 1234-567890</li>
              <li className="hover:text-white transition-colors">support@pawnest.com</li>
              <li className="text-xs mt-2 text-zinc-600">Mirpur, Dhaka, Bangladesh</li>
            </ul>
          </div>
        </div>

        
        <div className="border-t border-zinc-900 mt-12 pt-6 flex flex-col sm:flex-row justify-between items-center text-xs">
          <p>© 2026 PawNest. All rights reserved.</p>

          <div className="flex gap-5 mt-4 sm:mt-0 text-zinc-400 font-medium text-sm">
            <span className="cursor-pointer hover:text-white transition-colors">Facebook</span>
            <span className="cursor-pointer hover:text-white transition-colors">LinkedIn</span>
            <span className="cursor-pointer hover:text-white transition-colors">Instagram</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;