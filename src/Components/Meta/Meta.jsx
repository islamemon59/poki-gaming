// src/Components/Meta.jsx
import { Helmet } from "react-helmet-async";

const Meta = ({ title, description, keywords, url, image }) => {
  const defaultTitle = "Innliv Free Gaming Online";
  const defaultDescription =
    "We are obsessed with the best free online games obviously, respect the daylights out of our players, and yeah, we are not shy about ruffling a few feathers if that means making something truly epic.";
  const defaultKeywords =
    "free online games,free online games for kids to play,free online games for pc,play free games online without downloading";

  return (
    <Helmet>
      {/* Title */}
      <title>{title || defaultTitle}</title>

      {/* Meta description */}
      <meta name="description" content={description || defaultDescription} />

      {/* Keywords */}
      <meta name="keywords" content={keywords || defaultKeywords} />

      {/* Open Graph / Social Meta */}
      <meta property="og:title" content={title || defaultTitle} />
      <meta
        property="og:description"
        content={description || defaultDescription}
      />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title || defaultTitle} />
      <meta
        name="twitter:description"
        content={description || defaultDescription}
      />
      <meta name="twitter:image" content={image} />

      {/* Canonical */}
      <link rel="canonical" href={url} />
    </Helmet>
  );
};

export default Meta;
