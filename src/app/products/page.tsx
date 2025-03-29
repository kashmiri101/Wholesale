import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

export const metadata = {
  title: 'Products | Athar Foods',
  description: 'Top quality meat and seafood products from around the world.',
};

export default function ProductsPage() {
  const products = [
    {
      category: "Beef",
      description: "Our premium beef products are sourced from the finest farms around the world. We offer a wide variety of cuts including prime, choice, and select grades.",
      image: "https://ext.same-assets.com/3330872014/2085562980.jpeg",
      items: ["AAA Canadian Beef", "Grass-fed Australian Beef", "Wagyu Beef", "Angus Beef", "USDA Prime Beef"]
    },
    {
      category: "Poultry",
      description: "We source the highest quality poultry products from certified suppliers. Our selection includes free-range and organic options.",
      image: "https://ext.same-assets.com/3330872014/4158541089.jpeg",
      items: ["Free-range Chicken", "Organic Turkey", "Duck", "Quail", "Cornish Hen"]
    },
    {
      category: "Pork",
      description: "Our pork products come from carefully selected farms that prioritize animal welfare and quality. We offer a variety of cuts for various culinary applications.",
      image: "https://ext.same-assets.com/3330872014/3850384884.jpeg",
      items: ["Heritage Pork", "Bacon", "Ham", "Pork Loin", "Pork Belly"]
    },
    {
      category: "Lamb & Mutton",
      description: "Our lamb and mutton products are sourced from New Zealand, Australia, and other premium producing regions known for their quality.",
      image: "https://ext.same-assets.com/3330872014/1679896150.jpeg",
      items: ["New Zealand Lamb", "Australian Lamb", "Mutton", "Rack of Lamb", "Lamb Chops"]
    },
    {
      category: "Seafood",
      description: "We provide sustainable seafood options sourced from responsible fisheries and aquaculture operations. Our products meet the highest standards for quality and freshness.",
      image: "https://ext.same-assets.com/3330872014/596913524.jpeg",
      items: ["Wild-caught Salmon", "Tuna", "Halibut", "Arctic Char", "Shrimp", "Lobster", "Crab", "Oysters"]
    }
  ];

  return (
    <main className="flex min-h-screen flex-col">
      <div className="container mx-auto py-12 px-4">
        <div className="flex items-center gap-4 mb-8">
          <Image
            src="https://ext.same-assets.com/3330872014/1514684888.png"
            alt="Products Icon"
            width={50}
            height={50}
            className="h-auto w-auto"
          />
          <h1 className="text-3xl md:text-4xl font-bold text-blue-800">Products</h1>
        </div>

        <div className="mb-10 text-gray-700">
          <p className="mb-8 max-w-4xl">
            Athar Foods specializes in sourcing and supplying the best domestic and imported protein products.
            Our extensive network of suppliers allows us to provide top quality meats and seafood at competitive prices.
            All our products are carefully selected to ensure they meet our high standards for quality, safety, and sustainability.
          </p>

          <div className="grid grid-cols-1 gap-8">
            {products.map((product, index) => (
              <Card key={index} className="overflow-hidden shadow-md">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
                  <div className="h-64 md:h-auto relative">
                    <Image
                      src={product.image}
                      alt={product.category}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="col-span-2 p-6">
                    <h2 className="text-2xl font-bold text-blue-800 mb-3">{product.category}</h2>
                    <p className="mb-4">{product.description}</p>
                    <h3 className="font-semibold text-lg mb-2">Products Include:</h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {product.items.map((item, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <div className="bg-blue-800 w-2 h-2 rounded-full"></div>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
