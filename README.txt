================================================================================
SILHOUETTE - LUXURY FRAGRANCE BOUTIQUE
Pure HTML/CSS/JavaScript Website
================================================================================

PROJECT STRUCTURE
================================================================================

silhouette-html/
├── index.html              (Home page)
├── collection.html         (The Collection - all 12 products)
├── about.html              (About SILHOUETTE)
├── contact.html            (Contact & Orders)
├── styles.css              (Shared stylesheet - all styling)
├── scripts.js              (Shared JavaScript - menu, filters, forms)
├── images/                 (Folder for product images)
│   ├── imaginari.jpg
│   ├── invicto.jpg
│   ├── brown-orchid.jpg
│   ├── million-royal.jpg
│   ├── intense-wayfarer.jpg
│   ├── venti.jpg
│   ├── delilah.jpg
│   ├── elysia.jpg
│   ├── pleasant.jpg
│   ├── mousuf.jpg
│   ├── dolores.jpg
│   └── classy.jpg
└── README.txt              (This file)

================================================================================
HOW TO ADD PRODUCT IMAGES
================================================================================

1. PREPARE YOUR IMAGES
   - Ensure all 12 product images are in JPG format
   - Use these exact filenames (case-sensitive):
     * imaginari.jpg
     * invicto.jpg
     * brown-orchid.jpg
     * million-royal.jpg
     * intense-wayfarer.jpg
     * venti.jpg
     * delilah.jpg
     * elysia.jpg
     * pleasant.jpg
     * mousuf.jpg
     * dolores.jpg
     * classy.jpg

2. PLACE IMAGES IN THE FOLDER
   - Copy all 12 JPG files into the "images/" folder
   - The images are already referenced in the HTML files with these exact filenames
   - No code changes needed - just drop the files in and the website will display them

3. VERIFY
   - Open index.html in a browser
   - Check that all product images display correctly
   - Test on mobile and desktop to ensure responsive display

================================================================================
HOW TO UPDATE A PRICE
================================================================================

Prices are displayed in two locations:

1. FEATURED PRODUCTS ON HOME PAGE (index.html)
   - Search for: <div class="product-price">R[AMOUNT]</div>
   - Find the product you want to update
   - Change the amount (e.g., R799 → R899)
   - Example: <div class="product-price">R899</div>

2. COLLECTION PAGE (collection.html)
   - Search for the product name in the HTML
   - Find the corresponding <div class="product-price">R[AMOUNT]</div>
   - Change the amount
   - Example: <div class="product-price">R899</div>

QUICK REFERENCE - CURRENT PRICES:
- Imaginari Jacques Yves: R549
- Invicto: R449
- Brown Orchid: R799
- Million Royal: R699
- Intense Wayfarer: R649
- Venti: R699
- Delilah Pour Femme: R549
- Elysia Marshmallow: R499
- Pleasant: R449
- Mousuf Wardi: R549
- Dolores Pour Femme: R549
- Classy: R599

================================================================================
HOW TO ADD A NEW PRODUCT TO THE COLLECTION
================================================================================

To add a new fragrance, follow these steps:

1. CREATE THE IMAGE
   - Prepare a JPG image of the fragrance
   - Use a descriptive filename (e.g., new-fragrance.jpg)
   - Place it in the images/ folder

2. ADD TO COLLECTION PAGE (collection.html)
   - Find the <div class="products-grid"> section
   - Copy an existing product card block (the entire <div class="product-card">...</div>)
   - Paste it before the closing </div> of the products-grid
   - Update the following fields:
     * src="images/new-fragrance.jpg" (your image filename)
     * alt="New Fragrance" (product name)
     * <div class="product-name">New Fragrance</div> (product name)
     * data-gender="masculine" or "feminine" or "unisex" (gender type)
     * <div class="product-gender">MASCULINE</div> (display gender)
     * <div class="product-hook">Your sensory description here.</div> (product hook)
     * <div class="product-price">R[PRICE]</div> (price)
     * onclick URL - update the product name in the WhatsApp link

3. EXAMPLE PRODUCT CARD:
   <div class="product-card" data-gender="masculine">
     <img src="images/new-fragrance.jpg" alt="New Fragrance" class="product-image">
     <div class="product-info">
       <div class="product-name">New Fragrance</div>
       <div class="product-gender">Masculine</div>
       <div class="product-hook">Your sensory description here.</div>
       <div class="product-price">R649</div>
       <button class="btn btn-secondary" onclick="window.location.href='https://wa.me/27785148634?text=Hi%20SILHOUETTE%2C%20I%27d%20like%20to%20order%20NEW%20FRAGRANCE'">Order via WhatsApp</button>
     </div>
   </div>

4. UPDATE THE WHATSAPP LINK
   - In the onclick attribute, replace "NEW%20FRAGRANCE" with your product name
   - Use %20 for spaces (URL encoding)
   - Example: "...I%27d%20like%20to%20order%20INTENSE%20WAYFARER"

5. (OPTIONAL) ADD TO HOME PAGE FEATURED SECTION
   - If you want the new product to appear on the home page featured section
   - Find the <div class="featured-grid"> in index.html
   - Add a copy of the product card (same format as above)

6. TEST
   - Open collection.html in a browser
   - Verify the new product appears in the grid
   - Test the WhatsApp button to ensure the link works
   - Test the filter buttons (ALL, MASCULINE, FEMININE) to ensure filtering works

================================================================================
FEATURES INCLUDED
================================================================================

✓ Responsive Mobile-First Design
  - Optimized for phones, tablets, and desktops
  - Touch-friendly buttons and navigation

✓ Hamburger Menu (Mobile)
  - Automatic hamburger menu on mobile devices
  - Full-screen navigation overlay
  - Closes when a link is clicked

✓ Product Filtering (Collection Page)
  - Filter by ALL, MASCULINE, FEMININE
  - Instant filtering with vanilla JavaScript
  - No page reload required

✓ Floating WhatsApp Button
  - Fixed position on every page (bottom-right)
  - Visible on all screen sizes
  - Links directly to WhatsApp with pre-filled message

✓ Email Signup
  - Newsletter subscription form on home page
  - Success message on submit
  - No backend required (stores locally)

✓ Contact Form
  - Simple contact form on contact page
  - Success message on submit
  - No backend required

✓ FAQ Accordion
  - Expandable/collapsible FAQ items
  - Smooth open/close animation
  - Only one item open at a time

✓ Smooth Animations
  - Subtle fade-in effects on scroll
  - Hover states on buttons and links
  - Smooth transitions throughout

================================================================================
BRAND COLORS & STYLING
================================================================================

Color Palette:
- Navy: #0D1B2A (primary dark background)
- Navy Dark: #0A0A0F (secondary dark background)
- Off-white: #FAFAF5 (light background)
- Gold: #C9A84C (accent color - used for borders, hover states, prices)
- Text Light: #CCCCCC (text on dark backgrounds)
- Text Dark: #333333 (text on light backgrounds)

Typography:
- Headings: Georgia serif (elegant, editorial)
- Body: Arial sans-serif (clean, readable)
- Letter spacing: Used throughout for luxury feel

Design Principles:
- Minimal, dark, cinematic aesthetic
- No bright colors, gradients, or drop shadows
- Thin gold lines used as section dividers
- Subtle animations and transitions only

================================================================================
WHATSAPP INTEGRATION
================================================================================

All product buttons link to WhatsApp with pre-filled messages.

Format: https://wa.me/27785148634?text=Hi%20SILHOUETTE%2C%20I%27d%20like%20to%20order%20[PRODUCT]

To customize the message:
1. Find the onclick attribute in a product button
2. Edit the text parameter (after ?text=)
3. Use %20 for spaces
4. Use %27 for apostrophes
5. Example: "Hi%20SILHOUETTE%2C%20I%27d%20like%20to%20order%20BROWN%20ORCHID"

================================================================================
EMAIL CONTACT
================================================================================

Email: silhouette.sa80@gmail.com

This email is used for:
- Newsletter subscriptions (email signup form)
- General inquiries
- Customer support

Note: The current website does not have backend email functionality.
To implement email sending, you would need to:
1. Add a backend server (Node.js, Python, etc.)
2. Set up an email service (SendGrid, Mailgun, etc.)
3. Create API endpoints to handle form submissions
4. Update the JavaScript to send data to these endpoints

================================================================================
DEPLOYMENT
================================================================================

This is a static HTML/CSS/JavaScript website with no backend dependencies.

To deploy:
1. Upload all files to a web hosting service (Netlify, Vercel, GitHub Pages, etc.)
2. Ensure the images/ folder is included
3. Test all links and functionality after deployment
4. Verify WhatsApp links work correctly

No database, server, or build process required.

================================================================================
BROWSER COMPATIBILITY
================================================================================

Tested and compatible with:
- Chrome/Chromium (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

JavaScript features used:
- ES6+ (modern JavaScript)
- IntersectionObserver API (for scroll animations)
- LocalStorage (for email signup)
- Fetch API (ready for future backend integration)

================================================================================
SUPPORT & CUSTOMIZATION
================================================================================

Common customizations:

1. Change brand colors:
   - Edit the :root CSS variables in styles.css
   - Search for "--navy", "--gold", etc.

2. Change fonts:
   - Update the Google Fonts link in the HTML head
   - Edit the font-family properties in styles.css

3. Add social media links:
   - Find the footer-social section
   - Replace "#" with actual social media URLs

4. Update contact information:
   - Search for the phone number "+27 78 514 8634"
   - Replace with your contact details

5. Add analytics:
   - Add Google Analytics or similar tracking code to the HTML head

================================================================================
VERSION INFORMATION
================================================================================

Website Version: 1.0
Created: March 2026
Brand: SILHOUETTE - Luxury Fragrance Boutique
Location: South Africa
WhatsApp: +27 78 514 8634
Email: silhouette.sa80@gmail.com

================================================================================
