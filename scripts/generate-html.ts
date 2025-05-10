import { siteConfig } from '../config';
import fs from 'fs';
import path from 'path';

const generateHTML = () => {
  const html = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/KingPortfolio/favicon.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="${siteConfig.description}" />
    <meta name="author" content="${siteConfig.author}" />
    <title>${siteConfig.title}</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet">
    <script type="module" crossorigin src="/KingPortfolio/assets/index-fth2OuIn.js"></script>
    <link rel="stylesheet" crossorigin href="/KingPortfolio/assets/index-Z8hi_5yV.css">
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/KingPortfolio/src/main.tsx"></script>
  </body>
</html>`;

  const outputPath = './index.html';
  fs.writeFileSync(outputPath, html);
  console.log('index.html generated successfully!');
};

generateHTML(); 