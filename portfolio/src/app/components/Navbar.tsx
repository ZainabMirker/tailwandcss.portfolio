'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-blue-500 h-20 text-white ">
      <nav className="container  mx-auto flex justify-between items-center p-4">
        <h1 className="text-xl pb-7 font-bold">My Portfolio</h1>
        <button
          className="md:hidden block text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 5.25h16.5m-16.5 7.5h16.5m-16.5 7.5h16.5"
            />
          </svg>
        </button>
        <ul
          className={`md:flex md:items-center md:gap-6 absolute md:static top-10 left-0 w-full md:w-auto bg-blue-500 md:bg-transparent ${
            isOpen ? 'block' : 'hidden'
          }`}
        >
          <li className="p-2 text-center pb-7">
            <Link href="/" className="hover:underline">
              Home
            </Link>
          </li>
          <li className="p-2 text-center pb-7">
            <Link href="/about" className="hover:underline">
              About
            </Link>
          </li>
          <li className="p-2 text-center pb-7">
            <Link href="/contact" className="hover:underline">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}