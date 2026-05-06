import { Helmet } from "react-helmet-async";
import { createPageTitle, createPageDescription, SITE_URL, SITE_IMAGE } from "../../utils/seo";

interface PageSEOProps {
  title: string;
  description?: string;
  image?: string;
  url?: string;
}

const PageSEO = ({ title, description, image, url }: PageSEOProps) => {
  const pageTitle = createPageTitle(title);
  const pageDescription = createPageDescription(description);
  
  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:image" content={image || SITE_IMAGE} />
      <meta property="og:url" content={url || SITE_URL} />
    </Helmet>
  );
};

export default PageSEO;