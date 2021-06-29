import { RecoilRoot } from "recoil";
import "../styles/globals.css";
import AxiosProvider from "../common/data/AxiosProvider";
import CommonUI from "../common/view/components/CommonUI";

function MyApp({ Component, pageProps }) {
  return (
    <AxiosProvider>
      <RecoilRoot>
        <CommonUI>
          <Component {...pageProps} />
        </CommonUI>
      </RecoilRoot>
    </AxiosProvider>
  );
}

export default MyApp;
