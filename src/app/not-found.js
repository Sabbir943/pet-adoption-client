import Link from "next/link";
import React from "react";

const NoFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-base-100 px-4">
      
      <h1 className="text-7xl font-bold text-primary">404</h1>

      <h2 className="text-3xl font-semibold mt-4">
        Page Not Found
      </h2>

      <p className="text-center max-w-md mt-3 text-base-content/70">
        Sorry, the page you are looking for does not exist or has been removed.
      </p>

      <Link href="/">
        <button className="btn btn-primary mt-6">
          Go Back Home
        </button>
      </Link>
    </div>
  );
};

export default NoFound;