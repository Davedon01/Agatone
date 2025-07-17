import Slider from 'react-slick';
import { Star } from 'lucide-react';

const reviews = [
  {
    name: 'Dera Chidera',
    rating: 5,
    comment: 'I love the customer service at Agatone farm, they deliver fresh eggs only.',
  },
  {
    name: 'Kenneth Igwe',
    rating: 4,
    comment: 'Agatone farm has one of the best farm environment, clean, best customer service and fresh farm products',
  },
  {
    name: 'Daniel Chibuike .N.',
    rating: 5,
    comment: 'A clean farm with quality and fresh products',
  },
  {
    name: 'Ngwuta Ebuka Promise',
    rating: 5,
    comment: 'I really love their eggs. Big in size and fast delivery.',
  },
  {
    name: 'Chinonso Okpala',
    rating: 5,
    comment: 'Such a nice farm that gives the best , I have been buying my eggs from this farm for a long time , I give them 5⭐ because they are the best.',
  },
  {
    name: 'Timothy Ifeonu',
    rating: 5,
    comment: 'They are Doing Fine. One Of The Best Farms 🚜🐄🌾 In The South East Of Nigeria.',
  },
];

const GoogleReviews = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 768, // for mobile screens
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-gradient-to-b from-white via-green-100 to-green-400 py-10 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold text-center text-green-700 mb-6">What Our Customers Say</h2>
      <Slider {...settings}>
        {reviews.map((review, idx) => (
          <div key={idx} className="px-2"> {/* adds horizontal gap */}
            <div className="bg-gray-100 rounded-xl shadow-md p-6 text-center h-full min-h-[250px] flex flex-col justify-between">
              <div className="flex justify-center mb-2">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 italic mb-4">"{review.comment}"</p>
              <h4 className="text-green-800 font-semibold">{review.name}</h4>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default GoogleReviews;
