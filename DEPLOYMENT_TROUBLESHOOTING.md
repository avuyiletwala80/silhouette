# SILHOUETTE - Deployment Troubleshooting Guide

## Issue: Railway Deployment Keeps Failing

### Root Causes & Solutions

---

## ❌ Error 1: "failed to solve: secret node: not found"

**What it means:**
Railway can't find Node.js or environment variables

**Solution:**

1. **Delete the failed deployment:**
   - Go to Railway dashboard
   - Find your project
   - Tap "Settings"
   - Scroll to "Delete Project"
   - Tap "Delete"

2. **Create new project:**
   - Go to Railway.app
   - Tap "Create New Project"
   - Tap "Deploy from GitHub repo"
   - Select: `avuyiletwala80/silhouette`
   - Tap "Deploy"

3. **Add environment variables IMMEDIATELY:**
   - Once project is created, tap "Variables"
   - Add these 5 variables:
     ```
     SUPABASE_URL = (your Supabase URL)
     SUPABASE_ANON_KEY = (your Supabase key)
     SENDGRID_API_KEY = (your SendGrid key)
     SENDER_EMAIL = silhouette.sa80@gmail.com
     NODE_ENV = production
     ```
   - Tap "Save"

4. **Redeploy:**
   - Go to "Deployments"
   - Tap "Redeploy" on the latest deployment

---

## ❌ Error 2: "Merge Conflicts in Repository"

**What it means:**
GitHub shows red conflict markers in the code

**Solution:**

This is usually a display issue. The actual code is fine.

1. **Force refresh GitHub:**
   - Go to: https://github.com/avuyiletwala80/silhouette
   - Hard refresh: Ctrl+Shift+R (or Cmd+Shift+R on Mac)
   - Wait 10 seconds

2. **Check the actual code:**
   - Open `backend-server.js`
   - Look for red lines with `<<<<<<<` or `>>>>>>>`
   - If you see them, they're merge conflicts

3. **If conflicts exist, fix them:**
   - Contact support or try the "Clean Repository" steps below

---

## ✅ Clean Repository (Nuclear Option)

If you keep getting errors, do this:

### On Your Computer (or ask for help):

```bash
cd /home/ubuntu/silhouette-html

# Reset to last known good commit
git reset --hard 0032b05

# Force push to GitHub
git push -f origin master
```

### Then on Railway:
1. Delete project
2. Create new project
3. Deploy again

---

## ✅ Verify Deployment Success

After deployment completes:

1. **Check Health Endpoint:**
   - Go to: `https://your-railway-url.com/health`
   - Should see: `{"status":"ok",...}`
   - If you see this, backend is working! ✅

2. **Check Railway Logs:**
   - In Railway dashboard, tap "Logs"
   - Look for: `✓ SILHOUETTE Backend Server running on port 3000`
   - If you see this, backend is working! ✅

3. **Test on Website:**
   - Go to: https://avuyiletwala80.github.io/silhouette
   - Try email signup
   - Check your email for welcome message
   - If you receive email, everything works! ✅

---

## 🔧 Common Issues & Fixes

### Issue: "Build succeeded but app won't start"

**Fix:**
- Check environment variables are set
- Verify `SUPABASE_URL` and `SENDGRID_API_KEY` are correct
- Check Railway logs for error messages

### Issue: "App starts but forms don't work"

**Fix:**
- Update `scripts.js` with correct backend URL
- Verify backend URL in browser console (F12)
- Check CORS is enabled (it is by default)

### Issue: "Emails not sending"

**Fix:**
- Verify `SENDGRID_API_KEY` is correct
- Verify sender email is verified in SendGrid
- Check SendGrid dashboard for delivery status
- Check spam folder

### Issue: "Database errors"

**Fix:**
- Verify `SUPABASE_URL` and `SUPABASE_ANON_KEY` are correct
- Check Supabase tables exist (run SQL if not)
- Check row-level security policies are set

---

## 📋 Step-by-Step Redeploy Process

### For Mobile Users:

1. **Open Railway:** https://railway.app
2. **Find project:** `silhouette`
3. **Tap "Deployments"**
4. **Find latest deployment** (should show "Failed")
5. **Tap the three dots (⋯)**
6. **Tap "Redeploy"**
7. **Wait 2-3 minutes** for build
8. **Check if it says "Success"**

### If Still Failing:

1. **Delete project:**
   - Tap "Settings"
   - Scroll to bottom
   - Tap "Delete Project"
   - Confirm delete

2. **Create new project:**
   - Tap "Create New Project"
   - Tap "Deploy from GitHub"
   - Select `silhouette` repo
   - Tap "Deploy"

3. **Add variables immediately:**
   - Tap "Variables"
   - Add all 5 variables
   - Tap "Save"

4. **Wait for deployment**

---

## 📞 Getting Help

**If deployment still fails:**

1. **Take a screenshot** of the error
2. **Copy the error message** from Railway logs
3. **Send to:** silhouette.sa80@gmail.com
4. **Or WhatsApp:** +27 78 514 8634

**Include:**
- Screenshot of error
- Error message text
- What you were doing when it failed
- What you've already tried

---

## ✅ Success Checklist

After successful deployment:

- [ ] Railway shows "Success" status
- [ ] Health endpoint returns JSON
- [ ] Backend URL works in browser
- [ ] Email signup sends welcome email
- [ ] Contact form sends notification email
- [ ] Data appears in Supabase
- [ ] Website works on mobile

---

## 🎯 Next Steps

Once deployment succeeds:

1. **Update frontend** with backend URL (if needed)
2. **Test all forms** on website
3. **Verify emails** are being sent
4. **Check Supabase** for data
5. **Add product images**
6. **Launch website!**

---

**You've got this! Don't give up. Most deployment issues are just configuration. We'll get it working!** 🚀
