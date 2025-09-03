import { TiThMenu } from "react-icons/ti";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <>
      <nav className="text-black space-x-4 p-4 flex text-right justify-between items-center relative z-50">
        <Link
          to="/"
          className="text-2xl text-blue-500"
          style={{ fontFamily: "Bodoni" }}
        >
          <span className="text-4xl">Z</span>IPPY
          <span className="text-4xl">E</span>VENTS
        </Link>
        <div className="md:flex hidden items-center gap-3">
          <Link to="/">Home</Link>
          <Link to="/services">Services</Link>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact Us</Link>
          <Link
            to="/create-event"
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center gap-1"
          >
            Create an Event
          </Link>
        </div>
        <div className="md:hidden">
          <div className="drawer drawer-end">
            <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
              {/* Page content here */}
              <label htmlFor="my-drawer-4" className="drawer-button flex items-center gap-1 border-2 px-3 py-2 rounded bg-blue-500 border-blue-500 text-white">
               <h2>MENU</h2> <TiThMenu />
              </label>
            </div>
            <div className="drawer-side">
              <label
                htmlFor="my-drawer-4"
                aria-label="close sidebar"
                className="drawer-overlay"
              ></label>
              <div className="menu bg-blue-200 text-base-content min-h-full w-50 p-4">
                <div className="gap-4.5 flex flex-col">
                  <Link to="/">Home</Link>
                  <Link to="/services">Services</Link>
                  <Link to="/about">About Us</Link>
                  <Link to="/contact">Contact Us</Link>
                  <Link
                    to="/create-event"
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center gap-1"
                  >
                    Create an Event
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
