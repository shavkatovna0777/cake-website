import { Link } from "react-router-dom";

function SocialIcon({ link, Icon }) {
  return (
    <Link
      target="_blank"
      className="w-[30px] grid place-items-center hover:shadow-lg rounded-full transition-all duration-300 ease-in-out h-[30px]"
      to={link}
    >
      <Icon className="text-black text-[20px] font-bold" />
    </Link>
  );
}

export default SocialIcon;
