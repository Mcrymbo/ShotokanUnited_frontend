import { Helmet } from 'react-helmet-async';

const SeoOptimizer = () => {
  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "http://schema.org",
          "@type": "Organization",
          "name": "Shotokan United Kenya",
          "url": "https://www.shotokanunitedkenya.org",
          "sameAs": [
            "https://www.facebook.com/ShotokanUnitedKenya",
            "https://www.instagram.com/ShotokanUnitedKenya",
            "https://twitter.com/ShotokanKenya",
            "https://www.youtube.com/channel/UCxXXXXXXXX"
          ]
        })}
      </script>
    </Helmet>
  );
};

export default SeoOptimizer;