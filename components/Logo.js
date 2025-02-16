import Link from 'next/link';
import React from 'react';

const Logo = () => {
  return (
    <div className="logo"> {/* Add logo-specific class if needed */}
        {/* Replace with your actual logo (image or text) */}
        <Link href="/" className="text-xl font-bold">Your Logo</Link> 
    </div>
  );
};

export default Logo;