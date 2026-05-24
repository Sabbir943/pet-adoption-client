'use client'
import FilterBar from '@/component/FilterBar';
import PetCard from '@/component/PetCard';
import SearchBar from '@/component/SearchBar';
import SortBar from '@/component/SortBar';

import React, { useEffect, useState } from 'react';

const AllPage =() => {
    
  const [pets, setPets] = useState([]);
  const [search, setSearch] = useState('');
  const [species, setSpecies] = useState('');
  const [sort, setSort] = useState('');

  useEffect(() => {
    const params = new URLSearchParams();
    if (search)  params.set('search', search);
    if (species) params.set('species', species);
    if (sort)    params.set('sort', sort);

    fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/addPets?${params}`)
      .then(r => r.json())
      .then(setPets);
  }, [search, species, sort]);

    return (
     
        <div className="w-11/12   mx-auto my-10 p-5 md:p-6 bg-gray-100 text-black dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-2xl shadow-sm">
           <div className="flex w-10/12 mx-auto my-5 flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          <div className="w-full md:flex-1">
                    <SearchBar setSearch={setSearch} />
                </div>
                <div className="w-full md:flex-1">
                    <FilterBar setSpecies={setSpecies} />
                </div>
                <div className="w-full md:flex-1">
                    <SortBar setSort={setSort} />
                </div>
        </div>

      <div className="  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-10/12 mx-auto">
        {
            pets.map(pet=><PetCard pet={pet} key={pet._id}/>)
        }
      </div>
      </div>
    );
};

export default AllPage;