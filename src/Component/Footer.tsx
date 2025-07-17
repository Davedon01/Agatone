import { Link } from "react-router-dom";
import {
  Facebook,
  Instagram,
  Youtube,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";
import { useForm, ValidationError } from "@formspree/react";
import { useState } from "react";
import Button from "./Button";
import { FaTiktok } from "react-icons/fa";

const Footer = () => {
  const [state, handleSubmit] = useForm("manjalbg");
  const [email, setEmail] = useState("");

  // Clear email after successful submit
  if (state.succeeded && email !== "") {
    setEmail("");
  }
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Us Section */}
          <div>
            <h5 className="text-lg font-semibold mb-4 text-green-400">
              About us
            </h5>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/about"
                  className="text-gray-300 hover:text-green-400 transition-colors duration-300"
                >
                  Who We Are
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-300 hover:text-green-400 transition-colors duration-300"
                >
                  Our Mission
                </Link>
              </li>
              <li>
                <Link
                  to="/gallery"
                  className="text-gray-300 hover:text-green-400 transition-colors duration-300"
                >
                  Meet The Team
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-gray-300 hover:text-green-400 transition-colors duration-300"
                >
                  Company Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/contact-us"
                  className="text-gray-300 hover:text-green-400 transition-colors duration-300"
                >
                  Career
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories & Help Section */}
          <div>
            <h5 className="text-lg font-semibold mb-4 text-green-400">
              Categories
            </h5>
            <ul className="space-y-2 mb-6">
              <li>
                <Link
                  to="/shop?category=table-eggs"
                  className="text-gray-300 hover:text-green-400 transition-colors duration-300"
                >
                  Table Eggs
                </Link>
              </li>
              <li>
                <Link
                  to="/shop?category=spent-layers"
                  className="text-gray-300 hover:text-green-400 transition-colors duration-300"
                >
                  Spent Layers
                </Link>
              </li>
              <li>
                <Link
                  to="/shop?category=feed"
                  className="text-gray-300 hover:text-green-400 transition-colors duration-300"
                >
                  Poultry Layer Feed
                </Link>
              </li>
            </ul>

            <h5 className="text-lg font-semibold mb-4 text-green-400">
              Help & Support
            </h5>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/contact-us"
                  className="text-gray-300 hover:text-green-400 transition-colors duration-300"
                >
                  Frequently Asked Questions
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h5 className="text-lg font-semibold mb-4 text-green-400">
              Contact Info
            </h5>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-gray-400" />
                <span className="text-gray-300">+234 903 727 3416</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-gray-400" />
                <span className="text-gray-300">agatonefarms@gmail.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-gray-400 mt-1" />
                <span className="text-gray-300">
                  Umuajanan Village, Ebenebe town, Awka North, Anambra State,
                  Nigeria.
                </span>
              </div>
            </div>
          </div>

          {/* Newsletter & Social Media */}
          <div>
            <h5 className="text-lg font-semibold mb-4 text-green-400">
              Newsletter
            </h5>
            <p className="text-gray-300 mb-4 text-sm">
              Stay updated with our latest news and products
            </p>
            <form onSubmit={handleSubmit} className="mb-6">
              <div className="flex flex-col space-y-2">
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="px-3 py-2 bg-gray-800 text-white border border-gray-700 rounded focus:outline-none focus:border-green-400"
                  required
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
                <Button
                  btnText="Subscribe"
                  btnStyle="bg-green-500 w-full py-1"
                  disabled={state.submitting}
                  type="submit"
                />
                {/* <button
                   disabled={state.submitting}
                  type="submit"
                  className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors duration-300"
                >
                 Subscribe
                </button> */}
                {state.succeeded && (
                  <p className="text-green-400 text-sm mt-2">
                    Thank you for subscribing!
                  </p>
                )}
              </div>
            </form>
            <p className="text-xs text-gray-500 mb-4">
              *Be informed about sales and new products
            </p>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-gray-400 text-sm">
                © 2025 Agatone Farms. All rights reserved.
              </p>
            </div>

            {/* Social Media Links */}
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/share/1EfmGJRVfJ/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#1877F2] transition-colors duration-300"
              >
                <Facebook className="h-5 w-5" />
              </a>
              {/* <a
                href="https://twitter.com/AgatoneFarms"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-green-400 transition-colors duration-300"
              >
                <Twitter className="h-5 w-5" />
              </a> */}
              <a
                href="https://www.instagram.com/agatonefarms"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#E1306C] transition-colors duration-300"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="http://www.youtube.com/@AgatoneFarms-f5r"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#FF0000] transition-colors duration-300"
              >
                <Youtube className="h-5 w-5" />
              </a>
              <a
                href="http://www.tiktok.com/@agatonefarms"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-pink-500 transition-colors duration-300"
              >
                <FaTiktok className="h-5 w-5" />
                {/* <Linkedin className="h-5 w-5" /> */}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
