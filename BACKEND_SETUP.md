# SILHOUETTE - Complete Backend Setup Guide

This guide walks you through setting up the complete backend infrastructure for your SILHOUETTE website with email functionality and database.

---

## 🎯 What You'll Get

✅ **Email Notifications** - Get notified when customers contact you  
✅ **Order Database** - Automatically store all customer orders  
✅ **Customer Data** - Track customer information and preferences  
✅ **Newsletter Management** - Manage email subscribers  
✅ **Admin Dashboard** - View all orders and customer data  

---

## 📋 Prerequisites

You'll need:
1. **GitHub Account** - ✅ Already done
2. **Supabase Account** - Free tier available
3. **SendGrid Account** - Free tier: 100 emails/day
4. **Deployment Platform** - Railway, Render, or Heroku (free options available)

---

## 🚀 Step-by-Step Setup

### **Step 1: Create Supabase Account & Database**

1. Go to https://supabase.com
2. Click "Start your project"
3. Sign up with GitHub (use avuyiletwala80@gmail.com)
4. Create a new project:
   - Name: `silhouette`
   - Region: Choose closest to South Africa (Europe is fine)
   - Password: Create a strong password
5. Wait for database to initialize (2-3 minutes)

**Get your credentials:**
1. Go to Settings → API
2. Copy these values:
   - `SUPABASE_URL` (Project URL)
   - `SUPABASE_ANON_KEY` (Anon public key)
   - `SUPABASE_SERVICE_KEY` (Service role key)

**Set up database tables:**
1. Go to SQL Editor
2. Copy all SQL from `supabase-setup.sql` file
3. Paste into SQL Editor
4. Click "Run"
5. Tables are now created!

---

### **Step 2: Create SendGrid Account for Email**

1. Go to https://sendgrid.com
2. Click "Sign Up" (free tier available)
3. Verify your email
4. Create an API key:
   - Settings → API Keys
   - Create API Key
   - Name: `SILHOUETTE`
   - Copy the key (you'll need it)

**Verify sender email:**
1. Settings → Sender Authentication
2. Verify Domain or Single Sender
3. Use: `silhouette.sa80@gmail.com`

---

### **Step 3: Set Up Backend Server**

Choose one deployment platform:

#### **Option A: Railway (Easiest)**

1. Go to https://railway.app
2. Sign up with GitHub
3. Create new project → Deploy from GitHub repo
4. Select: `avuyiletwala80/silhouette`
5. Railway auto-detects Node.js
6. Add environment variables:
   - `SUPABASE_URL` (from Step 1)
   - `SUPABASE_ANON_KEY` (from Step 1)
   - `SENDGRID_API_KEY` (from Step 2)
   - `SENDER_EMAIL` = `silhouette.sa80@gmail.com`
   - `NODE_ENV` = `production`
7. Deploy!
8. Get your backend URL from Railway dashboard

#### **Option B: Render**

1. Go to https://render.com
2. Sign up with GitHub
3. New → Web Service
4. Connect GitHub repo: `avuyiletwala80/silhouette`
5. Settings:
   - Name: `silhouette-backend`
   - Environment: `Node`
   - Build command: `npm install`
   - Start command: `npm start`
6. Add environment variables (same as Railway)
7. Deploy!

#### **Option C: Heroku (Paid, but simple)**

1. Go to https://heroku.com
2. Create new app: `silhouette-backend`
3. Connect GitHub repo
4. Add environment variables
5. Deploy!

---

### **Step 4: Update Frontend with Backend URL**

After deploying backend, you'll get a URL like:
- Railway: `https://silhouette-backend-production.up.railway.app`
- Render: `https://silhouette-backend.onrender.com`

Update your frontend:

1. Open `scripts.js`
2. Find: `const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:3000/api';`
3. Replace with your backend URL:
   ```javascript
   const API_BASE_URL = 'https://your-backend-url.com/api';
   ```
4. Commit and push to GitHub
5. Redeploy frontend

---

### **Step 5: Set Up GitHub Pages (Free Hosting)**

1. Go to your GitHub repo: https://github.com/avuyiletwala80/silhouette
2. Settings → Pages
3. Source: Deploy from branch
4. Branch: `master` / `main`
5. Folder: `/ (root)`
6. Save
7. Website goes live at: `https://avuyiletwala80.github.io/silhouette`

---

## 🧪 Testing Everything

### **Test Email Signup**

1. Open your website
2. Scroll to "Stay in the Know" section
3. Enter your email
4. Click "Subscribe"
5. Check your email for welcome message
6. Check Supabase: SQL Editor → `SELECT * FROM subscribers;`

### **Test Contact Form**

1. Go to Contact page
2. Fill out form and submit
3. Check your email for notification
4. Check Supabase: `SELECT * FROM contacts;`

### **Test WhatsApp Orders**

1. Click any "Order via WhatsApp" button
2. Should open WhatsApp with pre-filled message
3. Message is also logged in Supabase: `SELECT * FROM orders;`

---

## 📊 Admin Dashboard (View Your Data)

### **Access Supabase Dashboard**

1. Go to https://supabase.com
2. Login to your project
3. Click "silhouette" project
4. Tables visible:
   - `orders` - All customer orders
   - `subscribers` - Newsletter subscribers
   - `contacts` - Contact form submissions
   - `products` - Product catalog

### **View Analytics**

Supabase has built-in views:
- `orders_by_product` - Best sellers
- `orders_by_status` - Order status breakdown
- `recent_subscribers` - Latest newsletter signups

---

## 🔐 Security Best Practices

1. **Never commit `.env` file** - Already in `.gitignore`
2. **Use environment variables** - Don't hardcode API keys
3. **Enable RLS** - Row Level Security enabled in database
4. **Validate inputs** - Backend validates all data
5. **Use HTTPS** - All connections encrypted

---

## 💰 Cost Breakdown

| Service | Free Tier | Cost |
|---------|-----------|------|
| Supabase | 500MB storage | $25/mo for more |
| SendGrid | 100 emails/day | $20/mo for more |
| Railway | $5/month credit | $5-20/mo |
| GitHub Pages | Unlimited | Free |
| **Total** | **Free** | **$5-25/mo** |

---

## 🛠️ Troubleshooting

### **Forms not submitting?**

1. Check browser console (F12 → Console)
2. Check if backend URL is correct in `scripts.js`
3. Check backend is running (visit backend URL in browser)
4. Check CORS is enabled in backend

### **Emails not sending?**

1. Verify SendGrid API key is correct
2. Check sender email is verified in SendGrid
3. Check spam folder
4. Check SendGrid dashboard for delivery status

### **Database not storing data?**

1. Check Supabase URL and key are correct
2. Verify RLS policies are set up
3. Check SQL tables exist
4. Check network tab for errors

### **Website not loading?**

1. Check GitHub Pages is enabled
2. Check branch is set to `master`
3. Hard refresh browser (Ctrl+Shift+R)
4. Check for JavaScript errors (F12 → Console)

---

## 📱 Mobile Testing

Test on your phone:
1. Get your GitHub Pages URL
2. Open on mobile browser
3. Test all forms
4. Test WhatsApp buttons
5. Check responsive design

---

## 📈 Next Steps

After setup is complete:

1. **Add product images** - See PRODUCT_IMAGES_GUIDE.txt
2. **Customize emails** - Edit email templates in backend-server.js
3. **Set up analytics** - Add Google Analytics
4. **Monitor orders** - Check Supabase dashboard daily
5. **Respond to customers** - Check contact form submissions

---

## 🎓 Learning Resources

- **Supabase Docs**: https://supabase.com/docs
- **SendGrid Docs**: https://docs.sendgrid.com
- **Express.js Docs**: https://expressjs.com
- **Node.js Docs**: https://nodejs.org/docs

---

## 📞 Support

If you encounter issues:

1. Check the Troubleshooting section above
2. Check service status pages:
   - Supabase: https://status.supabase.com
   - SendGrid: https://status.sendgrid.com
3. Contact support:
   - Email: silhouette.sa80@gmail.com
   - WhatsApp: +27 78 514 8634

---

## ✅ Checklist

- [ ] Supabase account created
- [ ] Database tables set up
- [ ] SendGrid account created
- [ ] API keys saved securely
- [ ] Backend deployed to Railway/Render
- [ ] Frontend updated with backend URL
- [ ] GitHub Pages enabled
- [ ] Email signup tested
- [ ] Contact form tested
- [ ] Orders database tested
- [ ] Website live and accessible
- [ ] Mobile tested
- [ ] Product images added

---

**You're all set! Your SILHOUETTE website is now fully functional with backend email and database integration.** 🎉

For questions or updates, visit: https://github.com/avuyiletwala80/silhouette
