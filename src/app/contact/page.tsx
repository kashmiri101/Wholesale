import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const metadata = {
  title: 'Contact | Athar Foods',
  description: 'Contact Athar Foods for all your meat and seafood product needs.',
};

export default function ContactPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <div className="container mx-auto py-12 px-4">
        <div className="flex items-center gap-4 mb-8">
          <Image
            src="https://ext.same-assets.com/3330872014/3609541935.png"
            alt="Contact Icon"
            width={50}
            height={50}
            className="h-auto w-auto"
          />
          <h1 className="text-3xl md:text-4xl font-bold text-blue-800">Contact</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Calgary Office */}
          <Card className="shadow-md">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold text-blue-800 mb-4">Calgary Office</h2>
              <div className="space-y-2 mb-6">
                <p className="flex items-start">
                  <span className="font-bold w-24">Address:</span>
                  <span>123 Business Way, Suite 400<br />Calgary, AB T2P 2V7</span>
                </p>
                <p className="flex items-center">
                  <span className="font-bold w-24">Phone:</span>
                  <span>(403) 555-7890</span>
                </p>
                <p className="flex items-center">
                  <span className="font-bold w-24">Email:</span>
                  <span>calgary@atharfoods.com</span>
                </p>
              </div>

              <div className="w-full h-[200px] relative mb-4 rounded-md overflow-hidden">
                <Image
                  src="https://ext.same-assets.com/3330872014/3616530967.jpeg"
                  alt="Calgary Office"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="flex justify-center">
                <Button className="bg-blue-700 hover:bg-blue-800">
                  <a href="mailto:calgary@atharfoods.com" className="text-white">
                    Contact Calgary Office
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Vancouver Office */}
          <Card className="shadow-md">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold text-blue-800 mb-4">Vancouver Office</h2>
              <div className="space-y-2 mb-6">
                <p className="flex items-start">
                  <span className="font-bold w-24">Address:</span>
                  <span>456 West Trading Street<br />Richmond, BC V6X 3P6</span>
                </p>
                <p className="flex items-center">
                  <span className="font-bold w-24">Phone:</span>
                  <span>(604) 555-1234</span>
                </p>
                <p className="flex items-center">
                  <span className="font-bold w-24">Email:</span>
                  <span>vancouver@atharfoods.com</span>
                </p>
              </div>

              <div className="w-full h-[200px] relative mb-4 rounded-md overflow-hidden">
                <Image
                  src="https://ext.same-assets.com/3330872014/2890302321.jpeg"
                  alt="Vancouver Office"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="flex justify-center">
                <Button className="bg-blue-700 hover:bg-blue-800">
                  <a href="mailto:vancouver@atharfoods.com" className="text-white">
                    Contact Vancouver Office
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Contact Form Section */}
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-blue-800 mb-6 text-center">Send Us a Message</h2>
          <p className="text-gray-600 mb-8 text-center">
            Have questions about our products or services? Fill out the form below and one of our representatives will get back to you shortly.
          </p>

          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                <input
                  type="text"
                  id="firstName"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your first name"
                />
              </div>

              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your last name"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
              <input
                type="email"
                id="email"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your email address"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
              <input
                type="text"
                id="subject"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Message subject"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
              <textarea
                id="message"
                rows={5}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your message"
              ></textarea>
            </div>

            <div className="flex justify-center">
              <Button className="bg-red-600 hover:bg-red-700 px-8 py-3 text-lg">
                Send Message
              </Button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
