import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Carousel */}
      <section className="w-full relative">
        <Carousel className="w-full">
          <CarouselContent>
            {/* Slide 1 */}
            <CarouselItem>
              <div className="relative h-[50vh] md:h-[70vh] w-full">
                <Image
                  src="https://ext.same-assets.com/3330872014/2085562980.jpeg"
                  alt="Premium Beef"
                  fill
                  className="object-cover rounded-lg shadow-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#095b35]/70 to-transparent flex items-center">
                  <div className="container mx-auto px-6">
                    <div className="max-w-lg p-6 bg-[#095b35] text-white rounded-3xl shadow-2xl">
                      <h2 className="text-4xl font-extrabold mb-3">Premium Beef</h2>
                      <p className="text-lg font-medium">
                        High-quality beef sourced from trusted farms worldwide.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>

            {/* Slide 2 */}
            <CarouselItem>
              <div className="relative h-[50vh] md:h-[70vh] w-full">
                <Image
                  src="https://ext.same-assets.com/3330872014/2085562980.jpeg"
                  alt="Sustainable Seafood"
                  fill
                  className="object-cover rounded-lg shadow-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#03468a]/70 to-transparent flex items-center">
                  <div className="container mx-auto px-6">
                    <div className="max-w-lg p-6 bg-[#03468a] text-white rounded-3xl shadow-2xl">
                      <h2 className="text-4xl font-extrabold mb-3">Sustainable Seafood</h2>
                      <p className="text-lg font-medium">
                        Only the freshest and most sustainable seafood from around the world.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>

            {/* Slide 3 */}
            <CarouselItem>
              <div className="relative h-[50vh] md:h-[70vh] w-full">
                <Image
                  src="https://ext.same-assets.com/3330872014/2085562980.jpeg"
                  alt="Fresh Vegetables"
                  fill
                  className="object-cover rounded-lg shadow-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#095b35]/70 to-transparent flex items-center">
                  <div className="container mx-auto px-6">
                    <div className="max-w-lg p-6 bg-gradient-to-br from-[#095b35] to-[#03468a] text-white rounded-3xl shadow-2xl">
                      <h2 className="text-4xl font-extrabold mb-3">Fresh Vegetables</h2>
                      <p className="text-lg font-medium">
                        Fresh produce sourced directly from trusted local farms.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          </CarouselContent>

          {/* Carousel Arrows */}
          <CarouselPrevious className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 text-white bg-[#095b35]/60 hover:bg-[#03468a]/80 p-4 rounded-full shadow-lg" />
          <CarouselNext className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 text-white bg-[#095b35]/60 hover:bg-[#03468a]/80 p-4 rounded-full shadow-lg" />
        </Carousel>
      </section>

      {/* About Us Section */}
      <section className="relative py-6 bg-white text-center">
        <div className="container mx-auto px-6 relative z-10 text-black">
          <h2 className="text-4xl font-bold mb-6 text-[#03468a]">About Us</h2>
          <p className="max-w-2xl mx-auto text-gray-700 text-lg mb-8">
            We are a leading wholesale distributor of high-quality meat, seafood, and fresh produce.
          </p>
          <Link href="/about">
            <button className="bg-[#095b35] text-white py-3 px-8 rounded-full hover:bg-[#03468a] transition-all">
              Learn More About Us
            </button>
          </Link>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-6 bg-gray-50 text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-[#03468a] mb-6">Our Featured Products</h2>
          <p className="max-w-2xl mx-auto text-gray-700 text-lg mb-8">
            Explore our handpicked selection of premium quality products.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {/* Product Cards */}
            {[
              { title: "Premium Beef", img: "3199121422.jpeg" },
              { title: "Sustainable Seafood", img: "3604932612.jpeg" },
              { title: "Fresh Vegetables", img: "2890302321.jpeg" },
            ].map(({ title, img }) => (
              <Card key={title} className="transition-all hover:shadow-2xl hover:scale-105 rounded-lg shadow-lg">
                <div className="bg-[#095b35] text-white p-4 rounded-t-lg">
                  <h3 className="text-xl font-bold">{title}</h3>
                </div>
                <CardContent className="p-6">
                  <p className="mb-6 text-sm">Our finest {title.toLowerCase()} delivered fresh to you.</p>
                  <div className="w-full h-40 relative">
                    <Image
                      src={`https://ext.same-assets.com/3330872014/${img}`}
                      alt={title}
                      fill
                      className="object-cover rounded-md"
                    />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <Link href="/products">
            <button className="mt-6 bg-[#03468a] text-white py-2 px-6 rounded-full hover:bg-[#095b35] transition-all">
              Show More
            </button>
          </Link>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-6 bg-gray-50 text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-[#03468a] mb-6">Our Featured Services</h2>
          <p className="max-w-2xl mx-auto text-gray-700 text-lg mb-8">
            Discover how we serve our partners with dedication and excellence.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
  {[
    {
      title: "Cold Chain Logistics",
      desc: "We ensure your products stay fresh with our top-notch cold chain transportation and storage systems.",
      img: "https://ext.same-assets.com/3330872014/1119203587.jpeg"
    },
    {
      title: "Custom Packaging",
      desc: "Get your products packed your way with our customizable eco-friendly packaging options.",
      img: "https://ext.same-assets.com/3330872014/2918471191.jpeg"
    },
    {
      title: "Global Sourcing",
      desc: "Our worldwide network allows us to source premium products and deliver exceptional value.",
      img: "https://ext.same-assets.com/3330872014/3272104978.jpeg"
    },
  ].map(({ title, desc, img }) => (
    <Card key={title} className="transition-all hover:shadow-2xl hover:scale-105 rounded-lg shadow-lg">
      <div className="bg-[#03468a] text-white p-4 rounded-t-lg">
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
      <CardContent className="p-6">
        <p className="mb-6 text-sm">{desc}</p>
        <div className="w-full h-40 relative">
          <Image
            src={img}
            alt={title}
            fill
            className="object-cover rounded-md"
          />
        </div>
      </CardContent>
    </Card>
  ))}
</div>

{/* Show More Button */}
<Link href="/services">
  <button className="mt-6 bg-[#095b35] text-white py-2 px-6 rounded-full hover:bg-[#03468a] transition-all">
    Explore Services
  </button>
</Link>

        </div>
      </section>

      

      {/* Contact Us Section */}
      <section className="py-6 my-6 bg-[#03468a] text-center text-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-6">Get In Touch</h2>
          <p className="max-w-2xl mx-auto text-lg mb-8">
            Have any questions or need assistance? We're here to help.
          </p>
          <Link href="/contact">
            <button className="bg-white text-[#03468a] py-3 px-8 rounded-full hover:bg-[#095b35] hover:text-white transition-all">
              Contact Us
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
}
