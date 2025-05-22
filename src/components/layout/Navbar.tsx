import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

interface NavbarProps {
  scrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ scrolled }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
  const toggleServices = () => {
    setServicesOpen(!servicesOpen);
  };
  
  const closeMenu = () => {
    setIsOpen(false);
    setServicesOpen(false);
  };
  
  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'nav-scrolled' : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center" onClick={closeMenu}>
            <span className="text-2xl font-bold font-montserrat text-white">MAVEX</span>
            <span className="ml-2 text-sm text-copper font-medium tracking-wider">INVESTMENTS</span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-1">
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                `navbar-link-light ${isActive ? 'bg-slate-light bg-opacity-30' : ''}`
              }
            >
              Home
            </NavLink>
            <NavLink 
              to="/about" 
              className={({ isActive }) => 
                `navbar-link-light ${isActive ? 'bg-slate-light bg-opacity-30' : ''}`
              }
            >
              About Us
            </NavLink>
            <div className="relative group">
              <button 
                className="navbar-link-light flex items-center"
                onClick={toggleServices}
              >
                Services <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white py-1 hidden group-hover:block">
                <Link 
                  to="/services#recycling" 
                  className="block px-4 py-2 text-sm text-slate-dark hover:bg-gray-100"
                  onClick={closeMenu}
                >
                  Recycling & Processing
                </Link>
                <Link 
                  to="/services#trading" 
                  className="block px-4 py-2 text-sm text-slate-dark hover:bg-gray-100"
                  onClick={closeMenu}
                >
                  Global Trade & Logistics
                </Link>
                <Link 
                  to="/services#consulting" 
                  className="block px-4 py-2 text-sm text-slate-dark hover:bg-gray-100"
                  onClick={closeMenu}
                >
                  Consulting & Investment
                </Link>
              </div>
            </div>
            <NavLink 
              to="/blog" 
              className={({ isActive }) => 
                `navbar-link-light ${isActive ? 'bg-slate-light bg-opacity-30' : ''}`
              }
            >
              Blog
            </NavLink>
            <NavLink 
              to="/contact" 
              className={({ isActive }) => 
                `navbar-link-light ${isActive ? 'bg-slate-light bg-opacity-30' : ''}`
              }
            >
              Contact
            </NavLink>
          </nav>
          
          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link to="/contact" className="btn-primary">
              Get a Quote
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              type="button"
              className="text-white p-2"
              onClick={toggleMenu}
              aria-expanded={isOpen}
              aria-label="Toggle navigation"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div 
        className={`lg:hidden bg-slate-dark ${
          isOpen ? 'block' : 'hidden'
        }`}
      >
        <div className="px-2 pt-2 pb-4 space-y-1">
          <NavLink 
            to="/" 
            className={({ isActive }) => 
              `block px-3 py-2 rounded-md text-white font-medium ${
                isActive ? 'bg-slate-light' : 'hover:bg-slate-light hover:bg-opacity-30'
              }`
            }
            onClick={closeMenu}
          >
            Home
          </NavLink>
          <NavLink 
            to="/about" 
            className={({ isActive }) => 
              `block px-3 py-2 rounded-md text-white font-medium ${
                isActive ? 'bg-slate-light' : 'hover:bg-slate-light hover:bg-opacity-30'
              }`
            }
            onClick={closeMenu}
          >
            About Us
          </NavLink>
          <div>
            <button 
              className="flex justify-between items-center w-full px-3 py-2 rounded-md text-white font-medium hover:bg-slate-light hover:bg-opacity-30"
              onClick={toggleServices}
            >
              <span>Services</span>
              <ChevronDown className={`h-5 w-5 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
            </button>
            {servicesOpen && (
              <div className="pl-4 space-y-1 mt-1">
                <Link 
                  to="/services#recycling" 
                  className="block px-3 py-2 rounded-md text-white font-medium hover:bg-slate-light hover:bg-opacity-30"
                  onClick={closeMenu}
                >
                  Recycling & Processing
                </Link>
                <Link 
                  to="/services#trading" 
                  className="block px-3 py-2 rounded-md text-white font-medium hover:bg-slate-light hover:bg-opacity-30"
                  onClick={closeMenu}
                >
                  Global Trade & Logistics
                </Link>
                <Link 
                  to="/services#consulting" 
                  className="block px-3 py-2 rounded-md text-white font-medium hover:bg-slate-light hover:bg-opacity-30"
                  onClick={closeMenu}
                >
                  Consulting & Investment
                </Link>
              </div>
            )}
          </div>
          <NavLink 
            to="/blog" 
            className={({ isActive }) => 
              `block px-3 py-2 rounded-md text-white font-medium ${
                isActive ? 'bg-slate-light' : 'hover:bg-slate-light hover:bg-opacity-30'
              }`
            }
            onClick={closeMenu}
          >
            Blog
          </NavLink>
          <NavLink 
            to="/contact" 
            className={({ isActive }) => 
              `block px-3 py-2 rounded-md text-white font-medium ${
                isActive ? 'bg-slate-light' : 'hover:bg-slate-light hover:bg-opacity-30'
              }`
            }
            onClick={closeMenu}
          >
            Contact
          </NavLink>
          <div className="pt-2">
            <Link 
              to="/contact" 
              className="block w-full text-center btn-primary"
              onClick={closeMenu}
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;