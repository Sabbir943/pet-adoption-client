'use client';
import { Avatar, Button } from "@heroui/react";
import { IoIosArrowDropdown, IoIosLogIn } from "react-icons/io";
import Image from "next/image";
import Link from "next/link";
import React from "react";
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

  const activeClass = (path) =>
    pathname === path
      ? 'text-pink-500'
      : 'text-foreground/80 hover:text-pink-500';
  const handleLogOut = async () => {
    await authClient.signOut();
    toast.success("Logged out successfully!!");
  };

  const { data: session } = authClient.useSession();
  const user = session?.user;

  return (
    <div className="navbar flex justify-between items-center px-6 py-4 border-b border-foreground/10 bg-background/80 backdrop-blur-md sticky top-0 z-50">
      {/* Logo */}
      <div className="flex gap-3 items-center">
        <Image
          src="/assets/logos/dog.png"
          width={36}
          height={36}
          alt="pet-logo"
        />
        <h1 className="text-2xl font-black text-pink-500 tracking-tight">
          PawNest<span className="text-blue-600">🐾</span>
        </h1>
      </div>

      {/* Navigation */}
     
       <div className="font-semibold flex gap-6 text-foreground/80">
      <Link
        href="/home"
        className={`flex items-center gap-2 transition-colors ${activeClass('/home')}`}
      >
        <FaHome />
        Home
      </Link>

      <Link
        href="/allPets"
        className={`flex items-center gap-2 transition-colors ${activeClass('/allPets')}`}
      >
        <MdOutlinePets />
        All Pets
      </Link>

      <Link
        href="/dashboard/my-request"
        className={`flex items-center gap-2 transition-colors ${activeClass('/dashboard/my-request')}`}
      >
        <MdRequestPage />
        My Request
      </Link>

      <Link
        href="/dashboard/add-pets"
        className={`flex items-center gap-2 transition-colors ${activeClass('/dashboard/add-pets')}`}
      >
        <IoAddCircleOutline />
        Add Pets
      </Link>
    </div>

      {/* Right Side Controls */}
      <div className="flex items-center gap-4">
        <ThemeSwitch />

        {user ? (
          <div className="dropdown dropdown-bottom dropdown-end">
            <div 
              tabIndex={0} 
              role="button" 
              className="flex items-center gap-3 bg-foreground/5 px-4 py-2 rounded-xl cursor-pointer hover:bg-foreground/10 transition-all select-none focus:outline-none border border-foreground/5"
            >
              <Avatar size="sm">
                <Avatar.Image alt={user?.name || "User"} src={user?.image} referrerPolicy="no-referrer"/>
                <Avatar.Fallback>{user?.name?.charAt(0)}</Avatar.Fallback>
              </Avatar>
              <p className="text-sm font-semibold text-foreground">{user?.name?.split(" ")[0]}</p>
              <IoIosArrowDropdown className="text-foreground/60 text-lg" />
            </div>

            <ul tabIndex={0} className="dropdown-content menu bg-background border border-foreground/10 rounded-2xl z-[50] w-56 p-2 shadow-xl flex flex-col gap-1 mt-2">
              <li className="px-3 py-2 flex flex-col items-start border-b border-foreground/5 mb-1">
                <span className="font-bold text-sm text-foreground">{user?.name}</span>
                <span className="text-md text-foreground/60 truncate w-full" title={user?.email}>
                  {user?.email}
                </span>
              </li>
              <li>
                <Link href="/dashboard" className="p-0 block w-full">
                  <Button variant="light" className="w-full justify-start text-foreground flex gap-2 items-center rounded-xl font-medium">
                    <MdOutlineDashboard className="text-lg" /> Dashboard
                  </Button>
                </Link>
              </li>
              <li>
                <Link href={'/'}>
                  <Button 
                  onClick={handleLogOut} 
                  className="w-full flex gap-2 items-center justify-start bg-red-500/10 hover:bg-red-500 text-red-500 hover:text-white rounded-xl font-medium transition-all"
                > 
                  <CiLogout className="text-lg" /> LogOut
                </Button>
                </Link>
              
              </li>
            </ul>
          </div>
        ) : (
          <Link href="/login">
            <Button className="font-bold flex gap-2 items-center bg-pink-500 hover:bg-pink-600 text-white rounded-xl border-none transition-all shadow-md px-5">
              <IoIosLogIn className="text-xl" /> LogIn
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default NavBar;