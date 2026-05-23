'use client'

const SearchBar = ({setSearch }) => {
    return (
       <label className="$$input flex items-center border gap-2 p-3 rounded-2xl w-full">
  <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="2.5"
      fill="none"
      stroke="currentColor"
    >
      <circle cx="11" cy="11" r="8"></circle>
      <path d="m21 21-4.3-4.3"></path>
    </g>
  </svg>
  <input className="p-3 border-none" onChange={(e) => setSearch(e.target.value)} type="search" required placeholder="Search by name" />
</label>
    );
};

export default SearchBar;