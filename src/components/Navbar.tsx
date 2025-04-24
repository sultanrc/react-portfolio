import { useState } from "react";
import { NAV_ITEMS } from "../constants/navbar";
import NavItems from "./NavItems";
import { Menu, X } from "lucide-react"; // ikon hamburger

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary text-white">
      <div className="px-6 md:px-14 mx-auto h-20 flex justify-between items-center">
        <div className="text-2xl font-bold h-16 w-16 bg-stone-700"></div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-10 text-lg font-light">
          {NAV_ITEMS.map((navItem, index) => (
            <NavItems
              key={index}
              href={navItem.href}
              navItemName={navItem.navItemName}
              navItemNumber={navItem.navItemNumber}
            />
          ))}
          <li>
            <a
              href="#contact"
              className="hover:text-gray-300 text-sm transition border border-white py-2 px-4 rounded-lg"
            >
              Resume
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden transition-transform duration-300"
          onClick={toggleMenu}
        >
          <div
            className={`transition-transform duration-300 ${
              isOpen ? "rotate-90" : "rotate-0"
            }`}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </div>
        </button>
      </div>

      {/* Mobile Nav Dropdown */}
      {isOpen && (
        <ul className="md:hidden flex flex-col items-center gap-6 py-6 text-lg font-light bg-primary transition-all border-b border-white shadow-md">
          {NAV_ITEMS.map((navItem, index) => (
            <NavItems
              key={index}
              href={navItem.href}
              navItemName={navItem.navItemName}
              navItemNumber={navItem.navItemNumber}
              onClick={() => setIsOpen(false)}
            />
          ))}
          <li>
            <a
              href="#contact"
              className="hover:text-gray-300 text-sm transition border border-white py-2 px-4 rounded-lg"
              onClick={() => setIsOpen(false)}
            >
              Resume
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
}
