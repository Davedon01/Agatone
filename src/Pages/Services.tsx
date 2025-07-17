import {
  Building,
  Stethoscope,
  FlaskConical,
  Hammer,
  ClipboardList,
} from "lucide-react";
import Button from "../Component/Button";
import { useNavigate } from "react-router-dom";

const Services = () => {
  const services = [
    {
      icon: <Building className="h-12 w-12" />,
      title: "Building a Poultry Business",
      description:
        "Comprehensive guidance and support for establishing successful poultry operations. From initial planning to operational setup, we provide expert consultation to help you build a thriving poultry business.",
      features: [
        "Business plan development",
        "Site selection and evaluation",
        "Financial planning and projections",
        "Market analysis and strategies",
        "Regulatory compliance guidance",
      ],
    },
    {
      icon: <Stethoscope className="h-12 w-12" />,
      title: "Veterinary Consultation",
      description:
        "Professional veterinary services to ensure the health and welfare of your poultry. Our experienced veterinarians provide comprehensive healthcare solutions for optimal flock management.",
      features: [
        "Health monitoring and assessment",
        "Disease prevention programs",
        "Treatment protocols",
        "Vaccination schedules",
        "Emergency health support",
      ],
    },
    {
      icon: <FlaskConical className="h-12 w-12" />,
      title: "Poultry Feed Testing",
      description:
        "Advanced feed testing services to ensure optimal nutrition for your birds. We analyze feed quality, nutritional content, and safety to maximize productivity and bird health.",
      features: [
        "Nutritional analysis",
        "Quality control testing",
        "Contaminant detection",
        "Feed formulation advice",
        "Custom testing protocols",
      ],
    },
    {
      icon: <Hammer className="h-12 w-12" />,
      title: "Poultry Farm Construction Service",
      description:
        "Professional construction and design services for modern poultry facilities. We build state-of-the-art farms optimized for productivity, animal welfare, and operational efficiency.",
      features: [
        "Facility design and planning",
        "Modern housing construction",
        "Ventilation system installation",
        "Equipment setup and integration",
        "Biosecurity implementation",
      ],
    },
    {
      icon: <ClipboardList className="h-12 w-12" />,
      title: "Comprehensive Poultry Farm Management Services",
      description:
        "End-to-end farm management solutions to optimize your operations. From daily management to strategic planning, we ensure your farm operates at peak efficiency.",
      features: [
        "Daily operational management",
        "Production optimization",
        "Record keeping and reporting",
        "Staff training and development",
        "Performance monitoring",
      ],
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Consultation",
      description: "Initial assessment of your needs and requirements",
    },
    {
      step: "02",
      title: "Planning",
      description: "Detailed planning and strategy development",
    },
    {
      step: "03",
      title: "Implementation",
      description: "Professional execution of planned services",
    },
    {
      step: "04",
      title: "Support",
      description: "Ongoing support and maintenance services",
    },
  ];

  const navigate = useNavigate();

  const goToContact = () => {
    navigate("/contact-us");
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-50 to-green-100 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-800 mb-6">
            Our <span className="text-green-600">Services</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive poultry solutions tailored to meet your business needs
            and challenges
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6">
              Professional Poultry Services
            </h2>
            <div className="w-24 h-1 bg-green-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 text-green-600 rounded-full">
                      {service.icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {service.description}
                    </p>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-center text-gray-600"
                        >
                          <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6">
                Why Choose Our Services?
              </h2>
              <div className="w-24 h-1 bg-green-600 mb-8"></div>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                At Agatone Farms, we understand the challenges of modern poultry
                farming. Our comprehensive services are designed to address your
                specific needs and help you achieve sustainable success in the
                industry.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-600 rounded-full mr-4"></div>
                  <span className="text-gray-700">
                    Over 15 years of industry experience
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-600 rounded-full mr-4"></div>
                  <span className="text-gray-700">
                    Proven track record of successful projects
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-600 rounded-full mr-4"></div>
                  <span className="text-gray-700">
                    Customized solutions for your unique requirements
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-600 rounded-full mr-4"></div>
                  <span className="text-gray-700">
                    Ongoing support and maintenance
                  </span>
                </div>
              </div>
            </div>
            <div>
              <img
                src="https://petrosfarms.com/wp-content/uploads/2022/12/3.jpg"
                alt="Petros Farms Services"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6">
              Our Service Process
            </h2>
            <div className="w-24 h-1 bg-green-600 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We follow a systematic approach to ensure the highest quality
              service delivery and customer satisfaction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-600 text-white text-xl font-bold rounded-full mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 bg-green-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Service Coverage Areas
            </h2>
            <div className="w-24 h-1 bg-white mx-auto mb-8"></div>
            <p className="text-lg text-green-100 max-w-3xl mx-auto">
              We provide our comprehensive services across Nigeria and
              neighboring regions, bringing expertise directly to your location.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2">Southeast Nigeria</h3>
              <p className="text-green-100">
                Imo, Abia, Anambra, Enugu, Ebonyi States
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2">
                South-South Nigeria
              </h3>
              <p className="text-green-100">
                Rivers, Delta, Cross River, Akwa Ibom States
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2">Southwest Nigeria</h3>
              <p className="text-green-100">
                Lagos, Ogun, Oyo, Osun, Ondo States
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your poultry farming needs and discover
            how our professional services can help you achieve success.
          </p>
          <Button
            btnText="Contact Us Now"
            btnStyle="bg-green-500 px-6 py-3"
            onClick={goToContact}
          />
          {/* <Link
            to="/contact-us"
            className="inline-flex items-center px-8 py-4 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors duration-300 group"
          >
            Contact Us Now
            <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Link> */}
        </div>
      </section>
    </div>
  );
};

export default Services;
