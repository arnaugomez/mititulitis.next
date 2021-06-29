import { ReactNode } from "react";
import Header from "./Header";

interface CommonUIProps {
  children: ReactNode;
}

const CommonUI = ({ children }: CommonUIProps): JSX.Element => (
  <>
    <Header />
    {children}
  </>
);

export default CommonUI;
