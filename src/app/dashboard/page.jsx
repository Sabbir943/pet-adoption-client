'use client'
import { useRouter } from 'next/navigation';
import React from 'react';

const DashboardPage = () => {
    const router= useRouter();
    return (
        <div>
           {
            router.push('dashboard/add-pets')
           }
        </div>
    );
};

export default DashboardPage;