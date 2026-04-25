import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-between p-8 bg-[#FFF7ED] text-black">
      <h1 className="font-bold text-xl">#VanLife</h1>
      <div className="flex gap-4">
        <Link to="/">Home</Link>
        <Link to="/vans">Vans</Link>
        <Link to="/about">About</Link>
        <Link to="/login">Login</Link>
      </div>
    </nav>
  );
};

export default Navbar;
