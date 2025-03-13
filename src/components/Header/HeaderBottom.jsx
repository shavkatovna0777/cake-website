import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { IoIosSearch, IoMdClose, IoMdMenu } from "react-icons/io";
import { FaShoppingBasket } from "react-icons/fa";
import HeaderLink from "../../ui/HeaderLink.jsx";
import { formatCurrency } from "../../utils/formatCurrency.js";
import { toggleBodyOverflow } from "../../utils/toggleBodyOverflow.js";
import { CartContext } from "../../router/App.jsx";
import { websiteLogo } from "../../assets/images/index.js";

function HeaderBottom({ isOpen, setIsOpen }) {
  const { cartDatas } = useContext(CartContext);
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);
  function calculateTotalPrice(cartDatas) {
    let totalSum = 0;
    cartDatas.forEach((data) => {
      totalSum += data.price * data.quantity;
    });
    return formatCurrency(totalSum);
  }
  useEffect(() => {
    let totalPrice = calculateTotalPrice(cartDatas);
    setTotalPrice(totalPrice);
  }, [cartDatas]);

  useEffect(() => {
    toggleBodyOverflow(!showSearchBar);
  }, [!showSearchBar]);

  return (
    <div className="flex bg-white py-3 max-md:py-1 ">
      <div className="container flex gap-[10px] relative z-[1] items-center justify-between">
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="text-[34px] hidden max-md:block relative z-[1] "
        >
          {isOpen ? <IoMdClose /> : <IoMdMenu />}
        </button>

        <Link
          to="/"
          onClick={() => scrollTo(0, 0)}
          className="max-w-[160px] relative z-[1] "
        >
          <img src={websiteLogo} alt="Soft Burger Logo" />
        </Link>
        <form
          className={`flex shadow rounded-[32px] overflow-hidden text-[15px] max-lg:text-[13px] max-md:text-[16px] font-semibold max-w-[500px] flex-grow pr-[16px] max-md:pr-[10px] items-center transition-all justify-between max-md:fixed duration-500 bg-white  max-md:rounded-none max-md:w-full max-md:max-w-[90%] left-0 right-0 mx-auto max-md:top-[20%] z-[2] ${
            showSearchBar
              ? "translate-y-[20%] max-md:opacity-1"
              : "max-md:translate-y-0 max-md:opacity-0 max-md:pointer-events-none"
          }`}
        >
          <input
            type="text"
            placeholder="Qidiruv..."
            className="outline-none text-black rounded-[32px] bg-transparent w-full p-[8px_16px]"
          />
          <button type="submit">
            <IoIosSearch className="text-[20px] max-lg:text-[18px] max-md:text-[30px] text-black" />
          </button>
        </form>
        <div className="flex gap-[10px] items-center cursor-pointer max-md:hidden">
          <HeaderLink to={"/menyu"}>Menyu</HeaderLink>
          <HeaderLink to={"/aksiyalar"}>Aksiyalar</HeaderLink>
          <HeaderLink to={"/kontaktlar"}>Kontaktlar</HeaderLink>
          <NavLink
            className={({ isActive }) => {
              return `shadow p-[8px_16px] rounded-[32px] transition-all duration-300 ease-in-out text-white flex items-center gap-2 text-[15px] lg:text-[13px] slg:text-[11px] font-semibold bg-color`;
            }}
            to={"/cart"}
          >
            <FaShoppingBasket className="xl:text-[18px] lg:text-[16px] text-[14px]" />
            <div className="flex gap-1 justify-center">
              <p className="whitespace-nowrap">{totalPrice}</p>
              <span>SUM</span>
            </div>
          </NavLink>
        </div>
        <button
          onClick={() => setShowSearchBar((prev) => !prev)}
          className="text-[30px] hidden max-md:block relative"
        >
          <IoIosSearch />
        </button>
        <div
          onClick={() => setShowSearchBar(false)}
          className={`${
            showSearchBar
              ? "opacity-1 transition-opacity"
              : "delay-300 opacity-0 pointer-events-none"
          } fixed inset-0 bg-[rgba(0,0,0,50%)] backdrop-blur-sm h-[100vh] z-[1]`}
        ></div>
      </div>
    </div>
  );
}

export default HeaderBottom;
