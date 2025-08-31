import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Slider from "./Components/Slider";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Slider />
    </>
  );
}

export default App;