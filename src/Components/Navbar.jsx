import { Link } from "react-router-dom";
import { PlusCircle } from "lucide-react";

export default function Navbar() {
  return (
    <>
    <nav className="text-black space-x-4 p-4 flex text-right justify-end items-center">
      <nav className="absolute left-4 top-4">
        <Link to="/" className="text-2xl font-bodoni text-blue-500">Zippy Events</Link>
     </nav>
        <Link to="/">Home</Link>
        <Link to="/contact">Services</Link>
        <Link to="/about">About Us</Link>
        <Link to="/contact">Contact Us</Link>
        <Link to="/create-event" className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center gap-1">        
        Create an Event
        <PlusCircle size={20} strokeWidth={2}/>
        </Link>
      </nav>
    </>
  );
}
