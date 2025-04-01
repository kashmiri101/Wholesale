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
            src="https://ext.same-assets.com/3330872014/2085562980.jpeg" // Replace with a stock image URL
            alt="Premium Beef"
            fill
            className="object-cover rounded-lg shadow-lg"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#F59E0B]/60 to-transparent flex items-center">
            <div className="container mx-auto px-6">
              <div className="max-w-lg p-6 bg-gradient-to-br from-yellow-400 to-red-500 text-white rounded-3xl shadow-2xl">
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
            src="https://ext.same-assets.com/3330872014/2085562980.jpeg" // Replace with a stock image URL
            alt="Sustainable Seafood"
            fill
            className="object-cover rounded-lg shadow-lg"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#F59E0B]/60 to-transparent flex items-center">
            <div className="container mx-auto px-6">
              <div className="max-w-lg p-6 bg-gradient-to-br from-blue-400 to-purple-600 text-white rounded-3xl shadow-2xl">
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
            src="https://ext.same-assets.com/3330872014/2085562980.jpeg" // Replace with a stock image URL
            alt="Fresh Vegetables"
            fill
            className="object-cover rounded-lg shadow-lg"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#F59E0B]/60 to-transparent flex items-center">
            <div className="container mx-auto px-6">
              <div className="max-w-lg p-6 bg-gradient-to-br from-green-400 to-teal-500 text-white rounded-3xl shadow-2xl">
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

    {/* Carousel Navigation Arrows */}
    <CarouselPrevious className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 text-white bg-[#F59E0B]/50 hover:bg-[#F59E0B]/70 p-4 rounded-full shadow-lg" />
    <CarouselNext className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 text-white bg-[#F59E0B]/50 hover:bg-[#F59E0B]/70 p-4 rounded-full shadow-lg" />
  </Carousel>
</section>


    {/* About Us Section */}
{/* About Us Section */}
<section className="relative py-6 bg-cover bg-center" >
  <div className="absolute "></div> {/* Optional overlay */}
  <div className="container mx-auto px-6 relative z-10 text-center text-black"> {/* Change text color to black */}
    <h2 className="text-4xl font-bold mb-6">About Us</h2>
    <p className="max-w-2xl mx-auto text-gray-700 text-lg mb-8">
      We are a leading wholesale distributor of high-quality meat, seafood, and fresh produce. With years of experience in the import and export industry, we ensure that our customers receive only the best products sourced from trusted suppliers worldwide.
    </p>
    {/* About Us Button */}
    <Link href="/about">
      <button className="bg-[#F59E0B] text-white py-3 px-8 rounded-full hover:bg-[#F59E0B]/80 transition-all">
        Learn More About Us
      </button>
    </Link>
  </div>
</section>

   

       {/* Bottom Product Section */}
       <section className="py-6 bg-gray-50 text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Featured Products</h2>
          <p className="max-w-2xl mx-auto text-gray-700 text-lg mb-8">
            Explore our handpicked selection of premium quality products. These are just a few of what we offer to cater to all your wholesale needs.
          </p>

          {/* Product Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {/* Product 1 */}
            <Card className="transition-all hover:shadow-2xl hover:scale-105 rounded-lg shadow-lg">
              <div className="bg-[#F59E0B] text-white p-4 rounded-t-lg">
                <h3 className="text-xl font-bold">Premium Beef</h3>
              </div>
              <CardContent className="p-6">
                <p className="mb-6 text-sm">
                  Sourced from trusted farms, our premium beef is the perfect choice for quality meat.
                </p>
                <div className="w-full h-40 relative">
                  <Image
                    src="https://ext.same-assets.com/3330872014/3199121422.jpeg"
                    alt="Premium Beef"
                    fill
                    className="object-cover rounded-md"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Product 2 */}
            <Card className="transition-all hover:shadow-2xl hover:scale-105 rounded-lg shadow-lg">
              <div className="bg-[#F59E0B] text-white p-4 rounded-t-lg">
                <h3 className="text-xl font-bold">Sustainable Seafood</h3>
              </div>
              <CardContent className="p-6">
                <p className="mb-6 text-sm">
                  Only the freshest, sustainable seafood sourced from certified fisheries worldwide.
                </p>
                <div className="w-full h-40 relative">
                  <Image
                    src="https://ext.same-assets.com/3330872014/3604932612.jpeg"
                    alt="Sustainable Seafood"
                    fill
                    className="object-cover rounded-md"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Product 3 */}
            <Card className="transition-all hover:shadow-2xl hover:scale-105 rounded-lg shadow-lg">
              <div className="bg-[#F59E0B] text-white p-4 rounded-t-lg">
                <h3 className="text-xl font-bold">Fresh Vegetables</h3>
              </div>
              <CardContent className="p-6">
                <p className="mb-6 text-sm">
                  Fresh, locally sourced vegetables that are grown with care to provide the best taste.
                </p>
                <div className="w-full h-40 relative">
                  <Image
                    src="https://ext.same-assets.com/3330872014/2890302321.jpeg"
                    alt="Fresh Vegetables"
                    fill
                    className="object-cover rounded-md"
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Show More Button */}
          <Link href="/products">
            <button className="mt-6 bg-[#F59E0B] text-white py-2 px-6 rounded-full hover:bg-[#F59E0B]/80 transition-all">
              Show More
            </button>
          </Link>

          </div>
      </section>



      {/* Featured Products Section */}
<section className="py-6 bg-gray-50 text-center">
  <div className="container mx-auto px-6">
    <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Featured Services</h2>
    <p className="max-w-2xl mx-auto text-gray-700 text-lg mb-8">
      Explore our handpicked selection of premium quality products. These are just a few of what we offer to cater to all your wholesale needs.
    </p>

    {/* Product Cards */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {/* Product 1 */}
      <Card className="transition-all hover:shadow-2xl hover:scale-105 rounded-lg shadow-lg">
        <div className="bg-[#F59E0B] text-white p-4 rounded-t-lg">
          <h3 className="text-xl font-bold">Premium Beef</h3>
        </div>
        <CardContent className="p-6">
          <p className="mb-6 text-sm">
            Sourced from trusted farms, our premium beef is the perfect choice for quality meat.
          </p>
          <div className="w-full h-40 relative">
            <Image
              src="https://ext.same-assets.com/3330872014/3199121422.jpeg"
              alt="Premium Beef"
              fill
              className="object-cover rounded-md"
            />
          </div>
        </CardContent>
      </Card>

      {/* Product 2 */}
      <Card className="transition-all hover:shadow-2xl hover:scale-105 rounded-lg shadow-lg">
        <div className="bg-[#F59E0B] text-white p-4 rounded-t-lg">
          <h3 className="text-xl font-bold">Sustainable Seafood</h3>
        </div>
        <CardContent className="p-6">
          <p className="mb-6 text-sm">
            Only the freshest, sustainable seafood sourced from certified fisheries worldwide.
          </p>
          <div className="w-full h-40 relative">
            <Image
              src="https://ext.same-assets.com/3330872014/3604932612.jpeg"
              alt="Sustainable Seafood"
              fill
              className="object-cover rounded-md"
            />
          </div>
        </CardContent>
      </Card>

      {/* Product 3 */}
      <Card className="transition-all hover:shadow-2xl hover:scale-105 rounded-lg shadow-lg">
        <div className="bg-[#F59E0B] text-white p-4 rounded-t-lg">
          <h3 className="text-xl font-bold">Fresh Vegetables</h3>
        </div>
        <CardContent className="p-6">
          <p className="mb-6 text-sm">
            Fresh, locally sourced vegetables that are grown with care to provide the best taste.
          </p>
          <div className="w-full h-40 relative">
            <Image
              src="https://ext.same-assets.com/3330872014/2890302321.jpeg"
              alt="Fresh Vegetables"
              fill
              className="object-cover rounded-md"
            />
          </div>
        </CardContent>
      </Card>
    </div>

    {/* Show More Button */}
    <Link href="/services">
      <button className="mt-6 bg-[#F59E0B] text-white py-2 px-6 rounded-full hover:bg-[#F59E0B]/80 transition-all">
        Show More
      </button>
    </Link>
  </div>
</section>

      {/* Contact Us Section */}
      <section className="py-6 my-6 bg-[#F59E0B] text-center text-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-6">Get In Touch</h2>
          <p className="max-w-2xl mx-auto text-lg mb-8">
            Have any questions or need assistance? We're here to help. Get in touch with us today!
          </p>
          {/* Contact Us Button */}
          <Link href="/contact">
            <button className="bg-white text-[#F59E0B] py-3 px-8 rounded-full ">
              Contact Us
            </button>
          </Link>
        </div>
      </section> 

   
    </main>
  );
}
