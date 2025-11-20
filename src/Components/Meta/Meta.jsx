// src/Components/Meta.jsx
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router"; // <-- IMPORT THIS

const Meta = ({ title, description, keywords, url, image }) => {
  const location = useLocation(); // <-- CALL THIS HOOK
  const baseUrl = "https://innliv.com"; // <-- DEFINE BASE URL

  const defaultTitle = "Innliv Free Gaming Online";
  const defaultDescription =
    "We are obsessed with the best free online games obviously, respect the daylights out of our players, and yeah, we are not shy about ruffling a few feathers if that means making something truly epic.";
  const defaultKeywords =
    "free online games,free online games for kids to play,free online games for pc,play free games online without downloading";

  // 1. Calculate the canonical URL dynamically.
  // This uses the current route (e.g., /privacy-policy) and strips off any parameters
  // or potential trailing slashes if they were present in the path.
  const canonicalUrl = `${baseUrl}${location.pathname.replace(/\/$/, "")}`;

  // 2. Use the dynamically calculated URL if the 'url' prop is not passed.
  // The 'url' prop is included for backward compatibility, but we prioritize the calculated one.
  const finalCanonicalUrl = url || canonicalUrl;

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
      {/* Use the dynamically generated URL for OG */}
      <meta property="og:url" content={finalCanonicalUrl} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title || defaultTitle} />
      <meta
        name="twitter:description"
        content={description || defaultDescription}
      />
      <meta name="twitter:image" content={image} />

      {/* Canonical: Use the dynamically generated URL */}
      <link rel="canonical" href={finalCanonicalUrl} />
    </Helmet>
  );
};

export default Meta;
