import logo from "../../assets/The_New_York_Times_logo.png";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-full shadow-lg flex justify-center items-center h-[50px] fixed top-0 z-50 bg-white">
      <NavLink to="/" className="flex justify-center items-center">
        <img src={logo} className="w-[12.188rem] h-[1.813rem]" />
      </NavLink>
    </div>
  );
};

export default Navbar;
