import {
    FaClock,
    FaInstagram,
    FaYoutube,
    FaLocationDot,
    FaTelegram,
    FaPhone,
  } from "react-icons/fa6";
  import { Link } from "react-router-dom";
  import SocialIcon from "../../ui/SocialIcon.jsx";
  
  function HeaderTop({ setShowPhoneCall }) {
    return (
      <div className="header-top bg-light py-2 md:flex hidden">
        <div className="container flex justify-between">
          <div className="flex items-center gap-1">
            <SocialIcon
              link={"http://t.me/jizzax_Burger_976424742"}
              Icon={FaTelegram}
            />
            <SocialIcon
              link={
                "https://www.instagram.com/jizzax_burger?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              }
              Icon={FaInstagram}
            />
            <SocialIcon
              link={"http://t.me/jizzax_Burger_976424742"}
              Icon={FaYoutube}
            />
          </div>
          <div className="flex items-center lg:gap-[30px] gap-[20px]">
            <div className="flex items-center gap-2">
              <FaLocationDot className="xl:text-[17px] text-[15px] text-black lg:text-[13px]" />
              <Link
                target="_blank"
                to="https://www.google.com/maps/place/Wedding+MEDIA/@40.1519635,67.8230664,85m/data=!3m1!1e3!4m6!3m5!1s0x38b29692c94303ad:0x1b0c25f766e7353f!8m2!3d40.1520965!4d67.8229926!16s%2Fg%2F11c0x8_1d8?entry=ttu&g_ep=EgoyMDI0MTExOC4wIKXMDSoASAFQAw%3D%3D"
                className="lg:text-[13px] text-black text-[11px] font-semibold"
              >
                O'rda bog'i yonida, Alibazar ro'parasi
              </Link>
            </div>
            <div className="flex items-center gap-2">
              <FaPhone className="xl:text-[17px] lg:text-[15px] text-black text-[13px]" />
              <Link
                target="_blank"
                to="tel:+998995536939"
                className=" lg:text-[13px] text-black text-[11px] font-semibold"
              >
                +998 99 553 69 39
              </Link>
            </div>
            <div className="flex items-center gap-2">
              <FaClock className="text-[17px] lg:text-[15px] text-black slg:text-[13px]" />
              <span className="lg:text-[13px] text-black text-[11px] font-semibold">
                Dush-Juma 24/7{" "}
              </span>
            </div>
          </div>
          <button
            onClick={() => setShowPhoneCall(true)}
            className="bg-color xl:text-[15px] hidden xl:flex text-[13px] cursor-pointer text-white p-[8px_16px] font-semibold rounded-[32px] transition-all duration-300 ease-in-out focus:outline-none"
          >
            Menga qo'ng'iroq qiling!
          </button>
        </div>
      </div>
    );
  }
  
  export default HeaderTop;
  