import { ReactNode } from "react";
import cn from "classnames";

interface MaxWidthProps {
  children: ReactNode;
  className?: string;
}

const MaxWidth = ({ className, ...props }: MaxWidthProps): JSX.Element => (
  <div className={cn("max-w-screen-lg mx-auto", className)} {...props} />
);

export default MaxWidth;
