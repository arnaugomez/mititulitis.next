import { RecoilRoot } from "recoil";
import "../styles/globals.css";
import AxiosProvider from "../common/data/AxiosProvider";

function MyApp({ Component, pageProps }) {
  return (
    <AxiosProvider>
      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
    </AxiosProvider>
  );
}

export default MyApp;
