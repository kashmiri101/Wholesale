import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const metadata = {
  title: 'Contact | Athar Foods',
  description: 'Contact Athar Foods for all your meat and seafood product needs.',
};

export default function ContactPage() {
  return (
    <main className="flex min-h-screen flex-col bg-white text-black">
      <div className="container mx-auto py-8 px-4">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-[#F59E0B] mb-4">Contact Us</h1>
          <p className="text-lg sm:text-xl max-w-lg mx-auto">
            Get in touch with us for any inquiries or to place an order. We're here to help!
          </p>
        </div>

        {/* Office Contact Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Calgary Office */}
          <Card className="shadow-lg rounded-md">
            <CardContent className="p-6">
              <h2 className="text-2xl sm:text-3xl font-semibold text-[#F59E0B] mb-4">Calgary Office</h2>
              <div className="space-y-4">
                <p>
                  <span className="font-bold">Address:</span> 123 Business Way, Suite 400, Calgary, AB T2P 2V7
                </p>
                <p>
                  <span className="font-bold">Phone:</span> (403) 555-7890
                </p>
                <p>
                  <span className="font-bold">Email:</span> calgary@atharfoods.com
                </p>
              </div>
              <div className="flex justify-center mt-6">
                <Button className="bg-[#F59E0B] hover:bg-yellow-600 px-6 py-3">
                  <a href="mailto:calgary@atharfoods.com" className="text-white">Contact Calgary Office</a>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Vancouver Office */}
          <Card className="shadow-lg rounded-md">
            <CardContent className="p-6">
              <h2 className="text-2xl sm:text-3xl font-semibold text-[#F59E0B] mb-4">Vancouver Office</h2>
              <div className="space-y-4">
                <p>
                  <span className="font-bold">Address:</span> 456 West Trading Street, Richmond, BC V6X 3P6
                </p>
                <p>
                  <span className="font-bold">Phone:</span> (604) 555-1234
                </p>
                <p>
                  <span className="font-bold">Email:</span> vancouver@atharfoods.com
                </p>
              </div>
              <div className="flex justify-center mt-6">
                <Button className="bg-[#F59E0B] hover:bg-yellow-600 px-6 py-3">
                  <a href="mailto:vancouver@atharfoods.com" className="text-white">Contact Vancouver Office</a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Contact Form Section */}
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-semibold text-[#F59E0B] mb-6 text-center">Send Us a Message</h2>
          <p className="text-lg sm:text-xl mb-6 text-center">
            Have questions about our products or services? Fill out the form below, and we'll get back to you shortly.
          </p>

          <form className="space-y-6 bg-white p-8 rounded-md shadow-lg">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstName" className="block text-sm sm:text-base font-medium text-gray-700 mb-1">First Name</label>
                <input
                  type="text"
                  id="firstName"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F59E0B]"
                  placeholder="Your first name"
                />
              </div>

              <div>
                <label htmlFor="lastName" className="block text-sm sm:text-base font-medium text-gray-700 mb-1">Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F59E0B]"
                  placeholder="Your last name"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm sm:text-base font-medium text-gray-700 mb-1">Email Address</label>
              <input
                type="email"
                id="email"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F59E0B]"
                placeholder="Your email address"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm sm:text-base font-medium text-gray-700 mb-1">Subject</label>
              <input
                type="text"
                id="subject"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F59E0B]"
                placeholder="Message subject"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm sm:text-base font-medium text-gray-700 mb-1">Message</label>
              <textarea
                id="message"
                rows={5}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F59E0B]"
                placeholder="Your message"
              ></textarea>
            </div>

            <div className="flex justify-center">
              <Button className="bg-[#F59E0B] hover:bg-yellow-600 px-8 py-3 text-lg text-white">
                Send Message
              </Button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
