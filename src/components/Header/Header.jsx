import { useEffect, useState } from "react";
import PhoneCall from "../PhoneCall/PhoneCall";
// import HeaderTop from "./HeaderTop";
// import HeaderBottom from "./HeaderBottom";

import Navbar from "../Navbar/Navbar.jsx";
import HeaderBottom from "./HeaderBottom.jsx";
import HeaderTop from "./HeaderTop.jsx";
import { toggleBodyOverflow } from "../../utils/toggleBodyOverflow.js";

function Header() {
  const [showPhoneCall, setShowPhoneCall] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    toggleBodyOverflow(!showPhoneCall);
  }, [!showPhoneCall]);
  return (
    <header className="sticky z-[111111] top-0 ">
      <HeaderTop setShowPhoneCall={setShowPhoneCall} />
      <HeaderBottom isOpen={isOpen} setIsOpen={setIsOpen} />
      <hr className="border-[rgb(238,238,238)]" />
      <Navbar isOpen={isOpen} toggleMenu={toggleMenu} />
      {showPhoneCall && <PhoneCall setShowPhoneCall={setShowPhoneCall} />}
    </header>
  );
}

export default Header;
