import { NAV_ITEMS } from "../data";
import NavItems from "./NavItems";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-32 bg-primary text-white mr-[20px]">
      <div className="px-14 mx-auto h-full flex justify-between items-center">
        <div className="text-2xl font-bold h-16 w-16 bg-stone-700"></div>
        <ul className="flex gap-14 text-lg font-light">
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
              className="hover:text-gray-300 transition  border border-white py-4 px-8 rounded-lg"
            >
              Resume
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
