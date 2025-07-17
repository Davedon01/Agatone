import React, { useEffect, useState } from "react";
import VideoBg from "../Component/VideoBg";
import Logo from "../assets/Agatone-logo-removebg-preview.png";
import Button from "../Component/Button";
import Hero from "../Component/Hero";
import GoogleReviews from "../Component/GoogleReviews";
import { useNavigate } from "react-router-dom";

function Home(): React.ReactElement {
  const navigate = useNavigate();

  const goToContact = () => {
    navigate("/contact-us");
  };
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    window.scrollTo(0, 0);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="w-full h-screen flex items-center justify-center bg-white">
        <div className="text-xl font-semibold text-green-600 animate-pulse">
          Loading Agatone Farms...
        </div>
      </div>
    );
  }

  return (
    <main className="relative z-0 overflow-hidden">
      <VideoBg>
        <div
          className="bg-white/10 backdrop-blur-sm rounded-lg 
          m-4 sm:m-6 md:m-10 lg:m-16
          px-6 sm:px-10 py-10 sm:py-14
          max-w-md sm:max-w-lg md:max-w-xl lg:max-w-3xl
          flex flex-col justify-center items-center text-center space-y-6"
        >
          {/* Logo */}
          <img
            src={Logo}
            alt="Agatone Logo"
            className="w-32 sm:w-40 md:w-48 lg:w-56 mx-auto"
          />

          {/* Hero Text */}
          <div className="text-gray-100 text-sm sm:text-base md:text-lg lg:text-xl space-y-2">
            <p>
              Commercial <span className="font-semibold">Egg Production.</span>
            </p>
            <p>
              We prioritize our
              <br />
              <span className="font-semibold">customers’ challenges.</span>
            </p>
            <p>We provide tailored business solutions to fit their needs.</p>
          </div>

          {/* CTA Button */}
          <div>
            <Button
              btnText="Contact Us Now"
              btnStyle="bg-green-500 px-6 py-3"
              onClick={goToContact}
            />
          </div>
        </div>
      </VideoBg>

      {/* Hero Section */}
      <section className="relative">
        <Hero />
      </section>

      {/* Google Review  */}
      <section className="bg-gradient-to-b from-white to-green-100">
        <GoogleReviews />
      </section>
    </main>
  );
}

export default Home;
