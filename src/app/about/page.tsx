import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "About Us | Athar Foods",
  description:
    "A leading trading company specializing in premium protein products, serving global markets with excellence and innovation.",
};

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col bg-gray-50">
      {/* About Section */}
      <section className="container mx-auto py-12 px-6 md:px-12 lg:px-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-[#095b35] mb-6">
          About Athar Foods
        </h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          Leading the industry in premium protein products, Athar Foods is dedicated to
          quality, innovation, and customer satisfaction.
        </p>
      </section>

      {/* Company Info Section */}
      <section className="container mx-auto px-6 md:px-12 lg:px-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          {
            img: "https://ext.same-assets.com/3330872014/3199121422.jpeg",
            title: "Who We Are",
            desc: "Established in 2023, Athar Foods is a leader in global protein trading, specializing in beef, poultry, and seafood.",
          },
          {
            img: "https://ext.same-assets.com/3330872014/3651007377.png",
            title: "Our Mission",
            desc: "We strive to deliver the highest quality protein products, maintaining excellence and sustainability in the food industry.",
          },
          {
            img: "https://ext.same-assets.com/3330872014/1238807252.png",
            title: "Our Partners",
            desc: "We collaborate with industry leaders like Premium Brands and Ocean Wise to uphold exceptional quality standards.",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="bg-white p-6 shadow-lg rounded-xl text-center border-t-4 border-[#095b35]"
          >
            <Image
              src={item.img}
              alt={item.title}
              width={100}
              height={100}
              className="mx-auto mb-4 rounded-full"
            />
            <h2 className="text-xl font-semibold text-[#095b35] mb-2">{item.title}</h2>
            <p className="text-gray-600">{item.desc}</p>
          </div>
        ))}
      </section>

      {/* Commitment Section */}
      <section className="bg-[#03468a] text-white py-12 mt-12">
        <div className="container mx-auto px-6 md:px-12 lg:px-20 text-center">
          <h2 className="text-3xl font-bold mb-4">Our Commitment</h2>
          <p className="max-w-3xl mx-auto text-lg">
            Innovation, quality, and sustainability are the cornerstones of Athar Foods. We go
            beyond expectations to provide the best products to our valued customers.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="container mx-auto py-12 px-6 md:px-12 lg:px-20 text-center">
        <h2 className="text-3xl font-bold text-[#095b35] mb-4">Get in Touch</h2>
        <p className="text-gray-700 mb-6 max-w-3xl mx-auto">
          Have questions about our products or services? Our team is ready to assist you.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-[#095b35] text-white py-3 px-6 rounded-lg text-lg font-semibold shadow-lg hover:bg-[#03468a]"
        >
          Contact Us
        </Link>
      </section>
    </main>
  );
}
