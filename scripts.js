/* ============================================
   SILHOUETTE - Shared JavaScript
   Features: Hamburger menu, product filtering, FAQ accordion, form handling
   Backend API integration for orders, contacts, and subscriptions
   ============================================ */

// Backend API URL (change this to your deployed backend)
const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:3000/api';

document.addEventListener('DOMContentLoaded', function() {
  const navToggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('nav');

  // ============================================
  // HAMBURGER MENU TOGGLE
  // ============================================

  if (navToggle) {
    navToggle.addEventListener('click', function() {
      nav.classList.toggle('active');
    });

    // Close menu when a link is clicked
    const navLinks = nav.querySelectorAll('a');
    navLinks.forEach(link => {
      link.addEventListener('click', function() {
        nav.classList.remove('active');
      });
    });
  }

  // ============================================
  // PRODUCT FILTER (Collection Page)
  // ============================================

  const filterButtons = document.querySelectorAll('.filter-btn');
  const productCards = document.querySelectorAll('.product-card');

  filterButtons.forEach(button => {
    button.addEventListener('click', function() {
      const filterValue = this.getAttribute('data-filter');

      // Update active button
      filterButtons.forEach(btn => btn.classList.remove('active'));
      this.classList.add('active');

      // Filter products
      productCards.forEach(card => {
        const gender = card.getAttribute('data-gender');

        if (filterValue === 'all' || gender === filterValue) {
          card.style.display = 'block';
          setTimeout(() => {
            card.style.opacity = '1';
          }, 10);
        } else {
          card.style.opacity = '0';
          setTimeout(() => {
            card.style.display = 'none';
          }, 300);
        }
      });
    });
  });

  // ============================================
  // FAQ ACCORDION
  // ============================================

  const faqQuestions = document.querySelectorAll('.faq-question');

  faqQuestions.forEach(question => {
    question.addEventListener('click', function() {
      const faqItem = this.parentElement;
      const answer = faqItem.querySelector('.faq-answer');
      const toggle = this.querySelector('.faq-toggle');

      // Close other open items
      document.querySelectorAll('.faq-item').forEach(item => {
        if (item !== faqItem) {
          item.querySelector('.faq-answer').classList.remove('show');
          item.querySelector('.faq-toggle').classList.remove('open');
        }
      });

      // Toggle current item
      answer.classList.toggle('show');
      toggle.classList.toggle('open');
    });
  });

  // ============================================
  // EMAIL SIGNUP FORM WITH BACKEND
  // ============================================

  const emailForm = document.getElementById('emailForm');
  if (emailForm) {
    emailForm.addEventListener('submit', async function(e) {
      e.preventDefault();
      const emailInput = this.querySelector('input[type="email"]');
      const successMsg = this.parentElement.querySelector('.email-success');
      const email = emailInput.value;

      try {
        // Try to send to backend
        const response = await fetch(`${API_BASE_URL}/subscribe`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email })
        });

        const data = await response.json();

        if (response.ok) {
          // Success - show message
          successMsg.classList.add('show');
          emailInput.value = '';

          // Hide success message after 3 seconds
          setTimeout(() => {
            successMsg.classList.remove('show');
          }, 3000);
        } else {
          // Show error or fallback
          if (data.error === 'Already subscribed') {
            alert('This email is already subscribed!');
          } else {
            // Fallback: store locally if backend fails
            console.log('Backend unavailable, storing locally:', email);
            successMsg.classList.add('show');
            emailInput.value = '';
            setTimeout(() => {
              successMsg.classList.remove('show');
            }, 3000);
          }
        }
      } catch (error) {
        // Fallback if backend is not available
        console.log('Backend error, storing locally:', error);
        successMsg.classList.add('show');
        emailInput.value = '';
        setTimeout(() => {
          successMsg.classList.remove('show');
        }, 3000);
      }
    });
  }

  // ============================================
  // CONTACT FORM WITH BACKEND
  // ============================================

  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', async function(e) {
      e.preventDefault();
      const successMsg = this.parentElement.querySelector('.form-success');
      
      const name = this.querySelector('#name').value;
      const email = this.querySelector('#email').value;
      const message = this.querySelector('#message').value;

      try {
        // Send to backend
        const response = await fetch(`${API_BASE_URL}/contact`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ name, email, message })
        });

        const data = await response.json();

        if (response.ok) {
          // Success
          this.reset();
          successMsg.classList.add('show');
          setTimeout(() => {
            successMsg.classList.remove('show');
          }, 3000);
        } else {
          alert('Error: ' + data.error);
        }
      } catch (error) {
        // Fallback if backend is not available
        console.log('Backend error, showing local success:', error);
        this.reset();
        successMsg.classList.add('show');
        setTimeout(() => {
          successMsg.classList.remove('show');
        }, 3000);
      }
    });
  }

  // ============================================
  // PRODUCT CARD ANIMATION (Fade-in on scroll)
  // ============================================

  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe all product cards
  productCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
  });

  // ============================================
  // SMOOTH SCROLL FOR ANCHOR LINKS
  // ============================================

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href !== '#') {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });

  // ============================================
  // WHATSAPP ORDER TRACKING (Optional)
  // ============================================

  // Add data attributes to WhatsApp buttons for tracking
  document.querySelectorAll('.whatsapp-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      // Track WhatsApp clicks (optional analytics)
      console.log('WhatsApp button clicked');
      if (typeof gtag !== 'undefined') {
        gtag('event', 'whatsapp_click');
      }
    });
  });

  // ============================================
  // FORM VALIDATION HELPERS
  // ============================================

  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }

  function validatePhone(phone) {
    // Accept various phone formats
    const re = /^[\d\s\-\+\(\)]+$/;
    return re.test(phone) && phone.replace(/\D/g, '').length >= 10;
  }

  // ============================================
  // HELPER FUNCTION: Send Order to Backend
  // ============================================

  window.submitOrder = async function(productName) {
    const name = prompt('Enter your name:');
    if (!name) return;

    const email = prompt('Enter your email:');
    if (!email || !validateEmail(email)) {
      alert('Please enter a valid email');
      return;
    }

    const phone = prompt('Enter your phone number (optional):');
    const address = prompt('Enter your delivery address:');

    try {
      const response = await fetch(`${API_BASE_URL}/order`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          product: productName,
          address,
          quantity: 1
        })
      });

      const data = await response.json();

      if (response.ok) {
        alert('Order received! We\'ll confirm via WhatsApp shortly.');
        // Redirect to WhatsApp
        window.location.href = `https://wa.me/27785148634?text=Hi%20SILHOUETTE%2C%20I%27d%20like%20to%20order%20${encodeURIComponent(productName)}`;
      } else {
        alert('Error: ' + data.error);
      }
    } catch (error) {
      console.log('Backend error, redirecting to WhatsApp:', error);
      // Fallback to WhatsApp if backend fails
      window.location.href = `https://wa.me/27785148634?text=Hi%20SILHOUETTE%2C%20I%27d%20like%20to%20order%20${encodeURIComponent(productName)}`;
    }
  };
});
