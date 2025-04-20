"use client"
import { NextPage } from "next";
import { FaMapMarkerAlt, FaGlobeAmericas, FaShippingFast, FaCertificate } from "react-icons/fa";
import { ComposableMap, Geographies, Geography, Marker, ZoomableGroup } from "react-simple-maps";
import { useState } from "react";

const geoUrl = "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json";

interface Country {
  name: string;
  products: string[];
  coordinates: [number, number];
  details: string;
}

const ProductSourcesPage: NextPage = () => {
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);
  
  const sourceCountries: Country[] = [
    { 
      name: "Italy", 
      products: ["Parma Ham", "Parmigiano Reggiano"], 
      coordinates: [12.5, 42.5],
      details: "Renowned for its artisanal cured meats and aged cheeses, sourced from small family farms in Northern Italy."
    },
    { 
      name: "New Zealand", 
      products: ["Lamb", "Grass-fed Beef"], 
      coordinates: [172.5, -41.5],
      details: "Free-range, grass-fed livestock raised in pristine natural environments with strict animal welfare standards."
    },
    { 
      name: "Australia", 
      products: ["Wagyu Beef", "Lamb"], 
      coordinates: [135, -25],
      details: "Premium Wagyu beef from grain-fed cattle and tender lamb from expansive pastoral stations."
    },
    { 
      name: "Chile", 
      products: ["Salmon", "Sea Bass"], 
      coordinates: [-71, -35],
      details: "Sustainable aquaculture operations in the cold, clean waters of Patagonia producing exceptional seafood."
    },
    { 
      name: "Brazil", 
      products: ["Beef", "Poultry"], 
      coordinates: [-55, -10],
      details: "Large-scale production with traceability systems, meeting international export standards."
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#095b35] to-[#03468a] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Our Global Product Sources</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Premium quality from the world's best producers
          </p>
        </div>
      </section>

      <main className="container mx-auto px-4 py-12 max-w-6xl">
        {/* Introduction */}
        <section className="bg-white rounded-xl shadow-md p-8 mb-12">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-6 md:mb-0 md:pr-8">
              <FaGlobeAmericas className="text-5xl text-[#095b35] mb-4" />
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Responsibly Sourced Worldwide</h2>
              <p className="text-gray-600 mb-4">
                We partner with carefully selected producers across the globe to bring you the finest quality meats and seafood.
              </p>
              <p className="text-gray-600">
                Each source is vetted for quality standards, sustainability practices, and ethical production methods.
              </p>
            </div>
            <div className="md:w-1/2">
              <div className="relative h-64 md:h-80 bg-gray-100 rounded-lg overflow-hidden">
                <ComposableMap className="w-full h-full">
                  <ZoomableGroup center={[0, 20]} zoom={1}>
                    <Geographies geography={geoUrl}>
                      {({ geographies }) =>
                        geographies.map((geo) => (
                          <Geography
                            key={geo.rsmKey}
                            geography={geo}
                            fill="#EAEAEC"
                            stroke="#D6D6DA"
                            style={{
                              default: { outline: "none" },
                              hover: { fill: "#E2E8F0", outline: "none" },
                              pressed: { fill: "#E2E8F0", outline: "none" },
                            }}
                          />
                        ))
                      }
                    </Geographies>
                    {sourceCountries.map((country, index) => (
                      <Marker key={country.name} coordinates={country.coordinates}>
                        <circle
                          r={6}
                          fill={index % 2 === 0 ? "#095b35" : "#03468a"}
                          stroke="#FFF"
                          strokeWidth={2}
                          onClick={() => setSelectedCountry(country)}
                          className="cursor-pointer hover:r-8 transition-all"
                        />
                      </Marker>
                    ))}
                  </ZoomableGroup>
                </ComposableMap>
              </div>
            </div>
          </div>
        </section>

        {/* Country Cards */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">Our Key Sourcing Countries</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sourceCountries.map((country, index) => (
              <div 
                key={country.name}
                className={`bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer ${
                  selectedCountry?.name === country.name ? 'ring-2 ring-[#095b35]' : ''
                }`}
                onClick={() => setSelectedCountry(country)}
              >
                <div className="h-40 bg-gray-100 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <FaMapMarkerAlt className={`text-4xl ${
                      index % 2 === 0 ? 'text-[#095b35]' : 'text-[#03468a]'
                    }`} />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{country.name}</h3>
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-500 mb-1">Key Products:</h4>
                    <ul className="list-disc list-inside text-gray-600">
                      {country.products.map((product) => (
                        <li key={product}>{product}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <FaShippingFast className="mr-2" />
                    <span>Air & Sea Freight Available</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Map Visualization */}
        <section className="bg-white rounded-xl shadow-md p-6 mb-12">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Our Global Supply Network</h2>
          <div className="relative w-full h-96 bg-gray-100 rounded-lg overflow-hidden">
            <ComposableMap className="w-full h-full">
              <ZoomableGroup center={[0, 20]} zoom={1}>
                <Geographies geography={geoUrl}>
                  {({ geographies }) =>
                    geographies.map((geo) => (
                      <Geography
                        key={geo.rsmKey}
                        geography={geo}
                        fill="#EAEAEC"
                        stroke="#D6D6DA"
                        style={{
                          default: { outline: "none" },
                          hover: { fill: "#E2E8F0", outline: "none" },
                          pressed: { fill: "#E2E8F0", outline: "none" },
                        }}
                      />
                    ))
                  }
                </Geographies>
                {sourceCountries.map((country, index) => (
                  <Marker key={country.name} coordinates={country.coordinates}>
                    <g
                      onClick={() => setSelectedCountry(country)}
                      className="cursor-pointer"
                    >
                      <circle
                        r={6}
                        fill={index % 2 === 0 ? "#095b35" : "#03468a"}
                        stroke="#FFF"
                        strokeWidth={2}
                      />
                      <text
                        x={0}
                        y={-10}
                        textAnchor="middle"
                        fill={index % 2 === 0 ? "#095b35" : "#03468a"}
                        fontWeight="bold"
                        fontSize={14}
                      >
                        {country.name}
                      </text>
                    </g>
                  </Marker>
                ))}
              </ZoomableGroup>
            </ComposableMap>
          </div>
          
          {/* Country Details Panel */}
          {selectedCountry && (
            <div className="mt-6 bg-[#f8fafc] rounded-lg p-6 border border-gray-200">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold text-[#095b35] mb-2">{selectedCountry.name}</h3>
                  <h4 className="text-md font-semibold text-gray-700 mb-3">Key Products:</h4>
                  <ul className="list-disc list-inside text-gray-600 mb-4">
                    {selectedCountry.products.map((product) => (
                      <li key={product}>{product}</li>
                    ))}
                  </ul>
                  <p className="text-gray-600">{selectedCountry.details}</p>
                </div>
                <button 
                  onClick={() => setSelectedCountry(null)}
                  className="text-gray-500 hover:text-gray-700"
                  aria-label="Close details"
                >
                  ✕
                </button>
              </div>
            </div>
          )}
          
          <div className="mt-4 flex flex-wrap justify-center gap-4">
            {sourceCountries.map((country, index) => (
              <div 
                key={country.name}
                className={`flex items-center px-3 py-1 rounded-full cursor-pointer ${
                  selectedCountry?.name === country.name ? 'bg-[#095b35] text-white' : 'bg-gray-100'
                }`}
                onClick={() => setSelectedCountry(country)}
              >
                <span className={`w-3 h-3 rounded-full ${
                  index % 2 === 0 ? 'bg-[#095b35]' : 'bg-[#03468a]'
                } mr-2`}></span>
                <span className="text-sm">{country.name}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Certification Section */}
        <section className="bg-gradient-to-r from-[#095b35] to-[#03468a] text-white rounded-xl shadow-md p-8">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/3 mb-6 md:mb-0 flex justify-center">
              <FaCertificate className="text-6xl text-white opacity-90" />
            </div>
            <div className="md:w-2/3 md:pl-8">
              <h2 className="text-2xl font-bold mb-4">Certified Quality Assurance</h2>
              <p className="mb-4 opacity-90">
                All our international suppliers meet rigorous certification standards including HACCP, ISO 22000, and BRC Global Standards.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div className="bg-white/10 p-3 rounded-lg text-center">
                  <span className="font-semibold">HACCP</span>
                </div>
                <div className="bg-white/10 p-3 rounded-lg text-center">
                  <span className="font-semibold">ISO 22000</span>
                </div>
                <div className="bg-white/10 p-3 rounded-lg text-center">
                  <span className="font-semibold">BRC</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ProductSourcesPage;