// https://chatgpt.com/share/6712c5c7-ebd0-8008-b829-15e1a8ce2398
import Sitemap from 'react-router-sitemap-generator'; // ES module import
import path from 'path';
import router from './src/App'; // Update this based on where your routes are

function generateSitemap() {
  const sitemap = new Sitemap(router)
    .build('https://cognitive-styles.onrender.com')
    .save(path.resolve('./public/sitemap.xml'));
}

generateSitemap();

// https://www.npmjs.com/package/sitemap
// const express = require('express')
// const { SitemapStream, streamToPromise } = require('sitemap')
// const { createGzip } = require('zlib')
// const { Readable } = require('stream')

// const app = express()
// let sitemap

// app.get('/sitemap.xml', function(req, res) {
//   res.header('Content-Type', 'application/xml');
//   res.header('Content-Encoding', 'gzip');
//   // if we have a cached entry send it
//   if (sitemap) {
//     res.send(sitemap)
//     return
//   }

//   try {
//     const smStream = new SitemapStream({ hostname: 'https://cognitive-styles.onrender.com/' })
//     const pipeline = smStream.pipe(createGzip())

//     // pipe your entries or directly write them.
//     smStream.write({ url: '/',  changefreq: 'weekly', priority: 0.3 })
//     smStream.write({ url: '/about/',  changefreq: 'monthly',  priority: 0.7 })
//     smStream.write({ url: '/contact/',  changefreq: 'monthly',  priority: 0.7 })

//     smStream.write({ url: '/personasPage/', changefreq: 'monthly',  priority: 0.7 }) 
//     smStream.write({ url: '/facetsPage/', changefreq: 'monthly',  priority: 0.7 }) 
//     smStream.write({ url: '/self-efficacy-survey/', changefreq: 'monthly',  priority: 0.7 }) 
//     smStream.write({ url: '/discussion-prompts/', changefreq: 'monthly',  priority: 0.7})
//     /* or use
//     Readable.from([{url: '/page-1'}...]).pipe(smStream)
//     if you are looking to avoid writing your own loop.
//     */

//     // cache the response
//     streamToPromise(pipeline).then(sm => sitemap = sm)
//     // make sure to attach a write stream such as streamToPromise before ending
//     smStream.end()
//     // stream write the response
//     pipeline.pipe(res).on('error', (e) => {throw e})
//   } catch (e) {
//     console.error(e)
//     res.status(500).end()
//   }
// })

// app.listen(3000, () => {
//   console.log('listening')
// });

// https://www.3braintechnologies.com/how-to-generate-a-sitemap-for-your-create-react-app-web-application.html
// const sitemap = require('sitemap');
//     const hostname = 'https://cognitive-styles.onrender.com';

//     const urls = [
//       { url: '/', changefreq: 'daily', priority: 1 },
//       { url: '/about', changefreq: 'monthly', priority: 0.8 },
//       { url: '/personasPage', changefreq: 'monthly', priority: 0.8 },
//       { url: '/facetsPage', changefreq: 'monthly', priority: 0.8 },
//       { url: '/self-efficacy-survey', changefreq: 'monthly', priority: 0.8 },
//       { url: '/discussion-prompts', changefreq: 'monthly', priority: 0.8 }
//       // Add additional pages here
//     ];

//     const sitemapInstance = sitemap.createSitemap({
//       hostname,
//       urls,
//     });
  
//     const fs = require('fs');

//     // Write sitemap to public directory
//     fs.writeFileSync('./public/sitemap.xml', sitemapInstance.toString());
  