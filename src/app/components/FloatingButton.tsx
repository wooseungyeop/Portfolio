'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import {
  FaUserAlt,
  FaFolderOpen,
  FaEnvelope,
  FaPlus,
  FaTimes,
} from 'react-icons/fa';

const navButtons = [
  { label: 'About', href: '/about', icon: <FaUserAlt /> },
  { label: 'Projects', href: '/projects', icon: <FaFolderOpen /> },
  { label: 'Contact', href: '/contact', icon: <FaEnvelope /> },
];

export default function FloatingNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed right-4 bottom-6 flex flex-col-reverse items-end md:hidden z-50">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="
          bg-gradient-to-br from-black to-gray-700
          text-white 
          rounded-full 
          w-12 h-12 
          flex items-center justify-center 
          shadow-xl 
          hover:shadow-2xl 
          transition-all duration-300
          mb-3
        "
        aria-label="메뉴 토글"
      >
        {isOpen ? <FaTimes size={20} /> : <FaPlus size={20} />}
      </button>

      <AnimatePresence>
        {isOpen &&
          navButtons.map((btn, index) => (
            <motion.div
              key={btn.href}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.2, delay: index * 0.05 }}
              className="relative group mb-3"
            >
              <Link
                href={btn.href}
                onClick={() => setIsOpen(false)}
                className="
                  bg-gradient-to-br from-black to-gray-700
                  text-white 
                  rounded-full 
                  w-12 h-12 
                  flex items-center justify-center 
                  shadow-[0_4px_8px_rgba(0,0,0,0.5)] 
                  hover:shadow-[0_6px_12px_rgba(0,0,0,0.5)] 
                  active:translate-y-1 
                  transition-all duration-200
                  backdrop-blur-sm bg-opacity-100
                "
                aria-label={`${btn.label} 페이지로 이동`}
              >
                {btn.icon}
              </Link>

              <span
                className="absolute right-full top-1/2 transform -translate-y-1/2 mr-3
                  opacity-0 group-hover:opacity-100 transition-opacity
                  bg-gray-800 text-white text-xs px-2 py-1 rounded whitespace-nowrap"
              >
                {btn.label}
              </span>
            </motion.div>
          ))}
      </AnimatePresence>
    </div>
  );
}
