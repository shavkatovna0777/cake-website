import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaVk } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-white text-center py-[80px]">
      <div className="flex justify-center space-x-[10px] mb-4">
        <Link
          to={"/"}
          className="w-10 h-10 flex items-center justify-center bg-color text-white rounded-full"
        >
          <FaFacebookF size={18} />
        </Link>
        <Link
          to={"/"}
          className="w-10 h-10 flex items-center justify-center bg-color text-white rounded-full"
        >
          <FaInstagram size={18} />
        </Link>
        <Link
          to={"/"}
          className="w-10 h-10 flex items-center justify-center bg-color text-white rounded-full"
        >
          <FaTwitter size={18} />
        </Link>
        <Link
          to={"/"}
          className="w-10 h-10 flex items-center justify-center bg-color text-white rounded-full"
        >
          <FaVk size={18} />
        </Link>
      </div>

      <div className="flex justify-center space-x-[16px] text-[#000000CC] mb-4">
        <Link to={"/"} className="hover:text-[#8bc34a]">
          Biz haqimizda
        </Link>
        <Link to={"/"} className="hover:text-[#8bc34a]">
          Yangiliklar
        </Link>
        <Link to={"/"} className="hover:text-[#8bc34a]">
          Blog
        </Link>
        <Link to={"/"} className="hover:text-[#8bc34a]">
          Aloqa
        </Link>
      </div>

      <p className="text-[#00000099] text-[15px] font-normal leading-5">
        © 2025{" "}
        <Link to={"https://t.me/TurkistanTeam"} target="_blank" className="text-[#8bc34a] font-semibold text-[15px] font-normal leading-5">TurkistanTeam</Link>{" "}
        tomonidan ishlab chiqilgan.
      </p>
    </footer>
  );
}

export default Footer;
