import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
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

  return (
    <motion.nav
      className={`fixed w-full z-50 transition-all duration-300 backdrop-blur-md ${
        isScrolled ? 'shadow-xl py-2' : 'py-4'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-10 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-white font-heading">
          <span className="text-blue-400">Khang</span>
          <span className="font-bold text-white">Dynasty</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `font-medium transition-colors duration-200 ${
                isActive
                  ? 'text-blue-600'
                  : 'text-blue-500 hover:text-blue-600'
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
                  ? 'text-blue-600'
                  : 'text-blue-500 hover:text-blue-600'
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
                  ? 'text-blue-600'
                  : 'text-blue-500 hover:text-blue-600'
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
                  ? 'text-blue-600'
                  : 'text-blue-500 hover:text-blue-600'
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
                  ? 'text-blue-600'
                  : 'text-blue-500 hover:text-blue-600'
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
                  ? 'text-blue-600'
                  : 'text-blue-500 hover:text-blue-600'
              }`
            }
          >
            Contact
          </NavLink>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-300 hover:text-blue-400 focus:outline-none"
          onClick={toggleMenu}
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>

        {/* Mobile Menu */}
        <div
          className={`md:hidden fixed inset-0 bg-gray-900/80 backdrop-blur-lg z-40 transform transition-transform duration-300 ease-in-out ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="container mx-auto px-4 py-8">
            <div className="flex justify-end mb-8">
              <button
                className="text-gray-300 hover:text-blue-400 focus:outline-none"
                onClick={toggleMenu}
              >
                <FaTimes size={24} />
              </button>
            </div>
            <div className="flex flex-col space-y-6">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `text-2xl font-medium transition-colors duration-200 ${
                    isActive
                      ? 'text-blue-400'
                      : 'text-gray-300 hover:text-blue-400'
                  }`
                }
                onClick={toggleMenu}
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `text-2xl font-medium transition-colors duration-200 ${
                    isActive
                      ? 'text-blue-400'
                      : 'text-gray-300 hover:text-blue-400'
                  }`
                }
                onClick={toggleMenu}
              >
                About
              </NavLink>
              <NavLink
                to="/experience"
                className={({ isActive }) =>
                  `text-2xl font-medium transition-colors duration-200 ${
                    isActive
                      ? 'text-blue-400'
                      : 'text-gray-300 hover:text-blue-400'
                  }`
                }
                onClick={toggleMenu}
              >
                Experience
              </NavLink>
              <NavLink
                to="/projects"
                className={({ isActive }) =>
                  `text-2xl font-medium transition-colors duration-200 ${
                    isActive
                      ? 'text-blue-400'
                      : 'text-gray-300 hover:text-blue-400'
                  }`
                }
                onClick={toggleMenu}
              >
                Projects
              </NavLink>
              <NavLink
                to="/skills"
                className={({ isActive }) =>
                  `text-2xl font-medium transition-colors duration-200 ${
                    isActive
                      ? 'text-blue-400'
                      : 'text-gray-300 hover:text-blue-400'
                  }`
                }
                onClick={toggleMenu}
              >
                Skills
              </NavLink>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `text-2xl font-medium transition-colors duration-200 ${
                    isActive
                      ? 'text-blue-400'
                      : 'text-gray-300 hover:text-blue-400'
                  }`
                }
                onClick={toggleMenu}
              >
                Contact
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}

export default Navbar;