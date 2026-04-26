import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/login");
  };

  return (
    <nav className="flex justify-between p-8 bg-[#FFF7ED] text-black">
      <h1 className="font-bold text-xl">#VanLife</h1>

      <div className="flex gap-4 items-center">
        <Link to="/">Home</Link>
        <Link to="/vans">Vans</Link>
        <Link to="/about">About</Link>

        {!isLoggedIn ? (
          <Link to="/login">Login</Link>
        ) : (
          <button
  onClick={handleLogout}
  className="bg-black text-white px-3 py-1 rounded"
>
  Logout
</button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;