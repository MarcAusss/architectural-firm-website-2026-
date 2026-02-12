import Form from "next/form";
import Link from "next/link";
import { montserrat } from "../../fonts";

export default function Footer() {
  return (
    <footer className="px-6 md:px-10 lg:px-20 py-16">
      
      {/* Top Section */}
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:justify-between gap-8 pb-12 border-b border-gray-300">
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl">
            Your journey to mental <br />
            wellness starts here
          </h1>

          <p className={`${montserrat.className} text-sm text-gray-600 max-w-md`}>
            We make the process clear and comfortable so you can focus on healing without stress.
          </p>
        </div>

        {/* Middle Section */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Newsletter */}
          <div>
            <h1 className="font-bold text-xl mb-4">Greenova</h1>
            <p className="text-sm font-semibold mb-2">Subscribe</p>
            <p className="text-sm mb-6">
              Join our newsletter to stay up to date on features and releases.
            </p>

            <Form
              action="/search"
              className="flex items-center bg-gray-100 p-2 rounded-full"
            >
              <input
                name="query"
                placeholder="Enter your email"
                className="flex-1 bg-transparent outline-none px-3 text-sm"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-black text-white text-sm rounded-full"
              >
                Subscribe
              </button>
            </Form>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-3">
            <h1 className="font-semibold mb-2">Quick Links</h1>
            <Link href="">Home</Link>
            <Link href="">About</Link>
            <Link href="">Services</Link>
            <Link href="">Contact</Link>
          </div>

          <div className="flex flex-col gap-3">
            <h1 className="font-semibold mb-2">Services</h1>
            <Link href="">Individual Therapy</Link>
            <Link href="">Couples Counseling</Link>
            <Link href="">PTSD Support</Link>
            <Link href="">Mental Wellness</Link>
          </div>

          <div className="flex flex-col gap-3">
            <h1 className="font-semibold mb-2">Company</h1>
            <Link href="">Contact Us</Link>
            <Link href="">Emergency Help</Link>
            <Link href="">FAQ</Link>
            <Link href="">Privacy Policy</Link>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-6 border-t border-gray-300 text-sm text-gray-500">
          <p>© 2026 Company, All rights reserved.</p>

          <div className="flex gap-6">
            <Link href="">Terms</Link>
            <Link href="">Privacy</Link>
            <Link href="">Compliance</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
