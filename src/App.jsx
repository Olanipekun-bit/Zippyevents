import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<><Hero /> <About /></>} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
