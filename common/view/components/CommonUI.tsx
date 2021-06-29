import { ReactNode } from "react";
import Header from "./Header";

interface CommonUIProps {
  children: ReactNode;
}

const CommonUI = ({ children }: CommonUIProps): JSX.Element => (
  <>
    <Header />
    <main className="p-4 bg-gradient-to-bl from-stone-100 to-stone-200">
      {children}
    </main>
  </>
);

export default CommonUI;
