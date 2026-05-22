"use client";
import { useState } from "react";
import { Button, Form, Input, TextField, Label, FieldError, Description } from "@heroui/react";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import EyeTog from "@/component/EyeTog";
import { object } from "better-auth";
import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";
import { redirect } from "next/navigation";

const SignUpPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [passwordError, setPasswordError] = useState("");

  const handleGoogle=async()=>{
     const data = await authClient.signIn.social({
     provider: "google",
  });
  }
  const handleSubmit =async (e) => {
    e.preventDefault();
    const formData= new FormData(e.currentTarget);
    const user= Object.fromEntries(formData.entries());
     
    const { data, error } = await authClient.signUp.email({
     name:user?.name,
     email:user?.email,
     image:user?.image,
     password:user?.password,

    })

    if(data){
        
        toast.success("Sucessfully Created the Account!!");
        redirect('/login')
    }
    if(error){
        toast.error("Please CareFully fill the form!");
    }
    if (user.password !== user.confirmPassword) {
      setPasswordError("Passwords do not match");
      
      return;
    }

    setPasswordError("");
    console.log(user);
    // call your register function here
  };

  return (
    <div className="bg-[url('/assets/logos/bg-dog.jpg')] bg-cover bg-center flex justify-center items-center min-h-screen py-10">
      <div className="w-full max-w-md mx-auto">
        <Form onSubmit={handleSubmit} className="bg-white border border-pink-100 rounded-3xl p-10 flex flex-col gap-5 shadow-2xl ">

          {/* Header */}
          <div className="text-center mb-2">
            <h1 className="text-3xl font-bold text-gray-800">🐾 Create Account</h1>
            <p className="text-gray-500 mt-2 text-sm">
              Join PawNest and help pets find loving homes.
            </p>
          </div>

          {/* Full Name */}
          <TextField isRequired name="name" type="text" className="w-full">
            <Label className="text-gray-700 font-semibold mb-1 block">
              Full Name <span className="text-pink-500">*</span>
            </Label>
            <Input
              placeholder="John Doe"
              className="w-full rounded-xl border border-gray-200 px-4 py-2 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-300"
            />
            <FieldError className="text-red-500 text-sm mt-1" />
          </TextField>

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

          {/* Image URL */}
          <TextField name="image" type="url" className="w-full">
            <Label className="text-gray-700 font-semibold mb-1 block">
              Image URL <span className="text-gray-400 font-normal">(Optional)</span>
            </Label>
            <Input
              placeholder="https://example.com/photo.jpg"
              className="w-full rounded-xl border border-gray-200 px-4 py-2 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-300"
            />
            <FieldError className="text-red-500 text-sm mt-1" />
          </TextField>

          {/* Password */}
          <TextField isRequired name="password" type={showPassword ? "text" : "password"}   maxLength={6}
            validate={(value) => {
          if (value.length < 6) {
            return "Password must be at least 6 characters";
          }
          if (!/[A-Z]/.test(value)) {
            return "Password must contain at least one uppercase letter";
          }
          if (!/[0-9]/.test(value)) {
            return "Password must contain at least one number";
          }
          return null;
        }}
          className="w-full">
            <Label className="text-gray-700 font-semibold mb-1 block">
              Password <span className="text-pink-500">*</span>
            </Label>
            <div className="relative">
              <Input
                placeholder="••••••••"
                className="w-full rounded-xl border border-gray-200 px-4 py-2 pr-10 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-300"
              />
               <Description>Must be at least 6 characters with 1 uppercase and 1 number</Description>
              <EyeTog onToggle={setShowPassword} />
            </div>
            <FieldError className="text-red-500 text-sm mt-1" />
          </TextField>

          {/* Confirm Password */}
          <TextField isRequired name="confirmPassword" type={showConfirm ? "text" : "password"}  className="w-full">
            <Label className="text-gray-700 font-semibold mb-1 block">
              Confirm Password <span className="text-pink-500">*</span>
            </Label>
            <div className="relative">
              <Input
                placeholder="••••••••"
                className="w-full rounded-xl border border-gray-200 px-4 py-2 pr-10 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-300"
              />
              <EyeTog onToggle={setShowConfirm} />
            </div>
            {passwordError && (
              <p className="text-red-500 text-sm mt-1">{passwordError}</p>
            )}
            <FieldError className="text-red-500 text-sm mt-1" />
          </TextField>

          {/* Submit */}
          <Button type="submit" className="w-full bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 rounded-xl transition-colors text-base">
            Create Account
          </Button>

          {/* Divider */}
          <div className="flex items-center gap-3">
            <hr className="flex-1 border-gray-200" />
            <span className="text-gray-400 text-sm">or</span>
            <hr className="flex-1 border-gray-200" />
          </div>

          {/* Google */}
          <Button onClick={handleGoogle} type="button" className="w-full bg-gray-50 hover:bg-gray-100 text-gray-700 font-semibold py-3 rounded-xl border border-gray-200 transition-colors flex items-center justify-center gap-2 text-base">
            <FcGoogle className="text-xl" />
            Continue with Google
          </Button>

          {/* Login Link */}
          <p className="text-center text-gray-500 text-sm">
            Already have an account?{" "}
            <Link href="/login" className="text-pink-500 hover:underline font-semibold">
              Login
            </Link>
          </p>

        </Form>
      </div>
    </div>
  );
};

export default SignUpPage;