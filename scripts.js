/* ============================================
   SILHOUETTE - Shared JavaScript
   Features: Hamburger menu, product filtering, FAQ accordion, form handling
   ============================================ */

// ============================================
// HAMBURGER MENU TOGGLE
// ============================================

document.addEventListener('DOMContentLoaded', function() {
  const navToggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('nav');

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
  // EMAIL SIGNUP FORM
  // ============================================

  const emailForm = document.querySelector('.email-form');
  if (emailForm) {
    emailForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const emailInput = this.querySelector('input[type="email"]');
      const successMsg = this.parentElement.querySelector('.email-success');

      if (emailInput.value) {
        // Store email (in a real app, this would send to backend)
        console.log('Email subscribed:', emailInput.value);

        // Show success message
        successMsg.classList.add('show');
        emailInput.value = '';

        // Hide success message after 3 seconds
        setTimeout(() => {
          successMsg.classList.remove('show');
        }, 3000);
      }
    });
  }

  // ============================================
  // CONTACT FORM
  // ============================================

  const contactForm = document.querySelector('.contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const successMsg = this.parentElement.querySelector('.form-success');

      // Clear form
      this.reset();

      // Show success message
      successMsg.classList.add('show');

      // Hide success message after 3 seconds
      setTimeout(() => {
        successMsg.classList.remove('show');
      }, 3000);
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
});
