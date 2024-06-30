import logo from "../../assets/The_New_York_Times_logo.png";

const Navbar = () => {
  return (
    <div className="w-full shadow-lg flex justify-center items-center h-[50px] position-fixed">
      <img src={logo} className="w-[12.188rem] h-[1.813rem]"></img>
    </div>
  );
};

export default Navbar;
