-- ============================================
-- SILHOUETTE - Supabase Database Setup
-- Run these SQL commands in your Supabase dashboard
-- ============================================

-- 1. ORDERS TABLE
CREATE TABLE orders (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  customer_name VARCHAR(255) NOT NULL,
  customer_email VARCHAR(255) NOT NULL,
  customer_phone VARCHAR(20),
  product_name VARCHAR(255) NOT NULL,
  quantity INTEGER DEFAULT 1,
  delivery_address TEXT,
  status VARCHAR(50) DEFAULT 'pending',
  notes TEXT,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Add indexes for faster queries
CREATE INDEX idx_orders_email ON orders(customer_email);
CREATE INDEX idx_orders_status ON orders(status);
CREATE INDEX idx_orders_created_at ON orders(created_at DESC);

-- 2. SUBSCRIBERS TABLE
CREATE TABLE subscribers (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  subscribed_at TIMESTAMP DEFAULT NOW(),
  unsubscribed_at TIMESTAMP,
  is_active BOOLEAN DEFAULT TRUE
);

-- Add indexes
CREATE INDEX idx_subscribers_email ON subscribers(email);
CREATE INDEX idx_subscribers_active ON subscribers(is_active);

-- 3. CONTACTS TABLE
CREATE TABLE contacts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  message TEXT NOT NULL,
  status VARCHAR(50) DEFAULT 'new',
  created_at TIMESTAMP DEFAULT NOW(),
  replied_at TIMESTAMP
);

-- Add indexes
CREATE INDEX idx_contacts_email ON contacts(email);
CREATE INDEX idx_contacts_status ON contacts(status);
CREATE INDEX idx_contacts_created_at ON contacts(created_at DESC);

-- 4. PRODUCTS TABLE (for reference)
CREATE TABLE products (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  gender VARCHAR(50),
  price DECIMAL(10, 2),
  image_url VARCHAR(500),
  hook TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Insert sample products
INSERT INTO products (name, gender, price, hook) VALUES
('Imaginari Jacques Yves', 'Masculine', 549, 'The scent of somewhere you haven''t been yet — but already know you belong.'),
('Invicto', 'Masculine', 449, 'It does not ask for attention. It commands it.'),
('Brown Orchid', 'Unisex', 799, 'The scent of velvet in a dark room — rich, textured, impossible to ignore.'),
('Million Royal', 'Masculine', 699, 'The fragrance that made people look twice. Still doing it.'),
('Intense Wayfarer', 'Masculine', 649, 'Some people carry a destination with them. This is their scent.'),
('Venti', 'Masculine', 699, 'Power that moves quietly. Like the wind before the storm.'),
('Delilah Pour Femme', 'Feminine', 549, 'Ancient femininity. Entirely modern allure.'),
('Elysia Marshmallow', 'Feminine', 499, 'The feeling of arriving somewhere you were meant to be.'),
('Pleasant', 'Feminine', 449, 'Soft enough to be remembered. Warm enough to be missed.'),
('Mousuf Wardi', 'Feminine', 549, 'Wrapped in rose and warmth, like a gift chosen specifically for you.'),
('Dolores Pour Femme', 'Feminine', 549, 'Deep, considered, and quietly magnetic.'),
('Classy', 'Feminine', 599, 'The scent of a woman who knew exactly what she was doing before she walked in.');

-- 5. ENABLE ROW LEVEL SECURITY (RLS)
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE subscribers ENABLE ROW LEVEL SECURITY;
ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;
ALTER TABLE products ENABLE ROW LEVEL SECURITY;

-- Create policies to allow public read access to products
CREATE POLICY "Allow public read access to products" ON products
  FOR SELECT USING (true);

-- Create policies for orders (allow inserts from authenticated users or public)
CREATE POLICY "Allow public insert to orders" ON orders
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Allow public read own orders" ON orders
  FOR SELECT USING (true);

-- Create policies for subscribers
CREATE POLICY "Allow public insert to subscribers" ON subscribers
  FOR INSERT WITH CHECK (true);

-- Create policies for contacts
CREATE POLICY "Allow public insert to contacts" ON contacts
  FOR INSERT WITH CHECK (true);

-- ============================================
-- VIEWS FOR ANALYTICS
-- ============================================

-- Total orders by product
CREATE VIEW orders_by_product AS
SELECT 
  product_name,
  COUNT(*) as total_orders,
  SUM(quantity) as total_quantity
FROM orders
GROUP BY product_name
ORDER BY total_orders DESC;

-- Orders by status
CREATE VIEW orders_by_status AS
SELECT 
  status,
  COUNT(*) as count
FROM orders
GROUP BY status;

-- Recent subscribers
CREATE VIEW recent_subscribers AS
SELECT 
  email,
  subscribed_at
FROM subscribers
WHERE is_active = TRUE
ORDER BY subscribed_at DESC
LIMIT 50;

-- ============================================
-- NOTES
-- ============================================
-- 
-- After running these SQL commands:
-- 1. Get your SUPABASE_URL from Settings > API
-- 2. Get your SUPABASE_ANON_KEY from Settings > API
-- 3. Add these to your .env file
-- 4. Your database is ready to use!
--
-- Tables created:
-- - orders: Customer orders
-- - subscribers: Newsletter subscribers
-- - contacts: Contact form submissions
-- - products: Product catalog
--
-- Views created:
-- - orders_by_product: Analytics
-- - orders_by_status: Analytics
-- - recent_subscribers: Analytics
--
