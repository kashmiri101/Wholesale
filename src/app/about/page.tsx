import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

export const metadata = {
  title: "About Us | Bostan Group Inc.",
  description: "A premier supplier of high-quality meat and seafood products, serving traders, distributors, and supermarkets globally.",
};

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col bg-gray-50">
      {/* Hero Section */}
      <section className="container mx-auto py-12 px-6 md:px-12 lg:px-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-[#095b35] mb-6">
          About Bostan Group Inc.
        </h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          Your trusted partner for premium meat and seafood products, delivering quality and excellence globally.
        </p>
      </section>

      {/* Product Sections */}
      {[
        {
          title: "Premium Beef Sourcing",
          img: "https://ext.same-assets.com/3330872014/3199121422.jpeg",
          content: `Welcome to our company, where we pride ourselves on delivering the finest beef sourced from across the globe. While we 
          have a strong commitment to Canadian beef, our extensive supply network allows us to meet the diverse needs of our 
          customers by sourcing exceptional beef from various countries renowned for their quality. We understand that quality, 
          safety, and consistency are paramount...`
        },
        {
          title: "Seafood Excellence",
          img: "https://ext.same-assets.com/3330872014/3651007377.png",
          content: `Welcome to our seafood section, where we proudly offer an extensive selection of the freshest and highest-quality seafood 
          sourced from oceans and farms around the globe. Our shrimp collection is unmatched, featuring all sizes available with 
          shell, peeled, and deveined options...`
        },
        {
          title: "Premium Poultry",
          img: "https://ext.same-assets.com/3330872014/1238807252.png",
          content: `Welcome to our poultry section, where we specialize in providing a comprehensive range of poultry products tailored to 
          meet the diverse needs of our customers. Our selection includes all kinds of poultry, from light fowl to heavy fowl...`
        },
        {
          title: "Lamb & Goat Specialists",
          img: "https://ext.same-assets.com/3330872014/3199121422.jpeg",
          content: `Welcome to our Lamb and Goat section, where we take pride in being the best supplier for traders and distributors seeking 
          high-quality lamb and goat products. Our extensive selection encompasses everything from whole carcasses to a diverse 
          array of cuts...`
        }
      ].map((section, index) => (
        <section key={index} className={`py-12 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-100'}`}>
          <div className="container mx-auto px-6 md:px-12 lg:px-20 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className={`order-1 ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
              <Image
                src={section.img}
                alt={section.title}
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className={`order-2 ${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
              <h2 className="text-3xl font-bold text-[#095b35] mb-4">{section.title}</h2>
              <p className="text-gray-600">{section.content}</p>
            </div>
          </div>
        </section>
      ))}

      {/* Commitment Section */}
      <section className="bg-[#03468a] text-white py-12">
        <div className="container mx-auto px-6 md:px-12 lg:px-20 text-center">
          <h2 className="text-3xl font-bold mb-4">Our Commitment</h2>
          <p className="max-w-3xl mx-auto text-lg">
            At Bostan Group, we are passionate about quality, authenticity, and sustainability. With years of industry experience,
            our team is dedicated to building strong relationships with our partners while providing exceptional service and support.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="container mx-auto py-12 px-6 md:px-12 lg:px-20">
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <h2 className="text-3xl font-bold text-[#095b35] mb-8 text-center">Contact Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Headquarters</h3>
              <p className="text-gray-600">
                Unit 122-2730 -39 AVE .N.E<br />
                CALGARY AB, T1Y 7H6<br />
                <strong>Business Hours:</strong> 9am – 5pm (Mon-Fri)<br />
                <strong>Tel:</strong> <a href="tel:587-717-8930" className="text-[#03468a]">587-717-8930</a><br />
                <strong>Email:</strong> <a href="mailto:info@bostangroup.com" className="text-[#03468a]">info@bostangroup.com</a>
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Connect With Us</h3>
              <div className="flex gap-4 justify-center md:justify-start">
                <a href="#" className="text-[#03468a] hover:text-[#095b35]">
                  <FaFacebook size={28} />
                </a>
                <a href="#" className="text-[#03468a] hover:text-[#095b35]">
                  <FaTwitter size={28} />
                </a>
                <a href="#" className="text-[#03468a] hover:text-[#095b35]">
                  <FaLinkedin size={28} />
                </a>
                <a href="#" className="text-[#03468a] hover:text-[#095b35]">
                  <FaInstagram size={28} />
                </a>
              </div>
              <div className="mt-6 text-center md:text-left">
                <Link
                  href="/contact"
                  className="inline-block bg-[#095b35] text-white py-3 px-6 rounded-lg text-lg font-semibold shadow-lg hover:bg-[#03468a]"
                >
                  Contact Form
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 