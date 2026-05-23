'use client'

const SortBar = ({ setSort }) => {
    return (
       <select onChange={e => setSort(e.target.value)}  defaultValue="Pick a color" className="$$select border w-full rounded-2xl">
       

  <option disabled={false}>Sort by price</option>
  <option value="low">Low to High</option>
  <option value="high">High to Low</option>
        
 
</select>
    );
};

export default SortBar;