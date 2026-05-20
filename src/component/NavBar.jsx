'use client';
import { Avatar, Button } from "@heroui/react";
import { IoIosArrowDropdown, IoIosLogIn } from "react-icons/io";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import ThemeSwitch from "./ThemeSwitch";
import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";
import { FaDivide, FaHome } from "react-icons/fa";
import { MdOutlinePets } from "react-icons/md";
import { CiLogout } from "react-icons/ci";
import { MdOutlineDashboard } from "react-icons/md";

const NavBar = () => {
  const handleLogOut = async () => {
    await authClient.signOut();
    toast.success("Logged out successfully!!");
  };

  const { data: session } = authClient.useSession();
  const user = session?.user;

  return (
    <div className="navbar flex justify-between items-center px-4 ">
      {/* Logo */}
      <div className="flex gap-3 items-center">
        <Image
          src="/assets/logos/dog.png"
          width={40}
          height={40}
          alt="pet-logo"
        />
        <h1 className="text-2xl font-bold text-pink-500">
          PawNest
          <span className="text-blue-600">🐾</span>
        </h1>
      </div>

      {/* Navigation */}
      <div className="font-bold flex gap-6">
        <Link className="flex items-center gap-2" href="/home"><FaHome /> Home</Link>
        <Link className="flex items-center gap-2" href="/pets"><MdOutlinePets />All Pets</Link>
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-3">
        <ThemeSwitch />

        {user ? (
         
     
      <div className="dropdown dropdown-bottom dropdown-end">

  <div 
    tabIndex={0} 
    role="button" 
    className="flex items-center gap-3 bg-secondary/10 px-4 py-2 rounded-xl cursor-pointer hover:opacity-90 transition-opacity select-none focus:outline-none"
  >
    <Avatar>
      <Avatar.Image alt="John Doe" src={user?.image} referrerPolicy="no-referrer"/>
      <Avatar.Fallback>{user?.name?.charAt(0)}</Avatar.Fallback>
    </Avatar>
    
    <p className="text-base font-medium">{user?.name?.split(" ")[0]}</p>

    <div className="text-xl">
      <IoIosArrowDropdown />
    </div>
  </div>


  <ul 
    tabIndex={0} 
    className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow-md flex flex-col gap-1 text-base font-normal mt-1"
  >
   <li className="flex flex-col max-w-[180px]"> {/* এখানে আপনার প্রয়োজন মতো max-w-.. সেট করতে পারেন */}
  <span className="font-medium text-sm">{user?.name}</span>
  <p className=" text-base-content/60 w-full block truncate" title={user?.email}>
    {user?.email}
  </p>
</li>
    <li>
      <Link href="/dashboard" className="w-full p-0">
        <Button variant="ghost" className="w-full justify-start flex gap-2 items-center"><MdOutlineDashboard />Dashboard</Button>
      </Link>
        {/* <div className="divider"></div> */}
    </li>
    <li>
      <Button 
        onClick={handleLogOut} 
        variant="danger" 
        className="w-full flex gap-2 items-center justify-start bg-red-100 text-red-600 hover:bg-red-200"
      > <CiLogout />
        LogOut
      </Button>
    </li>
  </ul>
</div>
        ) : (
          <Link href="/login">
            <Button 
              className="text-lg flex gap-2 items-center bg-pink-500 text-white rounded-none border-none"
              variant="solid"
            >
             <IoIosLogIn />
              LogIn
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default NavBar;