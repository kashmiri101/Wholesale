import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import { RiFacebookFill, RiTwitterFill, RiLinkedinFill, RiInstagramFill } from "react-icons/ri";

export const metadata = {
  title: "Products | Bostan Group Inc.",
  description: "Top quality meat and seafood products from around the world.",
};

const products = [
  {
    id: "beef",
    category: "Premium Beef",
    description: "Sourced from the finest farms globally with custom cutting options",
    image: "./cae5856b-55bd-4f02-9f92-b30bbc72de59.jfif",
    content: `Welcome to our company, where we pride ourselves on delivering the finest beef sourced from across the globe. While we 
    have a strong commitment to Canadian beef, our extensive supply network allows us to meet the diverse needs of our 
    customers by sourcing exceptional beef from various countries renowned for their quality. We understand that quality, 
    safety, and consistency are paramount...`,
    items: ["AAA Canadian Beef", "Wagyu Beef", "Angus Beef"]
  },
  {
    id: 'seafood',
    category: "Seafood Excellence",
    description: "Wild-caught & farmed options with complete customization",
    image: "./9e48a862-b8b2-4e04-8bc7-a9a0b1adbeae.jfif",
    content: `Welcome to our seafood section, where we proudly offer an extensive selection of the freshest and highest-quality seafood 
    sourced from oceans and farms around the globe. Our shrimp collection is unmatched, featuring all sizes available with 
    shell, peeled, and deveined options...`,
    items: ["Wild Salmon", "Tuna", "Lobster", "Shrimp Varieties"]
  },
  {
    id: 'poultry',
    category: "Premium Poultry",
    description: "Canadian & imported fresh/frozen options",
    image: "./66d63f64-4171-4072-8e0f-68325b834508.jfif",
    content: `Welcome to our poultry section, where we specialize in providing a comprehensive range of poultry products tailored to 
    meet the diverse needs of our customers. Our selection includes all kinds of poultry, from light fowl to heavy fowl...`,
    items: ["Free-range Chicken", "Organic Turkey", "Duck"]
  },
  {
    id: 'lamb',
    category: "Lamb & Goat",
    description: "Whole carcasses to specialty cuts",
    image: "./f8d5ff4f-dbed-44d1-b5c0-1cdf259cd87c.jfif",
    content: `Welcome to our Lamb and Goat section, where we take pride in being the best supplier for traders and distributors seeking 
    high-quality lamb and goat products. Our extensive selection encompasses everything from whole carcasses to a diverse 
    array of cuts...`,
    items: ["Whole Carcasses", "Specialty Cuts", "Skinned/Skin-on Options"]
  }
];

 export default function ProductsContent() {
  return (
    <main className="flex min-h-screen flex-col bg-gray-50">
      {/* Hero Section */}
      <section className="text-center py-20 bg-gradient-to-r from-[#095b35] to-[#03468a] text-white">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Premium Products</h1>
          <p className="text-lg max-w-2xl mx-auto">
            Quality meat and seafood solutions for distributors, wholesalers, and foodservice providers
          </p>
        </div>
      </section>

      {/* Navigation Links */}
      <div className="sticky top-0 z-10 bg-white shadow-md">
        <div className="container mx-auto px-6 py-4 flex overflow-x-auto gap-4">
          {products.map((product) => (
            <Link 
              key={product.id}
              href={`#${product.id}`}
              className="whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors"
            >
              {product.category}
            </Link>
          ))}
        </div>
      </div>

      {/* Product Sections */}
      {products.map((product, index) => (
        <section 
          key={product.id}
          id={product.id}
          className={`py-16 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
        >
          <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className={`${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
              <div className="relative h-96 rounded-xl overflow-hidden shadow-lg">
                <Image
                  src={product.image}
                  alt={product.category}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
              </div>
            </div>
            <div className={`${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
              <h2 className="text-3xl font-bold text-[#095b35] mb-4">{product.category}</h2>
              <p className="text-gray-600 mb-6">{product.content}</p>
              <div className="bg-[#f8fafc] p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Key Offerings:</h3>
                <ul className="space-y-2">
                  {product.items.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-gray-700">
                      <span className="w-2 h-2 bg-[#095b35] rounded-full"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-[#03468a] mb-8">About Bostan Group</h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            At Bostan Group, we are passionate about providing high-quality meat and seafood products. 
            Established with a commitment to excellence, we serve traders, distributors, wholesalers, 
            and supermarkets globally. Our mission is to be your trusted partner in delivering premium 
            products that meet the evolving needs of your customers through sustainable sourcing and 
            rigorous quality control.
          </p>
        </div>
      </section>

  
    </main>
  );
}

