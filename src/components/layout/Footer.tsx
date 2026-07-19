import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-dark text-white">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="mb-6">
              <Link to="/" className="flex items-center">
                <img
                  src="/images/mavex-logo.png"
                  alt="MAVEX Investments"
                  className="h-10 w-auto"
                />
              </Link>
            </div>
            <p className="text-gray-300">
              MAVEX INVESTMENTS PTE. LTD. - Specializing in the processing, trading, and investment of rare and precious metals.
            </p>
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
                <a href="mailto:Business@mavexinvest.com" className="text-gray-300 hover:text-white">Business@mavexinvest.com</a>
              </li>
            </ul>
          </div>

          {/* Company Details */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Our Companies</h4>
            <div className="space-y-4">
              <div>
                <h5 className="font-semibold mb-2">Singapore:</h5>
                <p className="text-gray-300">MAVEX INVESTMENTS PTE. LTD.</p>
              </div>
              <div>
                <h5 className="font-semibold mb-2">Laos:</h5>
                <p className="text-gray-300">中钰国际金属材料实业有限公司</p>
                <p className="text-gray-300">Zhongyu International Metal Materials Industry Co., Ltd.</p>
              </div>
            </div>
          </div>
        </div>

        <hr className="border-gray-700 my-8" />

        <div className="text-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} MAVEX INVESTMENTS PTE. LTD. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;