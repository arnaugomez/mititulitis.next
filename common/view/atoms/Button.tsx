import { ReactNode } from "react";
import cn from "classnames";

const variants = {
  primary: "text-white bg-stone-700 hover:bg-stone-800",
  "secondary-stone":
    "text-stone-700 border border-stone bg-stone-100 hover:bg-stone-200",
  white: "bg-white hover:bg-stone-100",
  "secondary-white":
    "text-white border border-white bg-transparent hover:bg-stone-100 hover:text-stone",
};

interface ButtonProps {
  children: ReactNode;
  variant?: keyof typeof variants;
  className?: string;
}

const Button = ({
  children,
  className,
  variant = "primary",
}: ButtonProps): JSX.Element => (
  <button
    className={cn(
      "px-4 py-2 rounded bold flex justify-center items-center",
      variants[variant],
      className
    )}
  >
    {children}
  </button>
);

export default Button;
