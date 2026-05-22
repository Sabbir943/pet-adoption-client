import React from 'react';
const tips = [
        {
            icon: "🍖",
            category: "Nutrition",
            title: "Decoding Pet Food Labels",
            desc: "Learn how to spot filler ingredients and ensure real meat is always listed as the primary ingredient.",
            bg: "bg-rose-50 text-rose-700"
        },
        {
            icon: "🧠",
            category: "Mental Health",
            title: "Beating Indoor Boredom",
            desc: "Simple interactive puzzle toys and sniffing games that effectively tire out a high-energy dog or cat.",
            bg: "bg-purple-50 text-purple-700"
        },
        {
            icon: "🩺",
            category: "Wellness",
            title: "Signs Your Pet is in Pain",
            desc: "Animals conceal discomfort naturally. Watch for subtle shifts in sleeping setups, posture, and gaze.",
            bg: "bg-teal-50 text-teal-700"
        }
    ];
const PetCareTips = () => {
    return (
       <section className="w-11/12 max-w-7xl mx-auto py-16 px-4 bg-gray-50/50 rounded-3xl my-12 border border-gray-100">
            {/* Header */}
            <div className="mb-10 text-center">
                <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                    Essential Pet Care Knowledge
                </h2>
                <p className="mt-2 text-sm text-gray-500 max-w-xl mx-auto">
                    Expert articles and quick tips from certified veterinarians to keep your furry family members thriving.
                </p>
            </div>

            {/* Tips Card Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {tips.map((tip, index) => (
                    <div 
                        key={index} 
                        className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-200 group flex flex-col justify-between"
                    >
                        <div>
                            {/* Card Header Tag */}
                            <div className="flex items-center justify-between mb-4">
                                <span className={`text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-md ${tip.bg}`}>
                                    {tip.category}
                                </span>
                                <span className="text-2xl opacity-80 group-hover:scale-110 transition-transform">{tip.icon}</span>
                            </div>
                            
                            <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-emerald-600 transition-colors">
                                {tip.title}
                            </h3>
                            <p className="text-sm text-gray-500 leading-relaxed">
                                {tip.desc}
                            </p>
                        </div>

                        {/* Text Button Link */}
                        <div className="mt-5 pt-4 border-t border-gray-50">
                            <button className="text-xs font-bold text-gray-700 group-hover:text-emerald-600 inline-flex items-center gap-1 transition-colors">
                                Read Guide <span className="transition-transform group-hover:translate-x-1">→</span>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default PetCareTips;