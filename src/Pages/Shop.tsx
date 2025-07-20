import { useState } from "react";
import { Star, ShoppingCart, Filter } from "lucide-react";
import packageEggs from '../assets/Eggcrate1.jpg'
import eggs from '../assets/egg1.jpg'
import spent from '../assets/WhatsApp Image 2025-07-06 at 09.26.42_b46da89e.jpg'
import liveBroiler from '../assets/Chicken1.jpg'
import broilerMeat from '../assets/Chicken2.jpg'

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("name");

  const handleWhatsApp = () => {
    const number = "2349037273416"; // no "+" sign, country code included
    const message = encodeURIComponent(
      "Hi Agatone Farms, I want to make an inquiry"
    );
    window.open(`https://wa.me/${number}?text=${message}`, "_blank");
  };

  const categories = [
    { id: "all", name: "All Products"},
    { id: "table-eggs", name: "Table Eggs" },
    { id: "broiler", name: "Broilers" },
    { id: "crates", name: "Egg Crates" },
    { id: "chicken-manure", name: "Chicken Manure" },
    { id: "spent-layers", name: "Spent Layers" },
  ];

  const products = [
    {
      id: 1,
      name: "Naturally Fresh Table Eggs - Antibiotics-Free",
      price: 5500,
      image: eggs,
      category: "table-eggs",
      categoryName: "Table Eggs",
      rating: 5,
      description:
        "Fresh, high-quality antibiotic-free eggs straight from our farm. Premium nutrition for your family.",
      inStock: true,
    },
    {
      id: 2,
      name: "Pasture-Raised Chickens",
      price: 8000,
      image: liveBroiler,
      category: "broiler",
      categoryName: "Live Broiler",
      description:
        "Specially formulated feed for pullets preparing to lay eggs.",
      inStock: true,
    },
    {
      id: 3,
      name: "NatureRaised Broiler Meat",
      price: 9000,
      image: broilerMeat,
      category: "broiler",
      categoryName: "Broiler Meat",
      description:
        "High-quality feed designed for optimal growth and development of young pullets.",
      inStock: true,
    },
    {
      id: 4,
      name: "Your All-in-One Egg Crating Solution",
      price: 6500,
      image: packageEggs,
      category: "crates",
      categoryName: "Egg Crates",
      description:
        "30-cell egg trays, stackable & reusable plastic egg crate holder trays, ideal for egg storage and transportation.",
      inStock: true,
    },
    {
      id: 5,
      name: "25kg Top-Grade Organic Chicken Manure",
      price: 1000,
      image: "https://petrosfarms.com/wp-content/uploads/2022/07/manure.jpg",
      category: "chicken-manure",
      categoryName: "Chicken Manure",
      description:
        "Premium organic chicken manure for enhanced soil fertility and plant growth.",
      inStock: true,
    },
    {
      id: 6,
      name: "Farm-raised Birds with Gourmet-Grade Meat",
      price: 6000,
      image: spent,
      category: "spent-layers",
      categoryName: "Spent Layers",
      description:
        "High-quality spent layers with rich flavor, perfect for traditional cooking.",
      inStock: true,
    },
  ];

  const filteredProducts = products.filter(
    (product) =>
      selectedCategory === "all" || product.category === selectedCategory
  );

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price;
      case "price-high":
        return b.price - a.price;
      case "name":
      default:
        return a.name.localeCompare(b.name);
    }
  });

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-50 to-green-100 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-800 mb-6">
            Our <span className="text-green-600">Shop</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our shop for fresh, high-quality antibiotic-free eggs and
            poultry products straight from our farm
          </p>
        </div>
      </section>

      {/* Shop Content */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          {/* Filters and Sort */}
          <div className="flex flex-col lg:flex-row gap-6 mb-8">
            {/* Category Filter */}
            <div className="lg:w-1/4">
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                  <Filter className="h-5 w-5 mr-2" />
                  Categories
                </h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`w-full text-left px-3 py-2 rounded transition-colors duration-300 ${
                        selectedCategory === category.id
                          ? "bg-green-100 text-green-600 font-medium"
                          : "text-gray-600 hover:bg-gray-50"
                      }`}
                    >
                      {category.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Products Grid */}
            <div className="lg:w-3/4">
              {/* Sort Controls */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
                <p className="text-gray-600 mb-2 sm:mb-0">
                  Showing {sortedProducts.length} of {products.length} products
                </p>
                <div className="flex items-center space-x-2">
                  <label htmlFor="sort" className="text-sm text-gray-600">
                    Sort by:
                  </label>
                  <select
                    id="sort"
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="border border-gray-300 rounded px-3 py-1 text-sm focus:outline-none focus:border-green-500"
                  >
                    <option value="name">Name</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                  </select>
                </div>
              </div>

              {/* Products Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {sortedProducts.map((product) => (
                  <div
                    key={product.id}
                    className="bg-white border border-gray-200 rounded-lg overflow-hidden group hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="relative overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      {!product.inStock && (
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                          <span className="bg-red-600 text-white px-3 py-1 rounded text-sm font-medium">
                            Out of Stock
                          </span>
                        </div>
                      )}
                    </div>

                    <div className="p-4">
                      <div className="text-xs text-green-600 font-medium mb-2 uppercase tracking-wide">
                        {product.categoryName}
                      </div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
                        {product.name}
                      </h3>
                      <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                        {product.description}
                      </p>

                      <div className="flex items-center justify-between mb-4">
                        <span className="text-xl font-bold text-green-600">
                          {formatPrice(product.price)}
                        </span>
                        {product.rating && (
                          <div className="flex items-center">
                            {[...Array(product.rating)].map((_, i) => (
                              <Star
                                key={i}
                                className="h-4 w-4 text-yellow-400 fill-current"
                              />
                            ))}
                          </div>
                        )}
                      </div>

                      <button
                        className={`w-full flex items-center justify-center px-4 py-2 rounded-lg font-medium transition-colors duration-300 ${
                          product.inStock
                            ? "bg-green-600 text-white hover:bg-green-700"
                            : "bg-gray-300 text-gray-500 cursor-not-allowed"
                        }`}
                        disabled={!product.inStock}
                        onClick={handleWhatsApp}
                      >
                        <ShoppingCart className="h-4 w-4 mr-2" />
                        {product.inStock ? "Order Now!" : "Out of Stock"}
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {sortedProducts.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-gray-500 text-lg">
                    No products found in this category.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 text-green-600 rounded-full mb-4">
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                100% Antibiotic-Free
              </h3>
              <p className="text-gray-600">
                All our products are naturally produced without harmful
                chemicals or antibiotics.
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 text-green-600 rounded-full mb-4">
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Fresh Daily
              </h3>
              <p className="text-gray-600">
                Products are harvested and processed daily to ensure maximum
                freshness.
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 text-green-600 rounded-full mb-4">
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Fast Delivery
              </h3>
              <p className="text-gray-600">
                Quick and reliable delivery service to get fresh products to
                your doorstep.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Shop;
