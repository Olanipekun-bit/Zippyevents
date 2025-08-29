import Navbar from "../Components/Navbar";
import hero from "../assets/images/hero.jpg";

export default function Hero() {
  return (
    <div className="relative h-screen">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${hero})` }}
      >
        <Navbar/>
      </div>
    </div>
  );
}
