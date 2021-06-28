import { ReactNode, useEffect, useState } from "react";
import { retrieveAuthToken } from "./axiosClient";

const AxiosProvider = ({ children }: { children: ReactNode }): JSX.Element => {
  const [initialized, setInitialized] = useState<boolean>(false);
  useEffect(() => {
    retrieveAuthToken();
    setInitialized(true);
  }, []);

  // TODO: display loading screen
  return initialized ? <>{children}</> : null;
};

export default AxiosProvider;
