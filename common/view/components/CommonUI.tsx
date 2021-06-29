import { ReactNode } from "react";
import Header from "./Header";

interface CommonUIProps {
  children: ReactNode;
}

const CommonUI = ({ children }: CommonUIProps): JSX.Element => (
  <>
    <Header />
    <main className="p-4">{children}</main>
  </>
);

export default CommonUI;
