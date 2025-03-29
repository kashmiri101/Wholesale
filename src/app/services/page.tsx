import Image from "next/image";
import Link from "next/link";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const metadata = {
  title: 'Services | Athar Foods',
  description: 'Specializing in import/export, sourcing and supplying top quality and unique meat and seafood products.',
};

export default function ServicesPage() {
  const countryFlags = [
    { country: "Uruguay", flag: "https://ext.same-assets.com/3330872014/1440469565.png" },
    { country: "Chile", flag: "https://ext.same-assets.com/3330872014/661570747.png" },
    { country: "Brazil", flag: "https://ext.same-assets.com/3330872014/1490482996.png" },
    { country: "Argentina", flag: "https://ext.same-assets.com/3330872014/3674865306.png" },
    { country: "Denmark", flag: "https://ext.same-assets.com/3330872014/4247608413.png" },
    { country: "Finland", flag: "https://ext.same-assets.com/3330872014/3846336116.png" },
    { country: "France", flag: "https://ext.same-assets.com/3330872014/3363777762.png" },
    { country: "Ireland", flag: "https://ext.same-assets.com/3330872014/297830945.png" },
    { country: "Australia", flag: "https://ext.same-assets.com/3330872014/1676802811.png" },
    { country: "New Zealand", flag: "https://ext.same-assets.com/3330872014/1235532647.png" },
    { country: "China", flag: "https://ext.same-assets.com/3330872014/2153394831.png" },
    { country: "United States", flag: "https://ext.same-assets.com/3330872014/2649942014.png" },
    { country: "Holland", flag: "https://ext.same-assets.com/3330872014/3651007377.png" },
    { country: "Germany", flag: "https://ext.same-assets.com/3330872014/2099974803.png" },
    { country: "Peru", flag: "https://ext.same-assets.com/3330872014/2121735346.png" },
    { country: "Poland", flag: "https://ext.same-assets.com/3330872014/3116029415.png" },
  ];

  const services = [
    "Custom Clearance",
    "Duties",
    "Transport Services",
    "Federally inspected storage facilities",
    "CFIA Regulations",
    "Quota Regulations",
    "Access to beef quota",
    "Access to chicken quota",
    "Halal Certificates",
    "Letters of guarantee provided",
  ];

  const seafoodImages = [
    { src: "https://ext.same-assets.com/3330872014/482091427.jpeg", alt: "Seafood sourcing" },
    { src: "https://ext.same-assets.com/3330872014/2525592835.jpeg", alt: "Seafood catching" },
    { src: "https://ext.same-assets.com/3330872014/272228878.jpeg", alt: "Seafood processing" },
    { src: "https://ext.same-assets.com/3330872014/3203915812.jpeg", alt: "Seafood distribution" },
    { src: "https://ext.same-assets.com/3330872014/371105669.jpeg", alt: "Seafood preparation" },
    { src: "https://ext.same-assets.com/3330872014/767149874.jpeg", alt: "Seafood cuisine" },
  ];

  return (
    <main className="flex min-h-screen flex-col">
      <div className="container mx-auto py-12 px-4">
        <div className="flex items-center gap-4 mb-8">
          <Image
            src="https://ext.same-assets.com/3330872014/3763855886.png"
            alt="Services Icon"
            width={50}
            height={50}
            className="h-auto w-auto"
          />
          <h1 className="text-3xl md:text-4xl font-bold text-blue-800">Services</h1>
        </div>

        <div className="mb-10 text-gray-700">
          <p className="mb-6">
            Athar Foods has built a reputation as specialists in import/export, and sourcing and supplying top quality and unique meat and seafood products.
            Our brokering and commodities trading expertise is complimented by our extensive network of global relationships with suppliers.
            Our proficiency in sourcing intelligence is second to none.
          </p>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="import-export">
              <AccordionTrigger className="text-xl font-bold text-blue-800">Import/Export</AccordionTrigger>
              <AccordionContent>
                <p className="mb-6">
                  Athar Foods not only supports Canadian produced products but have a great deal of experience importing from many different countries around the world such as:
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  {countryFlags.map((item, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <Image
                        src={item.flag}
                        alt={`${item.country} flag`}
                        width={24}
                        height={16}
                        className="h-6 w-auto"
                      />
                      <span>{item.country}</span>
                    </div>
                  ))}
                </div>
                <p className="mb-6">
                  Our extensive supply base allows us some of the most competitive pricing around the world. Our import/export services include:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-6">
                  {services.map((service, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="bg-blue-800 w-2 h-2 rounded-full"></div>
                      <span>{service}</span>
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="sourcing-supplying">
              <AccordionTrigger className="text-xl font-bold text-blue-800">Sourcing/Supplying</AccordionTrigger>
              <AccordionContent>
                <p className="mb-6">
                  We provide a closed loop service, from expertly sourcing products through our exclusive supply chain through to our hands on processing, packaging, and distribution to our customers.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                  {seafoodImages.slice(0, 3).map((image, index) => (
                    <div key={index} className="overflow-hidden rounded-lg shadow-md">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        width={400}
                        height={300}
                        className="object-cover w-full h-48"
                      />
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                  {seafoodImages.slice(3, 6).map((image, index) => (
                    <div key={index} className="overflow-hidden rounded-lg shadow-md">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        width={400}
                        height={300}
                        className="object-cover w-full h-48"
                      />
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="brokering-intelligence">
              <AccordionTrigger className="text-xl font-bold text-blue-800">Brokering/Intelligence</AccordionTrigger>
              <AccordionContent>
                <p className="mb-6">
                  Our extensive capacity in relationship building with suppliers around the world, sourcing out unique products, and brokering arrangements and relationships are just some of key benefits Athar offers to our customers. Our sales representatives bring unique qualifications and industry experience that put our product and market intelligence in the forefront.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  <div className="overflow-hidden rounded-lg shadow-md">
                    <Image
                      src="https://ext.same-assets.com/3330872014/1407287371.jpeg"
                      alt="Brokering services"
                      width={300}
                      height={200}
                      className="object-cover w-full h-40"
                    />
                  </div>
                  <div className="overflow-hidden rounded-lg shadow-md">
                    <Image
                      src="https://ext.same-assets.com/3330872014/4196972890.jpeg"
                      alt="Meat processing"
                      width={300}
                      height={200}
                      className="object-cover w-full h-40"
                    />
                  </div>
                  <div className="overflow-hidden rounded-lg shadow-md">
                    <Image
                      src="https://ext.same-assets.com/3330872014/2979448357.jpeg"
                      alt="Logistics services"
                      width={300}
                      height={200}
                      className="object-cover w-full h-40"
                    />
                  </div>
                  <div className="overflow-hidden rounded-lg shadow-md">
                    <Image
                      src="https://ext.same-assets.com/3330872014/300012148.jpeg"
                      alt="Quality inspection"
                      width={300}
                      height={200}
                      className="object-cover w-full h-40"
                    />
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </main>
  );
}
