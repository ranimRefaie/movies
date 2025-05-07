import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white py-4 px-6 md:px-12 fixed top-0 left-0 right-0 z-20 transition-all duration-300 ease-in-out backdrop-blur-lg">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-1 text-3xl font-bold">
          M
          <img src="/clapperboard.png" alt="Logo" className="w-10 h-10" />
          vies
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="hover:text-gray-400">Home</Link>
          <Link href="/about" className="hover:text-gray-400">About</Link>
          <Link href="/movies" className="hover:text-gray-400">Movies</Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Sidebar */}
      {isOpen && (
  <div className="h-screen md:hidden fixed top-20 left-0 w-1/2 bg-gray-800 bg-opacity-95 border-r border-gray-700 shadow-2xl p-6 z-30 transition-all rounded-tr-2xl rounded-br-2xl">
    <nav className="flex flex-col space-y-6 text-lg">
      <Link href="/" onClick={() => setIsOpen(false)} className="hover:text-gray-300">Home</Link>
      <Link href="/about" onClick={() => setIsOpen(false)} className="hover:text-gray-300">About</Link>
      <Link href="/movies" onClick={() => setIsOpen(false)} className="hover:text-gray-300">Movies</Link>
    </nav>
  </div>
)}
    </nav>
  );
}