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
            <CarouselItem>
              <div className="relative h-[50vh] md:h-[70vh] w-full">
                <Image
                  src="https://ext.same-assets.com/3330872014/2085562980.jpeg"
                  alt="Premium Beef"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex items-center">
                  <div className="container mx-auto px-6">
                    <div className="max-w-lg p-6 bg-blue-900/80 text-white">
                      <h2 className="text-2xl md:text-3xl font-bold mb-3">Imported Beef</h2>
                      <p className="text-sm md:text-base">
                        Our relationships with free-range farms in Australia, N.Z., Uruguay and Chile deliver you the highest quality beef.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="relative h-[50vh] md:h-[70vh] w-full">
                <Image
                  src="https://ext.same-assets.com/3330872014/596913524.jpeg"
                  alt="Sustainable Seafood"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex items-center">
                  <div className="container mx-auto px-6">
                    <div className="max-w-lg p-6 bg-blue-900/80 text-white">
                      <h2 className="text-2xl md:text-3xl font-bold mb-3">Sustainable Seafood</h2>
                      <p className="text-sm md:text-base">
                        We pride ourselves on sourcing only the most sustainable seafood products from around the world.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious className="left-4" />
          <CarouselNext className="right-4" />
        </Carousel>
      </section>

      {/* Content Boxes */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Products Box */}
          <Link href="/products">
            <Card className="h-full transition-all hover:shadow-lg overflow-hidden">
              <div className="bg-red-600 text-white p-4">
                <h3 className="text-xl font-bold">Products</h3>
              </div>
              <CardContent className="p-6">
                <p className="mb-6">
                  Athar Foods specializes in sourcing & supplying the best domestic & imported beef, poultry, pork, veal, lamb, mutton, goat, and seafood products. From our cornerstone AAA Canadian & imported beef products to free-range lamb and wild seafood.
                </p>
                <div className="w-full h-40 relative">
                  <Image
                    src="https://ext.same-assets.com/3330872014/3199121422.jpeg"
                    alt="Products"
                    fill
                    className="object-cover rounded-md"
                  />
                </div>
              </CardContent>
            </Card>
          </Link>

          {/* Services Box */}
          <Link href="/services">
            <Card className="h-full transition-all hover:shadow-lg overflow-hidden">
              <div className="bg-blue-700 text-white p-4">
                <h3 className="text-xl font-bold">Services</h3>
              </div>
              <CardContent className="p-6">
                <p className="mb-6">
                  Import/export, sourcing & supplying top quality & unique meat and seafood products. Our brokering & commodities trading expertise is complemented by our extensive network of global relationships with suppliers & our incisive sourcing intelligence.
                </p>
                <div className="w-full h-40 relative">
                  <Image
                    src="https://ext.same-assets.com/3330872014/3604932612.jpeg"
                    alt="Services"
                    fill
                    className="object-cover rounded-md"
                  />
                </div>
              </CardContent>
            </Card>
          </Link>

          {/* About Box */}
          <Link href="/about">
            <Card className="h-full transition-all hover:shadow-lg overflow-hidden">
              <div className="bg-red-600 text-white p-4">
                <h3 className="text-xl font-bold">About</h3>
              </div>
              <CardContent className="p-6">
                <p className="mb-6">
                  Since its inception, Athar Foods has fast become a leader within the Meat & Seafood Trading Industries. In recent years we've also built a reputation as a top source & supplier of sustainable seafood, with close attention to the Ocean Wise program.
                </p>
                <div className="w-full h-40 relative">
                  <Image
                    src="https://ext.same-assets.com/3330872014/2890302321.jpeg"
                    alt="About"
                    fill
                    className="object-cover rounded-md"
                  />
                </div>
              </CardContent>
            </Card>
          </Link>

          {/* Contact Box */}
          <Link href="/contact">
            <Card className="h-full transition-all hover:shadow-lg overflow-hidden">
              <div className="bg-blue-700 text-white p-4">
                <h3 className="text-xl font-bold">Contact</h3>
              </div>
              <CardContent className="p-6">
                <p className="mb-6">
                  From our Calgary & Vancouver offices, Athar Foods' team of Sales Brokers, Import/Export and Logistics Management specialists deliver hands-on, highly focused attention, in supplying unique, top-notch products to all our global customers.
                </p>
                <div className="w-full h-40 relative">
                  <Image
                    src="https://ext.same-assets.com/3330872014/3616530967.jpeg"
                    alt="Contact"
                    fill
                    className="object-cover rounded-md"
                  />
                </div>
              </CardContent>
            </Card>
          </Link>
        </div>
      </section>
    </main>
  );
}
