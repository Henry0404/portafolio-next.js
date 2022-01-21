import Navbar from "./Navbar";
import Head from "next/head";
import { useEffect } from "react";
import { useRouter } from "next/router";
import NProgress from "nprogress";
import Classnames from "classnames";
const Layout = ({ children, title, footer = true, dark = false }) => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      console.log(url);
      NProgress.start();
    };
    router.events.on("routeChangeStart", handleRouteChange);
    router.events.on("routerChangeComplete", () => NProgress.done());
    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, []);
  return (
    <div className={Classnames({ "bg-dark": dark })}>
      <Head>
        <title>My portafolio</title>
      </Head>
      <Navbar />
      <main className="container py-4">
        {title && (
          <hi
            className={Classnames("text-center", {
              "text-light": dark,
              "bg-light": !dark,
            })}
          >
            {title}
          </hi>
        )}
        {children}
      </main>

      {footer && (
        <footer className="bg-dark text-light text-center">
          <div className="container p-4">
            <h1>&copy; Henry Romero Portafolio</h1>
            <p>2000 - {new Date().getFullYear()}</p>
            <p>All Rights Reserverd</p>
          </div>
        </footer>
      )}
    </div>
  );
};

export default Layout;
