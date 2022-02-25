import HeaderLayout from "@Components/Layout/Components/Header";
import FooterLayout from "@Components/Layout/Components/Footer";
import NextHeadComponent from "@Components/Layout/Components/Next/Head";
import useRouterScroll from "@Components/Hooks/useScrollTopPage";

export interface LayoutProps {
  children: any;
  pageProps: any;
  isNotFoundPage?: any;
}

const MainLayout: React.FunctionComponent<LayoutProps> = props => {
  useRouterScroll();
  const { children, pageProps } = props;
  const { meta } = pageProps;
  return (
    <div className="flex flex-col h-screen justify-between">
      <NextHeadComponent meta={meta} />
      <HeaderLayout {...pageProps} />
      <main className="lg:w-[1230px] lg:mx-auto h-screen">{children}</main>
      <FooterLayout {...pageProps} />
    </div>
  );
};

export { MainLayout };
