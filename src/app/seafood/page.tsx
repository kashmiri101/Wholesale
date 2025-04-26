"use client";
import Image from "next/image";
import { useState } from "react";

const seafoodProducts = [
  {
    id: 1,
    name: "Black Tiger Shrimp",
    image: "./62075056-5420-42ca-95a9-31f1ad5362d0.jfif",
    variants: [
      { size: "16/20", country: "India", price: "$7.30/lb" },
      { size: "21/25", country: "Viet/Thai", price: "$7.70/lb" },
      { size: "26/30", country: "Thailand", price: "$8.80/lb" },
      { size: "31/35", country: "Ecuador", price: "$5.25/lb" },
    ]
  },
  {
    id: 2,
    name: "White Shrimp",
    image: "./62075056-5420-42ca-95a9-31f1ad5362d0.jfif",
    variants: [
      { size: "16/20", country: "India", price: "$6.25/lb" },
      { size: "21/25", country: "Vietnam", price: "$5.45/lb" },
      { size: "26/30", country: "China", price: "$5.10/lb" },
    ]
  },
  {
    id: 3,
    name: "EZ Peel IQF Headless",
    image: "./62075056-5420-42ca-95a9-31f1ad5362d0.jfif",
    variants: [
      { size: "16-20", country: "Vietnam", price: "$5.05/tray" },
      { size: "21-25", country: "Thailand", price: "$5.90/tray" },
      { size: "26-30", country: "Ecuador", price: "$5.55/tray" },
    ]
  },
  {
    id: 4,
    name: "Cooked Shrimp",
    image: "./62075056-5420-42ca-95a9-31f1ad5362d0.jfif",
    variants: [
      { size: "16/20", country: "Thailand", price: "$6.15/lb" },
      { size: "21/25", country: "Vietnam", price: "$5.65/lb" },
      { size: "26/30", country: "India", price: "$5.30/lb" },
    ]
  },
];

export default function SeafoodPage() {
  const [selectedProduct, setSelectedProduct] = useState(seafoodProducts[0]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <header className="bg-[#03468a] text-white py-4">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-3xl font-bold">Premium Seafood Products</h1>
          <p className="mt-2">Fresh From Ocean to Your Table</p>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {seafoodProducts.map((product) => (
            <div 
              key={product.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              onClick={() => setSelectedProduct(product)}
            >
              <div className="relative h-48 rounded-t-xl overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <h3 className="absolute bottom-2 left-2 text-white text-lg font-bold">
                  {product.name}
                </h3>
              </div>
              
              <div className="p-4">
                <div className="flex justify-between text-sm font-medium">
                  <span>Size</span>
                  <span>Price</span>
                </div>
                {product.variants.map((variant, index) => (
                  <div 
                    key={index}
                    className="flex justify-between py-2 border-t"
                  >
                    <div>
                      <span className="font-medium">{variant.size}</span>
                      <span className="text-gray-500 text-sm ml-2">
                        ({variant.country})
                      </span>
                    </div>
                    <span className="text-[#03468a] font-semibold">
                      {variant.price}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Detailed View Section */}
        <div className="mt-12 bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-bold text-[#03468a] mb-4">
            {selectedProduct.name} Specifications
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative h-96 rounded-lg overflow-hidden">
              <Image
                src={selectedProduct.image}
                alt={selectedProduct.name}
                fill
                className="object-cover"
              />
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-[#03468a] text-white">
                  <tr>
                    <th className="p-3 text-left">Size</th>
                    <th className="p-3 text-left">Origin</th>
                    <th className="p-3 text-left">Package</th>
                    <th className="p-3 text-left">Price</th>
                  </tr>
                </thead>
                <tbody>
                  {selectedProduct.variants.map((variant, index) => (
                    <tr 
                      key={index}
                      className="border-b hover:bg-blue-50"
                    >
                      <td className="p-3 font-medium">{variant.size}</td>
                      <td className="p-3">{variant.country}</td>
                      <td className="p-3">6x4 lb Block</td>
                      <td className="p-3 text-[#03468a] font-semibold">
                        {variant.price}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold text-sm">Certifications</h4>
              <p className="text-sm mt-1">HACCP, BRC, ASC Certified</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold text-sm">Shelf Life</h4>
              <p className="text-sm mt-1">24 Months at -18°C</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold text-sm">Packaging</h4>
              <p className="text-sm mt-1">Vacuum Sealed IQF</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold text-sm">MOQ</h4>
              <p className="text-sm mt-1">20' FCL Container</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}