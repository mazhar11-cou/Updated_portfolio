import Link from "next/link";
import React from "react";

const Header: React.FC = () => (
  <header className="top-0 py-5 bg-white border-b sm:h-20 sm:sticky">
    <div className="max-w-5xl px-6 mx-auto">
      <div className="flex flex-col items-center justify-center w-full sm:flex-row sm:justify-between">
        <div className="flex flex-col items-center mb-4 sm:flex-row sm:mb-0">
          <img
            src="/react-bricks-logo.svg"
            className="w-48"
            alt="React Bricks"
          />
          <div className="flex space-x-5 text-center sm:ml-8">
            <Link href="/">
              <a className="text-gray-500 hover:text-pink-700">Home</a>
            </Link>
            <Link href="/about-us">
              <a className="text-gray-500 hover:text-pink-700">About us</a>
            </Link>
            <Link href="/blog">
              <a className="text-gray-500 hover:text-pink-700">Blog</a>
            </Link>
          </div>
        </div>
        <Link href="/admin" prefetch={false}>
          <a className="px-5 py-2 font-medium text-white transition duration-200 rounded bg-cyan-500 hover:bg-cyan-600 hover:shadow-lg">
            Edit content
          </a>
        </Link>
      </div>
    </div>
  </header>
);

export default Header;
