import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex justify-between items-center px-6 py-6 bg-[#FFF7ED]">
      <Link to="/" className="text-xl font-bold">
        #VanLife
      </Link>

      <nav className="flex gap-6 font-medium text-gray-700
      ">
        <Link to="/about" className="hover:text-orange-500">
          About
        </Link>
        <Link to="/vans" className="hover:text-orange-500">
          Vans
        </Link>
      </nav>
    </header>
  );
};

export default Header;