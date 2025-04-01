import Image from "next/image";
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
  ];

  const services = [
    "Custom Clearance",
    "Duties",
    "Transport Services",
    "Federally inspected storage facilities",
    "CFIA Regulations",
  ];

  return (
    <main className="min-h-screen bg-amber-50 text-gray-900">
      <div className="container mx-auto py-12 px-6">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-amber-600">Our Services</h1>
          <p className="mt-4 text-lg text-gray-700">We specialize in import/export, sourcing, and supplying high-quality meat and seafood products.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {countryFlags.map((item, index) => (
            <div key={index} className="flex items-center gap-3 p-4 bg-white shadow-md rounded-lg">
              <Image src={item.flag} alt={item.country} width={30} height={20} className="rounded-sm" />
              <span className="font-medium">{item.country}</span>
            </div>
          ))}
        </div>

        <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
          <AccordionItem value="import-export">
            <AccordionTrigger className="text-xl font-bold text-amber-700">Import/Export</AccordionTrigger>
            <AccordionContent>
              <p className="text-gray-700">We offer competitive global sourcing with extensive supplier relationships.</p>
              <ul className="mt-4 grid grid-cols-1 gap-2">
                {services.map((service, index) => (
                  <li key={index} className="flex items-center gap-2 text-gray-800">
                    <div className="w-2 h-2 bg-amber-700 rounded-full"></div>
                    {service}
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="sourcing-supplying">
            <AccordionTrigger className="text-xl font-bold text-amber-700">Sourcing/Supplying</AccordionTrigger>
            <AccordionContent>
              <p className="text-gray-700">We ensure top-quality sourcing and seamless supply chain solutions for meat and seafood.</p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="brokering-intelligence">
            <AccordionTrigger className="text-xl font-bold text-amber-700">Brokering/Intelligence</AccordionTrigger>
            <AccordionContent>
              <p className="text-gray-700">Our expertise in market intelligence and brokering helps secure the best deals for our clients.</p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </main>
  );
}
