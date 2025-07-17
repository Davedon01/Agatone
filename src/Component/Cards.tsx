import { ShoppingCart } from "lucide-react";
import React from "react";

interface CardsProps {
  image: string;
  title: string;
  description: string;
}

function Cards(props: CardsProps): React.ReactElement {
  const { image, title, description } = props;

  const handleOrderNow = () => {
    const number = "2349037273416"; // Replace with your real WhatsApp number
    const message = encodeURIComponent(
      `Hi Agatone Farms, I'm interested in ordering: ${title}`
    );
    window.open(`https://wa.me/${number}?text=${message}`, "_blank");
  };

  return (
    <div className="max-w-sm rounded-2xl overflow-hidden shadow-md bg-white hover:shadow-xl transition duration-300 flex flex-col">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover transform hover:scale-105 transition duration-500 ease-in-out cursor-pointer"
      />
      <div className="p-4 flex-grow">
        <h2 className="text-xl text-green-400 font-bold mb-2">{title}</h2>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>

      {/* Order Now Button */}
      <div className="px-4 pb-4">
        <button
          onClick={handleOrderNow}
          className="w-full flex items-center justify-center px-4 py-2 rounded-lg font-medium bg-green-600 text-white hover:bg-green-700 transition-colors duration-300"
        >
          <ShoppingCart className="h-4 w-4 mr-2" />
          Order Now!
        </button>
      </div>
    </div>
  );
}

export default Cards;
