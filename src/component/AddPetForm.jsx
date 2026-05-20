'use client'
import { redirect } from 'next/navigation';
import React from 'react';
import toast from 'react-hot-toast';

const AddPetForm = ({ user }) => {
    const onSubmit =async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const petFormData = Object.fromEntries(formData.entries());
        console.log(petFormData); 
        const res = await fetch(`http://localhost:8000/addPets`,{
            method:"POST",
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(petFormData)
        })
        const petData= await res.json();
        toast.success("Sucessfully added");
        redirect('/dashboard/my-listings');
    };

    return (
        <div className="max-w-3xl mx-auto">
           
            <div className="mb-8 text-center md:text-left">
                <h1 className="text-3xl font-extrabold tracking-tight bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                    🐾 Add a New Pet
                </h1>
                <p className="text-sm text-base-content/80 mt-2 font-medium">
                    আশ্রয়হীন কোনো প্রাণীর নতুন জীবনের ব্যবস্থা করতে নিচের তথ্যগুলো দিয়ে ফর্মটি পূরণ করুন।
                </p>
            </div>

            <form onSubmit={onSubmit} className="space-y-6">
             
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="form-control w-full">
                        <label className="label font-semibold text-sm text-base-content">Pet Name</label>
                        <input 
                            name="petName" 
                            type="text" 
                            required
                            placeholder="e.g., Buddy, Lucy" 
                            className="input input-bordered w-full rounded-2xl bg-base-200 text-base-content placeholder:text-base-content/40 focus:input-primary focus:bg-base-100 transition-all text-base" 
                        />
                    </div>

                    <div className="form-control w-full">
                        <label className="label font-semibold text-sm text-base-content">Species</label>
                        <select 
                            name="species" 
                            required
                            defaultValue=""
                            className="select select-bordered w-full rounded-2xl bg-base-200 text-base-content focus:select-primary focus:bg-base-100 transition-all text-base"
                        >
                            <option value="" disabled className="text-base-content/40">Select Species</option>
                            <option value="Dog" className="text-base-content">Dog 🐶</option>
                            <option value="Cat" className="text-base-content">Cat 🐱</option>
                            <option value="Bird" className="text-base-content">Bird 🦜</option>
                            <option value="Rabbit" className="text-base-content">Rabbit 🐰</option>
                            <option value="Other" className="text-base-content">Other</option>
                        </select>
                    </div>
                </div>

            
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="form-control w-full">
                        <label className="label font-semibold text-sm text-base-content">Breed</label>
                        <input 
                            name="breed" 
                            type="text" 
                            required
                            placeholder="e.g., Golden Retriever" 
                            className="input input-bordered w-full rounded-2xl bg-base-200 text-base-content placeholder:text-base-content/40 focus:input-primary focus:bg-base-100 transition-all text-base" 
                        />
                    </div>

                    <div className="form-control w-full">
                        <label className="label font-semibold text-sm text-base-content">Age</label>
                        <input
                            name="age" 
                            type="text" 
                            required
                            placeholder="e.g., 6 Months, 2 Years" 
                            className="input input-bordered w-full rounded-2xl bg-base-200 text-base-content placeholder:text-base-content/40 focus:input-primary focus:bg-base-100 transition-all text-base" 
                        />
                    </div>
                </div>

               
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="form-control w-full">
                        <label className="label font-semibold text-sm text-base-content">Gender</label>
                        <select 
                            required
                            defaultValue=""
                            name="gender"
                            className="select select-bordered w-full rounded-2xl bg-base-200 text-base-content focus:select-primary focus:bg-base-100 transition-all text-base"
                        >
                            <option value="" disabled className="text-base-content/40">Select Gender</option>
                            <option value="Male" className="text-base-content">Male</option>
                            <option value="Female" className="text-base-content">Female</option>
                        </select>
                    </div>

                    <div className="form-control w-full">
                        <label className="label font-semibold text-sm text-base-content">Image URL</label>
                        <input 
                            name="image"
                            type="url" 
                            required
                            placeholder="https://i.ibb.co/..." 
                            className="input input-bordered w-full rounded-2xl bg-base-200 text-base-content placeholder:text-base-content/40 focus:input-primary focus:bg-base-100 transition-all text-base" 
                        />
                    </div>
                </div>

              
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="form-control w-full">
                        <label className="label font-semibold text-sm text-base-content">Health Status</label>
                        <select 
                            name="healthStatus" 
                            className="select select-bordered w-full rounded-2xl bg-base-200 text-base-content focus:select-primary focus:bg-base-100 transition-all text-base"
                        >
                            <option value="Healthy" className="text-base-content">Healthy</option>
                            <option value="Injured" className="text-base-content">Injured</option>
                            <option value="Under Treatment" className="text-base-content">Under Treatment</option>
                        </select>
                    </div>

                    <div className="form-control w-full">
                        <label className="label font-semibold text-sm text-base-content">Vaccination Status</label>
                        <select 
                            name="vaccinationStatus" 
                            className="select select-bordered w-full rounded-2xl bg-base-200 text-base-content focus:select-primary focus:bg-base-100 transition-all text-base"
                        >
                            <option value="Not Vaccinated" className="text-base-content">Not Vaccinated</option>
                            <option value="Partially Vaccinated" className="text-base-content">Partially Vaccinated</option>
                            <option value="Fully Vaccinated" className="text-base-content">Fully Vaccinated</option>
                        </select>
                    </div>
                </div>

               
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="form-control w-full">
                        <label className="label font-semibold text-sm text-base-content">Location</label>
                        <input 
                            name="location" 
                            type="text" 
                            required
                            placeholder="e.g., Mirpur, Dhaka" 
                            className="input input-bordered w-full rounded-2xl bg-base-200 text-base-content placeholder:text-base-content/40 focus:input-primary focus:bg-base-100 transition-all text-base" 
                        />
                    </div>

                    <div className="form-control w-full">
                        <label className="label font-semibold text-sm text-base-content">Adoption Fee (BDT)</label>
                        <input 
                            name="adoptionFee" 
                            type="number" 
                            min="0"
                            required
                            placeholder="0 for free adoption" 
                            className="input input-bordered w-full rounded-2xl bg-base-200 text-base-content placeholder:text-base-content/40 focus:input-primary focus:bg-base-100 transition-all text-base" 
                        />
                    </div>
                </div>

                
                <div className="form-control w-full">
                    <label className="label font-semibold text-sm text-base-content">Owner Email</label>
                    <input 
                        name="ownerEmail" 
                        type="email" 
                        readOnly
                        value={user?.email || ''} 
                        className="input input-bordered w-full rounded-2xl bg-base-300 text-base-content/50 cursor-not-allowed select-none border-base-200 focus:outline-none text-base" 
                    />
                </div>

             
                <div className="form-control w-full">
                    <label className="label font-semibold text-sm text-base-content">Description</label>
                    <textarea 
                        name="description" 
                        required
                        rows="4"
                        placeholder="Tell us about the pet's behavior, habits, history..." 
                        className="textarea textarea-bordered w-full rounded-2xl bg-base-200 text-base-content placeholder:text-base-content/40 focus:textarea-primary focus:bg-base-100 transition-all text-base" 
                    ></textarea>
                </div>

                
                <div className="form-control w-full pt-4">
                    <button 
                        type="submit" 
                        className="btn btn-primary text-base font-bold rounded-2xl border-none shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 text-primary-content"
                    >
                        🚀 List Pet for Adoption
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddPetForm;