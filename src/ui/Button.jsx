import { Link } from "react-router-dom";

export function Button({ children, className = "", ...props }) {
    return (
      <Link className={`px-4 py-2 text-[#8BC34A] font-medium rounded ${className}`} {...props}>
        {children}
      </Link>
    );
  }

  