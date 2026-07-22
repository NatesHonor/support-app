import Image from "next/image";
import { FaUserShield, FaDatabase, FaLightbulb, FaCheckCircle, FaPhoneAlt, FaEnvelope, FaClock } from "react-icons/fa";

export default function SupportHomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white font-sans">
      {/* Hero Section */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/support-bg.jpg"
            alt="Support background"
            layout="fill"
            objectFit="cover"
            className="opacity-70"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white">
            <span className="block">24/7 Technical</span>
            <span className="block">Support & Assistance</span>
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-xl text-gray-300">
            We're here to help you with all your technical needs, from troubleshooting to
            implementation. Our team of experts is available around the clock to ensure your
            systems run smoothly.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#contact"
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg transform transition duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Contact Support
            </a>
            <a
              href="#services"
              className="px-8 py-4 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg shadow-lg transform transition duration-300 hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Our Services
            </a>
          </div>
        </div>
      </header>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-white">Our Support Services</h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-300">
              We offer a wide range of technical support services tailored to your needs.
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="bg-gray-700 rounded-lg p-8 shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-1">
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-600 text-white mb-4">
                <FaUserShield className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-white">24/7 Emergency Support</h3>
              <p className="mt-2 text-gray-400">
                Our team is available 24/7 to handle any critical issues or emergencies.
              </p>
            </div>
            <div className="bg-gray-700 rounded-lg p-8 shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-1">
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-600 text-white mb-4">
                <FaDatabase className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-white">System Troubleshooting</h3>
              <p className="mt-2 text-gray-400">
                Expert assistance with any system-related issues or performance problems.
              </p>
            </div>
            <div className="bg-gray-700 rounded-lg p-8 shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-1">
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-600 text-white mb-4">
                <FaLightbulb className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-white">Technical Consulting</h3>
              <p className="mt-2 text-gray-400">
                Get expert advice and recommendations for optimizing your systems and processes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-white">Why Choose Us</h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-300">
              We provide fast, reliable, and personalized support to ensure your systems are always up and running.
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-gray-800 rounded-lg p-8 shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-1">
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-600 text-white mb-4">
                <FaCheckCircle className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-white">Expert Team</h3>
              <p className="mt-2 text-gray-400">
                Our team consists of certified professionals with years of experience in the field.
              </p>
            </div>
            <div className="bg-gray-800 rounded-lg p-8 shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-1">
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-600 text-white mb-4">
                <FaClock className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-white">Fast Response</h3>
              <p className="mt-2 text-gray-400">
                We guarantee a quick response time to ensure minimal downtime for your systems.
              </p>
            </div>
            <div className="bg-gray-800 rounded-lg p-8 shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-1">
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-600 text-white mb-4">
                <FaPhoneAlt className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-white">24/7 Availability</h3>
              <p className="mt-2 text-gray-400">
                Our support team is available around the clock to assist you whenever you need help.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-white">What Our Clients Say</h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-300">
              Don't just take our word for it. Here's what our clients have to say about our support services.
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-gray-700 rounded-lg p-8 shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-1">
              <p className="text-gray-400 italic">"The support team was incredibly helpful and resolved my issue within minutes. I can't thank them enough!"</p>
              <p className="mt-4 text-right font-semibold text-white">- Sarah Johnson</p>
            </div>
            <div className="bg-gray-700 rounded-lg p-8 shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-1">
              <p className="text-gray-400 italic">"I've used several support services before, but none compare to the level of professionalism and expertise here."</p>
              <p className="mt-4 text-right font-semibold text-white">- Michael Smith</p>
            </div>
            <div className="bg-gray-700 rounded-lg p-8 shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-1">
              <p className="text-gray-400 italic">"Their support team is always available when I need them, and they go above and beyond to ensure my systems are running smoothly."</p>
              <p className="mt-4 text-right font-semibold text-white">- Emily Davis</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-white">Contact Us</h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-300">
              Have questions or need assistance? Reach out to our support team anytime.
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-2">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">Support Information</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="h-6 w-6 rounded-full bg-blue-600 flex items-center justify-center">
                      <FaEnvelope className="h-4 w-4 text-white" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <p className="text-gray-400">support@example.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="h-6 w-6 rounded-full bg-blue-600 flex items-center justify-center">
                      <FaPhoneAlt className="h-4 w-4 text-white" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <p className="text-gray-400">+1 (800) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="h-6 w-6 rounded-full bg-blue-600 flex items-center justify-center">
                      <FaClock className="h-4 w-4 text-white" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <p className="text-gray-400">24/7 Available</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <form className="bg-gray-800 p-8 rounded-lg shadow-lg">
                <div className="mb-4">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="mt-1 block w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="mt-1 block w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows="4"
                    className="mt-1 block w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:ring-blue-500 focus:border-blue-500"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};