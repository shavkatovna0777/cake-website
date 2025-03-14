export function Button({ children, className = "", ...props }) {
    return (
      <button className={`px-4 py-2 text-[#8BC34A] font-medium rounded ${className}`} {...props}>
        {children}
      </button>
    );
  }

  