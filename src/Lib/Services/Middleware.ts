import { FECheck } from "@Services";
import { getMeta } from "@Definitions";

export const FeMiddleware = async (ctx?: any, getInitialProps?: any, pages?: any, router?: any, isSE = false) => {
    const pageProps: any = getInitialProps ? (await getInitialProps(ctx)) || {} : {};
    const meta = getMeta(ctx, pages);
    meta.asPath = ctx.asPath;
    pageProps.meta = { ...meta, ...pageProps.meta };
    pageProps.isMobile = FECheck.isMobile(ctx);
    return pageProps;
}