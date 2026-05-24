import ListingCard from '@/component/ListingCard';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import React from 'react';

const MyListing = async () => {

  const session = await auth.api.getSession({
    headers: await headers()
  });

  const user = session?.user;

  if (!user) return null;
  // const{token}= await auth.api.getToken({
  //   headers: await headers()
  // })
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/myListing/${user?.email}`,
    {
       cache: 'no-store',
      //  headers:{
      //   authorization:`Bearer ${token}`
      //  }


     },
   
  );

  const data = await res.json();

  const totalListings = data?.length || 0;

  const adoptedPets = data?.filter(
    pet => pet.status === 'adopted'
  ).length || 0;

  const availablePets = data?.filter(
    pet => pet.status === 'available'
  ).length || 0;

  return (
    <main className="max-w-7xl mx-auto px-4 py-10">

      <div className="mb-10">
        <h1 className="text-4xl font-black">
          My Listings 📊
        </h1>
      </div>

      <div className="grid grid-cols-3 gap-6 mb-10">

        <div>Total: {totalListings}</div>
        <div>Available: {availablePets}</div>
        <div>Adopted: {adoptedPets}</div>

      </div>

      <ListingCard data={data} />

    </main>
  );
};

export default MyListing;