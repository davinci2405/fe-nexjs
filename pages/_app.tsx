// #region Global Imports
import App, { AppInitialProps, AppContext } from "next/app";
import { Router } from "next/router";
import { PageConst } from "server/pages";
import Head from "next/head";
import NProgress from "nprogress";

// #Css
import "./main.scss";
import "./styles.css";
// #Component
import { AppWithStore } from "@Interfaces";
import { FeMiddleware } from "@Services";
// #NProgress
NProgress.configure({ easing: "ease", speed: 100, showSpinner: false });
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", url => {
  NProgress.done();
  // Todo
  setTimeout(() => {}, 0);
});

class WebApp extends App<any, AppWithStore> {
  static async getInitialProps({ Component, ctx }: AppContext): Promise<AppInitialProps> {
    const pageProps = await FeMiddleware(ctx, Component.getInitialProps, PageConst, Router, true);
    return { pageProps };
  }

  private static WrapLayout(Component, pageProps) {
    const getLayout = Component.getLayout ? Component.getLayout : NullComponent => <>{NullComponent}</>;
    return getLayout(<Component {...pageProps} />);
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Head>
          <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1.0, user-scalable=no" />
        </Head>
        {WebApp.WrapLayout(Component, pageProps)}
      </>
    );
  }
}

export default WebApp;
