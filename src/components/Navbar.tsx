import { useState, useEffect } from "react";
import { NAV_ITEMS } from "../constants/navbar";
import NavItems from "./NavItems";
import Resume from "./Resume";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== "undefined") {
        const currentScrollY = window.scrollY;
        if (currentScrollY <= 0) {
          setShowNavbar(true);
        } else if (currentScrollY > lastScrollY) {
          setShowNavbar(false);
        } else {
          setShowNavbar(true);
        }

        setLastScrollY(currentScrollY);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-primary transition-transform duration-300 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
    >
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
          <Resume />
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden transition-transform duration-300 text-textPrimary"
          onClick={toggleMenu}
        >
          <div
            className={`transition-transform duration-300 ${
              isOpen ? "rotate-90" : "rotate-0"
            }`}
          >
            {isOpen ? <X size={36} /> : <Menu size={36} />}
          </div>
        </button>
      </div>

      {/* Mobile Nav Dropdown */}
      {isOpen && (
        <ul className="md:hidden flex flex-col items-center gap-6 py-6 text-lg font-light bg-primary transition-all border-b border-textPrimary shadow-md">
          {NAV_ITEMS.map((navItem, index) => (
            <NavItems
              key={index}
              href={navItem.href}
              navItemName={navItem.navItemName}
              navItemNumber={navItem.navItemNumber}
              onClick={() => setIsOpen(false)}
            />
          ))}
          <Resume onClickResume={() => setIsOpen(false)} />
        </ul>
      )}
    </nav>
  );
}
