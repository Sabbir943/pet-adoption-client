
import AddPetForm from '@/component/AddPetForm';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import React from 'react';

const AddPet =async() => {
    
    const session = await auth.api.getSession({
    headers: await headers() // you need to pass the headers object.
})
    const user=session?.user


    return (
     <div>
        <AddPetForm user={user}/>
     </div>
    );
};

export default AddPet;