'use client'
import Link from 'next/link';
import React from 'react';

const RequestData = ({data}) => {
    return (
            <div className="space-y-5 p-6">

      <h1 className="text-4xl font-black">
        My Requests
      </h1>

      {data?.length === 0 && (
        <p>No requests found</p>
      )}

      {data?.map((request) => (
        <div
          key={request._id}
          className="p-6 border rounded-3xl"
        >

          <h2 className="font-bold">
            {request.petName}
          </h2>

          <p>Pickup: {request.pickupDate}</p>

          <p>Status: {request.status}</p>

          <div className="flex gap-3 mt-3">

            <Link href={`/pet/${request.petId}`}>
              View
            </Link>

            <button
              onClick={async () => {
                await fetch(
                  `http://localhost:8000/myRequest/${request._id}`,
                  { method: "DELETE" }
                );
                location.reload();
              }}
            >
              Cancel
            </button>

          </div>

        </div>
      ))}

    </div>
    );
};

export default RequestData;