import { Button } from '@heroui/react';
import Link from 'next/link';
import React from 'react';

const Dash = () => {
    return (
        <div className='h-[60vh] w-[60vh] bg-red-200'>
      <ul className=" flex flex-col font-bold p-5 ml-10 gap-5">
      {/* Sidebar content here */}
      <h1 className='text-2xl font-bold'>Menu</h1>
      <Button><Link className=' ' href={'/my-request'}>My Request</Link></Button>
      <Button><Link href={'/add-pets'}>Add Pet</Link></Button>
      <Button> <Link href={'/my-listing'}>My listing </Link></Button>
     
     
    
     
    </ul>
        </div>
    );
};

export default Dash;