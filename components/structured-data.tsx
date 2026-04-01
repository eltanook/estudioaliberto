export function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "name": "Estudio Jurídico Aliberto",
    "image": "https://estudioaliberto.com.ar/LOGO_ALIBERTO.png",
    "@id": "https://estudioaliberto.com.ar",
    "url": "https://estudioaliberto.com.ar",
    "telephone": "+5491130087678",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Buenos Aires",
      "addressRegion": "CABA",
      "addressCountry": "AR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -34.6037,
      "longitude": -58.3816
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "09:00",
      "closes": "20:00"
    },
    "sameAs": [
      "https://facebook.com/estudioaliberto",
      "https://instagram.com/estudioaliberto"
    ]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}
