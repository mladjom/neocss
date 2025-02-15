// components/PageTransition.js
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

export default function PageTransition({ children }) {
  const pathname = usePathname();
  
  useEffect(() => {
    document.body.classList.add('page-enter');
    return () => {
      document.body.classList.add('page-exit');
      document.body.classList.remove('page-enter');
    };
  }, [pathname]);

  return children;
}