import cn from "@/utils/cn";
import React from "react";

function Button({ ...props }) {
  return (
    <button
      className={cn(
        "rounded-sm bg-white text-black hover:shadow-[0_0_30px] shadow-cyan-900 hover:shadow-cyan-800 px-9 py-2 transition-all duration-300 ease-in-out hover:bg-cyan-500 hover:text-white",
        props.className,
      )}
      {...props}
    >
      {props.children}
    </button>
  );
}

export default Button;
