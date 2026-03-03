import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer data-testid="footer" className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-outfit text-2xl font-bold mb-4">
              <span className="text-white">Naresh</span>{' '}
              <span className="text-secondary">Book Depot</span>
            </h3>
            <p className="text-slate-300 text-sm">
              Jalandhar's Complete School & Creative Destination
            </p>
          </div>

          <div>
            <h4 className="font-outfit font-bold mb-4">Contact Info</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <MapPin size={18} className="text-secondary mt-1" />
                <span className="text-slate-300">
                  Near Arya Senior Secondary Government School, Basti Guzan, Jalandhar, Punjab 144002
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={18} className="text-secondary" />
                <a href="tel:9855407298" className="text-slate-300 hover:text-white">
                  9855407298
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle size={18} className="text-secondary" />
                <a href="https://wa.me/918264890587" className="text-slate-300 hover:text-white">
                  8264890587 (WhatsApp)
                </a>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-outfit font-bold mb-4">Our Products</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>PSEB Books (All Classes)</li>
              <li>CBSE Books (Class 9-10)</li>
              <li>School Stationery</li>
              <li>Art Supplies</li>
              <li>Project Work Support</li>
              <li>Educational Toys</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-slate-700 text-center text-sm text-slate-400">
          <p>&copy; {new Date().getFullYear()} Naresh Book Depot. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

const MessageCircle = ({ size, className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
);

export default Footer;