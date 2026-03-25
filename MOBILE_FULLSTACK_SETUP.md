# SILHOUETTE - Full Stack Setup on Mobile Phone
## Complete Step-by-Step Guide

**Estimated Time:** 60-90 minutes  
**Device:** Mobile phone only  
**Goal:** Get email, database, and backend working

---

## 📱 IMPORTANT: Mobile Browser Tips

**Before you start:**
1. Use **Chrome** or **Safari** (most reliable)
2. Open links in **new tabs** (long-press link → "Open in new tab")
3. Keep multiple tabs open for easy switching
4. **Bookmark this page** for reference
5. Have your email ready: `avuyiletwala80@gmail.com`

---

# 🎯 PHASE 1: SUPABASE DATABASE SETUP (15 minutes)

## Step 1.1: Create Supabase Account

1. **Open browser on mobile**
2. **Go to:** https://supabase.com
3. **Tap "Start your project"** (or "Sign up")
4. **Choose "Sign up with GitHub"**
   - This uses your existing GitHub account (avuyiletwala80)
5. **Authorize Supabase** to access your GitHub
6. **Fill in project details:**
   - Project name: `silhouette`
   - Password: Create a strong password (write it down!)
   - Region: Choose **Europe (Ireland)** - closest to South Africa
7. **Tap "Create new project"**
8. **Wait 2-3 minutes** for database to initialize
   - You'll see a loading screen
   - Be patient!

---

## Step 1.2: Get Your Supabase Credentials

Once project loads:

1. **Tap the menu icon** (☰) top left
2. **Tap "Settings"** (gear icon)
3. **Tap "API"**
4. **You'll see two keys:**
   - `Project URL` - Copy this
   - `anon public` - Copy this
5. **Save these somewhere** (notes app, email to yourself, etc.)

**Example (yours will be different):**
```
SUPABASE_URL: https://abcdefg.supabase.co
SUPABASE_ANON_KEY: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

---

## Step 1.3: Create Database Tables

1. **In Supabase, tap "SQL Editor"** (left menu)
2. **Tap "New Query"** (or "+" button)
3. **Copy this SQL code** (I'll provide it below)
4. **Paste it into the editor**
5. **Tap "Run"** (play button)
6. **Wait for success message**

### SQL Code to Copy (Run this in SQL Editor):

```sql
-- ORDERS TABLE
CREATE TABLE orders (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  customer_name VARCHAR(255) NOT NULL,
  customer_email VARCHAR(255) NOT NULL,
  customer_phone VARCHAR(20),
  product_name VARCHAR(255) NOT NULL,
  quantity INTEGER DEFAULT 1,
  delivery_address TEXT,
  status VARCHAR(50) DEFAULT 'pending',
  created_at TIMESTAMP DEFAULT NOW()
);

-- SUBSCRIBERS TABLE
CREATE TABLE subscribers (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  subscribed_at TIMESTAMP DEFAULT NOW(),
  is_active BOOLEAN DEFAULT TRUE
);

-- CONTACTS TABLE
CREATE TABLE contacts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  message TEXT NOT NULL,
  status VARCHAR(50) DEFAULT 'new',
  created_at TIMESTAMP DEFAULT NOW()
);

-- PRODUCTS TABLE
CREATE TABLE products (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  gender VARCHAR(50),
  price DECIMAL(10, 2),
  hook TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);

-- ENABLE ROW LEVEL SECURITY
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE subscribers ENABLE ROW LEVEL SECURITY;
ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;
ALTER TABLE products ENABLE ROW LEVEL SECURITY;

-- CREATE POLICIES
CREATE POLICY "Allow public insert to orders" ON orders FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow public insert to subscribers" ON subscribers FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow public insert to contacts" ON contacts FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow public read access to products" ON products FOR SELECT USING (true);
```

**After running:**
- You should see "Success" message
- Tables are now created!

---

# 📧 PHASE 2: SENDGRID EMAIL SETUP (10 minutes)

## Step 2.1: Create SendGrid Account

1. **Open new tab**
2. **Go to:** https://sendgrid.com
3. **Tap "Sign Up"**
4. **Fill in details:**
   - Email: `avuyiletwala80@gmail.com`
   - Password: Create strong password
   - Company: `SILHOUETTE`
5. **Tap "Create Account"**
6. **Check your email** for verification link
7. **Tap the verification link** in email
8. **You're now in SendGrid dashboard**

---

## Step 2.2: Verify Your Sender Email

1. **In SendGrid, tap menu** (☰)
2. **Tap "Sender Authentication"**
3. **Tap "Verify a Single Sender"**
4. **Fill in:**
   - From Email: `silhouette.sa80@gmail.com`
   - From Name: `SILHOUETTE`
   - Reply To: `silhouette.sa80@gmail.com`
5. **Tap "Create"**
6. **Check your email** for verification link
7. **Tap verification link** in email
8. **Done!** Sender is verified

---

## Step 2.3: Create API Key

1. **In SendGrid, tap menu** (☰)
2. **Tap "API Keys"** (under Settings)
3. **Tap "Create API Key"** (or "+" button)
4. **Fill in:**
   - API Key Name: `SILHOUETTE`
   - Permissions: Choose "Full Access" (easiest)
5. **Tap "Create & View"**
6. **Copy the API Key** (long string starting with `SG.`)
7. **Save it** (notes app, email to yourself)

**Example (yours will be different):**
```
SENDGRID_API_KEY: SG.abc123def456ghi789jkl...
```

---

# 🚀 PHASE 3: DEPLOY BACKEND TO RAILWAY (15 minutes)

## Step 3.1: Create Railway Account

1. **Open new tab**
2. **Go to:** https://railway.app
3. **Tap "Sign Up"**
4. **Tap "Continue with GitHub"**
5. **Authorize Railway** to access GitHub
6. **You're now in Railway dashboard**

---

## Step 3.2: Deploy Your Backend

1. **In Railway, tap "Create New Project"**
2. **Tap "Deploy from GitHub repo"**
3. **Find and select:** `avuyiletwala80/silhouette`
4. **Tap "Deploy"**
5. **Railway will:**
   - Detect Node.js project
   - Install dependencies
   - Start building (takes 2-3 minutes)
   - Show "Deployment successful"

---

## Step 3.3: Add Environment Variables

1. **In Railway, find your project**
2. **Tap the project**
3. **Tap "Variables"** tab
4. **Add these variables** (tap "+" to add each):

| Variable Name | Value |
|---|---|
| `SUPABASE_URL` | (paste from Step 1.2) |
| `SUPABASE_ANON_KEY` | (paste from Step 1.2) |
| `SENDGRID_API_KEY` | (paste from Step 2.3) |
| `SENDER_EMAIL` | `silhouette.sa80@gmail.com` |
| `NODE_ENV` | `production` |

**How to add each:**
1. Tap "+" button
2. Type variable name (e.g., `SUPABASE_URL`)
3. Tap value field
4. Paste the value
5. Tap "Add"
6. Repeat for each variable

---

## Step 3.4: Get Your Backend URL

1. **In Railway, find your project**
2. **Look for "Deployments"** section
3. **Find the deployed URL** (looks like: `https://silhouette-backend-production.up.railway.app`)
4. **Copy this URL**
5. **Save it** - you'll need it in next phase

**Your backend URL will look like:**
```
https://silhouette-backend-production.up.railway.app
```

---

# 🌐 PHASE 4: UPDATE FRONTEND & DEPLOY (10 minutes)

## Step 4.1: Update Frontend Code

1. **Open new tab**
2. **Go to:** https://github.com/avuyiletwala80/silhouette
3. **Find file:** `scripts.js`
4. **Tap the file** to open it
5. **Tap the pencil icon** (edit button)
6. **Find this line** (around line 10):
   ```javascript
   const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:3000/api';
   ```
7. **Replace it with:**
   ```javascript
   const API_BASE_URL = 'https://your-railway-url.com/api';
   ```
   (Replace with your actual Railway URL from Step 3.4)

8. **Scroll down**
9. **Tap "Commit changes"** button
10. **Add message:** `Update backend URL for production`
11. **Tap "Commit"**

---

## Step 4.2: Enable GitHub Pages

1. **In GitHub, go to:** https://github.com/avuyiletwala80/silhouette
2. **Tap "Settings"** (gear icon, top right)
3. **Tap "Pages"** (left menu)
4. **Under "Build and deployment":**
   - Source: Select "Deploy from a branch"
   - Branch: Select `master`
   - Folder: Select `/ (root)`
5. **Tap "Save"**
6. **Wait 1-2 minutes**
7. **Your website is now live at:**
   ```
   https://avuyiletwala80.github.io/silhouette
   ```

---

# ✅ PHASE 5: TEST EVERYTHING (20 minutes)

## Step 5.1: Test Website on Mobile

1. **Open new tab**
2. **Go to:** `https://avuyiletwala80.github.io/silhouette`
3. **Website should load** on your mobile phone
4. **Test these:**
   - ✅ Scroll through pages
   - ✅ Click navigation menu
   - ✅ View products
   - ✅ Filter products (ALL, MASCULINE, FEMININE)
   - ✅ Hamburger menu works on mobile

---

## Step 5.2: Test Email Signup

1. **On your website, scroll to "Stay in the Know"** section
2. **Enter your email:** `avuyiletwala80@gmail.com`
3. **Tap "Subscribe"**
4. **You should see:** "You're on the list" message
5. **Check your email** (might take 30 seconds)
6. **You should receive** a welcome email from SILHOUETTE

**If you don't receive email:**
- Check spam folder
- Wait 1-2 minutes
- Try again with different email

---

## Step 5.3: Test Contact Form

1. **On website, go to "Contact" page**
2. **Scroll to "Send us a Message"** section
3. **Fill in form:**
   - Name: `Test User`
   - Email: `avuyiletwala80@gmail.com`
   - Message: `This is a test message`
4. **Tap "Send Message"**
5. **You should see:** "Thank you. We'll be in touch shortly."
6. **Check your email** for notification

---

## Step 5.4: Test WhatsApp Buttons

1. **On website, find any "Order via WhatsApp"** button
2. **Tap it**
3. **WhatsApp should open** with pre-filled message
4. **Message should say:** "Hi SILHOUETTE, I'd like to order [PRODUCT NAME]"
5. **Don't actually send** (just testing)
6. **Go back to website**

---

## Step 5.5: Verify Data in Database

1. **Open new tab**
2. **Go to:** https://supabase.com
3. **Login to your project**
4. **Tap "Table Editor"** (left menu)
5. **Check these tables:**

### Check `subscribers` table:
- Should show your email from Step 5.2
- Column: `email` = `avuyiletwala80@gmail.com`
- Column: `subscribed_at` = today's date

### Check `contacts` table:
- Should show your test message from Step 5.3
- Column: `name` = `Test User`
- Column: `email` = `avuyiletwala80@gmail.com`
- Column: `message` = `This is a test message`

---

## Step 5.6: Check Received Emails

**You should have received:**
1. ✅ Supabase verification email
2. ✅ SendGrid verification email
3. ✅ Newsletter welcome email (from Step 5.2)
4. ✅ Contact form notification (from Step 5.3)

**If you didn't receive some:**
- Check spam folder
- Wait 2-3 minutes
- Check SendGrid dashboard for delivery status

---

# 🎉 SUCCESS CHECKLIST

After completing all phases, you should have:

- [ ] Supabase account created
- [ ] Database tables created
- [ ] SendGrid account created
- [ ] Sender email verified
- [ ] API key created
- [ ] Railway account created
- [ ] Backend deployed
- [ ] Environment variables added
- [ ] Backend URL obtained
- [ ] Frontend code updated
- [ ] GitHub Pages enabled
- [ ] Website live at: https://avuyiletwala80.github.io/silhouette
- [ ] Email signup tested
- [ ] Contact form tested
- [ ] WhatsApp buttons tested
- [ ] Data appears in Supabase database
- [ ] Emails received successfully

---

# 🚨 TROUBLESHOOTING ON MOBILE

### Website Won't Load
- Hard refresh: Swipe down → pull to refresh
- Clear browser cache: Settings → [Browser] → Clear Data
- Try different browser (Chrome vs Safari)

### Emails Not Sending
- Check spam folder
- Wait 2-3 minutes
- Go to SendGrid dashboard → check delivery status
- Verify sender email is confirmed

### Can't Find Buttons on Mobile
- Scroll down - buttons might be below fold
- Tap menu icon (☰) to see navigation
- Use "Find in page" (Ctrl+F or ⌘+F)

### Data Not Appearing in Database
- Refresh Supabase page
- Wait 10 seconds
- Check if form actually submitted (look for success message)
- Check browser console for errors (F12)

### Can't Copy/Paste on Mobile
- Long-press text to select
- Tap "Copy"
- Long-press in destination field
- Tap "Paste"

---

# 📞 SUPPORT

If you get stuck:

1. **Check this guide again** - most answers are here
2. **Check browser console** - tap F12 (or long-press → Inspect)
3. **Contact:** silhouette.sa80@gmail.com
4. **WhatsApp:** +27 78 514 8634

---

# ⏱️ TIME BREAKDOWN

| Phase | Time | Status |
|-------|------|--------|
| 1. Supabase | 15 min | ⏳ |
| 2. SendGrid | 10 min | ⏳ |
| 3. Railway | 15 min | ⏳ |
| 4. Frontend | 10 min | ⏳ |
| 5. Testing | 20 min | ⏳ |
| **TOTAL** | **70 min** | ⏳ |

---

## 🎯 Next Steps After Setup

Once everything is working:

1. **Add product images** - See PRODUCT_IMAGES_GUIDE.txt
2. **Monitor orders** - Check Supabase daily
3. **Respond to customers** - Check contact form submissions
4. **Track subscribers** - View newsletter signups
5. **Analyze data** - See which products are popular

---

**You've got this! Let's go! 🚀**
