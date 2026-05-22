import AddPetForm from '@/component/AddPetForm';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import { redirect } from 'next/navigation';
import React from 'react';

const AddPetDashboardPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers()
  });
  const currentUser = session?.user;

  
  if (!currentUser) {
    redirect('/login');
  }

  return (
    <div className="p-4 md:p-8 w-full min-h-screen bg-transparent">
      <AddPetForm user={currentUser} />
    </div>
  );
};

export default AddPetDashboardPage;