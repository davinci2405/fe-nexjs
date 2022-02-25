import NextHead from "next/head";

const NextHeadComponent = props => {
  const { meta } = props;
  if (!meta) {
    return null;
  }
  const image = meta?.image || `/img/logo.webp`;
  return (
    <NextHead>
      <title>{meta?.title || "Lotus Cosmetics"}</title>
      <meta property="og:image" content={image} />
    </NextHead>
  );
};

export default NextHeadComponent;
