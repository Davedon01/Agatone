// import { MessageCircle } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const Support = () => {
  return (
    <a
      href="https://wa.me/message/RXVE5UYQKDBCE1"
      target="blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50 group"
    >
      <div className="bg-green-500 p-4 rounded-full shadow-lg hover:bg-green-600 transition duration-300 animate-bounce relative">
        <div className="absolute inset-0 rounded-full animate-ping bg-green-400 opacity-50 group-hover:opacity-75"></div>
        <FaWhatsapp className="relative text-white w-6 h-6 z-10 group-hover:scale-110 transform transition duration-300" />
      </div>
    </a>
  );
};
export default Support;