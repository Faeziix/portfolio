import cn from "@/utils/cn";
import React from "react";

type ButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

function Button({ ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={cn(
        "rounded-sm bg-white px-9 py-2 text-black shadow-cyan-900 transition-all duration-300 ease-in-out hover:bg-cyan-500 hover:text-white hover:shadow-[0_0_30px] hover:shadow-cyan-800",
        props.className,
      )}
    >
      {props.children}
    </button>
  );
}

export default Button;
