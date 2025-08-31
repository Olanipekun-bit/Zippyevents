import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Slider from "./Components/Slider";
import Portfolio from "./Components/Portfolio";
import Testimonials from "./Components/Testimonials";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Slider />
      <Portfolio/>
      <Testimonials/>
    </>
  );
}

export default App;