'use client';
import Link from 'next/link';
import React from 'react';
import MyRequestDelete from './MyRequestDelete';
import { Button } from '@heroui/react';

 const RequestData = ({ data }) => {


  const getStatusStyle = (status) => {
    switch (status?.toLowerCase()) {
      case 'approved':
        return 'bg-green-50 text-green-700 border-green-200';
      case 'pending':
        return 'bg-amber-50 text-amber-700 border-amber-200';
      case 'rejected':
        return 'bg-red-50 text-red-700 border-red-200';
      default:
        return 'bg-gray-50 text-gray-700 border-gray-200';
    }
  };

  return (
    <div className="space-y-6 p-2 md:p-4 max-w-5xl mx-auto">
      
      <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-2 pb-4 border-b border-gray-100">
        <div>
          <h1 className="text-3xl md:text-4xl font-black text-[#0B2C3D]">
            My Requests
          </h1>
          <p className="text-gray-500 text-md mt-1">
            Track and manage your current pet adoption applications.
          </p>
        </div>
        {data?.length > 0 && (
          <span className="w-fit bg-[#0B2C3D] text-white font-bold px-4 py-1.5 rounded-full text-md">
            {data.length} Total
          </span>
        )}
      </div>

      {/* Empty State Layout */}
      {(!data || data.length === 0) && (
        <div className="flex flex-col items-center justify-center py-16 px-4 border-2 border-dashed border-gray-200 rounded-3xl bg-[#FAF8F5] text-center">
          <span className="text-5xl mb-4 block">📋</span>
          <h3 className="text-[#0B2C3D] text-xl font-bold mb-1">No requests found</h3>
          <p className="text-gray-500 text-md max-w-sm mb-6">
            You haven't submitted any adoption requests yet. Explore pets waiting for a home!
          </p>
          <Link 
            href="/" 
            className="bg-[#E04D3C] hover:bg-[#c83a2b] text-white font-bold py-2.5 px-6 rounded-xl text-md transition-colors shadow-sm"
          >
            Browse Pets
          </Link>
        </div>
      )}

      {/* Request Grid/List Cards */}
      <div className="grid grid-cols-1 gap-4">
        {data?.map((request) => (
          <div
            key={request._id}
            className="p-5 md:p-6 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex flex-col sm:flex-row sm:items-center justify-between gap-4"
          >
            {/* Left Content Column */}
            <div className="space-y-2">
              <div className="flex items-center gap-3 flex-wrap">
                <h2 className="text-xl font-extrabold text-[#0B2C3D]">
                  🐾 {request.petName}
                </h2>
                <span className={`text-md font-semibold px-3 py-0.5 rounded-full border ${getStatusStyle(request.status)}`}>
                  {request.status || 'Pending'}
                </span>
              </div>
              
              <div className="flex items-center gap-2 text-gray-600 text-md font-medium">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>Pickup Date: <span className="text-[#0B2C3D] font-semibold">{request.pickupDate}</span></span>
              </div>
            </div>

            {/* Right Action Buttons */}
            <div className="flex items-center gap-3 sm:self-center mt-2 sm:mt-0">
              <Link 
                href={`/viewPet/${request.petId}`}
                className="flex-1 sm:flex-initial text-center  hover:bg-gray-100 text-[#0B2C3D] font-bold py-2.5 px-5 rounded-xl text-xs transition-colors"
              >
                <Button className='rounded-none' variant='primary'> View Pet</Button>
               
              </Link>

             
              <MyRequestDelete request={request} key={request._id}/>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default RequestData;