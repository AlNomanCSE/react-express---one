import { NavLink, Outlet } from "react-router-dom";

const Host = () => {
  return (
    <>
      <nav className="flex gap-2 p-8 font-bold">
        <NavLink to="/host" end>Dashboard</NavLink>
        <NavLink to="/host/income">Income</NavLink>
        <NavLink to="/host/reviews">Reviews</NavLink>
      </nav>
      <Outlet />
    </>
  );
};

export default Host;
