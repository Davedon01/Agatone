import { Users, Target, Heart, Award } from "lucide-react";
import img from "../assets/pen3.jpg";

const About = () => {
  const values = [
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Quality First",
      description:
        "We are committed to producing the highest quality antibiotic-free eggs and poultry products.",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Community Focus",
      description:
        "Transforming lives, families, and communities through sustainable agricultural practices.",
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Innovation",
      description:
        "Revolutionizing the poultry industry with modern farming techniques and technology.",
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Excellence",
      description:
        "Maintaining the highest standards in all aspects of our operations and customer service.",
    },
  ];

  const team = [
    {
      name: "Dr. Peter Maduka",
      role: "Founder & CEO",
      image: "https://petrosfarms.com/wp-content/uploads/2022/05/gdg.jpeg",
      description:
        "Visionary leader with over 20 years of experience in agricultural development.",
    },
    {
      name: "Cynthia Maduka",
      role: "Operations Manager",
      image: "https://petrosfarms.com/wp-content/uploads/2022/05/gdg.jpeg",
      description:
        "Expert in farm operations and quality control with a passion for sustainable farming.",
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-50 to-green-100 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-800 mb-6">
            About <span className="text-green-600">Agatone Farms</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Where Quality and Care Hatch Success
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6">
                Our Story
              </h2>
              <div className="w-24 h-1 bg-green-600 mb-8"></div>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Agatone Farms is a proudly indigenous, forward-thinking
                agro-allied company located in Umuajanan Village, Ebenebe Town,
                Awka North Local Government Area of Anambra State, Nigeria.
                Established with a bold vision to transform Nigeria’s
                agricultural landscape, Agatone Farms is rapidly becoming a
                benchmark in sustainable poultry farming across the region and
                beyond.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Strategically situated in a serene agricultural hub with easy
                access to key regional markets, our farm benefits from a unique
                blend of favorable climatic conditions, skilled local workforce,
                and a strong connection to the surrounding community. This
                location not only enables us to operate efficiently but also
                positions us as a major contributor to the agricultural value
                chain in southeastern Nigeria.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                What began as a small family-owned initiative has evolved into a
                fully operational commercial enterprise — driven by passion,
                guided by innovation, and sustained by an unyielding commitment
                to excellence. Today, Agatone Farms is recognized as a trusted
                producer of premium, antibiotic-free eggs and poultry products,
                meeting the growing demand for healthier, safer, and more
                ethically raised food.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We are deeply committed to responsible farming practices that
                prioritize animal welfare, food safety, environmental
                stewardship, and community empowerment. Every product that
                leaves our farm reflects our core values of integrity,
                sustainability, and quality. At Agatone Farms, we do more than
                produce food — we promote wellness, support livelihoods, and
                build a better future for generations to come.
              </p>
              {/* <p className="text-lg text-green-600 leading-relaxed">
                Our mission is clear: <br className="text-lg text-gray-600 leading-relaxed"/>To nourish families, empower communities, and inspire a healthier nation — one antibiotic-free egg at a time.
              </p> */}
            </div>
            <div>
              <img
                src={img}
                alt="Agatone Farms Facility"
                className="w-full h-[360px] rounded-lg mx-auto shadow-xl hover:scale-3d"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Our Mission
              </h3>
              <p className="text-gray-600 leading-relaxed">
                At Agatone Farms, our mission is to set a new benchmark in
                poultry farming by producing the highest quality antibiotic-free
                eggs and poultry products—products that not only nourish but
                also protect the well-being of our consumers. We are driven by a
                deep commitment to sustainable agriculture, animal welfare, and
                environmental responsibility. Every step of our process—from
                farm to table—is guided by innovation, transparency, and a
                passion for excellence. Through advanced farming techniques,
                continuous improvement, and a dedication to ethical practices,
                we aim to empower communities, contribute to national food
                security, and shape a healthier future for Nigeria and beyond.
                Agatone Farms is more than a farm — we are a movement toward
                cleaner food, stronger communities, and a more sustainable
                world.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Our Vision
              </h3>
              <p className="text-gray-600 leading-relaxed">
                To build a future where every household has access to safe,
                nutritious, and ethically produced poultry, while championing
                sustainable farming practices that protect our land, support
                rural livelihoods, and strengthen food security across Africa.
                At Agatone Farms, we aspire to become a trusted name in poultry
                production — not just for the quality of our antibiotic-free
                products, but for the values we stand for: integrity,
                innovation, and impact. Our vision is rooted in a desire to feed
                nations, uplift communities, and lead a new era of responsible
                agriculture from Nigeria to the rest of the continent.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6">
              Our Core Values
            </h2>
            <div className="w-24 h-1 bg-green-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 text-green-600 rounded-full mb-4 group-hover:bg-green-600 group-hover:text-white transition-colors duration-300">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-green-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Why Choose Agatone Farms?
            </h2>
            <div className="w-24 h-1 bg-white mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">100%</div>
              <div className="text-lg font-semibold mb-2">Antibiotic-Free</div>
              <p className="text-green-100">
                All our eggs & chicken are produced without the use of
                antibiotics, ensuring natural and healthy nutrition.
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">
                Farm to Customer Delivery
              </div>
              <div className="text-lg font-semibold mb-2">
                Fresh from Farm to Door
              </div>
              <p className="text-green-100">Efficient Logistics. No delay.</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">2+</div>
              <div className="text-lg font-semibold mb-2">Years Experience</div>
              <p className="text-green-100">
                Combining hands-on experience with modern agricultural
                innovations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6">
              Meet Our Leadership Team
            </h2>
            <div className="w-24 h-1 bg-green-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-green-600 font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    {member.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://petrosfarms.com/wp-content/uploads/2022/12/3.jpg"
                alt="Petros Farms Modern Facilities"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6">
                State-of-the-Art Facilities
              </h2>
              <div className="w-24 h-1 bg-green-600 mb-8"></div>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Agatone Farms operates a clean, open-sided housing system
                designed for optimal ventilation and bird welfare. While fully
                manual, our operations are structured, disciplined, and
                performance-driven.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                  Open-sided pens for natural airflow and temperature control
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                  Manual feeding and clean water routines, executed daily
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                  Organized egg collection and handling process
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                  Routine health checks and strict biosecurity protocols
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
