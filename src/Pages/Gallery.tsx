import { useState } from "react";
import { X, Play, ZoomIn } from "lucide-react";
import Button from "../Component/Button";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [showModal, setShowModal] = useState(false);
  const [visitDate, setVisitDate] = useState<Date | null>(null);
  const [visitConfirmed, setVisitConfirmed] = useState(false);

  const categories = [
    { id: "all", name: "All" },
    { id: "facilities", name: "Facilities" },
    { id: "products", name: "Products" },
    { id: "operations", name: "Operations" },
    { id: "team", name: "Team" },
  ];

  const galleryItems = [
    {
      id: 1,
      type: "image",
      src: "https://petrosfarms.com/wp-content/uploads/2022/06/hom-scaled.jpg",
      category: "facilities",
      title: "Modern Poultry Facility",
      description:
        "Our state-of-the-art poultry facility with climate-controlled housing",
    },
    {
      id: 2,
      type: "image",
      src: "https://petrosfarms.com/wp-content/uploads/2022/12/3.jpg",
      category: "operations",
      title: "Farm Operations",
      description: "Daily operations ensuring optimal bird health and welfare",
    },
    {
      id: 3,
      type: "image",
      src: "https://petrosfarms.com/wp-content/uploads/2022/05/IMG_3638.png",
      category: "products",
      title: "Fresh Antibiotic-Free Eggs",
      description: "Our premium quality table eggs in colorful crates",
    },
    {
      id: 4,
      type: "video",
      src: "https://youtu.be/sb6KKObh5Lw",
      thumbnail: "https://i.ytimg.com/vi/sb6KKObh5Lw/maxresdefault.jpg",
      category: "operations",
      title: "Petros Farms Story",
      description: "Watch our journey and learn about our farming practices",
    },
    {
      id: 5,
      type: "image",
      src: "https://petrosfarms.com/wp-content/uploads/2024/07/Layer.jpg",
      category: "products",
      title: "Layer Mash Feed",
      description: "Premium layer mash for optimal egg production",
    },
    {
      id: 6,
      type: "image",
      src: "https://petrosfarms.com/wp-content/uploads/2022/05/gdg.jpeg",
      category: "team",
      title: "Our Team",
      description: "Dedicated professionals ensuring quality at every step",
    },
    {
      id: 7,
      type: "image",
      src: "https://petrosfarms.com/wp-content/uploads/2024/07/Pre-Layer.jpg",
      category: "products",
      title: "Pre-Layer Feed",
      description: "Specialized nutrition for pre-laying pullets",
    },
    {
      id: 8,
      type: "image",
      src: "https://petrosfarms.com/wp-content/uploads/2023/11/443.jpg",
      category: "products",
      title: "Egg Packaging Solutions",
      description: "30-cell egg crates for safe transportation",
    },
    {
      id: 9,
      type: "image",
      src: "https://petrosfarms.com/wp-content/uploads/2024/07/Developer.jpg",
      category: "products",
      title: "Developer Feed",
      description: "Nutrition for growing pullets development",
    },
    {
      id: 10,
      type: "image",
      src: "https://petrosfarms.com/wp-content/uploads/2022/07/manure.jpg",
      category: "products",
      title: "Organic Chicken Manure",
      description:
        "High-quality organic fertilizer for enhanced soil fertility",
    },
    {
      id: 11,
      type: "image",
      src: "https://petrosfarms.com/wp-content/uploads/2022/05/Petros-bird.png",
      category: "products",
      title: "Spent Layers",
      description: "Quality spent layers with rich flavor",
    },
    {
      id: 12,
      type: "image",
      src: "https://petrosfarms.com/wp-content/uploads/2022/07/middle-logo-150x150.png",
      category: "facilities",
      title: "Petros Farms Brand",
      description: "Our commitment to quality and excellence",
    },
  ];

  const filteredItems = galleryItems.filter(
    (item) => selectedCategory === "all" || item.category === selectedCategory
  );

  const openLightbox = (src: string) => {
    setSelectedImage(src);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-50 to-green-100 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-800 mb-6">
            Our <span className="text-green-600">Gallery</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our facilities, products, and operations through this visual
            journey of Agatone Farms
          </p>
        </div>
      </section>

      {/* Gallery Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-2 rounded-full font-medium transition-colors duration-300 ${
                  selectedCategory === category.id
                    ? "bg-green-600 text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-green-100 hover:text-green-600"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="group relative overflow-hidden rounded-lg shadow-lg bg-white"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={item.type === "video" ? item.thumbnail : item.src}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex space-x-3">
                      {item.type === "video" ? (
                        <a
                          href={item.src}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center w-12 h-12 bg-white bg-opacity-90 rounded-full hover:bg-opacity-100 transition-all duration-300"
                        >
                          <Play className="w-6 h-6 text-green-600 ml-1" />
                        </a>
                      ) : (
                        <button
                          onClick={() => openLightbox(item.src)}
                          className="inline-flex items-center justify-center w-12 h-12 bg-white bg-opacity-90 rounded-full hover:bg-opacity-100 transition-all duration-300"
                        >
                          <ZoomIn className="w-6 h-6 text-green-600" />
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Video Play Indicator */}
                  {item.type === "video" && (
                    <div className="absolute top-4 right-4">
                      <div className="inline-flex items-center justify-center w-8 h-8 bg-red-600 rounded-full">
                        <Play className="w-4 h-4 text-white ml-0.5" />
                      </div>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">
                No items found in this category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={closeLightbox}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors duration-300"
            >
              <X className="w-8 h-8" />
            </button>
            <img
              src={selectedImage}
              alt="Gallery Image"
              className="max-w-full max-h-full object-contain rounded-lg"
            />
          </div>
        </div>
      )}

      {/* Call to Action */}
      <section className="py-16 bg-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Experience Quality First-Hand
          </h2>
          <p className="text-lg text-green-100 mb-8 max-w-2xl mx-auto">
            Visit our facilities to see our commitment to quality and
            sustainability in action. Schedule a tour today.
          </p>
          <Button
            btnText="Schedule a Visit"
            btnStyle="bg-green-500 px-6 py-3"
            onClick={() => setShowModal(true)}
          />
          {showModal && (
            <div className="mt-6 bg-white rounded-xl p-6 max-w-md mx-auto shadow-lg text-black">
              <h3 className="text-lg font-bold mb-4 text-green-700">
                Select a Date & Time
              </h3>
              <DatePicker
                selected={visitDate}
                onChange={(date) => setVisitDate(date)}
                showTimeSelect
                dateFormat="Pp"
                className="w-full p-2 border rounded mb-4"
                placeholderText="Choose a date and time"
              />
              <Button
                onClick={() => {
                  if (!visitDate) return alert("Please select a date.");
                  setVisitConfirmed(true);
                  setShowModal(false);

                  if (Notification.permission !== "granted") {
                    Notification.requestPermission();
                  }

                  const timeout = visitDate.getTime() - Date.now() - 10000; // 10 seconds before visit
                  if (timeout > 0) {
                    setTimeout(() => {
                      if (Notification.permission === "granted") {
                        new Notification(
                          "Reminder: You have a visit to Agatone Farms soon!"
                        );
                      }
                    }, timeout);
                  }

                  alert(`Visit scheduled for ${visitDate.toLocaleString()}`);
                }}
                btnStyle="bg-green-500 px-6 py-3"
                btnText="Confirm Schedule"
              />
            </div>
          )}

          {visitConfirmed && (
            <p className="mt-4 text-green-100 font-medium">
              Your visit is scheduled for: {visitDate?.toLocaleString()}
            </p>
          )}
        </div>
      </section>
    </div>
  );
};

export default Gallery;
