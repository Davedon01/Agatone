import React from "react";
import BirdsVid from "../assets/WhatsApp Video 2025-07-18 at 00.13.48_4fe5c304.mp4";
import processedBirds from "../assets/Chicken2.jpg";
import egg from "../assets/Eggcrate1.jpg";
import pen2 from "../assets/pen2.jpg";
import chicken1 from "../assets/Chicken1.jpg";
import Cards from "./Cards";
// import car from '../assets/WhatsApp Image 2025-07-15 at 14.25.47_51590d06.jpg'
// import car from '../assets/cardel.jpg'

// interface HeroProps {
//   title: string;
//   description: string;
//   image: string;
// }

function Hero(): React.ReactElement {
  const homeData = [
    {
      image: egg,
      title: "Premium Packaged Fresh Eggs!",
      description:
        "Durable and hygienic egg crates designed to securely store and transport eggs, minimizing breakage while maintaining freshness.",
    },
    {
      image: processedBirds,
      title: "Processed Broiler Meat",
      description:
        "Our state-of-the-art processing facilities ensure that our birds are handled with care and  processed under the highest standards of hygiene and safety, delivering quality poultry products to our customers.",
    },
    {
      image: pen2,
      title: "Spent Layers!",
      description:
        "Our chicken pens are designed to provide a safe and healthy environment for our birds, ensuring they have adequate space, ventilation, and access to clean food and water at all times.",
    },
    {
      image: chicken1,
      title: "Live Broiler Chicken",
      description:
        "Our live broiler chickens are raised in a clean, controlled environment with high-quality feed and proper care to ensure rapid growth and excellent meat quality. Ideal for commercial or personal use, our broilers are well-vaccinated, disease-free, and ready for delivery.",
    },
  ];
  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      {/* Background Video */}
      <video
        src={BirdsVid}
        className="absolute top-0 left-0 w-full h-full object-cover sm:object-center z-[-1] blur-none sm:blur-none"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* SVG on top of video */}
      <svg
        width=""
        height=""
        id="svg"
        viewBox="0 0 1440 690"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto relative z-10 transition duration-300 ease-in-out delay-150"
      >
        {/* Gradient Definition */}
        <defs>
          <linearGradient
            id="attractiveGreenGradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="0%"
          >
            <stop offset="0%" stop-color="#FFFFFF" /> {/* White */}
            <stop offset="50%" stop-color="#22C55E" />{" "}
            {/* Bright Lime Emerald */}
            <stop offset="100%" stop-color="#15803D" /> {/* Rich Bold Green */}
          </linearGradient>
        </defs>

        {/* Wavy Shape with Gradient Fill */}
        <path
          d="M 0,700 L 0,262 C 142.32142857142856,231.53571428571428 284.6428571428571,201.07142857142858 409,207 C 533.3571428571429,212.92857142857142 639.7499999999999,255.25 749,300 C 858.2500000000001,344.75 970.3571428571429,391.92857142857144 1086,386 C 1201.642857142857,380.07142857142856 1320.8214285714284,321.0357142857143 1440,262 L 1440,700 L 0,700 Z"
          stroke="none"
          stroke-width="0"
          fill="url(#attractiveGreenGradient)"
          fill-opacity="1"
          className="transition-all duration-300 ease-in-out delay-150 path-0"
          transform="rotate(-180 720 350)"
        ></path>

        {/* HTML Text inside SVG */}
        <foreignObject x="0" y="100" width="100%" height="300">
          {/* @ts-ignore */}
          <div xmlns="http://www.w3.org/1999/xhtml"
            className="flex flex-col items-center justify-center h-full text-white text-center"
          >
            <h1 className="text-5xl md:text-4xl font-bold">Commercial Egg Production</h1>
            <p className="mt-2 text-3xl md:text-lg">
              We prioritize our customers’ challenges.
            </p>
            <p className="text-2xl md:text-base">
              Tailored business solutions to fit your needs.
            </p>
          </div>
        </foreignObject>

        {/* image on the rightside  */}
        {/* <image 
         href={car}
         x="950"  
         y="100"
         width="350"
         height="300"
         className='rounded-lg w-[800px]'
        /> */}
      </svg>

      {/* Bottom SVG Wave (Flipped) */}
      <svg
        width=""
        height=""
        id="svg"
        viewBox="0 0 1440 690"
        xmlns="http://www.w3.org/2000/svg"
        calcMode="w-full h-20 relative z-10 transform scale-y-[-1] transition duration-300 ease-in-out delay-150"
      >
        {/* Gradient Definition */}
        <linearGradient
          id="attractiveGreenGradient"
          x1="0%"
          y1="100%"
          x2="100%"
          y2="0%"
        >
          <stop offset="0%" stop-color="#FFFFFF" />
          <stop offset="60%" stop-color="#22C55E" />
          <stop offset="100%" stop-color="#15803D" />
        </linearGradient>

        {/* Wavy Shape with Gradient Fill */}
        <path
          d="M 0,700 L 0,262 C 146.57142857142856,224.35714285714286 293.1428571428571,186.71428571428572 415,187 C 536.8571428571429,187.28571428571428 633.9999999999999,225.5 754,274 C 874.0000000000001,322.5 1016.8571428571429,381.2857142857143 1135,381 C 1253.142857142857,380.7142857142857 1346.5714285714284,321.3571428571429 1440,262 L 1440,700 L 0,700 Z"
          stroke="none"
          stroke-width="0"
          fill="url(#attractiveGreenGradient)"
          fill-opacity="1"
          className="transition-all duration-300 ease-in-out delay-150 path-0"
        ></path>

        {/* Svg Hero content */}
        <foreignObject x="0" y="100" width="100%" height="500">
          {/* @ts-ignore */}
          <div className="flex flex-col items-center justify-center max-w-4xl ml-10 h-full text-white text-center mt-20 z-30">
            <h2 className="text-4xl lg:text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-tr from-green-700 via-green-900 to-black">
              WELCOME TO AGATONE FARMS
            </h2>
            <p className="text-[#14532D] text-2xl md:text-lg">
              Agatone Farm is a proudly Nigerian-owned poultry farm dedicated to
              delivering high-quality, healthy, and sustainably-raised poultry
              products. Located in the heart of nature, our farm combines
              traditional farming values with modern agricultural practices to
              ensure the well-being of our birds and the satisfaction of our
              customers.
            </p>
          </div>
        </foreignObject>
      </svg>

      <section className="bg-gray-100 p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {homeData.map((item, index) => (
          <Cards
            key={index}
            image={item.image}
            title={item.title}
            description={item.description}
          />
        ))}
      </section>
    </section>
  );
}

export default Hero;
