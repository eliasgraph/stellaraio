import { useEffect } from "react";
import TagManager from "react-gtm-module";
import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    TagManager.initialize({ gtmId: "GTM-MMVSWXQ" });
  }, []);

  const getLayouts = () => {
    return (
      <div>
        {/* <div>Header</div> */}
        <Component {...pageProps} />
        {/* <div>Footer</div> */}
      </div>
    );
  };
  return getLayouts();
}

export default MyApp;
