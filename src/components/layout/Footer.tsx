import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Linkedin, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-dark text-white">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="mb-6">
              <Link to="/" className="flex items-center">
                <span className="text-2xl font-bold font-montserrat">MAVEX</span>
                <span className="ml-2 text-sm text-copper font-medium tracking-wider">INVESTMENTS</span>
              </Link>
            </div>
            <p className="text-gray-300 mb-4">
              A Singapore-based metal recycling and trading company with global operations and a commitment to environmental responsibility.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="https://facebook.com" aria-label="Facebook" className="footer-link">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://twitter.com" aria-label="Twitter" className="footer-link">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com" aria-label="LinkedIn" className="footer-link">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="footer-link">Home</Link>
              </li>
              <li>
                <Link to="/about" className="footer-link">About Us</Link>
              </li>
              <li>
                <Link to="/services" className="footer-link">Services</Link>
              </li>
              <li>
                <Link to="/blog" className="footer-link">Blog</Link>
              </li>
              <li>
                <Link to="/contact" className="footer-link">Contact</Link>
              </li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/services#recycling" className="footer-link">Recycling & Processing</Link>
              </li>
              <li>
                <Link to="/services#trading" className="footer-link">Global Trade & Logistics</Link>
              </li>
              <li>
                <Link to="/services#consulting" className="footer-link">Consulting & Investment</Link>
              </li>
              <li>
                <Link to="/contact" className="footer-link">Request a Quote</Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li>
                <h5 className="font-semibold mb-2">Singapore Office:</h5>
                <div className="flex">
                  <MapPin className="h-5 w-5 mr-3 text-copper shrink-0" />
                  <span className="text-gray-300">112 Robinson Road, #03-01 Singapore</span>
                </div>
              </li>
              <li>
                <h5 className="font-semibold mb-2">Laos Office:</h5>
                <div className="flex">
                  <MapPin className="h-5 w-5 mr-3 text-copper shrink-0" />
                  <span className="text-gray-300">Dongtai Village, Thatkhek District, Khammouane Province, Laos</span>
                </div>
              </li>
              <li className="flex">
                <Phone className="h-5 w-5 mr-3 text-copper shrink-0" />
                <a href="tel:+13239424804" className="text-gray-300 hover:text-white">+1 (323) 942-4804</a>
              </li>
              <li className="flex">
                <Mail className="h-5 w-5 mr-3 text-copper shrink-0" />
                <a href="mailto:hainanli111111@gmail.com" className="text-gray-300 hover:text-white">hainanli111111@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>
        
        <hr className="border-gray-700 my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} MAVEX INVESTMENTS PTE. LTD. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-6 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-white">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="hover:text-white">Terms of Service</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;