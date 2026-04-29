import { NavLink, Outlet } from "react-router-dom";

const HostLayout = ()=>{
    return (
<div>

     <nav className="flex gap-6 font-medium text-gray-700
      ">
        <NavLink
  to="/host" end={true}
  className={({ isActive }) =>
    isActive
      ? "text-orange-500 font-semibold underline underline-offset-4"
      : "text-gray-700 hover:text-orange-500 hover:underline underline-offset-4"
  }
>
  Dashboard
</NavLink>
        <NavLink
  to="income"
  className={({ isActive }) =>
    isActive
      ? "text-orange-500 font-semibold underline underline-offset-4"
      : "text-gray-700 hover:text-orange-500 hover:underline underline-offset-4"
  }
>
  Income
</NavLink>
 <NavLink
  to="/host/vans"
  className={({ isActive }) =>
    isActive
      ? "text-orange-500 font-semibold underline underline-offset-4"
      : "text-gray-700 hover:text-orange-500 hover:underline underline-offset-4"
  }
>
  HostVans
</NavLink>





<NavLink
  to="reviews"
  className={({ isActive }) =>
    isActive
      ? "text-orange-500 font-semibold underline underline-offset-4"
      : "text-gray-700 hover:text-orange-500 hover:underline underline-offset-4"
  }
>
  Reviews
</NavLink>
      </nav>
<Outlet />  

</div>

    )
}
export default HostLayout;