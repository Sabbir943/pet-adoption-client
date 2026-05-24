'use client'

const FilterBar = ({ setSpecies }) => {
    return (
        <div className="w-full border rounded-2xl h-14 relative bg-transparent focus-within:bg-gray-50/50 dark:focus-within:bg-zinc-700/30 transition-colors">
            <select 
                onChange={(e) => setSpecies(e.target.value)} 
                defaultValue="placeholder" 
                className="w-full h-full px-5 bg-transparent text-sm text-black dark:text-white focus:outline-none appearance-none cursor-pointer"
            >
                <option value="placeholder" disabled>Filter by species</option>
                <option value="Dog">Dog</option>
                <option value="Cat">Cat</option>
                <option value="Bird">Bird</option>
                <option value="Rabbit">Rabbit</option>
                <option value="Other">Other</option>
            </select>
            <div className="absolute inset-y-0 right-5 flex items-center pointer-events-none text-gray-400 dark:text-gray-500">
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M19 9l-7 7-7-7" />
                </svg>
            </div>
        </div>
    );
};

export default FilterBar;