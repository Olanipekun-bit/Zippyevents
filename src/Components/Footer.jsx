import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTelegramPlane } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-10 px-6 md:px-16 lg:px-24">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <h1
            className="text-2xl font-bold mb-4"
            style={{ fontFamily: "Bodoni, serif", color: "#1E90FF" }}
          >
            Zippy Events
          </h1>
          <p className="text-sm leading-relaxed mb-4 text-gray-300">
            Ornare eget varius aliquet vehicula fermentum commodo, dolor, dolor
            amet, ut velit lacus cursus et, tortor mollis lacus lectus aliquam
            velit justo nibh fermentum fermentum.
          </p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-blue-500">
              <FaFacebookF size={20} />
            </a>
            <a href="#" className="hover:text-pink-500">
              <FaInstagram size={20} />
            </a>
            <a href="#" className="hover:text-blue-400">
              <FaLinkedinIn size={20} />
            </a>
            <a href="#" className="hover:text-blue-300">
              <FaTelegramPlane size={20} />
            </a>
            {/* <a href="#" className="hover:text-gray-400">
              <FaXTwitter size={20} />
            </a> */}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#">Home</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Get a Quote</a></li>
          </ul>
        </div>

        {/* Our Services */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Our Services</h2>
          <ul className="space-y-2 text-gray-300">
            <li><a href="">Event Management</a></li>
            <li><a href="">Company Picnic</a></li>
            <li><a href="">Food & Beverages</a></li>
            <li><a href="">School Picnic</a></li>
            <li><a href="">Full-Service Production</a></li>
            <li><a href="">Live Entertainment</a></li>
          </ul>
        </div>
        <div>
          <h2 className="text-lg font-semibold mb-4">Contact Info</h2>
          <p className="text-gray-300 text-sm mb-3">
            Trafalgar Square, Charing Cross, London WC2N 5DN, United Kingdom.
          </p>
          <p className="text-gray-300 mb-2">+44 123 456 7890</p>
          <p className="text-gray-300">info@example.com</p>
        </div>
      </div>
      <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between text-gray-400 text-sm">
        <p>Copyright © 2025 Zippy Events</p>
        <p>Powered by CloudVantage Limited</p>
      </div>
    </footer>
  );
}
