/* ============================================
   SILHOUETTE - Backend Server
   Handles email, database, and order management
   ============================================ */

// This is a Node.js backend server file
// To use this, you need to:
// 1. Install Node.js dependencies
// 2. Set up environment variables
// 3. Deploy to a server (Heroku, Railway, Render, etc.)

// DEPENDENCIES NEEDED:
// npm install express cors dotenv axios supabase @sendgrid/mail

const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// ============================================
// SUPABASE CLIENT SETUP
// ============================================

const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

// ============================================
// SENDGRID EMAIL SETUP
// ============================================

const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// ============================================
// ROUTES
// ============================================

// 1. CONTACT FORM SUBMISSION
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Validate input
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Store in Supabase
    const { data, error } = await supabase
      .from('contacts')
      .insert([
        {
          name,
          email,
          message,
          created_at: new Date().toISOString(),
        }
      ]);

    if (error) throw error;

    // Send email notification to owner
    await sgMail.send({
      to: process.env.SENDER_EMAIL,
      from: process.env.SENDER_EMAIL,
      subject: `New Contact from SILHOUETTE: ${name}`,
      html: `
        <h2>New Contact Message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
        <p><small>Received at: ${new Date().toLocaleString()}</small></p>
      `
    });

    // Send confirmation email to customer
    await sgMail.send({
      to: email,
      from: process.env.SENDER_EMAIL,
      subject: 'Thank you for contacting SILHOUETTE',
      html: `
        <h2>Thank you, ${name}!</h2>
        <p>We received your message and will get back to you shortly.</p>
        <p>In the meantime, feel free to order via WhatsApp: <strong>+27 78 514 8634</strong></p>
        <p>Best regards,<br>SILHOUETTE Team</p>
      `
    });

    res.json({ success: true, message: 'Contact message sent successfully' });
  } catch (error) {
    console.error('Contact error:', error);
    res.status(500).json({ error: error.message });
  }
});

// 2. EMAIL SIGNUP
app.post('/api/subscribe', async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ error: 'Email is required' });
    }

    // Check if already subscribed
    const { data: existing } = await supabase
      .from('subscribers')
      .select('*')
      .eq('email', email);

    if (existing && existing.length > 0) {
      return res.status(400).json({ error: 'Already subscribed' });
    }

    // Store in Supabase
    const { data, error } = await supabase
      .from('subscribers')
      .insert([
        {
          email,
          subscribed_at: new Date().toISOString(),
        }
      ]);

    if (error) throw error;

    // Send welcome email
    await sgMail.send({
      to: email,
      from: process.env.SENDER_EMAIL,
      subject: 'Welcome to SILHOUETTE Newsletter',
      html: `
        <h2>Welcome to SILHOUETTE!</h2>
        <p>Thank you for subscribing to our newsletter.</p>
        <p>You'll now receive updates about:</p>
        <ul>
          <li>New fragrance arrivals</li>
          <li>Exclusive drops</li>
          <li>Fragrance stories and tips</li>
        </ul>
        <p>Explore our collection: <a href="https://silhouette.com/collection">View Fragrances</a></p>
        <p>Best regards,<br>SILHOUETTE Team</p>
      `
    });

    res.json({ success: true, message: 'Successfully subscribed' });
  } catch (error) {
    console.error('Subscribe error:', error);
    res.status(500).json({ error: error.message });
  }
});

// 3. ORDER SUBMISSION (WhatsApp + Database)
app.post('/api/order', async (req, res) => {
  try {
    const { name, email, phone, product, quantity, address } = req.body;

    if (!name || !email || !product) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Store order in Supabase
    const { data, error } = await supabase
      .from('orders')
      .insert([
        {
          customer_name: name,
          customer_email: email,
          customer_phone: phone,
          product_name: product,
          quantity: quantity || 1,
          delivery_address: address,
          status: 'pending',
          created_at: new Date().toISOString(),
        }
      ]);

    if (error) throw error;

    // Send order confirmation to customer
    await sgMail.send({
      to: email,
      from: process.env.SENDER_EMAIL,
      subject: 'Order Received - SILHOUETTE',
      html: `
        <h2>Thank you for your order, ${name}!</h2>
        <p><strong>Product:</strong> ${product}</p>
        <p><strong>Quantity:</strong> ${quantity || 1}</p>
        <p>We'll confirm your order details via WhatsApp shortly.</p>
        <p><strong>WhatsApp:</strong> +27 78 514 8634</p>
        <p>Best regards,<br>SILHOUETTE Team</p>
      `
    });

    // Send order notification to owner
    await sgMail.send({
      to: process.env.SENDER_EMAIL,
      from: process.env.SENDER_EMAIL,
      subject: `New Order: ${product} from ${name}`,
      html: `
        <h2>New Order Received</h2>
        <p><strong>Customer:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Product:</strong> ${product}</p>
        <p><strong>Quantity:</strong> ${quantity || 1}</p>
        <p><strong>Address:</strong> ${address || 'Not provided'}</p>
        <p><small>Order ID: ${data[0].id}</small></p>
      `
    });

    res.json({ success: true, message: 'Order received', orderId: data[0].id });
  } catch (error) {
    console.error('Order error:', error);
    res.status(500).json({ error: error.message });
  }
});

// 4. GET ALL ORDERS (Admin endpoint - requires authentication)
app.get('/api/orders', async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('orders')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) throw error;

    res.json({ orders: data });
  } catch (error) {
    console.error('Orders error:', error);
    res.status(500).json({ error: error.message });
  }
});

// 5. GET ALL SUBSCRIBERS (Admin endpoint)
app.get('/api/subscribers', async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('subscribers')
      .select('*')
      .order('subscribed_at', { ascending: false });

    if (error) throw error;

    res.json({ subscribers: data });
  } catch (error) {
    console.error('Subscribers error:', error);
    res.status(500).json({ error: error.message });
  }
});

// ============================================
// SERVER STARTUP
// ============================================

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`SILHOUETTE Backend Server running on port ${PORT}`);
  console.log(`Email service: ${process.env.SENDGRID_API_KEY ? 'Connected' : 'Not configured'}`);
  console.log(`Database: ${process.env.SUPABASE_URL ? 'Connected' : 'Not configured'}`);
});

module.exports = app;
