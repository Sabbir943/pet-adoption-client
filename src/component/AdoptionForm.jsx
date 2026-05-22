"use client";
import React, { useState } from "react";
import toast from "react-hot-toast";

const AdoptionForm = ({ pet, user }) => {
  const [pickupDate, setPickupDate] = useState("");
  const [message, setMessage] = useState("");

  const isAdopted = pet?.status?.toLowerCase() === "adopted";

  const handleAdoptSubmit = async (e) => {
    e.preventDefault();
    if (isAdopted) {
      toast.error("This pet has already been adopted.");
      return;
    }

    const adoptionRequestData = {
      petId: pet._id,
      petName: pet.petName,
      userName: user?.name,
      userEmail: user?.email,
      ownerEmail: pet.ownerEmail,
      pickupDate,
      message,
     status: "pending"
    };

    try {
      const res = await fetch(`http://localhost:8000/request`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(adoptionRequestData),
      });
      const result = await res.json();

      if (res.ok && !result.error) {
        toast.success("Adoption request submitted successfully! 🎉");
        setPickupDate("");
        setMessage("");
      } else {
        toast.error(result.error || "Failed to submit request.");
      }
    } catch (error) {
      toast.error("Server connection failed.");
    }
  };

  return (
    <div className="bg-white dark:bg-zinc-900 border border-foreground/10 rounded-[2rem] p-6 shadow-xl space-y-4">
      <h3 className="text-lg font-black text-foreground tracking-tight">🏡 Request Adoption</h3>
      <form onSubmit={handleAdoptSubmit} className="space-y-3 text-foreground">
        <div>
          <label className="block text-[10px] font-bold text-foreground/50 uppercase mb-0.5">Pet Name</label>
          <input type="text" value={pet?.petName || ""} readOnly className="w-full px-4 py-2 rounded-xl bg-foreground/5 text-foreground/60 border border-foreground/5 text-md font-bold cursor-not-allowed"/>
        </div>
        <div>
          <label className="block text-[10px] font-bold text-foreground/50 uppercase mb-0.5">Applicant Email</label>
          <input type="text" value={user?.email || ""} readOnly className="w-full px-4 py-2 rounded-xl bg-foreground/5 text-foreground/60 border border-foreground/5 text-md font-bold cursor-not-allowed"/>
        </div>
        <div>
          <label className="block text-[10px] font-bold text-foreground/60 uppercase mb-0.5">Target Pickup Date *</label>
          <input type="date" required value={pickupDate} onChange={(e) => setPickupDate(e.target.value)} className="w-full px-4 py-2 rounded-xl bg-background border border-foreground/10 text-md font-medium focus:border-pink-500 outline-none"/>
        </div>
        <div>
          <label className="block text-[10px] font-bold text-foreground/60 uppercase mb-0.5">Message to Owner *</label>
          <textarea rows="3" required value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Why do you want to adopt?..." className="w-full px-4 py-2 rounded-xl bg-background border border-foreground/10 text-md focus:border-pink-500 outline-none resize-none"></textarea>
        </div>

        {isAdopted ? (
          <button type="button" disabled className="w-full bg-zinc-400 text-white font-bold py-2.5 rounded-xl cursor-not-allowed text-md uppercase">Already Adopted</button>
        ) : (
          <button type="submit" className="w-full bg-pink-500 hover:bg-pink-600 text-white font-bold py-2.5 rounded-xl transition-all text-md uppercase tracking-wide shadow-md">Submit Application</button>
        )}
      </form>
    </div>
  );
};

export default AdoptionForm;