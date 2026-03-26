# SILHOUETTE - How to Add Product Images

## 📸 Add Your 12 Fragrance Images

Your website has 12 products ready. Now you need to add the images. This guide shows you exactly how.

---

## 🎯 What You Need

**12 JPG or PNG images:**
- One image per fragrance
- Recommended size: 400x500 pixels (or similar)
- File names should match product names (for organization)

**Example file names:**
```
midnight-mystery.jpg
velvet-rose.jpg
ocean-breeze.jpg
golden-amber.jpg
etc...
```

---

## 📁 Where to Upload Images

All images go in the **`images/`** folder in your repository.

**Current structure:**
```
silhouette/
├── index.html
├── collection.html
├── about.html
├── contact.html
├── styles.css
├── scripts.js
└── images/          ← Your images go here
```

---

## 🖼️ The 12 Products (Current Setup)

Your website has these 12 products ready:

| # | Product Name | Gender | Price |
|---|---|---|---|
| 1 | Midnight Mystery | Masculine | R 850 |
| 2 | Velvet Rose | Feminine | R 850 |
| 3 | Ocean Breeze | Unisex | R 750 |
| 4 | Golden Amber | Masculine | R 950 |
| 5 | Silk & Jasmine | Feminine | R 900 |
| 6 | Cedar Wood | Masculine | R 800 |
| 7 | Peach Blossom | Feminine | R 800 |
| 8 | Bergamot Dream | Unisex | R 750 |
| 9 | Black Oud | Masculine | R 1,100 |
| 10 | Lily Luxe | Feminine | R 950 |
| 11 | Sandalwood Serenity | Unisex | R 850 |
| 12 | Vanilla Noir | Feminine | R 900 |

---

## 📱 How to Add Images (Mobile Phone)

### **Method 1: Upload via GitHub Web Interface (Easiest)**

1. **Go to your repository:**
   ```
   https://github.com/avuyiletwala80/silhouette
   ```

2. **Navigate to images folder:**
   - Click on "images" folder
   - If it doesn't exist, we'll create it

3. **Create images folder (if needed):**
   - Click "Add file" → "Create new file"
   - Type: `images/.gitkeep`
   - Click "Commit changes"
   - This creates the images folder

4. **Upload your images:**
   - Go to the images folder
   - Click "Add file" → "Upload files"
   - Tap "choose your files"
   - Select your 12 product images
   - Click "Commit changes"

5. **Wait for upload to complete**

### **Method 2: Upload via Desktop (Faster for Multiple Files)**

If you have a computer available:

```bash
# Navigate to your project
cd ~/silhouette-html

# Create images folder if it doesn't exist
mkdir -p images

# Copy your images into the images folder
cp /path/to/your/images/*.jpg images/

# Push to GitHub
git add images/
git commit -m "Add product images"
git push origin master
```

---

## 🔗 How Images Are Linked in HTML

Your website automatically looks for images in the `images/` folder.

**In the HTML code, images are referenced like this:**

```html
<img src="./images/midnight-mystery.jpg" alt="Midnight Mystery">
```

**The image file name must match exactly** (case-sensitive on some systems).

---

## 📋 Image Naming Convention

To make it easy, name your images exactly as the products:

```
images/midnight-mystery.jpg
images/velvet-rose.jpg
images/ocean-breeze.jpg
images/golden-amber.jpg
images/silk-and-jasmine.jpg
images/cedar-wood.jpg
images/peach-blossom.jpg
images/bergamot-dream.jpg
images/black-oud.jpg
images/lily-luxe.jpg
images/sandalwood-serenity.jpg
images/vanilla-noir.jpg
```

**Or use simple numbering:**

```
images/product-1.jpg
images/product-2.jpg
... etc
```

---

## ✅ After Uploading Images

1. **Go to your live website:**
   ```
   https://avuyiletwala80.github.io/silhouette
   ```

2. **Go to Collection page**

3. **Check if images appear:**
   - Scroll through the products
   - All 12 should show with images
   - If images don't appear, check file names match

4. **If images don't show:**
   - Check file names are correct
   - Make sure files are in `images/` folder
   - Hard refresh browser (Ctrl+Shift+R or Cmd+Shift+R)
   - Wait 2-3 minutes for GitHub to update

---

## 🎨 Image Specifications

**Recommended:**
- Format: JPG or PNG
- Size: 400x500 pixels (portrait orientation)
- File size: Under 500KB each
- Quality: High quality (good lighting, clear product)

**Why these specs?**
- Portrait orientation matches the product card layout
- 400x500 loads fast
- Under 500KB keeps website fast
- High quality looks professional

---

## 🔄 How to Replace an Image

If you want to replace an existing image:

1. **Go to GitHub repository**
2. **Navigate to images folder**
3. **Find the image you want to replace**
4. **Click the trash icon to delete it**
5. **Upload the new image with the same name**
6. **Commit changes**
7. **Wait 2-3 minutes**
8. **Hard refresh your website** (Ctrl+Shift+R)

---

## 🆘 Troubleshooting

### **Images not showing on website**

**Check:**
1. File names match exactly (case-sensitive)
2. Files are in `images/` folder
3. File format is JPG or PNG
4. Hard refresh browser (Ctrl+Shift+R)
5. Wait 2-3 minutes for GitHub to update

### **Only some images show**

**Check:**
1. File names for missing images
2. Make sure they're in the images folder
3. Check file size isn't too large
4. Try uploading again

### **Images look blurry or low quality**

**Solution:**
1. Replace with higher quality image
2. Make sure image is at least 400x500 pixels
3. Use JPG format for photos
4. Optimize image size (under 500KB)

---

## 📸 Example Image Upload Process (Mobile)

1. **Open GitHub:** https://github.com/avuyiletwala80/silhouette
2. **Tap "images" folder**
3. **Tap "Add file" → "Upload files"**
4. **Tap "choose your files"**
5. **Select your first image** (midnight-mystery.jpg)
6. **Tap "Commit changes"**
7. **Repeat for all 12 images**

**Total time: 5-10 minutes for all 12 images**

---

## ✅ Checklist

- [ ] Have 12 product images ready
- [ ] Images are JPG or PNG format
- [ ] Images are roughly 400x500 pixels
- [ ] File names are clear and organized
- [ ] Uploaded all images to `images/` folder
- [ ] Website shows all 12 products with images
- [ ] Images look good on mobile phone
- [ ] Tested collection page filtering
- [ ] Ready to launch!

---

## 🎉 You're Almost There!

Once images are uploaded:
1. Your website is complete
2. It's live and ready to sell
3. Share the URL with customers
4. Start receiving orders via WhatsApp!

**Website URL to share:**
```
https://avuyiletwala80.github.io/silhouette
```

---

## 📞 Next Steps

After images are added:

1. **Test on mobile** - Open website on your phone
2. **Share with friends** - Get feedback
3. **Share with customers** - Start marketing
4. **Monitor orders** - Orders come via WhatsApp
5. **Add more products** - See `ADD_NEW_PRODUCTS.md`

**You've got this! Your website is almost ready to launch!** 🚀
