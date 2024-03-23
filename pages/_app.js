import { Provider } from "react-redux";
import Navbar from "../components/Navbar";
import store from "../redux/store";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const currentUrl = router.asPath;

  return (
    <Provider store={store}>
      <div className="wrapper">
        {currentUrl === '/login' ? (
          <Component {...pageProps} />
        ) : (
          <div>
            <Navbar />
            <Component {...pageProps} />
          </div>
        )}
      </div>
    </Provider>
  );
}

export default MyApp;
