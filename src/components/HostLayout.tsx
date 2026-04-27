import { Link, Outlet } from "react-router-dom";

const HostLayout = ()=>{
    return (
<div>

     <nav className="flex gap-6 font-medium text-gray-700
      ">
        <Link to="/host" className="hover:text-orange-500">
          Dashboard
        </Link>
        <Link to="/host/income" className="hover:text-orange-500">
          Income
        </Link>
        <Link to="/host/reviews" className="hover:text-orange-500">
          Reviews
        </Link>
      </nav>
<Outlet />  

</div>

    )
}
export default HostLayout;