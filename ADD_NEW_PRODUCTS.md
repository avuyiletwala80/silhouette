# SILHOUETTE - How to Add New Products

## ➕ Add More Fragrances Anytime

Your website currently has 12 products. This guide shows you how to add more products whenever you want to expand your collection.

---

## 📝 Where Products Are Defined

Products are listed in two places:

1. **`collection.html`** - The Collection page (main product list)
2. **`index.html`** - Featured products on home page

---

## 🎯 How to Add a New Product

### **Step 1: Edit collection.html**

1. **Go to GitHub:** https://github.com/avuyiletwala80/silhouette
2. **Click on `collection.html`**
3. **Click the pencil icon (edit)**
4. **Find the products section** (search for "product-card")

### **Step 2: Copy an Existing Product**

Find this code block (it repeats 12 times):

```html
<div class="product-card" data-gender="masculine">
  <img src="./images/midnight-mystery.jpg" alt="Midnight Mystery">
  <h3>Midnight Mystery</h3>
  <p class="scent-description">Deep, mysterious blend of oud and spice</p>
  <p class="price">R 850</p>
  <button class="whatsapp-btn" onclick="submitOrder('Midnight Mystery')">
    Order on WhatsApp
  </button>
</div>
```

### **Step 3: Add Your New Product**

**Copy the block above and modify it:**

```html
<div class="product-card" data-gender="GENDER">
  <img src="./images/YOUR-IMAGE-NAME.jpg" alt="Your Product Name">
  <h3>Your Product Name</h3>
  <p class="scent-description">Your scent description here</p>
  <p class="price">R PRICE</p>
  <button class="whatsapp-btn" onclick="submitOrder('Your Product Name')">
    Order on WhatsApp
  </button>
</div>
```

### **Step 4: Fill in Your Details**

Replace these placeholders:

| Placeholder | Example | What It Is |
|---|---|---|
| `GENDER` | `masculine` or `feminine` or `unisex` | Product category for filtering |
| `YOUR-IMAGE-NAME.jpg` | `exotic-spice.jpg` | Image file name (must match file in images folder) |
| `Your Product Name` | `Exotic Spice` | Product name (appears on website) |
| `Your scent description` | `Warm spice with hints of vanilla` | Short description (2-3 words) |
| `PRICE` | `950` | Price in Rands (no R symbol, just number) |

### **Step 5: Example - Adding "Exotic Spice"**

```html
<div class="product-card" data-gender="unisex">
  <img src="./images/exotic-spice.jpg" alt="Exotic Spice">
  <h3>Exotic Spice</h3>
  <p class="scent-description">Warm spice with hints of vanilla</p>
  <p class="price">R 950</p>
  <button class="whatsapp-btn" onclick="submitOrder('Exotic Spice')">
    Order on WhatsApp
  </button>
</div>
```

### **Step 6: Save Changes**

1. **Scroll to bottom**
2. **Click "Commit changes"**
3. **Add a message:** "Add new product: Exotic Spice"
4. **Click "Commit"**

---

## 🏠 Add to Home Page (Optional)

If you want your new product to appear on the home page as a featured product:

1. **Edit `index.html`**
2. **Find the "Featured Fragrances" section**
3. **Add the same product card code**
4. **Commit changes**

---

## 📸 Don't Forget the Image!

**Important:** You must also upload the image file!

1. **Go to `images` folder**
2. **Click "Add file" → "Upload files"**
3. **Upload your image** (e.g., `exotic-spice.jpg`)
4. **Commit changes**

**The image file name must match exactly** what you put in the HTML code.

---

## 🔍 Product Categories (Gender)

When adding a product, choose one of these categories:

| Category | Use For | Filter Shows |
|---|---|---|
| `masculine` | Men's fragrances | "MASCULINE" filter |
| `feminine` | Women's fragrances | "FEMININE" filter |
| `unisex` | For everyone | Both filters (or create "unisex" filter) |

---

## 💰 Pricing Format

**Always use just the number, no currency symbol:**

```html
<!-- ✅ Correct -->
<p class="price">R 950</p>

<!-- ❌ Wrong -->
<p class="price">R950</p>
<p class="price">950</p>
```

---

## 📋 Complete Product Addition Checklist

- [ ] Decided on product name
- [ ] Chose gender category (masculine/feminine/unisex)
- [ ] Wrote scent description (2-3 words)
- [ ] Set price
- [ ] Have product image ready
- [ ] Edited `collection.html`
- [ ] Added product card code
- [ ] Uploaded image to `images/` folder
- [ ] Image file name matches HTML code
- [ ] Committed changes to GitHub
- [ ] Waited 2-3 minutes for website to update
- [ ] Tested on live website
- [ ] Product appears with image

---

## 🧪 Test Your New Product

After adding:

1. **Go to:** https://avuyiletwala80.github.io/silhouette/collection.html
2. **Hard refresh** (Ctrl+Shift+R or Cmd+Shift+R)
3. **Wait 2-3 minutes**
4. **Scroll to find your new product**
5. **Check:**
   - ✅ Image appears
   - ✅ Name is correct
   - ✅ Description shows
   - ✅ Price is correct
   - ✅ WhatsApp button works
   - ✅ Filtering works (try filtering by gender)

---

## 🚀 Batch Adding Multiple Products

If you want to add many products at once:

### **Method 1: Via GitHub Web (Mobile-Friendly)**

1. Edit `collection.html`
2. Add all new product cards
3. Commit once
4. Upload all images
5. Done!

### **Method 2: Via Desktop (Faster)**

```bash
# Edit the HTML file locally
nano collection.html
# Add all products
# Save file

# Upload all images
cp /path/to/images/*.jpg images/

# Push everything
git add .
git commit -m "Add 5 new products"
git push origin master
```

---

## ✏️ Editing Existing Products

To change an existing product:

1. **Go to GitHub:** https://github.com/avuyiletwala80/silhouette
2. **Edit `collection.html`**
3. **Find the product** (search for product name)
4. **Change the details:**
   - Name
   - Description
   - Price
   - Gender
   - Image
5. **Commit changes**

---

## 🎨 Scent Description Tips

Keep descriptions short and evocative:

**Good examples:**
- "Deep, mysterious blend of oud and spice"
- "Fresh citrus with floral notes"
- "Warm vanilla and sandalwood"
- "Crisp ocean breeze with bergamot"
- "Luxurious rose with amber base"

**Avoid:**
- Too long (keep to 2-3 words or one short sentence)
- Generic ("Nice smell")
- Unclear ("Stuff")

---

## 🔄 Product Limits

**How many products can you add?**
- Technically unlimited!
- Website will work with 50, 100, or more products
- Just keep adding them the same way

**Performance tips:**
- Keep images optimized (under 500KB each)
- Use consistent naming
- Organize by category

---

## 🆘 Troubleshooting

### **New product doesn't appear**

**Check:**
1. Did you commit changes?
2. Is product code in the right place?
3. Wait 2-3 minutes for GitHub to update
4. Hard refresh browser (Ctrl+Shift+R)
5. Check for typos in product name

### **Image doesn't show**

**Check:**
1. Image file name matches HTML code (case-sensitive)
2. Image is in `images/` folder
3. Image file format is JPG or PNG
4. Wait 2-3 minutes for upload

### **WhatsApp button doesn't work**

**Check:**
1. Product name in `onclick` matches exactly
2. No typos in product name
3. Test on different browser
4. Make sure WhatsApp is installed on phone

---

## 📞 Quick Reference

**To add a product:**
1. Edit `collection.html`
2. Copy existing product code
3. Change: name, image, description, price, gender
4. Commit
5. Upload image to `images/` folder
6. Commit
7. Wait 2-3 minutes
8. Test on live website

**That's it!** ✅

---

## 🎯 Next Steps

- **Add products regularly** - Keep collection fresh
- **Update prices** - Easy to change anytime
- **Add seasonal products** - Limited editions
- **Monitor sales** - See what customers love
- **Get feedback** - Ask customers what they want

---

## 💡 Pro Tips

✅ **Keep images consistent** - Same style, lighting, background
✅ **Update regularly** - Fresh products keep customers interested
✅ **Use good descriptions** - Help customers understand the scent
✅ **Price competitively** - Research similar fragrances
✅ **Test everything** - Always verify new products work

---

**You're now ready to grow your SILHOUETTE collection!** 🚀
