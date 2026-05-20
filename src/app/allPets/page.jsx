import PetCard from '@/component/PetCard';

import React from 'react';

const AllPage =async () => {
    const res= await fetch(`http://localhost:8000/addPets`);
    const data=await res.json();
    console.log(data);
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {
            data.map(pet=><PetCard pet={pet} key={pet._id}/>)
        }
      </div>
    );
};

export default AllPage;