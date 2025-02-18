import Link from 'next/link';
import React from 'react';

export default function Logo() {
  return (
    <div className="logo">
      <svg 
        className="logo__icon" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor"
      >
        <circle cx="12" cy="12" r="10" strokeWidth="2"/>
        <path d="M12 8v8M8 12h8" strokeWidth="2"/>
      </svg>
      <span className="logo__text">NeoCSS</span>
    </div>
  );
}
// const Logo = () => {
//   return (
//     <div className="logo"> {/* Add logo-specific class if needed */}
//         {/* Replace with your actual logo (image or text) */}
//         <Link href="/" className="text-xl font-bold">Your Logo</Link> 
//     </div>
//   );
// };

// export default Logo;