import { NavLink } from "react-router-dom";


function Navbar({ isOpen, toggleMenu }) {
  return (
    <>
      {isOpen && (
        <ul className="absolute left-0 flex gap-2 flex-col top-[100%] bg-white w-full p-[10px_0]  items-center">
          <NavLink
            to="/"
            className={({ isActive }) => {
              return `${isActive ? "text-yellow" : ""} font-semibold`;
            }}
            onClick={toggleMenu}
          >
            Menyu
          </NavLink>
          <NavLink
            to="/aksiyalar"
            className={({ isActive }) => {
              return `${isActive ? "text-yellow" : ""} font-semibold`;
            }}
            onClick={toggleMenu}
          >
            Aksiyalar
          </NavLink>
          <NavLink
            to="/kontaktlar"
            className={({ isActive }) => {
              return `${isActive ? "text-yellow" : ""} font-semibold`;
            }}
            onClick={toggleMenu}
          >
            Kontaktlar
          </NavLink>
          <button className="bg-[#F3F3F7] text-[15px] lg:text-[13px] text-[#231F20] p-[8px_16px] font-semibold rounded-[32px] transition-all duration-300 ease-in-out focus:outline-none">
            Menga qo'ng'iroq qiling!
          </button>
        </ul>
      )}
    </>
  );
}

export default Navbar;
