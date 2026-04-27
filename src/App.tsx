import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Vans from "./pages/Vans/Vans";
import About from "./pages/About";

import "./server.js";
import VanDetail from "./pages/Vans/VanDetails";
import Layout from "./components/Layout";
import Reviews from "./pages/Host/Reviews";
import Income from "./pages/Host/Income";
import Dashboard from "./pages/Host/Dashboard";
import HostLayout from "./components/HostLayout";

const App = () => {
  return (
    <BrowserRouter>
      
       
        <Routes>

          <Route element={<Layout/>} >

          
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/vans" element={<Vans />}/>
          <Route path="/vans/:id" element={<VanDetail />}/>


          <Route path="/host" element={<HostLayout/>}>
          <Route path="/host" element={<Dashboard />}/>

          <Route path="/host/income" element={<Income />}/>
          <Route path="/host/reviews" element={<Reviews />}/>
          </Route>


          </Route>
        </Routes>
      
    </BrowserRouter>
  );
};

export default App;
