'use client';
import { Avatar, Button } from "@heroui/react";
import { IoIosArrowDropdown, IoIosLogIn, IoIosMenu, IoIosClose } from "react-icons/io";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import ThemeSwitch from "./ThemeSwitch";
import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";
import { FaHome } from "react-icons/fa";
import { MdOutlinePets, MdOutlineDashboard, MdRequestPage } from "react-icons/md";
import { CiLogout } from "react-icons/ci";
import { usePathname } from "next/navigation";
import { IoAddCircleOutline } from "react-icons/io5";

const NavBar = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const activeClass = (path) =>
    pathname === path
      ? 'text-pink-500 bg-pink-500/5 md:bg-transparent'
      : 'text-foreground/80 hover:text-pink-500 hover:bg-foreground/5 md:hover:bg-transparent';

  const handleLogOut = async () => {
    await authClient.signOut();
    toast.success("Logged out successfully!!");
  };

  const { data: session } = authClient.useSession();
  const user = session?.user;

  // Shared navigation links structure
  const navLinks = [
    { href: "/home", label: "Home", icon: <FaHome /> },
    { href: "/allPets", label: "All Pets", icon: <MdOutlinePets /> },
    { href: "/dashboard/my-request", label: "My Request", icon: <MdRequestPage /> },
    { href: "/dashboard/add-pets", label: "Add Pets", icon: <IoAddCircleOutline /> },
  ];

  return (
    <div className="sticky top-0 z-50 w-full border-b border-foreground/10 bg-background/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto navbar flex justify-between items-center px-4 sm:px-6 py-4">
        
        
        <div className="flex gap-2 items-center">
          {/* Mobile Menu Toggle Button */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-2xl p-1.5 rounded-xl hover:bg-foreground/5 text-foreground/80 transition-colors focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {isMobileMenuOpen ? <IoIosClose size={28} /> : <IoIosMenu size={28} />}
          </button>

          {/* Logo */}
          <Link href="/" className="flex gap-2.5 items-center select-none">
            <Image
              src="/assets/logos/dog.png"
              width={34}
              height={34}
              alt="pet-logo"
              className="w-8 h-8 sm:w-9 sm:h-9 object-contain"
            />
            <h1 className="text-xl sm:text-2xl font-black text-pink-500 tracking-tight">
              PawNest<span className="text-blue-600">🐾</span>
            </h1>
          </Link>
        </div>

        {/* Center: Desktop Navigation (Hidden on Mobile) */}
        <div className="hidden md:flex font-semibold items-center gap-6 text-md">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`flex items-center gap-2 py-1 transition-colors ${activeClass(link.href)}`}
            >
              {link.icon}
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right Side Controls */}
        <div className="flex items-center gap-3 sm:gap-4">
          <ThemeSwitch />

          {user ? (
            <div className="dropdown dropdown-bottom dropdown-end">
              <div 
                tabIndex={0} 
                role="button" 
                className="flex items-center gap-2 sm:gap-3 bg-foreground/5 px-3 sm:px-4 py-2 rounded-xl cursor-pointer hover:bg-foreground/10 transition-all select-none focus:outline-none border border-foreground/5"
              >
                <Avatar size="sm" className="w-7 h-7 sm:w-8 sm:h-8">
                  <Avatar.Image alt={user?.name || "User"} src={user?.image} referrerPolicy="no-referrer"/>
                  <Avatar.Fallback>{user?.name?.charAt(0)}</Avatar.Fallback>
                </Avatar>
                <p className="hidden sm:block text-sm font-semibold text-foreground">
                  {user?.name?.split(" ")[0]}
                </p>
                <IoIosArrowDropdown className="text-foreground/60 text-md sm:text-lg" />
              </div>

              {/* User Dropdown Menu */}
              <ul tabIndex={0} className="dropdown-content menu bg-background border border-foreground/10 rounded-2xl z-[60] w-56 p-2 shadow-xl flex flex-col gap-1 mt-2">
                <li className="px-3 py-2 flex flex-col items-start border-b border-foreground/5 mb-1">
                  <span className="font-bold text-sm text-foreground">{user?.name}</span>
                  <span className="text-sm text-foreground/60 truncate w-full" title={user?.email}>
                    {user?.email}
                  </span>
                </li>
                <li>
                  <Link href="/dashboard" className="p-0 block w-full">
                    <Button variant="light" className="w-full justify-start text-foreground flex gap-2 items-center rounded-xl font-medium text-md">
                      <MdOutlineDashboard className="text-lg" /> Dashboard
                    </Button>
                  </Link>
                </li>
                <li>
                  <Link href="/" className="p-0 block w-full">
                    <Button 
                      onClick={handleLogOut} 
                      className="w-full flex gap-2 items-center justify-start bg-red-500/10 hover:bg-red-500 text-red-500 hover:text-white rounded-xl font-medium text-md transition-all"
                    > 
                      <CiLogout className="text-lg" /> LogOut
                    </Button>
                  </Link>
                </li>
              </ul>
            </div>
          ) : (
            <Link href="/login">
              <Button className="font-bold flex gap-2 items-center bg-pink-500 hover:bg-pink-600 text-white rounded-xl border-none transition-all shadow-md px-4 sm:px-5 text-md h-10">
                <IoIosLogIn className="text-xl" /> LogIn
              </Button>
            </Link>
          )}
        </div>
      </div>

      {/* Bottom Dropdown Panel: Mobile Navigation Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-foreground/5 bg-background px-4 py-3 flex flex-col gap-1 shadow-inner animate-in fade-in slide-in-from-top-2 duration-200">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-md transition-all ${activeClass(link.href)}`}
            >
              <span className="text-xl">{link.icon}</span>
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default NavBar;