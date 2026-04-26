import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (email && password) { 
      localStorage.setItem("isLoggedIn", "true");
navigate("/vans");
    } else {
      alert("Please enter email and password");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white p-6 rounded-lg shadow-md"
      >
        <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>

        <input
          type="email"
          placeholder="Email"
          className="w-full border p-3 mb-4 rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border p-3 mb-4 rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          type="submit"
          className="w-full bg-black text-white py-3 rounded font-medium"
        >
          Log in
        </button>
      </form>
    </div>
  );
};

export default Login;