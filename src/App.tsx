import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Vans from "./pages/Vans";
import About from "./pages/About";
import Navbar from "./components/Navbar";

import "./server.js";

const App = () => {
  return (
    <BrowserRouter>
      <div className="h-screen flex flex-col">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/vans" element={<Vans />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
