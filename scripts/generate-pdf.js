
const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

(async () => {
    const outputPath = path.resolve(__dirname, '../public/Nutritionsays-Ebook-v1.pdf');
    const url = 'http://localhost:3000'; // Ensure your app is running

    console.log(`Generating PDF from ${url}...`);

    const browser = await puppeteer.launch({
        headless: "new",
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    const page = await browser.newPage();

    // Set viewport to A4 dimensions roughly at 96dpi, or just responsive
    await page.setViewport({ width: 1240, height: 1754, deviceScaleFactor: 2 });

    await page.goto(url, { waitUntil: 'networkidle0', timeout: 60000 });

    // Inject CSS to ensure print layout is respected perfectly if needed
    // The @media print in global.css should handle it.

    await page.pdf({
        path: outputPath,
        format: 'A4',
        printBackground: true,
        margin: {
            top: '0mm',
            right: '0mm',
            bottom: '0mm',
            left: '0mm'
        },
        displayHeaderFooter: false,
    });

    await browser.close();
    console.log(`PDF generated at: ${outputPath}`);
})();
