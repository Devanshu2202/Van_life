import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Vans from "./pages/Vans";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";

import "./server.js";
import VanDetail from "./pages/VanDetails";
import Login from "./pages/Login";

const App = () => {
  return (
    <BrowserRouter>
      <div className="h-screen flex flex-col">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
  path="/vans"
  element={
    <ProtectedRoute>
      <Vans />
    </ProtectedRoute>
  }
/>

<Route
  path="/vans/:id"
  element={
    <ProtectedRoute>
      <VanDetail />
    </ProtectedRoute>
  }
/>
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
