// import { useState } from 'react'
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { useForm, ValidationError } from "@formspree/react";
import { useState } from "react";
import Button from "../Component/Button";

const ContactUs = () => {
  const [state, handleSubmit] = useForm("manjalbg");
  const [showMap, setShowMap] = useState(false);
  const toggleMap = () => {
    setShowMap(!showMap);
  };
  // if (state.succeeded) {
  //   return <p>Thanks for joining!</p>;
  // }

  // const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
  //   const { name, value } = e.target
  //   setFormData(prev => ({
  //     ...prev,
  //     [name]: value
  //   }))
  // }

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault()
  //   // Handle form submission here
  //   console.log('Form submitted:', formData)
  //   alert('Thank you for your message! We will get back to you soon.')
  //   // Reset form
  //   setFormData({
  //     name: '',
  //     email: '',
  //     phone: '',
  //     subject: '',
  //     message: ''
  //   })
  // }

  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone",
      details: ["+234 903 727 3416"],
      description: "Call us during business hours",
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      details: ["agatonefarms@gmail.com"],
      description: "Send us an email anytime",
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Address",
      details: [
        "Umuajanan Village, Ebenebe town, Awka North, Anambra State, Nigeria",
      ],
      description: "Visit our facilities",
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Business Hours",
      details: [
        "Monday - Friday: 8:00 AM - 5:00 PM",
        "Saturday: 9:00 AM - 3:00 PM",
        "Sunday: Closed",
      ],
      description: "Our working hours",
    },
  ];

  // const services = [
  //   "Building a Poultry Business",
  //   "Veterinary Consultation",
  //   "Poultry Feed Testing",
  //   "Poultry Farm Construction",
  //   "Farm Management Services",
  //   "Product Inquiry",
  //   "Other"
  // ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-50 to-green-100 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-800 mb-6">
            Contact <span className="text-green-600">Us</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get in touch with us for all your poultry farming needs. We're here
            to help you succeed.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Send us a Message
              </h2>
              <p className="text-gray-600 mb-8">
                Have questions about our products or services? Fill out the form
                below and we'll get back to you as soon as possible.
              </p>

              {state.succeeded ? (
                <div className="p-6 bg-green-50 border border-green-200 rounded-lg">
                  <h3 className="text-2xl font-semibold text-green-700 mb-2">
                    Thank you!
                  </h3>
                  <p className="text-green-600">
                    Your message has been received. We’ll get back to you
                    shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        First Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500"
                        placeholder="Your first name"
                      />
                      <ValidationError
                        prefix="Name"
                        field="name"
                        errors={state.errors}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Last Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500"
                        placeholder="Your last name"
                      />
                      <ValidationError
                        prefix="Name"
                        field="name"
                        errors={state.errors}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email">Email Address *</label>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500"
                        placeholder="your@email.com"
                      />
                      <ValidationError
                        prefix="Email"
                        field="email"
                        errors={state.errors}
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500"
                        placeholder="+234 XXX XXX XXXX"
                      />
                      <ValidationError
                        prefix="Tell"
                        field="phone"
                        errors={state.errors}
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500"
                      placeholder="Tell us about your requirements or questions..."
                    ></textarea>

                    <ValidationError
                      prefix="Message"
                      field="message"
                      errors={state.errors}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={state.submitting}
                    className="w-full flex items-center justify-center px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors duration-300"
                  >
                    <Send className="h-5 w-5 mr-2" />
                    {state.submitting ? "Sending..." : "Send Message"}
                  </button>
                </form>
              )}

              {/* <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500"
                      placeholder="+234 XXX XXX XXXX"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500"
                    >
                      <option value="">Select a subject</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500"
                    placeholder="Tell us about your requirements or questions..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors duration-300"
                >
                  <Send className="h-5 w-5 mr-2" />
                  Send Message
                </button>
              </form> */}
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Get in Touch
              </h2>
              <p className="text-gray-600 mb-8">
                We're committed to providing excellent customer service. Reach
                out to us through any of the following channels.
              </p>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 text-green-600 rounded-full">
                        {info.icon}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-1">
                        {info.title}
                      </h3>
                      <div className="text-gray-600 mb-1">
                        {info.details.map((detail, detailIndex) => (
                          <p key={detailIndex}>{detail}</p>
                        ))}
                      </div>
                      <p className="text-sm text-gray-500">
                        {info.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Find Us</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Located at Umuajanan Village, Ebenebe town, Awka North, Anambra
              State, Nigeria Visit our facilities
            </p>
          </div>

          {/* Map Placeholder */}
          <div className="bg-gray-200 rounded-lg h-96 relative overflow-hidden">
            {!showMap ? (
              <div className="h-full flex items-center justify-center">
                <div className="text-center px-4">
                  <MapPin className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-600 mb-2">
                    Interactive Map
                  </h3>
                  <p className="text-gray-500 max-w-md mx-auto mb-4">
                    We are located at Umuajanan Village, Ebenebe town, Awka
                    North, Anambra State, Nigeria.
                  </p>
                  <Button
                    btnText="Get Direction"
                    btnStyle="bg-green-500 px-6 h-12"
                    onClick={toggleMap}
                  />
                  {/* <button
              onClick={toggleMap}
              className="mt-4 px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-300"
            >
              Get Directions
            </button> */}
                </div>
              </div>
            ) : (
              <>
                <iframe
                  title="Ebenebe Map"
                  className="absolute top-0 left-0 w-full h-full rounded-lg"
                  src="https://www.google.com/maps?q=Umuajanan+Village,+Ebenebe,+Awka+North,+Anambra+State&output=embed"
                  allowFullScreen
                  loading="lazy"
                ></iframe>
                <Button
                  btnText="Close Map"
                  btnStyle="bg-green-500 px-6 h-12"
                  onClick={toggleMap}
                />
              </>
            )}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Quick answers to common questions about our products and services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                What makes your eggs antibiotic-free?
              </h3>
              <p className="text-gray-600">
                We don't use antibiotics in our poultry feed or treatment
                protocols, ensuring completely natural egg production.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                Do you offer delivery services?
              </h3>
              <p className="text-gray-600">
                Yes, we provide delivery services within Nigeria. Contact us for
                delivery options and pricing in your area.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                Can I visit your facilities?
              </h3>
              <p className="text-gray-600">
                Absolutely! We welcome visitors to see our operations. Please
                schedule a visit in advance for the best experience.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                What services do you offer for new farmers?
              </h3>
              <p className="text-gray-600">
                We offer comprehensive consultation services including business
                planning, farm construction, and ongoing management support.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
