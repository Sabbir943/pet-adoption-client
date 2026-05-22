import { Chip } from '@heroui/react';
import Image from 'next/image';
import React from 'react';

// Mock data mapping each animal to your requested tags
const animalCategories = [
    { id: 1, name: 'Dogs', price: '$450', rating: '4.7', tag: 'Popular', img: '/assets/logos/dog.jpg' },
    { id: 2, name: 'Cats', price: '$380', rating: '4.9', tag: 'Favorite', img: '/assets/logos/cat.jpg' },
    { id: 3, name: 'Birds', price: '$120', rating: '4.5', tag: 'New', img: '/assets/logos/bird.jpg' },
    { id: 4, name: 'Rabbits', price: '$210', rating: '4.6', tag: 'Old', img: '/assets/logos/rabbits.jpg' },
    { id: 5, name: 'Exotics', price: '$550', rating: '4.8', tag: 'Like', img: '/assets/logos/puppy2.jpg' },
   
];

// Color mapping for HeroUI Chip
const tagColorMap = {
    Popular: "success",   // Green background, white/dark green text automatically
    Favorite: "danger",   // Red background
    New: "primary",       // Blue background
    Old: "default",       // Light gray background with dark text
    Like: "secondary",    // Purple background
};

const ShopByAnimal = () => {
    return (
        <div className='w-11/12 max-w-7xl mx-auto py-12 px-4'>
            {/* Header Section */}
            <div className='mb-8 text-center md:text-left'>
                <h2 className='text-3xl text-pink-500 font-extrabold tracking-tight  sm:text-4xl'>
                    Popular  Animal
                </h2>
                <p className='mt-2 text-md text-gray-500'>
                    Find the perfect companions and essentials tailored for your favorite pets.
                </p>
            </div>
         
            {/* Responsive Grid Layout */}
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 justify-between items-center'>
                
                {animalCategories.map((animal) => (
                    <div 
                        key={animal.id} 
                        className='group relative border border-gray-100 rounded-2xl bg-white p-4 text-center transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-1 flex flex-col justify-between'
                    >
                        {/* Image Container */}
                        <div className='relative w-full aspect-square bg-gray-50 rounded-xl overflow-hidden mb-4 flex items-center justify-center'>
                            <Image
                                className='object-cover transition-transform duration-300 group-hover:scale-105'
                                src={animal.img}
                                alt={animal.name}
                                fill
                                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 20vw"
                                priority={animal.id <= 2}
                            />  
                            
                           
                            {animal.tag && (
                                <Chip 
                                    className='absolute top-2 right-2 font-semibold text-xs border-none shadow-sm capitalize' 
                                    size="sm"
                                    color={tagColorMap[animal.tag] || "default"}
                                    variant="solid"
                                >
                                    {animal.tag}
                                </Chip>
                            )}
                        </div>

                        {/* Content Container */}
                        <div className='space-y-1.5'>
                            <h3 className='text-lg font-bold text-gray-800 tracking-wide'>
                                {animal.name}
                            </h3>
                            
                            <div className='flex items-center justify-between pt-1 px-1 border-t border-gray-50'>
                                <span className='font-semibold text-emerald-600 text-base'>
                                    {animal.price}
                                </span>
                                <span className='flex items-center text-xs font-medium text-amber-500 gap-0.5 bg-amber-50 px-1.5 py-0.5 rounded-md'>
                                    ⭐ {animal.rating}
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            
        </div>
    );
};

export default ShopByAnimal;