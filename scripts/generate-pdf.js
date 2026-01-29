
const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

(async () => {
    const outputPath = path.resolve(__dirname, '../public/Nutritionsays-Ebook-v1.pdf');
    // Updated port to 3005 to avoid conflicts
    const url = 'http://localhost:3005';

    console.log(`Generating PDF from ${url}...`);

    try {
        const browser = await puppeteer.launch({
            headless: "new",
            args: ['--no-sandbox', '--disable-setuid-sandbox']
        });

        const page = await browser.newPage();

        await page.setViewport({ width: 1240, height: 1754, deviceScaleFactor: 2 });

        // Retry connection logic
        let connected = false;
        for (let i = 0; i < 5; i++) {
            try {
                await page.goto(url, { waitUntil: 'networkidle0', timeout: 60000 });
                connected = true;
                break;
            } catch (e) {
                console.log(`Attempt ${i + 1}: Waiting for server...`);
                await new Promise(r => setTimeout(r, 2000));
            }
        }

        if (!connected) throw new Error("Could not connect to server at " + url);

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
    } catch (error) {
        console.error("PDF Generation Failed:", error);
        process.exit(1);
    }
})();
