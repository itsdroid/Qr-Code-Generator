📱 Simple QR Code Generator
Hi there! 👋 This is a lightweight web tool I built to generate and download QR codes instantly. It takes whatever text or URL you type and converts it into a scannable image using the QR Server API.

✨ Features
Instant Generation: Type text, hit the button, get a QR code.

Loading State: Shows a loading GIF while the QR code is being fetched (so you know it's working!).

Direct Download: Includes a "Download" button that saves the QR code directly to your device as a .png.

Smart Filenaming: Every download gets a random ID (e.g., Myqr4592.png) so you don't accidentally overwrite your previous files.

🛠️ How it Works
This project is built with Vanilla JavaScript (no heavy frameworks). Here is the logic behind the two main functions:

1. Generating (GenerateQr)
Instead of generating the QR code pixel-by-pixel, I'm using the free QR Server API.

When you click generate, the app temporarily shows a loading.gif.

It waits 2 seconds (to ensure the transition looks smooth) and then swaps the loading GIF with the actual API URL containing your text.

The "Generate" button is swapped out for the "Options/Download" menu.

2. Downloading (DownloadQr)
Downloading images from a different server (Cross-Origin) can be tricky in browsers. I solved this using the fetch API:

The code fetches the image URL as a data Blob.

It creates a temporary invisible link in the browser memory.

It automatically clicks that link to trigger the download dialog.

🚀 How to Run It
Since this is just HTML, CSS, and JS, you don't need to install Node.js or any packages.

Download the files.

Make sure you have a loading.gif in the folder (or the loading animation won't show!).

Open index.html in your browser.

Type something and test it out!

