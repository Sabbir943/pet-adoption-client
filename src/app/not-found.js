import Link from 'next/link';
import React from 'react';

const NotFoundPage = () => {
    return (
        <section className="bg-[#FAF8F5] min-h-screen flex flex-col items-center justify-center px-4 font-sans text-center">
            <div className="max-w-xl mx-auto">
                {/* Visual Accent / Big 404 */}
                <div className="relative mb-6">
                    <h1 className="text-[#0B2C3D] text-9xl font-extrabold tracking-widest opacity-10 select-none">
                        404
                    </h1>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-6xl sm:text-7xl">🐾</span>
                    </div>
                </div>

                {/* Friendly Error Message */}
                <h2 className="text-[#0B2C3D] text-3xl font-bold mb-4">
                    Oops! Page Not Found
                </h2>
                
                <p className="text-gray-600 text-base md:text-lg mb-8 leading-relaxed max-w-md mx-auto">
                    It looks like this page took an unannounced walk in the park. Don't worry, even the best dogs lose their track sometimes! Let's get you back on track.
                </p>

                {/* Action Button */}
                <Link
                    href="/" 
                    className="inline-flex items-center gap-2 bg-[#E04D3C] hover:bg-[#c83a2b] text-white font-bold py-3.5 px-8 rounded-full shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
                >
                    {/* Left arrow icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    Back to Home
                </Link>
            </div>

            {/* Decorative bottom element matching the brand flavor */}
            <div className="mt-16 text-gray-400 text-md tracking-wider uppercase font-semibold">
                Lost Pet Care Network
            </div>
        </section>
    );
};

export default NotFoundPage;