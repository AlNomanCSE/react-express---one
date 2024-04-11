import { NavLink, Outlet } from "react-router-dom";

const Host = () => {
  return (
    <>
      <nav className="flex gap-4 p-8 font-bold text-slate-800">
        <NavLink to="/host" end>
          Dashboard
        </NavLink>
        <NavLink to="cars">Cars</NavLink>
        <NavLink to="income">Income</NavLink>
        <NavLink to="reviews">Reviews</NavLink>
      </nav>
      <Outlet />
    </>
  );
};

export default Host;
