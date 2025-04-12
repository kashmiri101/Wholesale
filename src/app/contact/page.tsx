import { Button } from "@/components/ui/button";
import { RiFacebookFill, RiTwitterFill, RiLinkedinFill, RiInstagramFill } from "react-icons/ri";

export const metadata = {
  title: 'Contact | Bostan Group Inc.',
  description: 'Contact Bostan Group for premium meat and seafood sourcing solutions.',
};

export default function ContactPage() {
  return (
    <main className="flex min-h-screen flex-col bg-white text-black">
      <div className="container mx-auto py-12 px-4">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-[#095b35] mb-4">Contact Bostan Group</h1>
          <p className="text-lg sm:text-xl max-w-2xl mx-auto text-gray-700">
            Get in touch with our expert team for premium protein sourcing solutions
          </p>
        </div>

        {/* Full-width Contact Form */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Contact Info */}
              <div className="lg:col-span-1 space-y-6">
                <h2 className="text-2xl font-semibold text-[#03468a]">Quick Contacts</h2>
                <div className="space-y-4 text-gray-700">
                  <div>
                    <p className="font-semibold">Address:</p>
                    <p>Unit 122-2730 -39 AVE .N.E<br />
                    CALGARY AB, T1Y 7H6</p>
                  </div>
                  <div>
                    <p className="font-semibold">Business Hours:</p>
                    <p>9am – 5pm (Mon-Fri)</p>
                  </div>
                  <div>
                    <p className="font-semibold">Direct Line:</p>
                    <a href="tel:587-717-8930" className="text-[#095b35] hover:underline">587-717-8930</a>
                  </div>
                  <div>
                    <p className="font-semibold">Email:</p>
                    <a href="mailto:info@bostangroup.com" className="text-[#095b35] hover:underline">info@bostangroup.com</a>
                  </div>
                </div>
                
                {/* Social Links */}
                <div className="mt-8">
                  <h3 className="text-lg font-semibold text-[#03468a] mb-4">Connect With Us</h3>
                  <div className="flex gap-4">
                    <a href="#" className="text-[#03468a] hover:text-[#095b35]">
                      <RiFacebookFill size={28} />
                    </a>
                    <a href="#" className="text-[#03468a] hover:text-[#095b35]">
                      <RiTwitterFill size={28} />
                    </a>
                    <a href="#" className="text-[#03468a] hover:text-[#095b35]">
                      <RiLinkedinFill size={28} />
                    </a>
                    <a href="#" className="text-[#03468a] hover:text-[#095b35]">
                      <RiInstagramFill size={28} />
                    </a>
                  </div>
                </div>
              </div>

              {/* Expanded Form */}
              <div className="lg:col-span-2">
                <h2 className="text-3xl sm:text-4xl font-semibold text-[#095b35] mb-6">Business Inquiry Form</h2>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
                      <input
                        type="text"
                        id="firstName"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#095b35] focus:border-transparent"
                        placeholder="John"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
                      <input
                        type="text"
                        id="lastName"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#095b35] focus:border-transparent"
                        placeholder="Doe"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">Company Name *</label>
                    <input
                      type="text"
                      id="company"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#095b35] focus:border-transparent"
                      placeholder="Your business name"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Business Email *</label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#095b35] focus:border-transparent"
                      placeholder="contact@yourcompany.com"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="inquiry" className="block text-sm font-medium text-gray-700 mb-2">Inquiry Type *</label>
                    <select
                      id="inquiry"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#095b35] focus:border-transparent"
                      required
                    >
                      <option value="">Select inquiry type</option>
                      <option value="wholesale">Wholesale Order</option>
                      <option value="partnership">Partnership Opportunity</option>
                      <option value="product">Product Information</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                    <textarea
                      id="message"
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#095b35] focus:border-transparent"
                      placeholder="Please include product quantities and specifications"
                      required
                    ></textarea>
                  </div>

                  <div className="flex justify-center">
                    <Button className="bg-[#095b35] hover:bg-[#03468a] px-8 py-4 text-lg font-semibold transition-colors w-full sm:w-auto">
                      Submit Inquiry
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Full-width Map Section */}
        <div className="rounded-xl overflow-hidden shadow-lg mb-12">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2508.207240509994!2d-114.05930782353555!3d51.06350477171907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53716521bd2299cf%3A0x59d9d8f4a3e5c3d8!2s2730%2039%20Ave%20NE%2C%20Calgary%2C%20AB%20T1Y%207H6%2C%20Canada!5e0!3m2!1sen!2sus!4v1718907399507!5m2!1sen!2sus"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            className="rounded-xl"
          ></iframe>
        </div>
      </div>
    </main>
  );
}