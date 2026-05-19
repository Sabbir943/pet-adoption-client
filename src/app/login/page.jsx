"use client";
import { useState } from "react";
import EyeTog from "@/component/EyeTog";
import { Button, Form, Input, TextField, Label, FieldError } from "@heroui/react";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";
import { redirect } from "next/navigation";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit =async (e) => {
    e.preventDefault();
    const formData= new FormData(e.currentTarget);
        const user= Object.fromEntries(formData.entries());
         
        const { data, error } = await authClient.signIn.email({
         name:user?.name,
         email:user?.email,
         image:user?.image,
         password:user?.password,
    
        })
    
        if(data){
            
            toast.success("Sucessfully Login!!");
            redirect('/home')
        }
        if(error){
            toast.error("Invaild user!");
        }
  };

  return (
    <div className="bg-[url('/assets/logos/bg-dog.jpg')] bg-cover bg-center flex justify-center items-center min-h-screen">
      <div className="w-full max-w-md mx-auto">
        <Form onSubmit={handleSubmit} className="bg-white border border-pink-100 rounded-3xl p-10 flex flex-col gap-5 shadow-2xl">

          {/* Header */}
          <div className="text-center mb-2">
            <h1 className="text-3xl font-bold text-gray-800">🐶 Welcome Back!</h1>
            <p className="text-gray-500 mt-2 text-sm">
              Sign in to continue finding loving homes for pets.
            </p>
          </div>

          {/* Email */}
          <TextField isRequired name="email" type="email" className="w-full">
            <Label className="text-gray-700 font-semibold mb-1 block">
              Email <span className="text-pink-500">*</span>
            </Label>
            <Input
              placeholder="john@example.com"
              className="w-full rounded-xl border border-gray-200 px-4 py-2 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-300"
            />
            <FieldError className="text-red-500 text-sm mt-1" />
          </TextField>

          {/* Password */}
          <TextField isRequired name="password" type={showPassword ? "text" : "password"} className="w-full">
            <Label className="text-gray-700 font-semibold mb-1 block">
              Password <span className="text-pink-500">*</span>
            </Label>
            <div className="relative">
              <Input
                placeholder="••••••••"
                className="w-full rounded-xl border border-gray-200 px-4 py-2 pr-10 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-300"
              />
              <EyeTog onToggle={setShowPassword} />
            </div>
            <FieldError className="text-red-500 text-sm mt-1" />
          </TextField>

          {/* Login Button */}
          <Button type="submit" className="w-full bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 rounded-xl transition-colors text-base">
            Login
          </Button>

          {/* Divider */}
          <div className="flex items-center gap-3">
            <hr className="flex-1 border-gray-200" />
            <span className="text-gray-400 text-sm">or</span>
            <hr className="flex-1 border-gray-200" />
          </div>

          {/* Google Button */}
          <Button type="button" className="w-full bg-gray-50 hover:bg-gray-100 text-gray-700 font-semibold py-3 rounded-xl border border-gray-200 transition-colors flex items-center justify-center gap-2 text-base">
            <FcGoogle className="text-xl" />
            Continue with Google
          </Button>

          {/* Register Link */}
          <p className="text-center text-gray-500 text-sm">
            Don&apos;t have an account?{" "}
            <Link href="/signup" className="text-pink-500 hover:underline font-semibold">
              Register
            </Link>
          </p>

        </Form>
      </div>
    </div>
  );
};

export default LoginPage;