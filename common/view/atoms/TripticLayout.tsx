import { ReactNode } from "react";

interface TripticLayoutProps {
  children: ReactNode;
  left?: ReactNode;
  right?: ReactNode;
}

const TripticLayout = ({
  children,
  left,
  right,
}: TripticLayoutProps): JSX.Element => (
  <div className="flex space-x-4">
    {left && <div className="flex-none w-40">{left}</div>}
    <div className="flex-1">{children}</div>
    {right && <div className="flex-none w-40">{right}</div>}
  </div>
);

export default TripticLayout;
