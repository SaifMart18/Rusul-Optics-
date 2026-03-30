import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
}

export default function SEO({ 
  title = "Rusul Optics | عيادة بصريات فاخرة", 
  description = "Rusul Optics - وجهتكم الأولى لأرقى العدسات اللاصقة الطبية والتجميلية والماركات العالمية في بغداد.",
  keywords = "عدسات لاصقة, بصريات, نظارات, عدسات طبية, عدسات تجميلية, Desio, Alcon, Wolf Vision, Rusul Optics",
  image = "/images/eye1.jpg",
  url = "https://rusul-optics.run.app"
}: SEOProps) {
  const siteTitle = "Rusul Optics";
  const fullTitle = title === siteTitle ? title : `${title} | ${siteTitle}`;

  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
      
      {/* Canonical Link */}
      <link rel="canonical" href={url} />
    </Helmet>
  );
}
