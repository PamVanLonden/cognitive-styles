const sitemap = require('sitemap');
    const hostname = 'https://cognitive-styles.onrender.com';

    const urls = [
      { url: '/', changefreq: 'daily', priority: 1 },
      { url: '/about', changefreq: 'monthly', priority: 0.8 },
      { url: '/personasPage', changefreq: 'monthly', priority: 0.8 },
      { url: '/facetsPage', changefreq: 'monthly', priority: 0.8 },
      { url: '/self-efficacy-survey', changefreq: 'monthly', priority: 0.8 },
      { url: '/discussion-prompts', changefreq: 'monthly', priority: 0.8 }
      // Add additional pages here
    ];

    const sitemapInstance = sitemap.createSitemap({
      hostname,
      urls,
    });
  
    const fs = require('fs');

    // Write sitemap to public directory
    fs.writeFileSync('./public/sitemap.xml', sitemapInstance.toString());
  