'use client'
import { redirect } from 'next/navigation';
import React from 'react';
import toast from 'react-hot-toast';

const AddPetForm = ({ user }) => {
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const petFormData = Object.fromEntries(formData.entries());
    
    const res = await fetch(`http://localhost:8000/addPets`, {
      method: "POST",
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(petFormData)
    });
    
    if (res.ok) {
      toast.success("Successfully added");
      redirect('/dashboard/my-listings');
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 md:p-8 bg-background border border-foreground/10 rounded-3xl shadow-xl shadow-foreground/5 my-10">
      
      <div className="mb-8 text-center md:text-left">
        <h1 className="text-3xl font-black tracking-tight bg-gradient-to-r from-pink-500 via-purple-500 to-blue-600 bg-clip-text text-transparent">
          🐾 Add a New Pet
        </h1>
        <p className="text-sm text-foreground/70 mt-2 font-medium">
          আশ্রয়হীন কোনো প্রাণীর নতুন জীবনের ব্যবস্থা করতে নিচের তথ্যগুলো দিয়ে ফর্মটি পূরণ করুন।
        </p>
      </div>

      <form onSubmit={onSubmit} className="space-y-6">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="flex flex-col gap-2 w-full">
            <label className="font-bold text-sm text-foreground">Pet Name</label>
            <input 
              name="petName" 
              type="text" 
              required
              placeholder="e.g., Buddy, Lucy" 
              className="w-full px-4 py-3 rounded-xl border border-foreground/10 bg-foreground/5 text-foreground placeholder:text-foreground/30 focus:border-pink-500 focus:outline-none transition-all text-base" 
            />
          </div>

          <div className="flex flex-col gap-2 w-full">
            <label className="font-bold text-sm text-foreground">Species</label>
            <select 
              name="species" 
              required
              defaultValue=""
              className="w-full px-4 py-3 rounded-xl border border-foreground/10 bg-foreground/5 text-foreground focus:border-pink-500 focus:outline-none transition-all text-base appearance-none cursor-pointer"
            >
              <option value="" disabled className="bg-background text-foreground/40">Select Species</option>
              <option value="Dog" className="bg-background text-foreground">Dog 🐶</option>
              <option value="Cat" className="bg-background text-foreground">Cat 🐱</option>
              <option value="Bird" className="bg-background text-foreground">Bird 🦜</option>
              <option value="Rabbit" className="bg-background text-foreground">Rabbit 🐰</option>
              <option value="Other" className="bg-background text-foreground">Other</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="flex flex-col gap-2 w-full">
            <label className="font-bold text-sm text-foreground">Breed</label>
            <input 
              name="breed" 
              type="text" 
              required
              placeholder="e.g., Golden Retriever" 
              className="w-full px-4 py-3 rounded-xl border border-foreground/10 bg-foreground/5 text-foreground placeholder:text-foreground/30 focus:border-pink-500 focus:outline-none transition-all text-base" 
            />
          </div>

          <div className="flex flex-col gap-2 w-full">
            <label className="font-bold text-sm text-foreground">Age</label>
            <input
              name="age" 
              type="text" 
              required
              placeholder="e.g., 6 Months, 2 Years" 
              className="w-full px-4 py-3 rounded-xl border border-foreground/10 bg-foreground/5 text-foreground placeholder:text-foreground/30 focus:border-pink-500 focus:outline-none transition-all text-base" 
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="flex flex-col gap-2 w-full">
            <label className="font-bold text-sm text-foreground">Gender</label>
            <select 
              required
              defaultValue=""
              name="gender"
              className="w-full px-4 py-3 rounded-xl border border-foreground/10 bg-foreground/5 text-foreground focus:border-pink-500 focus:outline-none transition-all text-base cursor-pointer"
            >
              <option value="" disabled className="bg-background text-foreground/40">Select Gender</option>
              <option value="Male" className="bg-background text-foreground">Male</option>
              <option value="Female" className="bg-background text-foreground">Female</option>
            </select>
          </div>

          <div className="flex flex-col gap-2 w-full">
            <label className="font-bold text-sm text-foreground">Image URL</label>
            <input 
              name="image"
              type="url" 
              required
              placeholder="https://i.ibb.co/..." 
              className="w-full px-4 py-3 rounded-xl border border-foreground/10 bg-foreground/5 text-foreground placeholder:text-foreground/30 focus:border-pink-500 focus:outline-none transition-all text-base" 
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="flex flex-col gap-2 w-full">
            <label className="font-bold text-sm text-foreground">Health Status</label>
            <select 
              name="healthStatus" 
              className="w-full px-4 py-3 rounded-xl border border-foreground/10 bg-foreground/5 text-foreground focus:border-pink-500 focus:outline-none transition-all text-base cursor-pointer"
            >
              <option value="Healthy" className="bg-background text-foreground">Healthy</option>
              <option value="Injured" className="bg-background text-foreground">Injured</option>
              <option value="Under Treatment" className="bg-background text-foreground">Under Treatment</option>
            </select>
          </div>

          <div className="flex flex-col gap-2 w-full">
            <label className="font-bold text-sm text-foreground">Vaccination Status</label>
            <select 
              name="vaccinationStatus" 
              className="w-full px-4 py-3 rounded-xl border border-foreground/10 bg-foreground/5 text-foreground focus:border-pink-500 focus:outline-none transition-all text-base cursor-pointer"
            >
              <option value="Not Vaccinated" className="bg-background text-foreground">Not Vaccinated</option>
              <option value="Partially Vaccinated" className="bg-background text-foreground">Partially Vaccinated</option>
              <option value="Fully Vaccinated" className="bg-background text-foreground">Fully Vaccinated</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="flex flex-col gap-2 w-full">
            <label className="font-bold text-sm text-foreground">Location</label>
            <input 
              name="location" 
              type="text" 
              required
              placeholder="e.g., Mirpur, Dhaka" 
              className="w-full px-4 py-3 rounded-xl border border-foreground/10 bg-foreground/5 text-foreground placeholder:text-foreground/30 focus:border-pink-500 focus:outline-none transition-all text-base" 
            />
          </div>

          <div className="flex flex-col gap-2 w-full">
            <label className="font-bold text-sm text-foreground">Adoption Fee (BDT)</label>
            <input 
              name="adoptionFee" 
              type="number" 
              min="0"
              required
              placeholder="0 for free adoption" 
              className="w-full px-4 py-3 rounded-xl border border-foreground/10 bg-foreground/5 text-foreground placeholder:text-foreground/30 focus:border-pink-500 focus:outline-none transition-all text-base" 
            />
          </div>
        </div>

        <div className="flex flex-col gap-2 w-full">
          <label className="font-bold text-sm text-foreground">Owner Email</label>
          <input 
            name="ownerEmail" 
            type="email" 
            disabled
            value={user?.email || ''} 
            className="w-full px-4 py-3 rounded-xl border border-foreground/10 bg-foreground/20 text-foreground/50 cursor-not-allowed select-none focus:outline-none text-base" 
          />
        </div>

        <div className="flex flex-col gap-2 w-full">
          <label className="font-bold text-sm text-foreground">Description</label>
          <textarea 
            name="description" 
            required
            rows="4"
            placeholder="Tell us about the pet's behavior, habits, history..." 
            className="w-full px-4 py-3 rounded-xl border border-foreground/10 bg-foreground/5 text-foreground placeholder:text-foreground/30 focus:border-pink-500 focus:outline-none transition-all text-base" 
          ></textarea>
        </div>

        <div className="w-full pt-2">
          <button 
            type="submit" 
            className="w-full bg-pink-500 hover:bg-pink-600 text-white font-bold py-4 rounded-xl shadow-lg shadow-pink-500/10 hover:shadow-pink-500/20 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
          >
            🚀 List Pet for Adoption
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddPetForm;