import Banner from '@/component/Banner';
import FeaturedPet from '@/component/FeaturedPet';
import PetCareTips from '@/component/PetCareTips';
import ShopByAnimal from '@/component/ShopByAnimal';
import WhyAdoptPets from '@/component/WhyAdoptPets';
import React from 'react';

const Home = () => {
    return (
        <div>
           <Banner/>
           <FeaturedPet/>
           <ShopByAnimal/>
           <WhyAdoptPets/>
           <PetCareTips/>
        </div>
    );
};

export default Home;