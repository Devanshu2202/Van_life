import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Vans from "./pages/Vans";
import About from "./pages/About";
import { Link } from "react-router-dom";

import "./server.js";
import VanDetail from "./pages/VanDetails";
import Header from "./components/Header";

const App = () => {
  return (
    <BrowserRouter>
       <Header/>
      <div className="h-screen flex flex-col">
        <Routes>

          
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/vans" element={<Vans />}/>
          <Route path="/vans/:id" element={<VanDetail />}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
