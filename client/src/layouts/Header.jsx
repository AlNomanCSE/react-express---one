import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <header className=" text-white bg-slate-900 flex items-center justify-between px-8 py-4">
      <NavLink to="/" className="text-xl font-bold text-white ">
        #CARLIFE
      </NavLink>
      <nav className="font-bold flex gap-4">
        <NavLink to="/host">Host</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/cars">Cars</NavLink>
      </nav>
    </header>
  );
};

export default Header;
