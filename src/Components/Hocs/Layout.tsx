import { MainLayout } from "@Components/Layout";
/**
 * Dùng chung với getInitialProps để custom Layout
 */
export const WithMainLayout = (Component): any => {
  const { props } = Component;
  return <MainLayout pageProps={props}>{Component}</MainLayout>;
};
