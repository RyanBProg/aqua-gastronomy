"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 bg-opacity-50 text-gray-300 py-12">
      <div className="container mx-auto px-4 text-center">
        <p className="mb-4">&copy; 2023 Aqua Essence. All rights reserved.</p>
        <div className="flex justify-center space-x-6">
          <Link
            key="Privacy"
            href="#"
            className="hover:text-blue-300 transition-colors duration-300">
            Privacy
          </Link>
          <Link
            key="Terms"
            href="#"
            className="hover:text-blue-300 transition-colors duration-300">
            Terms
          </Link>
          <Link
            key="Contact"
            href="/contact"
            className="hover:text-blue-300 transition-colors duration-300">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
