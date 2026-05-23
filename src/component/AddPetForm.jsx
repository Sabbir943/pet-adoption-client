'use client'
import { authClient } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';
import React from 'react';
import toast from 'react-hot-toast';

const AddPetForm = ({ user }) => {
  const router= useRouter();


  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const petFormData = Object.fromEntries(formData.entries());
    
    const fullPetData = {
      ...petFormData,
      ownerEmail: user?.email,
      status: "Available"
    };
      const{data:tokenData} = await authClient.token();
      const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/addPets`, {
      method: "POST",
      headers:{
     'content-type': 'application/json'
      // authorization:`Bearer ${tokenData?.token}`
      },
      body: JSON.stringify(fullPetData)
    });
    
    if (res.ok) {
      toast.success("Successfully added pet to listings! 🎉");
      router.push('/dashboard/my-listings');
    } else {
      toast.error("Failed to add pet. Please try again.");
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 md:p-8 bg-white dark:bg-zinc-950 border border-foreground/10 rounded-3xl shadow-xl shadow-foreground/5">
      <div className="mb-6 text-center md:text-left">
        <h1 className="text-2xl font-black bg-linear-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">🐾 Add a New Pet</h1>
        <p className="text-md text-foreground/60 mt-1 font-medium">To give a homeless animal a chance at a new life, please provide the necessary information below.</p>
      </div>

      <form onSubmit={onSubmit} className="space-y-4 text-foreground">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col gap-1">
            <label className="font-bold text-md text-foreground/70">Pet Name *</label>
            <input name="petName" type="text" required placeholder="Buddy" className="w-full px-4 py-2.5 rounded-xl border border-foreground/10 bg-foreground/5 text-sm focus:border-pink-500 focus:outline-none" />
          </div>
          <div className="flex flex-col gap-1">
            <label className="font-bold text-md text-foreground/70">Species *</label>
            <select name="species" required defaultValue="" className="w-full px-4 py-2.5 rounded-xl border border-foreground/10 bg-foreground/5 text-sm focus:border-pink-500 focus:outline-none">
              <option value="" disabled>Select Species</option>
              <option value="Dog">Dog 🐶</option>
              <option value="Cat">Cat 🐱</option>
              <option value="Bird">Bird 🦜</option>
              <option value="Rabbit">Rabbit 🐰</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col gap-1">
            <label className="font-bold text-md text-foreground/70">Breed *</label>
            <input name="breed" type="text" required placeholder="Golden Retriever" className="w-full px-4 py-2.5 rounded-xl border border-foreground/10 bg-foreground/5 text-sm focus:border-pink-500 focus:outline-none" />
          </div>
          <div className="flex flex-col gap-1">
            <label className="font-bold text-md text-foreground/70">Age *(2 Years/ 2 month)</label>
            <input name="age" type="text" required placeholder="2 Years" className="w-full px-4 py-2.5 rounded-xl border border-foreground/10 bg-foreground/5 text-sm focus:border-pink-500 focus:outline-none" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col gap-1">
            <label className="font-bold text-md text-foreground/70">Gender *</label>
            <select required defaultValue="" name="gender" className="w-full px-4 py-2.5 rounded-xl border border-foreground/10 bg-foreground/5 text-sm focus:border-pink-500 focus:outline-none">
              <option value="" disabled>Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
          <div className="flex flex-col gap-1">
            <label className="font-bold text-md text-foreground/70">Image URL *</label>
            <input name="image" type="url" required placeholder="https://i.ibb.co/..." className="w-full px-4 py-2.5 rounded-xl border border-foreground/10 bg-foreground/5 text-sm focus:border-pink-500 focus:outline-none" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col gap-1">
            <label className="font-bold text-md text-foreground/70">Health Status *</label>
            <select name="healthStatus" required className="w-full px-4 py-2.5 rounded-xl border border-foreground/10 bg-foreground/5 text-sm focus:border-pink-500">
              <option value="Healthy">Healthy</option>
              <option value="Injured">Injured</option>
              <option value="Under Treatment">Under Treatment</option>
            </select>
          </div>
          <div className="flex flex-col gap-1">
            <label className="font-bold text-md text-foreground/70">Vaccination Status *</label>
            <select name="vaccinationStatus" required className="w-full px-4 py-2.5 rounded-xl border border-foreground/10 bg-foreground/5 text-sm focus:border-pink-500">
              <option value="Not Vaccinated">Not Vaccinated</option>
              <option value="Partially Vaccinated">Partially Vaccinated</option>
              <option value="Fully Vaccinated">Fully Vaccinated</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col gap-1">
            <label className="font-bold text-md text-foreground/70">Location *</label>
            <input name="location" type="text" required placeholder="Mirpur, Dhaka" className="w-full px-4 py-2.5 rounded-xl border border-foreground/10 bg-foreground/5 text-sm focus:border-pink-500 focus:outline-none" />
          </div>
          <div className="flex flex-col gap-1">
            <label className="font-bold text-md text-foreground/70">Adoption Fee (BDT) *</label>
            <input name="adoptionFee" type="number" min="0" required placeholder="500 (0 for free)" className="w-full px-4 py-2.5 rounded-xl border border-foreground/10 bg-foreground/5 text-sm focus:border-pink-500 focus:outline-none" />
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <label className="font-bold text-md text-foreground/70">Description / Pet Story *</label>
          <textarea name="description" rows="3" required placeholder="Describe the pet's story and behavior..." className="w-full px-4 py-2.5 rounded-xl border border-foreground/10 bg-background text-sm focus:border-pink-500 focus:outline-none resize-none"></textarea>
        </div>

        <div className="flex flex-col gap-1">
          <label className="font-bold text-md text-foreground/40">Owner Email (Read Only)</label>
          <input type="email" readOnly value={user?.email || ""} className="w-full px-4 py-2.5 rounded-xl border border-foreground/10 bg-foreground/10 text-foreground/50 text-sm cursor-not-allowed font-medium" />
        </div>

        <button type="submit" className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-bold py-3 rounded-xl shadow-md transition-all active:scale-[0.99] text-sm uppercase tracking-wide">
          Submit Pet Listing
        </button>
      </form>
    </div>
  );
};

export default AddPetForm;