import { getPathUrl } from "@Helper";

export const getMeta = (ctx: any, pages: any) => {
  const { asPath }: any = ctx;
  // eslint-disable-next-line no-restricted-syntax
  for (const page in pages) {
    if (Object.prototype.hasOwnProperty.call(pages, page) && pages[page].url === getPathUrl(asPath)) {
      return pages[page];
    }
  }
  return pages.trang_chu;
};
