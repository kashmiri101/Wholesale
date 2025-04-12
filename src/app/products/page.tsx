import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Products | Athar Foods",
  description: "Top quality meat and seafood products from around the world.",
};

const products = [
  {
    category: "Beef",
    description:
      "Our premium beef products are sourced from the finest farms around the world.",
    image: "https://ext.same-assets.com/3330872014/2085562980.jpeg",
    items: ["AAA Canadian Beef", "Wagyu Beef", "Angus Beef"],
  },
  {
    category: "Poultry",
    description: "We source the highest quality poultry products from certified suppliers.",
    image: "https://ext.same-assets.com/3330872014/4158541089.jpeg",
    items: ["Free-range Chicken", "Organic Turkey", "Duck"],
  },
  {
    category: "Seafood",
    description: "Sustainable seafood options sourced from responsible fisheries.",
    image: "https://ext.same-assets.com/3330872014/596913524.jpeg",
    items: ["Wild-caught Salmon", "Tuna", "Lobster"],
  },
];

export default function ProductsPage() {
  return (
    <main className="flex min-h-screen flex-col bg-gray-50">
      {/* Header Section */}
      <section className="text-center py-12 bg-gradient-to-r from-[#095b35] to-[#03468a] text-white">
        <h1 className="text-4xl font-bold">Our Products</h1>
        <p className="text-lg mt-2">Premium quality protein products from around the world.</p>
      </section>

      {/* Product Cards Section */}
      <section className="container mx-auto py-12 px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform transform hover:scale-105"
          >
            <div className="relative w-full h-48">
              <Image src={product.image} alt={product.category} fill className="object-cover" />
            </div>
            <div className="p-6 text-center">
              <h2 className="text-2xl font-semibold text-[#095b35]">{product.category}</h2>
              <p className="text-gray-700 mt-2">{product.description}</p>
              <ul className="mt-4 space-y-2">
                {product.items.map((item, idx) => (
                  <li key={idx} className="text-sm text-gray-600 flex items-center justify-center gap-2">
                    <span className="w-2 h-2 bg-[#095b35] rounded-full"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </section>

      {/* Bulk Orders Section */}
      <section className="text-center my-6 py-12 bg-[#03468a] text-white">
        <h2 className="text-3xl font-bold">Looking for Bulk Orders?</h2>
        <p className="text-gray-200 mt-2">Contact us for custom orders and wholesale pricing.</p>
        <Link
          href="/contact"
          className="mt-4 inline-block bg-[#095b35] text-white py-3 px-6 rounded-lg font-semibold shadow-lg hover:bg-[#03468a]"
        >
          Contact Us
        </Link>
      </section>
    </main>
  );
}
