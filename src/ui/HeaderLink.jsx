import { NavLink } from "react-router-dom";

function HeaderLink({ to, children }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => {
        return `shadow p-[8px_16px] rounded-[32px] transition-all duration-300 ease-in-out text-black xl:text-[15px] max-lg:text-[13px] text-[11px] font-semibold ${
          isActive ? "bg-yellow text-grey" : "hover:bg-[#f9e9d0]"
        }`;
      }}
    >
      {children}
    </NavLink>
  );
}

export default HeaderLink;
