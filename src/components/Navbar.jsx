import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

function Navbar({ isScrolled }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-primary-800 font-heading">
          Portfolio
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `font-medium transition-colors duration-200 ${
                isActive
                  ? 'text-primary-600'
                  : 'text-secondary-700 hover:text-primary-600'
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `font-medium transition-colors duration-200 ${
                isActive
                  ? 'text-primary-600'
                  : 'text-secondary-700 hover:text-primary-600'
              }`
            }
          >
            About
          </NavLink>
          <NavLink
            to="/experience"
            className={({ isActive }) =>
              `font-medium transition-colors duration-200 ${
                isActive
                  ? 'text-primary-600'
                  : 'text-secondary-700 hover:text-primary-600'
              }`
            }
          >
            Experience
          </NavLink>
          <NavLink
            to="/skills"
            className={({ isActive }) =>
              `font-medium transition-colors duration-200 ${
                isActive
                  ? 'text-primary-600'
                  : 'text-secondary-700 hover:text-primary-600'
              }`
            }
          >
            Skills
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              `font-medium transition-colors duration-200 ${
                isActive
                  ? 'text-primary-600'
                  : 'text-secondary-700 hover:text-primary-600'
              }`
            }
          >
            Projects
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `font-medium transition-colors duration-200 ${
                isActive
                  ? 'text-primary-600'
                  : 'text-secondary-700 hover:text-primary-600'
              }`
            }
          >
            Contact
          </NavLink>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-secondary-800 focus:outline-none"
          onClick={toggleMenu}
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          className="md:hidden bg-white shadow-lg absolute top-full left-0 right-0"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `font-medium py-2 transition-colors duration-200 ${
                  isActive
                    ? 'text-primary-600'
                    : 'text-secondary-700 hover:text-primary-600'
                }`
              }
              onClick={() => setIsOpen(false)}
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `font-medium py-2 transition-colors duration-200 ${
                  isActive
                    ? 'text-primary-600'
                    : 'text-secondary-700 hover:text-primary-600'
                }`
              }
              onClick={() => setIsOpen(false)}
            >
              About
            </NavLink>
            <NavLink
              to="/experience"
              className={({ isActive }) =>
                `font-medium py-2 transition-colors duration-200 ${
                  isActive
                    ? 'text-primary-600'
                    : 'text-secondary-700 hover:text-primary-600'
                }`
              }
              onClick={() => setIsOpen(false)}
            >
              Experience
            </NavLink>
            <NavLink
              to="/skills"
              className={({ isActive }) =>
                `font-medium py-2 transition-colors duration-200 ${
                  isActive
                    ? 'text-primary-600'
                    : 'text-secondary-700 hover:text-primary-600'
                }`
              }
              onClick={() => setIsOpen(false)}
            >
              Skills
            </NavLink>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                `font-medium py-2 transition-colors duration-200 ${
                  isActive
                    ? 'text-primary-600'
                    : 'text-secondary-700 hover:text-primary-600'
                }`
              }
              onClick={() => setIsOpen(false)}
            >
              Projects
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `font-medium py-2 transition-colors duration-200 ${
                  isActive
                    ? 'text-primary-600'
                    : 'text-secondary-700 hover:text-primary-600'
                }`
              }
              onClick={() => setIsOpen(false)}
            >
              Contact
            </NavLink>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}

export default Navbar;