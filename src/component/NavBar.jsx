'use client';
import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import ThemeSwitch from "./ThemeSwitch";

const NavBar = () => {
  return (
    <div className="navbar  flex justify-between items-center px-4 text-xl">

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
        <Link href="/home">Home</Link>
        <Link href="/pets">All Pets</Link>
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-3">
         <ThemeSwitch />
         <Link href={'/login'}> <Button
          as={Link}
          href="/login"
          className="text-lg bg-pink-500 rounded-none border-none"
          variant="outline"
          
        >
          LogIn
        </Button></Link>
       

       

        <div className="dropdown dropdown-bottom dropdown-end">
  <div tabIndex={0} role="button" className="btn m-1 text-xl">⬇️</div>
  <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
    
    <Link href={'/dashboard'}>Dashboard</Link>
    <li><a>LogOut</a></li>
  </ul>
</div>
      </div>

    </div>
  );
};

export default NavBar;