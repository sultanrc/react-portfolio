import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react"; // ← aktifkan ini
import { NAV_ITEMS } from "../../constants/navbar";
import NavItems from "./NavItems";
import Resume from "./Resume";
import sultanLogo from "../../assets/SLogo.png";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Update border state
      setIsScrolled(currentScrollY > 0);

      if (currentScrollY <= 0) {
        setShowNavbar(true);
      } else if (currentScrollY > lastScrollY) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const dropdownVariants = {
    hidden: {
      opacity: 0,
      y: -10,
      transition: { duration: 0.2 },
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 },
    },
    exit: {
      opacity: 0,
      y: -10,
      transition: { duration: 0.2 },
    },
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-primary transition-transform duration-300
    ${showNavbar ? "translate-y-0" : "-translate-y-full"}
    ${isScrolled ? "shadow-sm bg-primary/60 backdrop-blur-md" : ""}
  `}
    >
      <div className="px-6 md:px-14 mx-auto h-20 flex justify-between items-center">
        {/* Logo */}
        <motion.img
          src={sultanLogo}
          className="text-2xl font-bold w-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        />

        {/* Desktop Nav */}
        <motion.ul
          className="hidden md:flex items-center gap-10 text-lg font-light"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          {NAV_ITEMS.map((navItem, index) => (
            <motion.div key={index} variants={itemVariants}>
              <NavItems
                href={navItem.href}
                navItemName={navItem.navItemName}
                navItemNumber={navItem.navItemNumber}
              />
            </motion.div>
          ))}
          <motion.div variants={itemVariants}>
            <Resume />
          </motion.div>
        </motion.ul>

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
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            key="mobile-nav"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={dropdownVariants}
            className="md:hidden flex flex-col items-center gap-6 py-6 text-lg font-light bg-primary/60 backdrop-blur-md border-b border-textPrimary shadow-md"
          >
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
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
}
