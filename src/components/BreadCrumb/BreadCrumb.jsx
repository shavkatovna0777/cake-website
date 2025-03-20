import { Link } from "react-router-dom";

const Breadcrumb = () => {
  return (
    <nav className="flex items-center py-4">
      <Link to={"/"} className="text-black font-bold ">
        ASOSIY
      </Link>
      <span className="mx-2 text-gray-400">/</span>
      <span className="text-gray-400">MENYU</span>
    </nav>
  );
};

export default Breadcrumb;
