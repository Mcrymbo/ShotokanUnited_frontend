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
            "https://web.facebook.com/profile.php?id=61550226856236",
            "https://www.instagram.com/shotokan_united_kenya/p/C_pEpWyIp9k/?img_index=1",
            "https://twitter.com/ShotokanKenya",
            "https://www.youtube.com/channel/UCn2J9fczXE9btjHaMJfsN_g"
          ]
        })}
      </script>
    </Helmet>
  );
};

export default SeoOptimizer;