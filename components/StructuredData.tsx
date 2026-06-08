export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "VamVam Uniport",
    url: "https://vamvam-uniport.com",
    logo: "https://vamvam-uniport.com/images/logo.png",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "",
      contactType: "",
      email: "",
      availableLanguage: ["English", "French"],
    },
    sameAs: [
      "https://facebook.com/vamvamuniport",
      "https://twitter.com/vamvam_uniport",
      "https://linkedin.com/company/vamvam-uniport",
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: "Bunduma",
      addressLocality: "Buea",
      addressCountry: "CM",
    },
  };

  const softwareAppSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "VamVam Uniport",
    applicationCategory: "EducationalApplication",
    operatingSystem: "Web, iOS, Android",
    description:
      "Comprehensive school management platform for higher institutions.",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "XAF",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      ratingCount: "150",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(softwareAppSchema),
        }}
      />
    </>
  );
}