"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black-900 white-black py-12">
      <div className="container mx-auto px-4 text-center">
        <p className="mb-4">&copy; 2023 Aqua Essence. All rights reserved.</p>
        <div className="flex justify-center space-x-6">
          <Link
            key="Privacy"
            href="/privacy"
            className="hover:text-blue-400 transition-colors duration-300">
            Privacy
          </Link>
          <Link
            key="Terms"
            href="/terms"
            className="hover:text-blue-400 transition-colors duration-300">
            Terms
          </Link>
          <Link
            key="Contact"
            href="/contact"
            className="hover:text-blue-400 transition-colors duration-300">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
