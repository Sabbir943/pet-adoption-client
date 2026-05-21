'use client'

import React from 'react';

const DashboardPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-100 via-white to-yellow-100">

      <div className="text-center bg-white/70 backdrop-blur-lg px-16 py-12 rounded-3xl shadow-2xl">

        <h1 className="text-6xl font-extrabold bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">
          Welcome to Dashboard 🐾
        </h1>

        <p className="mt-5 text-gray-500 text-lg">
          Manage everything beautifully in one place.
        </p>

      </div>

    </div>
  );
};

export default DashboardPage;