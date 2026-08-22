import React from 'react';
import Link from 'next/link';
const NotFound = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <h1 className="text-6xl mb-4">404</h1>
      <Link href="/" className="font-bold underline">
        Back Home
      </Link>
    </div>
  );
};

export default NotFound;
