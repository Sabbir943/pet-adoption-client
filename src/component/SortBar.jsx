'use client'

const SortBar = ({ setSort }) => {
    return (
        <div className="w-full border rounded-2xl h-14 relative bg-transparent focus-within:bg-gray-50/50 dark:focus-within:bg-zinc-700/30 transition-colors">
            <select 
                onChange={e => setSort(e.target.value)}  
                defaultValue="placeholder" 
                className="w-full h-full px-5 bg-transparent text-sm text-black dark:text-white focus:outline-none appearance-none cursor-pointer"
            >
                <option value="placeholder" disabled>Sort by price</option>
                <option value="low">Low to High</option>
                <option value="high">High to Low</option>
            </select>
            <div className="absolute inset-y-0 right-5 flex items-center pointer-events-none text-gray-400 dark:text-gray-500">
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M19 9l-7 7-7-7" />
                </svg>
            </div>
        </div>
    );
};

export default SortBar;