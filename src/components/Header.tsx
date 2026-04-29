import { NavLink } from "react-router-dom";

const Header = () => {

  const activeStyle = {
    fontWeight: "bold",
    color: "#FF8C00",
    textDecoration: "underline",
  };
  return (
    <header className="flex justify-between items-center px-6 py-6 bg-[#FFF7ED]">
      <NavLink to="/" className="text-xl font-bold" style={({ isActive }) => (isActive ? activeStyle : undefined)}>
        #VanLife
      </NavLink>

      <nav className="flex gap-6 font-medium text-gray-700
      ">
        <NavLink
  to="/host" 
  className={({ isActive }) =>
    isActive
      ? "text-orange-500 font-semibold underline underline-offset-4"
      : "text-gray-700 hover:text-orange-500"
  }
>
  Host
</NavLink>
        <NavLink
  to="/about"
  className={({ isActive }) =>
    isActive
      ? "text-orange-500 font-semibold underline underline-offset-4 "
      : "text-gray-700 hover:text-orange-500"
  }
>
  About
</NavLink>
        <NavLink
  to="/vans"
  className={({ isActive }) =>
    isActive
      ? "text-orange-500 font-semibold underline underline-offset-4"
      : "text-gray-700 hover:text-orange-500"
  }
>
  Vans
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;