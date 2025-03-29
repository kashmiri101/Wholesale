import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: 'About | Athar Foods',
  description: 'An experienced and professional trading company focused on the purchasing and selling of protein and protein products.',
};

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <div className="container mx-auto py-12 px-4">
        <div className="flex items-center gap-4 mb-8">
          <Image
            src="https://ext.same-assets.com/3330872014/3330988952.png"
            alt="About Icon"
            width={50}
            height={50}
            className="h-auto w-auto"
          />
          <h1 className="text-3xl md:text-4xl font-bold text-blue-800">About</h1>
        </div>

        <div className="mb-10 text-gray-700 space-y-6 max-w-4xl">
          <p>
            Established in 2023, Athar Foods is an experienced and professional trading company focused on the purchasing and selling of protein and protein products. We trade both domestic and imported beef, poultry, pork, lamb, mutton, goat, and seafood, and other products, nationally and worldwide.
          </p>

          <p>
            From our head office in Calgary, Alberta, our expansive facilities in Richmond, British Columbia, our experienced team continually provides leading edge service in this specialized global industry, and within highly fluctuating markets. We focus on not only keeping pace, but setting new best practice standards within all of the different intricacies in our business, in order to maintain the top procurement and flow of products to our valued customers.
          </p>

          <p>
            Our customers are chain and independent retailers, food service distributors, manufacturers, producers and processors of protein items.
          </p>

          <p>
            At Athar Foods, we practice looking at different approaches and new ideas that have us surpass our customers' expectations. This allows us to foster and maintain strong and long lasting customer relationships. Meanwhile, our experienced logistics team ensures timely product deliveries nationally and worldwide.
          </p>

          <p>
            Athar Foods is an active member of <a href="http://www.micausa.org/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">MICA</a> and <a href="http://www.canadabeef.ca/ca/en/corp/about.aspx" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">CBEF</a>.
          </p>

          <p>
            Athar Foods is a Premimum Brands company. We are partner with C2C Premium Seafoods for much of our seafood processing.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-8 py-8">
            <div className="text-center">
              <Image
                src="https://ext.same-assets.com/3330872014/1238807252.png"
                alt="Ocean Wise Logo"
                width={150}
                height={150}
                className="mx-auto mb-4"
              />
              <a
                href="http://www.oceanwise.ca/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Ocean Wise
              </a>
            </div>
            <div className="text-center">
              <Image
                src="https://ext.same-assets.com/3330872014/3651007377.png"
                alt="Premium Brands Logo"
                width={150}
                height={150}
                className="mx-auto mb-4"
              />
              <a
                href="http://www.premiumbrandsholdings.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Premium Brands
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
