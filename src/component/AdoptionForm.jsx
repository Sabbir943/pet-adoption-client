'use client';

import React, { useState } from 'react';
import toast from 'react-hot-toast';

const AdoptionForm = ({ pet, user }) => {
  const [loading, setLoading] = useState(false);

  const handleAdoptSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);

    const adoptionData = {
      petId: pet._id,
      petName: pet.petName,
      petImage: pet.image,
      userName: user?.name,
      userEmail: user?.email,
      pickupDate: formData.get('pickupDate'),
      message: formData.get('message'),
      status: 'pending',
      createdAt: new Date(),
    };

    try {
      const response = await fetch('http://localhost:8000/myRequest', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(adoptionData),
      });

      if (response.ok) {
        toast.success(`Adoption request for ${pet.petName} submitted successfully! 🎉`);
        e.target.reset(); // ফর্মটি ক্লিয়ার করার জন্য
      } else {
        toast.error('Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('Failed to connect to the server.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="rounded-[2.5rem] bg-foreground/[0.02] dark:bg-zinc-900/40 backdrop-blur-xl border border-foreground/[0.08] p-6 md:p-8 shadow-2xl">
      <div className="mb-6">
        <h2 className="text-2xl font-black text-foreground tracking-tight">Bring {pet.petName} Home</h2>
        <p className="text-xs text-foreground/50 mt-1 font-medium">Fill out the adoption request form below.</p>
      </div>

      <form onSubmit={handleAdoptSubmit} className="space-y-4">
        {/* Pet Name (Read Only) */}
        <div>
          <label className="block text-[11px] font-bold text-foreground/50 uppercase tracking-wider mb-1.5 ml-1">Pet Name</label>
          <input
            type="text"
            value={pet.petName}
            readOnly
            className="w-full bg-foreground/[0.04] dark:bg-zinc-800/40 border border-foreground/[0.05] rounded-2xl px-4 py-3.5 text-sm font-black text-foreground/60 outline-none cursor-not-allowed"
          />
        </div>

        {/* User Name (Read Only) */}
        <div>
          <label className="block text-[11px] font-bold text-foreground/50 uppercase tracking-wider mb-1.5 ml-1">Your Name</label>
          <input
            type="text"
            value={user?.name || ''}
            readOnly
            className="w-full bg-foreground/[0.04] dark:bg-zinc-800/40 border border-foreground/[0.05] rounded-2xl px-4 py-3.5 text-sm font-bold text-foreground/60 outline-none cursor-not-allowed"
          />
        </div>

        {/* User Email (Read Only) */}
        <div>
          <label className="block text-[11px] font-bold text-foreground/50 uppercase tracking-wider mb-1.5 ml-1">Your Email</label>
          <input
            type="email"
            value={user?.email || ''}
            readOnly
            className="w-full bg-foreground/[0.04] dark:bg-zinc-800/40 border border-foreground/[0.05] rounded-2xl px-4 py-3.5 text-sm font-bold text-foreground/60 outline-none cursor-not-allowed"
          />
        </div>

        {/* Pickup Date */}
        <div>
          <label className="block text-[11px] font-bold text-foreground/50 uppercase tracking-wider mb-1.5 ml-1">Target Pickup Date</label>
          <input
            type="date"
            name="pickupDate"
            required
            className="w-full bg-background dark:bg-zinc-950 border border-foreground/10 rounded-2xl px-4 py-3.5 text-sm font-bold text-foreground outline-none focus:border-pink-500/50 transition-colors text-foreground/70"
          />
        </div>

        {/* Message */}
        <div>
          <label className="block text-[11px] font-bold text-foreground/50 uppercase tracking-wider mb-1.5 ml-1">Why do you want to adopt?</label>
          <textarea
            name="message"
            required
            rows={3}
            placeholder="Tell us a bit about your home or pet experience..."
            className="w-full bg-background dark:bg-zinc-950 border border-foreground/10 rounded-2xl px-4 py-3.5 text-sm font-medium text-foreground placeholder:text-foreground/30 outline-none focus:border-pink-500/50 transition-colors resize-none"
          />
        </div>

        {/* Adopt Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-foreground text-background font-black text-sm py-4 rounded-2xl transition-all duration-300 hover:bg-pink-500 hover:text-white active:scale-[0.99] shadow-lg mt-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? 'Submitting Request...' : 'Submit Adoption Request'}
        </button>
      </form>
    </div>
  );
};

export default AdoptionForm;