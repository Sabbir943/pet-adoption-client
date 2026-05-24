'use client'

const SearchBar = ({ setSearch }) => {
    return (
        <label className="flex border rounded-2xl items-center gap-3 w-full h-14 px-5 bg-transparent focus-within:bg-gray-50/50 dark:focus-within:bg-zinc-700/30 transition-colors cursor-text">
            <svg className="h-5 w-5 text-gray-400 dark:text-gray-500 shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.2" fill="none" stroke="currentColor">
                    <circle cx="11" cy="11" r="8"></circle>
                    <path d="m21 21-4.3-4.3"></path>
                </g>
            </svg>
            <input 
                className="w-full h-full bg-transparent text-sm focus:outline-none placeholder-gray-400 dark:placeholder-gray-500 text-black dark:text-white" 
                onChange={(e) => setSearch(e.target.value)} 
                type="search" 
                required 
                placeholder="Search by name" 
            />
        </label>
    );
};

export default SearchBar;