'use client'

const FilterBar = ({setSpecies}) => {
    return (
       
        <select onChange={(e) => setSpecies(e.target.value)} defaultValue="Pick a color" className="$$select border w-full rounded-2xl">
           

  <option disabled={false}>Filter by  species</option>

              <option value="Dog">Dog </option>
              <option value="Cat">Cat </option>
              <option value="Bird">Bird </option>
              <option value="Rabbit">Rabbit </option>
              <option value="Other">Other</option>
           
</select>

    );
};

export default FilterBar;