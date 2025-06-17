'use client';

import Link from 'next/link';
import { navItems } from '../types/common';

export default function DesktopNav({ pathname }: { pathname: string }) {
  return (
    <nav className="hidden md:flex space-x-6 text-sm text-gray-700">
      {navItems.map((item) => {
        const isActive = pathname === item.href;
        return (
          <Link
            key={item.href}
            href={item.href}
            className={`
              relative 
              hover:text-black 
              transition-colors
              after:content-[''] after:absolute after:left-0 after:-bottom-1
              after:w-full after:h-[2px] after:bg-black 
              after:scale-x-0 hover:after:scale-x-100 
              after:origin-left after:transition-transform
              ${isActive ? 'text-black font-semibold after:scale-x-100' : ''}
            `}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
