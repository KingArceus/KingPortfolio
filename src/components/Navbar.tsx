import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

interface NavbarProps {
  isScrolled: boolean;
}

function Navbar({ isScrolled }: NavbarProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/experience', label: 'Experience' },
    { path: '/skills', label: 'Skills' },
    { path: '/projects', label: 'Projects' },
    { path: '/contact', label: 'Contact' }
  ];

  return (
    <motion.nav
      className={`fixed w-full z-50 transition-all duration-300 backdrop-blur-md ${isScrolled ? 'shadow-xl py-2' : 'py-4'
        }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-10 flex justify-between items-center">
        <NavLink to="/" className="text-2xl font-bold text-white font-heading">
          <span className="text-primary-600">Khang</span>
          <span className="font-bold text-white">Dynasty</span>
        </NavLink>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `font-medium transition-colors duration-200 ${isActive
                  ? 'text-primary-600'
                  : 'text-primary-500 hover:text-primary-600'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-300 hover:text-primary-400 focus:outline-none"
          onClick={toggleMenu}
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            className="md:hidden bg-gray-900 shadow-lg absolute top-full left-0 right-0"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `font-medium py-2 transition-colors duration-200 ${isActive
                      ? 'text-primary-600'
                      : 'text-secondary-700 hover:text-primary-600'
                    }`
                  }
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}

export default Navbar;