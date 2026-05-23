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

    fetch(`http://localhost:8000/addPets?${params}`)
      .then(r => r.json())
      .then(setPets);
  }, [search, species, sort]);

    return (
      <div>
        <div className='flex justify-between gap-3 w-10/12 mx-auto my-10  bg-white dark:bg-zinc-950 border border-foreground/10 p-7 rounded-2xl'>
           <SearchBar setSearch={setSearch} />
        <FilterBar setSpecies={setSpecies} />
        <SortBar setSort={setSort} />
        </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-10/12 mx-auto">
        {
            pets.map(pet=><PetCard pet={pet} key={pet._id}/>)
        }
      </div>
      </div>
    );
};

export default AllPage;