import { Link } from "react-router-dom";
export default function Navbar() {
    return (
    <>
      <nav className="text-black space-x-4 p-4 flex text-right justify-end items-center">
        <nav className="absolute left-4 top-4">
          <Link to="/" className="text-2xl font-bodoni text-blue-500">
            <span className="text-4xl">Z</span>IPPY{" "}
            <span className="text-4xl">E</span>VENTS
          </Link>
        </nav>
        <Link to="/home">Home</Link>
        <Link to="/services">Services</Link>
        <Link to="/about">About Us</Link>
        <Link to="/contact">Contact Us</Link>
        <Link
          to="/create-event"
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center gap-1"
        >
          Create an Event
        </Link>
      </nav>
    </>
  );
}
