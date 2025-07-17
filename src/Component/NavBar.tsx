import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Logo from "../assets/Agatone-logo-removebg-preview.png";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "HOME", href: "/" },
    { name: "ABOUT", href: "/about" },
    { name: "SERVICES", href: "/services" },
    { name: "GALLERY", href: "/gallery" },
    { name: "SHOP", href: "/shop" },
    { name: "CONTACT US", href: "/contact-us" },
  ];

  const isCurrentPath = (path: string) => location.pathname === path;

  return (
    <header className="bg-white shadow-md fixed w-full top-0 z-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <img src={Logo} alt="Agatone Farms Logo" className="h-40 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8 items-center">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-colors duration-300 hover:text-green-600 ${
                  isCurrentPath(item.href)
                    ? "text-green-600 border-b-2 border-green-600 pb-1"
                    : "text-gray-700"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Toggle Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-green-600 focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white shadow-md">
          <div className="px-4 py-4 space-y-2 border-t">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block text-sm px-4 py-2 rounded-md transition duration-300 ${
                  isCurrentPath(item.href)
                    ? "bg-green-50 text-green-600 font-semibold"
                    : "text-gray-700 hover:text-green-600 hover:bg-green-50"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
