import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center py-20">
      <h1 className="text-6xl font-bold text-gray-800">404</h1>

      <p className="text-xl text-gray-600 mt-4">
        Sorry, the page you are looking for does not exist.
      </p>
<Link
  to="/"
  className="mt-6 bg-orange-500 text-white px-6 py-3 rounded-md"
>
  Go back home
</Link>
    </div>
  );
};

export default NotFound;