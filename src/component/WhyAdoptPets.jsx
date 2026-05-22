import React from 'react';

const WhyAdoptPets = () => {
    // Data array for easy maintenance and cleaner code
    const stats = [
        {
            value: "75%",
            label: "SUCCESSFUL MATCHES"
        },
        {
            value: "250+",
            label: "DOGS RESCUED THIS YEAR"
        },
        {
            value: "12K+",
            label: "HAPPY PET PARENTS"
        },
        {
            value: "15+",
            label: "YEARS OF SERVICE"
        }
    ];

    return (
        <section className="bg-[#FAF8F5] py-16 px-4 font-sans relative">
            {/* Top Description Section */}
            <div className="max-w-3xl mx-auto text-center mb-12">
                <span className="text-[#E04D3C] font-semibold text-lg block mb-2 tracking-wide">
                    Why Choose Us?
                </span>
                <h2 className="text-[#0B2C3D] text-3xl md:text-4xl font-bold leading-tight">
                    Best Service to Find and Adopt Your Loved Dog Explore
                </h2>
            </div>

            {/* Stats Cards Section */}
            <div className="max-w-6xl mx-auto grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                    <div 
                        key={index} 
                        className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md hover:bg-pink-200 hover:text-white transition-shadow duration-300 text-center flex flex-col justify-center items-center min-h-[180px]"
                    >
                        <span className="text-[#0B2C3D] text-4xl md:text-5xl font-extrabold block mb-3">
                            {stat.value}
                        </span>
                        <span className="text-gray-500 text-xs md:text-sm font-bold tracking-wider uppercase">
                            {stat.label}
                        </span>
                    </div>
                ))}
            </div>

            {/* Optional: Small Back to Top arrow button matching the image */}
            <div className="absolute bottom-4 right-4">
                <button className="bg-[#E04D3C] text-white p-2.5 rounded shadow-md hover:bg-[#c83a2b] transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 15l7-7 7 7" />
                    </svg>
                </button>
            </div>
        </section>
    );
};

export default WhyAdoptPets;