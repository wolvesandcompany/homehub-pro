import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-charcoal text-white">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-gradient-to-r from-primary to-primary-light p-2 rounded-lg">
                <div className="w-8 h-8 bg-white rounded flex items-center justify-center font-bold text-primary">
                  H
                </div>
              </div>
              <div>
                <div className="text-xl font-bold">HomeMax</div>
                <div className="text-sm text-gray-400">Services</div>
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              Your trusted local home service experts since 2010. Licensed, insured, and committed to your satisfaction.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-primary transition-colors">Services</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-primary transition-colors">Contact</Link></li>
              <li><Link to="/emergency" className="text-gray-300 hover:text-primary transition-colors">Emergency Service</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li><Link to="/services" className="text-gray-300 hover:text-primary transition-colors">Plumbing</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-primary transition-colors">Electrical</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-primary transition-colors">HVAC</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-primary transition-colors">Handyman</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-primary transition-colors">Cleaning</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <div>
                  <div className="font-medium">(555) 123-HELP</div>
                  <div className="text-sm text-gray-400">24/7 Emergency</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <div>
                  <div className="font-medium">info@homemax.com</div>
                  <div className="text-sm text-gray-400">Free Estimates</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0" />
                <div>
                  <div className="font-medium">Greater Metro Area</div>
                  <div className="text-sm text-gray-400">All Neighborhoods</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-primary flex-shrink-0" />
                <div>
                  <div className="font-medium">Mon-Fri: 7AM-7PM</div>
                  <div className="text-sm text-gray-400">Weekends Available</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2024 HomeMax Services. All rights reserved. Licensed & Insured.
          </div>
          <div className="flex space-x-6 text-sm text-gray-400">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-primary transition-colors">Licensing</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;