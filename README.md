# F1 2026 Season Overview

A premium, interactive web experience showcasing the fictional 2026 FIA Formula One World Championship season. This project features dynamic UI interactions, beautiful animations, and live data integration, all built with a robust structural design using HTML, CSS, and Vanilla JavaScript.

## Features
- **Immersive Parallax & Scroll Animations:** Fluid entrance effects and cursor-aware 3D globe parallax for an ultra-premium feel.
- **Dynamic Live Standings:** Integrates with the Jolpica F1 API to display live, up-to-date points for Formula 1 drivers.
- **Interactive Calendar & Regulations:** Beautifully designed grid layouts with interactive car specifications and tracks.
- **Custom Fonts & Official Branding:** Leverages modern typography (`Outfit`, `Space Mono`) and Formula 1 trademark representations to deliver an authentic broadcast aesthetic.

## File Structure
- `index.html` - The main entry point structure of the website.
- `styles.css` - Extracted custom modern styling focusing on CSS Grids, custom variables, and keyframe animations.
- `script.js` - Contains the logic controlling API fetches, intersection observers for scroll animations, 3D mouse parallax tracking, and more.
- `assets/` - Contains the premium WebP assets (e.g. 2026 Livery).

## How to Run

Because this project uses vanilla web technologies and fetches data from an external API, you will need to serve it over a local web server to avoid CORS/Fetch errors that happen when simply opening the HTML file directly in the browser via the `file://` protocol.

**Using Node.js (Recommended)**
If you have Node installed, you can quickly spin up a server using `http-server`:
```bash
npx -y http-server ./
```
Then navigate to `http://localhost:8080/` in your browser.

**Using Python**
If you have Python installed, you can serve the directory natively:
```bash
python3 -m http.server
```
Then navigate to `http://localhost:8000/` in your browser.

## Developer Credits
Designed and Developed by **Suraj Kumar**.

*(Note: Data, Formula 1 Trademarks, and driver representations are copyrighted by their respective owners).*
