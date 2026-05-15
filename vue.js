   

const LandingPage = {
  template: `
    <div>

     <header class="navbar">
      <!-- Logo and nav bar links -->
      <div class="diamond-logo">
       <img src="/Screenshot_20250622-141138.png" alt="Logo" />
      </div>
      
      <nav class="nav-links">
       <router-link to="/">Home</router-link>
       <router-link to="/about">About Us</router-link>
       <router-link to="/faqs">FAQs</router-link>
       <router-link to="/testimonials">Testimonials</router-link>
<router-link
  to="/contact"
  class="cta-link-btn"
>
  <i class="fas fa-headset"></i>
  Contact Us
</router-link>
</nav>
      
<div class="menu-icon" id="menuIcon" @click="toggleSidebar">
<i :class="isSidebarOpen ? 'fas fa-xmark' : 'fas fa-bars'"></i>
</div>

<button class="order-btn" @click="openPreorderModal">
  <i class="fas fa-cart-shopping"></i>
  Order Now
</button>

<div class="sidebar" :class="{ 'open': isSidebarOpen }"> 
   <router-link to="/">Home</router-link>
   
       <router-link to="/about">About Us</router-link>
       <router-link to="/faqs">FAQs</router-link>
       <router-link to="/testimonials">Testimonials</router-link>
       <router-link to="/contact">Contact</router-link>
      </div>
     </header>
     
     
<div class="carousel">

  <div class="slides" id="slides">

    <div
      class="slide"
      v-for="(slide, index) in slides"
      :key="index"
    >
      <img
        :src="optimizeImage(slide.image)"
        :alt="'Slide ' + (index + 1)"
        loading="lazy"
      />
    </div>

  </div>

</div>

<div class="dots" id="dots"></div>

     
     
     <div class="akolace-content">
      <h2><i class="fa-solid fa-leaf"></i>Welcome to AKOL'ACE Brew</h2>
      <p>The Refined Relaxation Spirit.</p>
      <p>
        Crafted with Science. Felt by You.
        A richly blended palm wine infusion crafted with fruits and herbs for smooth relaxation, exotic taste, and elevated moments.
        AKOL'ACE Brew is designed for people who want more than just a drink. It is for people who value calmness, premium experiences, connection, and culture.
      </p>
      
      <h3><i class="fa-solid fa-heart"></i>
 What Makes AKOL'ACE Brew Different</h3>
      <p>
        AKOL'ACE Brew transforms traditional palm wine into a modern relaxation experience — refined for today's generation while preserving its cultural identity.
        Infused with carefully selected fruits and botanicals, every bottle delivers a smooth, calming experience designed for enjoyment, connection, and premium lifestyle moments.
      </p>
      
      <h3><i class="fa-solid fa-box"></i> Available In</h3>
<ul>
 <li>330ml PET bottles</li>
 <li>200ml PET bottles</li>
 <li>Event stands (by request)</li>
</ul>
      
      <br /><br />
      
      <h3><i class="fa-solid fa-crown"></i>
 For the Ones Who Know Better</h3>
      <blockquote>
        "We aren't trying to be just another drink — AKOL'ACE Brew is the better drink, for the better version of you. Proudly rooted in African heritage, refined for the modern premium lifestyle."
      </blockquote>
      
      <div class="cta-buttons">
      

<button
  class="preorder-trigger-btn"
  @click="openPreorderModal"
>
  <i class="fas fa-shopping-cart"></i>
  Pre-Order
</button>
       <a href="https://wa.me/2349068929746?text=Hi, I'd like to locate the nearest AKOL'ACE Brew depot. Can you help me?" target="_blank">
        <button><i class="fas fa-map-marker-alt"></i> Find a Depot</button>
       </a>
       
       <a href="https://wa.me/2349068929746?text=Please add me to your newsletter or updates." target="_blank">
        <button><i class="fas fa-envelope"></i> Subscribe</button>
       </a>
       
<router-link
  to="/contact"
  class="cta-anchor-btn"
>
  
    <i class="fas fa-headset"></i>
    Contact Us
  
</router-link>
       


      </div>
     </div>



<!-- PREORDER MODAL -->

<div
  class="preorder-modal-overlay"
  v-if="showPreorderModal"
  @click="closePreorderModal"
>

  <div
    class="preorder-modal"
    @click.stop
  >

    <!-- CLOSE BUTTON -->

    <button
      class="close-modal-btn"
      @click="closePreorderModal"
      aria-label="Close Modal"
      type="button"
    >
      <i class="fas fa-xmark"></i>
    </button>

    <!-- HEADER -->

    <div class="modal-header">

      <div class="modal-badge">
        <i class="fas fa-cart-shopping"></i>
        AKOL'ACE Brew Ordering
      </div>

      <h2>
        Choose Purchase Type
      </h2>

      <p>
        Select the ordering option that best matches your needs.
      </p>

    </div>

    <!-- BULK PURCHASE -->

    <div class="purchase-option">

      <div class="purchase-icon business">
        <i class="fas fa-store"></i>
      </div>

      <div class="purchase-content">

        <h3>
          Bulk Purchase
        </h3>

        <p>
          Designed for supermarkets, distributors,
          event vendors, retail stores and depot supply.
        </p>

        <ul class="purchase-features">

          <li>
            <i class="fas fa-check-circle"></i>
            Carton / pack ordering
          </li>

          <li>
            <i class="fas fa-check-circle"></i>
            Business delivery requests
          </li>

          <li>
            <i class="fas fa-check-circle"></i>
            Wholesale supply processing
          </li>

        </ul>

      </div>

      <router-link
        to="/preorderform"
        class="purchase-btn"
        @click="closePreorderModal"
      >
        Continue
      </router-link>

    </div>

    <!-- INDIVIDUAL PURCHASE -->

    <div class="purchase-option">

      <div class="purchase-icon personal">
        <i class="fas fa-bottle-water"></i>
      </div>

      <div class="purchase-content">

        <h3>
          Individual Purchase
        </h3>

        <p>
          Order personal bottles, request nearby depot
          assistance or chat directly with AKOL'ACE Brew.
        </p>

        <ul class="purchase-features">

          <li>
            <i class="fas fa-check-circle"></i>
            Personal bottle orders
          </li>

          <li>
            <i class="fas fa-check-circle"></i>
            Nearby depot assistance
          </li>

          <li>
            <i class="fas fa-check-circle"></i>
            WhatsApp direct communication
          </li>

        </ul>

      </div>

      <a
        href="https://wa.me/2349068929746?text=Hello%20AKOL%E2%80%99ACE%20Brew%2C%20I%E2%80%99d%20like%20to%20make%20an%20individual%20purchase."
        target="_blank"
        rel="noopener"
        class="purchase-btn whatsapp-btn"
      >
        Continue
      </a>

    </div>

  </div>

</div>


    </div>
  `,
  
data() {
  return {
  isSidebarOpen: false,
  currentSlide: 0,
  showPreorderModal: false,
carouselInterval: null,
    slides: [
      {
        image: '/Screenshot_20250618-151925.png'
      },
      {
        image: '/Screenshot_20250723-103858_1.jpg'
      },
      {
        image: '/Screenshot_20250723-103958_1.jpg'
      }
    ]
  }
},
  
  watch: {
  $route() {
    this.closePreorderModal();
    this.isSidebarOpen = false;
    document.getElementById('sidebar')?.classList.remove('open');
    document.body.style.overflow = 'auto'; // Force restore scroll on navigation
  }
},

mounted() {
  this.startCarousel()
  
  window.addEventListener(
    'keydown',
    this.handleEscapeKey
  )
},

beforeUnmount() {
  clearInterval(this.carouselInterval);
  window.removeEventListener('keydown', this.handleEscapeKey); // Clean up the ghost listener
},


  methods: {
handleEscapeKey(event) {

  if (
    event.key === 'Escape' &&
    this.showPreorderModal
  ) {
    this.closePreorderModal()
  }

},
openPreorderModal() {

  this.isSidebarOpen = false

  this.showPreorderModal = true

  document.body.style.overflow = 'hidden'

},

closePreorderModal() {

  this.showPreorderModal = false

  document.body.style.overflow = 'auto'

},

optimizeImage(url) {

  // future optimization logic goes here

  return url
},

    toggleSidebar() {
  this.isSidebarOpen = !this.isSidebarOpen;
},

    
startCarousel() {
  const slides = document.querySelectorAll('.slide');
  const dotsContainer = document.getElementById('dots');

  if (!slides.length || !dotsContainer) return;

  // 1. Clear container to prevent duplicate dots on re-mount
  dotsContainer.innerHTML = '';

  // 2. CREATE DOTS
  slides.forEach((_, index) => {
    const dot = document.createElement('span');
    dot.classList.add('dot');
    if (index === 0) dot.classList.add('active');

    dot.addEventListener('click', () => {
      // Manual override: stop interval briefly or just jump
      this.goToSlide(index, slides);
    });

    dotsContainer.appendChild(dot);
  });

  // 3. INITIAL STATE
  slides.forEach((s, i) => s.style.opacity = i === 0 ? '1' : '0');

  // 4. THE INTERVAL (Surgical optimization)
  this.carouselInterval = setInterval(() => {
    const nextIndex = (this.currentSlide + 1) % slides.length;
    this.goToSlide(nextIndex, slides);
  }, 4000);
},

// Helper method to keep logic DRY (Don't Repeat Yourself)
goToSlide(index, slides) {
  const dots = document.querySelectorAll('.dot');
  if (!slides[index] || !dots[index]) return; // Surgical safety catch

  // Hide current
  slides[this.currentSlide].style.opacity = '0';
  dots[this.currentSlide]?.classList.remove('active');

  // Update State
  this.currentSlide = index;

  // Show next
  slides[this.currentSlide].style.opacity = '1';
  dots[this.currentSlide].classList.add('active');
}


    
  }


};



const AboutUsPage = {
  template: `
  <div id="about-page">

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&display=swap" rel="stylesheet">

    <div class="about-back-btn" onclick="history.back()">
      <i class="fas fa-arrow-left"></i> Back
    </div>


    <div class="about-container">

      <h1>More About AKOL’ACE Brew</h1>

      <p>
        <strong class="about-U">
          A New Standard in Natural Wellness Beverages
        </strong>
      </p>

      <p>
        At <b>AKOL’ACE</b>, we believe health is not a luxury — it’s a daily lifestyle.
        Born out of a desire to revive the power of nature in our everyday drinks,
        AKOL’ACE Brew is our bold answer to modern wellness:
        a premium Botanical Wellness wine blended with purposeful natural ingredients.
      </p>

      <p>
        Our mission is to change how people see beverages,
        not just as a source of fun and taste but as a pathway to safety,
        wellness, and purposeful living.
      </p>

      <p>
        Every bottle of AKOL’ACE Brew supports your body’s core systems —
        heart, brain, immune, digestive, and reproductive —
        while delivering a refreshing taste that respects the heritage of palm wine.
      </p>

      <p>
        We're not just another beverage company.
        We’re a brand with soul.
        A purpose-driven team committed to helping people feel better,
        live better, and connect better — one sip at a time.
      </p>

      <p>
        Whether for vitality, intimacy, or a clean health upgrade —
        <span class="about-highlight">
          AKOL’ACE Brew offers revival. Naturally.
        </span>
      </p>

      <h2>Key Benefits</h2>

      <ul>
        <li><span>🧠</span> Mental clarity & calm focus</li>
        <li><span>❤️</span> Supports heart and blood flow</li>
        <li><span>🔥</span> Gentle aphrodisiac energy</li>
        <li><span>🛡️</span> Boosts immune resilience</li>
        <li><span>🦴</span> Strengthens bones and joints</li>
        <li><span>🍃</span> A 99.9% natural alternative to synthetic drinks</li>
      </ul>

      <p class="about-highlight">
        Your body will thank you. Your mood will show it.
      </p>

      <p>
        <strong>
          Try AKOL’ACE Brew today —
          “If you love AKOL’ACE Brew, it's because you love yourself.”
        </strong>
      </p>

    </div>
  </div>
  `
};


const FAQSPage = {
  template: `
  <div id="faqs-page">

    <div class="faq-back-btn" onclick="history.back()">
      <i class="fas fa-arrow-left"></i> Back
    </div>



    <div class="faqs-container">

      <h2>General FAQs</h2>

      <button class="accordion" @click="toggleAccordion">
        <i class="fas fa-chevron-down icon"></i>
        What is AKOL’ACE Brew?
      </button>

      <div class="panel">
        <p>
          Akol'ace Brew is a premium, naturally crafted palm wine brand that infuses traditional palm wine with fruits and superfoods to create a health-conscious, refreshing beverage.       </p>
      </div>

      <button class="accordion" @click="toggleAccordion">
        <i class="fas fa-chevron-down icon"></i>
        Is AKOL’ACE Brew Alcoholic?
      </button>

      <div class="panel">
        <p>
          Yes, AKOL’ACE Brew retains the natural alcohol content of
          traditionally fresh palm sap while enhancing vitality
        </p>
      </div>

      <button class="accordion" @click="toggleAccordion">
        <i class="fas fa-chevron-down icon"></i>
        What makes AKOL’ACE Brew different?
      </button>

      <div class="panel">
        <p>
          Unlike regular wine, AKOL’ACE Brew is blended with natural extracts
          that support vitality, digestion, circulation, and mental clarity.
        </p>
      </div>

      <button class="accordion" @click="toggleAccordion">
        <i class="fas fa-chevron-down icon"></i>
        Can I drink it daily?
      </button>

      <div class="panel">
        <p>
          Yes. One bottle daily is ideal for health-conscious and moderation use
        </p>
      </div>

      <button class="accordion" @click="toggleAccordion">
        <i class="fas fa-chevron-down icon"></i>
        Does it have side effects?
      </button>

      <div class="panel">
        <p>
          AKOL’ACE Brew is made with natural ingredients, but moderation is advised.
        </p>
      </div>

      <button class="accordion" @click="toggleAccordion">
        <i class="fas fa-chevron-down icon"></i>
        Is it suitable for women?
      </button>

      <div class="panel">
        <p>
          Absolutely. It supports wellness, vitality, and hormonal balance for both men and women.
        </p>
      </div>

      <button class="accordion" @click="toggleAccordion">
        <i class="fas fa-chevron-down icon"></i>
        How should it be stored?
      </button>

      <div class="panel">
        <p>
          Store in a cool dry place. Refrigeration is recommended after opening.
        </p>
      </div>

      <button class="accordion" @click="toggleAccordion">
        <i class="fas fa-chevron-down icon"></i>
        Where can I buy AKOL’ACE Brew?
      </button>

      <div class="panel">
        <p>
          Available through depots, retailers, and official distributors.
        </p>
      </div>

    </div>

  </div>
  `,

  methods: {
    toggleAccordion(event) {

      const button = event.currentTarget
      const panel = button.nextElementSibling
      const icon = button.querySelector('.icon')

      button.classList.toggle('active')

      if (panel.style.display === 'block') {
        panel.style.display = 'none'
      } else {
        panel.style.display = 'block'
      }

      icon.classList.toggle('fa-chevron-down')
      icon.classList.toggle('fa-times')
    }
  }
};


const TestimonialsPage = {
  template: `
  
  <div id="testimonials-page">

    <div class="testimonial-back-btn" onclick="history.back()">
      <i class="fas fa-arrow-left"></i> Back
    </div>

    <h2 class="testimonials-title">
      ✨ What People Are Saying
    </h2>

    <div class="testimonials-wrapper">

      <div class="testimonial-card">
        <img src="https://i.pravatar.cc/100?img=1" alt="Uche A." />

        <div class="testimonial-content">
          <p class="testimonial-quote">
            "I didn't expect much at first, but AKOL’ACE Brew surprised me. It gave me calm energy and clarity without the usual sugar crash."
          </p>

          <p class="testimonial-author">
            — Uche A., Lagos
          </p>

          <p class="testimonial-role">
            Tech Entrepreneur
          </p>

          <span class="retail-badge">
            Available at Jendol Superstores
          </span>
        </div>
      </div>

      <div class="testimonial-card">
        <img src="https://i.pravatar.cc/100?img=2" alt="Ruth O." />

        <div class="testimonial-content">
          <p class="testimonial-quote">
            "This is the only drink I've taken that made me feel genuinely refreshed inside. It feels premium and intentional."
          </p>

          <p class="testimonial-author">
            — Ruth O., Ibadan
          </p>

          <p class="testimonial-role">
            Wellness Enthusiast
          </p>

          <span class="retail-badge">
            Seen at Market Square
          </span>
        </div>
      </div>

      <div class="testimonial-card">
        <img src="https://i.pravatar.cc/100?img=3" alt="Emmanuel K." />

        <div class="testimonial-content">
          <p class="testimonial-quote">
            "My wife and I love it. Smooth, refreshing and different from regular palm wine drinks."
          </p>

          <p class="testimonial-author">
            — Emmanuel K., Abeokuta
          </p>

          <p class="testimonial-role">
            Creative Director
          </p>

          <span class="retail-badge">
            Partner Retail Experience
          </span>
        </div>
      </div>

      <div class="testimonial-card">
        <img src="https://i.pravatar.cc/100?img=4" alt="Tobi F." />

        <div class="testimonial-content">
          <p class="testimonial-quote">
            "As a fitness coach, I recommend it as a cleaner alternative to synthetic energy drinks."
          </p>

          <p class="testimonial-author">
            — Tobi F., Lagos Island
          </p>

          <p class="testimonial-role">
            Fitness Coach
          </p>

          <span class="retail-badge">
            Retail Interest Growing
          </span>
        </div>
      </div>

      <div class="testimonial-card">
        <img src="https://i.pravatar.cc/100?img=5" alt="Chiamaka N." />

        <div class="testimonial-content">
          <p class="testimonial-quote">
            "AKOL’ACE Brew gave me that quiet confidence and refreshed feeling. It's becoming part of my lifestyle."
          </p>

          <p class="testimonial-author">
            — Chiamaka N., Port Harcourt
          </p>

          <p class="testimonial-role">
            Brand Consultant
          </p>

          <span class="retail-badge">
            Trending in Premium Stores
          </span>
        </div>
      </div>

      <div class="testimonial-card">
        <img src="https://i.pravatar.cc/100?img=6" alt="Retail Buyer" />

        <div class="testimonial-content">
          <p class="testimonial-quote">
            "Customers are curious because the branding feels premium. The repeat purchases have been encouraging."
          </p>

          <p class="testimonial-author">
            — Anonymous Retail Buyer
          </p>

          <p class="testimonial-role">
            Nigerian Supermarket Chain
          </p>

          <span class="retail-badge">
            Retail Shelf Trial
          </span>
        </div>
      </div>

    </div>

  </div>
  
  `
};


const ContactPage = {
  template: `
  
  <div id="contact-page">

    <!-- Back Button -->
    <div class="contact-back-btn" onclick="history.back()">
      <i class="fas fa-arrow-left"></i>
    </div>

    <!-- Hero -->
    <div class="contact-hero">

      <div class="contact-overlay">

        <h1 class="contact-title">
          Let’s Connect
        </h1>

        <p class="contact-subtitle">
          Questions, partnerships, wholesale orders or wellness enquiries.  
          AKOL’ACE Brew is one click away.
        </p>

      </div>

    </div>

    <!-- Main Contact Grid -->
    <div class="contact-grid">

      <!-- WhatsApp -->
      <a 
        href="https://wa.me/2349068929746?text=Hello%20AKOL%E2%80%99ACE%20Brew%2C%20I%E2%80%99d%20like%20to%20make%20an%20enquiry."
        target="_blank"
        class="contact-card whatsapp-card"
      >

        <div class="contact-icon">
          <i class="fab fa-whatsapp"></i>
        </div>

        <div class="contact-details">
          <h3>WhatsApp Support</h3>
          <p>Fast responses for orders & enquiries</p>
        </div>

        <div class="contact-arrow">
          <i class="fas fa-arrow-up-right-from-square"></i>
        </div>

      </a>

      <!-- Email -->
      <a 
        href="mailto:akolacenig@gmail.com"
        class="contact-card email-card"
      >

        <div class="contact-icon">
          <i class="fas fa-envelope-open-text"></i>
        </div>

        <div class="contact-details">
          <h3>Email Us</h3>
          <p>Business, partnerships & support</p>
        </div>

        <div class="contact-arrow">
          <i class="fas fa-arrow-up-right-from-square"></i>
        </div>

      </a>

      <!-- Instagram -->
      <a 
        href="https://instagram.com/akolace_official"
        target="_blank"
        class="contact-card instagram-card"
      >

        <div class="contact-icon">
          <i class="fab fa-instagram"></i>
        </div>

        <div class="contact-details">
          <h3>Instagram</h3>
          <p>@akolace_official</p>
        </div>

        <div class="contact-arrow">
          <i class="fas fa-arrow-up-right-from-square"></i>
        </div>

      </a>

      <!-- TikTok -->
      <a 
        href="https://tiktok.com/@akolaceworld"
        target="_blank"
        class="contact-card tiktok-card"
      >

        <div class="contact-icon">
          <i class="fab fa-tiktok"></i>
        </div>

        <div class="contact-details">
          <h3>TikTok</h3>
          <p>@akolaceworld</p>
        </div>

        <div class="contact-arrow">
          <i class="fas fa-arrow-up-right-from-square"></i>
        </div>

      </a>

    </div>

    <!-- Office Card -->
    <div class="office-card">

      <div class="office-icon">
        <i class="fas fa-location-dot"></i>
      </div>

      <div class="office-content">
        <h2>Head Office</h2>

        <p>
          AKOL’ACE Nigeria Enterprise  
          <br>
          Abeokuta, Ogun State, Nigeria
        </p>
      </div>

    </div>

  </div>
  
  `
};


const PreOrderFormPage = {
  template: `
  <div id="preorder-page">
    <button @click="$router.go(-1)" class="preorder-back-btn">
      <i class="fas fa-arrow-left"></i>
    </button>

    <div class="preorder-header">
      <div class="preorder-title-wrap">
        <h1 class="preorder-title">Wholesale Supply Request</h1>
      </div>
      <p class="preorder-subtitle">
        Register your interest for early access. We provide custom logistics-based quotes for all wholesale orders.
      </p>
    </div>

    <div class="preorder-card">
      <div class="preorder-field">
        <label><i class="fas fa-building"></i> Business / Store Name</label>
        <input type="text" v-model="form.business_name" placeholder="e.g. JendSHARESuperstores Abeokuta" class="preorder-input">
      </div>

      <div class="preorder-field">
        <label><i class="fas fa-user-tie"></i> Contact Person</label>
        <input type="text" v-model="form.contact_person" placeholder="Manager or representative name" class="preorder-input">
      </div>

      <div class="preorder-field">
        <label><i class="fas fa-phone-volume"></i> Business Phone Number</label>
        <input type="tel" v-model="form.phone" placeholder="+234..." class="preorder-input">
      </div>

      <div class="preorder-field">
        <label><i class="fas fa-envelope-open-text"></i> Business Email</label>
        <input type="email" v-model="form.email" placeholder="Enter business email" class="preorder-input">
      </div>

      <div class="preorder-field">
        <label><i class="fas fa-store"></i> Business Type</label>
        <div class="select-wrap">
          <select v-model="form.business_type">
            <option disabled value="">Select Business Type</option>
            <option>Supermarket</option>
            <option>Distributor</option>
            <option>Retail Store</option>
            <option>Lounge / Restaurant</option>
            <option>Other</option>
          </select>
          <i class="fas fa-chevron-down select-icon"></i>
        </div>
      </div>

      <div class="preorder-field">
        <label><i class="fas fa-bottle-water"></i> Product Package</label>
        <div class="select-wrap">
          <select v-model="form.product_package">
            <option disabled value="">Select Package</option>
            <option value="370ml">AKOL’ACE Brew 370ml Carton </option>
          </select>
          <i class="fas fa-chevron-down select-icon"></i>
        </div>
      </div>

      <div class="supply-info-box" v-if="form.product_package">
        <div class="supply-info-item">
          <span class="supply-label"><i class="fas fa-box"></i> Bottles Per Carton</span>
          <span class="supply-value">12 Bottles</span>
        </div>
        <div class="supply-info-item">
          <span class="supply-label"><i class="fas fa-flask"></i> Total Bottles</span>
          <span class="supply-value">{{ totalBottles }} Bottles</span>
        </div>
      </div>

      <div class="preorder-field">
        <label><i class="fas fa-boxes-stacked"></i> Number of Cartons</label>
        <input type="number" min="1" v-model.number="form.cartons" class="preorder-input">
      </div>

      <div class="preorder-field">
        <label><i class="fas fa-location-dot"></i> Delivery Address</label>
        <textarea v-model="form.location" placeholder="Full delivery address" class="notes-area"></textarea>
      </div>

      <div class="quote-info-box">
        <p><i class="fas fa-info-circle"></i> <strong>Note:</strong> We will contact you with a formal quote including logistics costs.</p>
      </div>

      <div v-if="statusMessage" :class="['status-box', statusType]">
        <i :class="statusType === 'success' ? 'fas fa-check-circle' : 'fas fa-exclamation-circle'"></i>
        {{ statusMessage }}
      </div>

      <button @click="submitOrder" :disabled="loading" class="submit-btn">
        <i v-if="!loading" class="fas fa-paper-plane"></i>
        {{ loading ? 'Sending...' : 'Submit Quote Request' }}
      </button>
    </div>

    <footer class="preorder-footer">Powered by AKOL’ACE Brew</footer>
  </div>
  `,

  data() {
    return {
      loading: false,
      statusMessage: '',
      statusType: '', 
      bottlesPerCarton: 12,
      form: {
        business_name: '',
        contact_person: '',
        phone: '',
        email: '',
        business_type: '',
        product_package: '370ml',
        cartons: 1,
        location: '',
        notes: ''
      }
    }
  },

  computed: {
    totalBottles() {
      return (this.form.cartons || 0) * this.bottlesPerCarton;
    }
  },

  methods: {
    async submitOrder() {
  // 1. Clear previous status messages
  this.statusMessage = '';
  
  // 2. Validation Check
  const required = ['business_name', 'phone', 'email', 'location', 'product_package'];
  for (const field of required) {
    if (!this.form[field]) {
      this.statusMessage = `Please provide your ${field.replace('_', ' ')}`;
      this.statusType = 'error';
      return;
    }
  }

  this.loading = true;

  try {
    // 3. Define the Business Logic Constants
    const PRICE_PER_CARTON = 8400; // ₦8,400 per carton
    const calculatedRevenue = (this.form.cartons || 1) * PRICE_PER_CARTON;

    // 4. Insert into Supabase
    const { error } = await window.sb
      .from('pre_orders')
      .insert([{
        business_name: this.form.business_name,
        contact_person: this.form.contact_person,
        phone: this.form.phone,
        email: this.form.email,
        business_type: this.form.business_type,
        product_size: this.form.product_package, // Maps to '370ml'
        quantity_cartons: this.form.cartons,
        total_bottles: this.totalBottles,       // Derived from your computed property
        revenue_naira: calculatedRevenue,        // ✅ Now synced with HistoryPage
        address: this.form.location,            // Maps 'location' to 'address' column
        status: 'quote_requested',
        created_at: new Date()
      }]);

    if (error) throw error;

    // 5. Handle Success
    this.statusMessage = "Request Sent Successfully! Redirecting...";
    this.statusType = "success";
    
    setTimeout(() => {
      this.$router.push('/'); 
    }, 4000);

  } catch (err) {
    // 6. Handle Database/Network Errors
    this.statusMessage = "Error: " + err.message;
    this.statusType = "error";
  } finally {
    this.loading = false;
  }
}

  }
};



const LoginPage = {
  template: `
  <div id="admin-login-page">
    <div class="brand-overlay"></div>

    <div class="register-container">
      <div class="register-header">
        
        <p class="admin-badge">AKOL’ACE Brew Control Panel</p>
      </div>
      

  

      <div class="register-card">

        <!-- STATUS -->
        <div v-if="statusMessage" :class="['status-box', statusType]">
          <i :class="statusType === 'success'
            ? 'fas fa-check-circle'
            : 'fas fa-exclamation-circle'">
          </i>
          {{ statusMessage }}
        </div>

        <!-- FORM -->
        <form class="register-form" @submit.prevent="handleLogin">

          <div class="field-group">
            <label>
              <i class="fas fa-envelope"></i> Email
            </label>

            <input
              type="email"
              v-model="form.email"
              class="reg-input"
              placeholder="akolacenig@gmail.com"
              required
            />
          </div>

          <div class="field-group">
            <label>
              <i class="fas fa-key"></i> Password
            </label>

            <div class="pass-wrapper">
              <input
                :type="showPass ? 'text' : 'password'"
                v-model="form.password"
                class="reg-input"
                required
              />

              <i
                @click="showPass = !showPass"
                :class="[
                  'fas',
                  showPass ? 'fa-eye-slash' : 'fa-eye',
                  'toggle-icon'
                ]"
              ></i>
            </div>
          </div>

          <button
            type="submit"
            :disabled="loading"
            class="signup-btn"
          >
            <span v-if="!loading">
              Login <i class="fas fa-arrow-right"></i>
            </span>

            <span v-else>
              <i class="fas fa-spinner fa-spin"></i>
              Authenticating...
            </span>
          </button>

        </form>

      </div>

      <footer class="reg-footer">
        © 2026 AKOL’ACE Brew | Secure Access Layer
      </footer>

    </div>
  </div>
  `,
  
  data() {
    return {
      loading: false,
      statusMessage: '',
      statusType: '',
      showPass: false,
      form: {
        email: '',
        password: ''
      }
    };
  },
  
  methods: {
    async handleLogin() {
      this.loading = true;
      this.statusMessage = '';
      
      try {
        const { data, error } = await window.sb.auth.signInWithPassword({
          email: this.form.email,
          password: this.form.password
        });
        
        if (error) throw error;
        
        // 🔐 AUTHORIZED ADMINS ONLY
        const allowedAdmins = [
          "akolacenig@gmail.com"
        ];
        
        if (!allowedAdmins.includes(data.user.email)) {
          throw new Error("Unauthorized access.");
        }
        
        localStorage.setItem(
  "akolace_admin",
  JSON.stringify(data.user)
);   
        this.statusMessage = "Access granted. Redirecting...";
        this.statusType = "success";
        
        setTimeout(() => {
          this.$router.push('/admin');
          }, 1200);
        
      } catch (err) {
        this.statusMessage = err.message;
        this.statusType = "error";
      } finally {
        this.loading = false;
      }
    }
  }
};


  
const AdminPanelPage = {
  template: `

  <div id="admin-panel-page">

    <!-- TOPBAR -->
    <div class="admin-topbar">

      <div class="brand-side">

        <div class="brand-logo">
          A
        </div>

        <div>

          <h2 class="brand-title">
            Akol'ace Brew
          </h2>

          <p class="brand-subtitle">
            Admin Control Panel
          </p>

        </div>

      </div>

      <div class="topbar-actions">


        <!-- PROFILE -->
        <div class="admin-profile">

          <div class="admin-avatar">
            {{ adminInitial }}
          </div>

          <div class="admin-meta">

            <span class="admin-name">
              {{ adminName }}
            </span>

            <small>
              Administrator
            </small>

          </div>

        </div>

<!-- HOME -->
<button
  class="share-btn"
  @click="$router.push('/')">
  <i class="fas fa-house"></i> </button>

        <!-SHARE -->
        <button
          class="share-btn"
          @click="shareMetrics">
          <i class="fas fa-share-nodes"></i>
        </button>




      </div>

    </div>


    <!-- DASHBOARD -->
    <div class="dashboard-grid">


      <!-- PREORDER -->
      <div class="dashboard-card large-card">

        <div class="card-header">

          <h3>
            PreOrder Info
          </h3>

          <button
            class="mini-btn"
            @click="$router.push('/preorderinfo')"
          >
            View All
          </button>

        </div>

        <div class="activity-list">

          <div
            class="activity-item"
            v-for="item in preorderInfo"
            :key="item.id"
          >

            <div class="activity-dot"></div>

            <div class="activity-content">

              <strong>
                {{ item.name }}
              </strong>

              <span>
                {{ item.time }}
              </span>

            </div>

          </div>

        </div>

      </div>


      <!-- ORDERS -->
      <div class="dashboard-card">

        <div class="card-header">
          <h3>
            Product Ordered
          </h3>
        </div>

        <div class="metric-display">

          <h1>
            {{ totalOrders }}
          </h1>

          <span>
            Packs Ordered
          </span>

        </div>

      </div>


      <!-- REVENUE -->
      <div class="dashboard-card">

        <div class="card-header">
          <h3>
            Gross Revenue
          </h3>
        </div>

        <div class="metric-display">

          <h1>
            ₦{{ revenue.toLocaleString() }}
          </h1>

          <span>
            Total Sales
          </span>

        </div>

      </div>





      <!-- ACTION -->
      <div class="dashboard-card action-card">

        <div class="card-header">
          <h3>
            Quick Access
          </h3>
        </div>

        <div class="action-buttons">

          <button
            class="action-btn"
            @click="$router.push('/history')"
          >
            <i class="fas fa-clock-rotate-left"></i>
            History
          </button>


          <button
            class="action-btn logout-btn"
            @click="logout"
          >
            <i class="fas fa-right-from-bracket"></i>
            Logout
          </button>

        </div>

      </div>

    </div>

  </div>
  `,


  data() {

    return {

      /* =========================
         SWITCH
      ========================= */

      useMockData: false,


      /* =========================
         DASHBOARD DATA
      ========================= */

      adminName: "Admin",

      totalOrders: 0,

      revenue: 0,

   

      preorderInfo: []

    };
  },


  computed: {

    adminInitial() {

      return this.adminName
        .charAt(0)
        .toUpperCase();
    },

    
  },


  async mounted() {

    /* =========================
       ADMIN NAME
    ========================= */

    const admin =
      JSON.parse(
        localStorage.getItem(
          "akolace_admin"
        )
      );

    if (admin?.email) {

      this.adminName =
        admin.email.split("@")[0];
    }


    /* =========================
       DATA MODE
    ========================= */

    if (this.useMockData) {

      this.loadMockData();

    } else {

      await this.loadSupabaseData();
    }

  },


  methods: {

    /* =========================
       MOCK MODE
    ========================= */

    loadMockData() {

      console.log(
        "🧪 Running Mock Data Mode"
      );

      this.totalOrders = 1370;

      this.revenue = 250000;

      this.preorderInfo = [

        {
          id: 1,
          name: "Jendor Market",
          time: "2 hours ago"
        },

        {
          id: 2,
          name: "Rendezvous Hotel",
          time: "3 hours ago"
        },

        {
          id: 3,
          name: "Aluminum Hotel",
          time: "5 hours ago"
        }

      ];
    },


    /* =========================
       LIVE SUPABASE MODE
    ========================= */

    async loadSupabaseData() {
  try {
    const { data, error } = await window.sb
      .from("pre_orders")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) throw error;
    const safeData = data || [];

    // 1. Total Packs (Cartons) Ordered
    this.totalOrders = safeData.reduce((sum, item) => {
      return sum + Number(item.quantity_cartons || 0);
    }, 0);

    // 2. Gross Revenue (Pulled directly from the new DB column ✅)
    this.revenue = safeData.reduce((sum, item) => {
      return sum + Number(item.revenue_naira || 0);
    }, 0);

    // 3. Activity List
    this.preorderInfo = safeData.slice(0, 5).map((item, index) => ({
      id: item.id || index,
      name: item.business_name || "Unknown Order",
      time: this.timeAgo(item.created_at)
    }));

  } catch (err) {
    console.error("❌ Fetch Error:", err);
    this.useMockData = true;
    this.loadMockData();
  }
},



    /* =========================
       TIME FORMATTER
    ========================= */

    timeAgo(dateString) {

  if (!dateString) return "Unknown time";

  const now = new Date();
  const created = new Date(dateString);

  const seconds = Math.floor((now - created) / 1000);

  if (seconds < 60) return "Just now";

  const hours = Math.floor(seconds / 3600);
  if (hours < 1) return `${Math.floor(seconds / 60)} min ago`;

  const days = Math.floor(hours / 24);
  if (days > 0) return `${days} days ago`;

  return `${hours} hours ago`;
},

// ========================= 
// TOAST UTILITY
// =========================

 showToast(message) {
  const toast = document.createElement("div");
  toast.className = "toast-notification";
  toast.textContent = message;
  document.body.appendChild(toast);

  setTimeout(() => toast.classList.add("toast-visible"), 10);
  setTimeout(() => {
    toast.classList.remove("toast-visible");
    setTimeout(() => toast.remove(), 400);
  }, 2800);
},
        /* =========================
       SHARE METRICS (LINK ONLY)
    ========================= */
    async shareMetrics() {

  const shareUrl = `${window.location.origin}/public-metrics`;

  const shareData = {
    title: "Akol'ace Brew - Live Metrics",
    text: "View our live wholesale and supply metrics.",
    url: shareUrl
  };

  try {
    if (navigator.share) {
      await navigator.share(shareData);
} else {
  await navigator.clipboard.writeText(shareUrl);
  this.showToast("Link copied to clipboard!");
}
  } catch (err) {
    console.warn("Share failed:", err);
  }

},
    /* =========================
       LOGOUT
    ========================= */

    async logout() {

      try {

        await window.sb
          .auth.signOut();

        localStorage.removeItem(
          "akolace_admin"
        );

        this.$router.push("/nexus-auth-v9-ak-7722");

      } catch (err) {

        console.error(err);
      }
    }

  }

};



const PreOrderInfoPage = {
  template: `
    <div id="preorder-info-page">

      <!-- TOPBAR -->
      <div class="info-topbar">

        <div class="topbar-left">

          <button class="back-btn" @click="$router.push('/admin')">
            <i class="fas fa-arrow-left"></i>
          </button>

          <div>
            <h1 class="page-title">PreOrder Requests</h1>
            <p class="page-subtitle">
              Wholesale supply requests submitted through the public form
            </p>
          </div>

        </div>

        <div class="topbar-actions">
          <button
            class="refresh-btn"
            @click="fetchOrders"
            :disabled="loading"
          >
            <i class="fas fa-rotate" :class="{ 'fa-spin': loading }"></i>
          </button>
        </div>

      </div>


      <!-- SEARCH -->
      <div class="search-box">
        <i class="fas fa-search"></i>
        <input
          type="text"
          v-model.trim="searchQuery"
          placeholder="Search business, contact or phone..."
        />
      </div>


      <!-- LOADING -->
      <div v-if="loading" class="empty-state">
        <i class="fas fa-spinner fa-spin"></i>
        <span>Loading requests...</span>
      </div>


      <!-- EMPTY -->
      <div v-else-if="filteredOrders.length === 0" class="empty-state">
        <i class="fas fa-box-open"></i>
        <span>No preorder requests found</span>
      </div>


      <!-- ORDERS GRID -->
      <div v-else class="orders-grid">

        <div
          class="order-card"
          v-for="order in filteredOrders"
          :key="order.id"
          @click="openOrder(order)"
        >

          <!-- TOP -->
          <div class="order-top">
            <div class="business-avatar">
              {{ getInitial(order.business_name) }}
            </div>
            <div class="business-meta">
              <h3>{{ order.business_name }}</h3>
              <span>{{ order.business_type }}</span>
            </div>
          </div>


          <!-- BODY -->
          <div class="order-body">

            <div class="info-row">
              <span class="info-label">Contact</span>
              <span class="info-value">{{ order.contact_person }}</span>
            </div>

            <div class="info-row">
              <span class="info-label">Phone</span>
              <span class="info-value">{{ order.phone }}</span>
            </div>

            <div class="info-row">
              <span class="info-label">Cartons</span>
              <span class="info-value">{{ order.quantity_cartons }}</span>
            </div>

            <div class="info-row">
              <span class="info-label">Bottles</span>
              <span class="info-value">{{ order.total_bottles }}</span>
            </div>

          </div>


          <!-- FOOTER -->
          <div class="order-footer">

            <div
              class="status-badge"
              :class="statusClass(order.status)"
            >
              {{ formatStatus(order.status) }}
            </div>

            <div class="footer-actions">

              <button class="mini-action" @click.stop="callCustomer(order.phone)">
                <i class="fas fa-phone"></i>
              </button>

              <button class="mini-action" @click.stop="emailCustomer(order.email)">
                <i class="fas fa-envelope"></i>
              </button>

              <button class="mini-action delete-btn" @click.stop="deleteOrder(order.id)">
                <i class="fas fa-trash"></i>
              </button>

            </div>

          </div>

        </div>

      </div>


      <!-- ORDER MODAL -->
      <div v-if="showModal" class="order-modal-backdrop" @click="closeModal">
        <div class="order-modal" @click.stop>

          <h2>{{ selectedOrder.business_name }}</h2>

          <p class="modal-status">
            Status: <b>{{ formatStatus(selectedOrder.status) }}</b>
          </p>

          <div class="modal-grid">
            <p><b>Contact:</b> {{ selectedOrder.contact_person }}</p>
            <p><b>Phone:</b> {{ selectedOrder.phone }}</p>
            <p><b>Email:</b> {{ selectedOrder.email }}</p>
            <p><b>Business Type:</b> {{ selectedOrder.business_type }}</p>
            <p><b>Cartons:</b> {{ selectedOrder.quantity_cartons }}</p>
            <p><b>Bottles:</b> {{ selectedOrder.total_bottles }}</p>
            <p><b>Address:</b> {{ selectedOrder.address }}</p>
          </div>

          <div class="modal-actions">
            <button class="approve-btn" @click="approveOrder">Approve</button>
            <button class="decline-btn" @click="declineOrder">Decline</button>
            <button class="close-btn" @click="closeModal">Close</button>
          </div>

        </div>
      </div>


      <!-- DELETE CONFIRM MODAL -->
      <div v-if="showDeleteModal" class="ak-confirm-overlay">
        <div class="ak-confirm-modal">
          <h3>Delete Request?</h3>
          <p>This preorder will be permanently removed and cannot be recovered.</p>
          <div class="ak-confirm-actions">
            <button class="ak-confirm-cancel" @click="showDeleteModal = false">Cancel</button>
            <button class="ak-confirm-delete" @click="confirmDelete">Delete</button>
          </div>
        </div>
      </div>

    </div>
  `,

  data() {
    return {
      loading: false,
      searchQuery: "",
      useMockData: false,
      orders: [],

      selectedOrder: null,
      showModal: false,

      showDeleteModal: false,
      pendingDeleteId: null,

      statusFlow: {
        quote_requested: "Pending Review",
        pending: "Pending Review",
        approved: "Approved",
        declined: "Declined"
      }
    };
  },

  computed: {

    filteredOrders() {
      const q = this.searchQuery.toLowerCase().trim();
      if (!q) return this.orders;
      return this.orders.filter(o => {
        return (
          (o.business_name || "").toLowerCase().includes(q) ||
          (o.contact_person || "").toLowerCase().includes(q) ||
          (o.phone || "").toLowerCase().includes(q)
        );
      });
    },

    pendingCount() {
      return this.orders.filter(o =>
        o.status === "pending" || o.status === "quote_requested"
      ).length;
    },

    approvedCount() {
      return this.orders.filter(o => o.status === "approved").length;
    },

    declinedCount() {
      return this.orders.filter(o => o.status === "declined").length;
    }

  },

  async mounted() {
    await this.fetchOrders();
  },

  methods: {

    /* =========================
       FETCH ORDERS
    ========================= */
    async fetchOrders() {
      this.loading = true;
      try {
        if (this.useMockData) {
          this.orders = this.getMockOrders();
          return;
        }
        const { data, error } = await window.sb
          .from("pre_orders")
          .select("*")
          .order("created_at", { ascending: false });
        if (error) throw error;
        this.orders = data || [];
      } catch (err) {
        console.error("Fetch Error:", err);
      } finally {
        this.loading = false;
      }
    },


    /* =========================
       MOCK DATA
    ========================= */
    getMockOrders() {
      return [
        {
          id: 1,
          business_name: "Jendor Superstores",
          contact_person: "Samuel",
          phone: "+234812000000",
          email: "jendor@gmail.com",
          business_type: "Supermarket",
          quantity_cartons: 20,
          total_bottles: 240,
          product_size: "370ml",
          address: "Abeokuta Ogun State",
          status: "quote_requested",
          created_at: new Date()
        },
        {
          id: 2,
          business_name: "Rendezvous Hotel",
          contact_person: "Philip",
          phone: "+234809000000",
          email: "hotel@gmail.com",
          business_type: "Restaurant",
          quantity_cartons: 12,
          total_bottles: 144,
          product_size: "370ml",
          address: "Ibadan Oyo State",
          status: "pending",
          created_at: new Date()
        },
        {
          id: 3,
          business_name: "Aluminum Lounge",
          contact_person: "David",
          phone: "+234706000000",
          email: "aluminum@gmail.com",
          business_type: "Lounge",
          quantity_cartons: 40,
          total_bottles: 480,
          product_size: "370ml",
          address: "Lekki Lagos",
          status: "approved",
          created_at: new Date()
        }
      ];
    },


    /* =========================
       MODAL CONTROL
    ========================= */
    openOrder(order) {
      this.selectedOrder = order;
      this.showModal = true;
    },

    closeModal() {
      this.selectedOrder = null;
      this.showModal = false;
    },


    /* =========================
       STATUS MANAGEMENT
    ========================= */
    async updateStatus(order, newStatus) {
      try {
        order.status = newStatus;
        if (!this.useMockData) {
          const { error } = await window.sb
            .from("pre_orders")
            .update({ status: newStatus })
            .eq("id", order.id);
          if (error) throw error;
        }
        if (this.selectedOrder?.id === order.id) {
          this.selectedOrder.status = newStatus;
        }
      } catch (err) {
        console.error("Status Update Error:", err);
      }
    },

    approveOrder() {
      if (this.selectedOrder) {
        this.updateStatus(this.selectedOrder, "approved");
      }
    },

    declineOrder() {
      if (this.selectedOrder) {
        this.updateStatus(this.selectedOrder, "declined");
      }
    },

    markPending(order) {
      this.updateStatus(order, "pending");
    },


    /* =========================
       DELETE
    ========================= */
    deleteOrder(id) {
      this.pendingDeleteId = id;
      this.showDeleteModal = true;
    },

    async confirmDelete() {
      const id = this.pendingDeleteId;
      this.showDeleteModal = false;
      try {
        if (!this.useMockData) {
          const { error } = await window.sb
            .from("pre_orders")
            .delete()
            .eq("id", id);
          if (error) throw error;
        }
        this.orders = this.orders.filter(o => o.id !== id);
        if (this.selectedOrder?.id === id) {
          this.closeModal();
        }
      } catch (err) {
        console.error("Delete Error:", err);
      }
    },


    /* =========================
       UI HELPERS
    ========================= */
    getInitial(name = "") {
      return name.charAt(0).toUpperCase();
    },

    formatStatus(status) {
      return this.statusFlow[status] || status.replace("_", " ");
    },

    statusClass(status) {
      return {
        "status-pending": status === "pending" || status === "quote_requested",
        "status-approved": status === "approved",
        "status-declined": status === "declined"
      };
    },


    /* =========================
       ACTIONS
    ========================= */
    callCustomer(phone) {
      if (!phone) return;
      window.location.href = `tel:${phone}`;
    },

    emailCustomer(email) {
      if (!email) return;
      const subject = encodeURIComponent("AKOL'ACE Brew Wholesale Supply");
      const body = encodeURIComponent(
`Hello,

Thank you for your preorder request with AKOL'ACE Brew.

We will contact you shortly with pricing and logistics.

Regards,
AKOL'ACE Brew`
      );
      window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
    }

  }

};



const HistoryPage = {
  template: `

  <div id="ak-history-page">

    <!-- =========================
         TOPBAR
    ========================= -->
    <div class="ak-history-topbar">

      <div class="ak-history-topbar-left">

        <button
          class="ak-history-back-btn"
          @click="$router.push('/admin')"
        >
          <i class="fas fa-arrow-left"></i>
        </button>

        <div>

          <h1 class="ak-history-page-title">
            Activity History
          </h1>

          <p class="ak-history-page-subtitle">
            System logs, preorder activities and revenue tracking
          </p>

        </div>

      </div>

      <button
        class="ak-history-clear-all-btn"
        @click="clearAllHistory"
      >
        <i class="fas fa-trash"></i>
        Clear All
      </button>

    </div>


    <!-- =========================
         METRICS STRIP
    ========================= -->
    <div class="ak-history-metrics-strip">

      <div class="ak-history-metric-card">
        <h2>{{ totalOrders }}</h2>
        <span>Total Orders</span>
      </div>

      <div class="ak-history-metric-card">
        <h2>₦{{ totalRevenue.toLocaleString() }}</h2>
        <span>Total Revenue</span>
      </div>

      <div class="ak-history-metric-card">
        <h2>{{ preorderLogs.length }}</h2>
        <span>Preorder Logs</span>
      </div>

    </div>


    <!-- =========================
         GRID
    ========================= -->
    <div class="ak-history-grid">


      <!-- =========================
           PRODUCT ORDERS
      ========================= -->
      <div class="ak-history-card">

        <div class="ak-history-card-header">

          <h3>Product Orders</h3>

          <button
            class="ak-history-mini-btn danger"
            @click="clearSection('orders')"
          >
            Clear
          </button>

        </div>

        <div v-if="orderHistory.length" class="ak-history-list">

          <div
            class="ak-history-item"
            v-for="order in orderHistory"
            :key="order.id"
          >

            <div class="ak-history-dot"></div>

            <div class="ak-history-item-content">

              <strong>
                {{ order.title }}
              </strong>

              <small>
                {{ order.time }}
              </small>

            </div>

          </div>

        </div>

        <div v-else class="ak-history-empty">
          No order history yet
        </div>

      </div>


      <!-- =========================
           REVENUE RECORDS
      ========================= -->
      <div class="ak-history-card">

        <div class="ak-history-card-header">

          <h3>Revenue Records</h3>

          <button
            class="ak-history-mini-btn danger"
            @click="clearSection('prices')"
          >
            Clear
          </button>

        </div>

        <div v-if="priceHistory.length" class="ak-history-list">

          <div
            class="ak-history-item"
            v-for="price in priceHistory"
            :key="price.id"
          >

            <div class="ak-history-dot revenue"></div>

            <div class="ak-history-item-content">

              <strong>
                ₦{{ Number(price.amount).toLocaleString() }}
              </strong>

              <small>
                {{ price.time }}
              </small>

            </div>

          </div>

        </div>

        <div v-else class="ak-history-empty">
          No revenue logs yet
        </div>

      </div>


      <!-- =========================
           PREORDER LOGS
      ========================= -->
      <div class="ak-history-card large-card">

        <div class="ak-history-card-header">

          <h3>Preorder Request Logs</h3>

          <button
            class="ak-history-mini-btn danger"
            @click="clearSection('preorders')"
          >
            Clear
          </button>

        </div>

        <div v-if="preorderLogs.length" class="ak-history-list">

          <div
            class="ak-history-item preorder-log"
            v-for="log in preorderLogs"
            :key="log.id"
          >

            <div class="ak-history-avatar">
              {{ getInitial(log.name) }}
            </div>

            <div class="ak-history-log-content">

              <strong>
                {{ log.name }}
              </strong>

              <small>
                {{ log.time }}
              </small>

            </div>

          </div>

        </div>

        <div v-else class="ak-history-empty">
          No preorder logs yet
        </div>

      </div>


      <!-- =========================
           ADMIN SESSION
      ========================= -->
      <div class="ak-history-card">

        <div class="ak-history-card-header">

          <h3>Admin Session</h3>

        </div>

        <div class="ak-history-session-box">

          <div class="session-indicator"></div>

          <div>

            <strong>Session Active</strong>

            <p>Authenticated admin environment</p>

          </div>

        </div>

        <button
          class="ak-history-session-btn"
          @click="goToPreorders"
        >
          <i class="fas fa-arrow-up-right-from-square"></i>
          Open Preorders
        </button>

      </div>


    </div>

<!-- CONFIRM MODAL -->
      <div v-if="showModal" class="ak-confirm-overlay">
        <div class="ak-confirm-modal">
          <h3>Are you sure?</h3>
          <p>This will permanently delete all <strong>{{ pendingSection }}</strong> records. This cannot be undone.</p>
          <div class="ak-confirm-actions">
            <button class="ak-confirm-cancel" @click="showModal = false">Cancel</button>
            <button class="ak-confirm-delete" @click="confirmClear">Delete</button>
          </div>
        </div>
      </div>

    </div>
  </div>

  `,

  data() {

    return {

      loading: false,

      useMockData: false,

      orderHistory: [],

      priceHistory: [],

      preorderLogs: [],
      
      showModal: false,
      
      pendingSection: "",
      
      

    };

  },

  computed: {

    totalOrders() {
      return this.orderHistory.length;
    },

    totalRevenue() {
      return this.priceHistory.reduce(
        (sum, item) => sum + Number(item.amount || 0),
        0
      );
    }

  },

  async mounted() {
    await this.loadHistory();
  },

    methods: {
    goToPreorders() {
      this.$router.push("/preorderinfo");
    },

    getInitial(name = "") {
      return name.charAt(0).toUpperCase();
    },

showToast(message) {
  const toast = document.createElement("div");
  toast.className = "toast-notification";
  toast.textContent = message;
  document.body.appendChild(toast);

  setTimeout(() => toast.classList.add("toast-visible"), 10);
  setTimeout(() => {
    toast.classList.remove("toast-visible");
    setTimeout(() => toast.remove(), 400);
  }, 2800);
},
clearSection(section) {
  this.pendingSection = section;
  this.showModal = true;
},

async confirmClear() {
  this.showModal = false;
  this.loading = true;

  try {
    if (!this.useMockData) {
      const { error } = await window.sb
        .from("pre_orders")
        .delete()
        .neq("id", "00000000-0000-0000-0000-000000000000");

      if (error) throw error;
    }

    const s = this.pendingSection;
    if (s === "orders" || s === "all") this.orderHistory = [];
    if (s === "prices" || s === "all") this.priceHistory = [];
    if (s === "preorders" || s === "all") this.preorderLogs = [];

    this.showToast(`${s.toUpperCase()} cleared successfully.`);

  } catch (err) {
    console.error("Wipe Error:", err);
    this.showToast("Failed to clear records. Try again.");
  } finally {
    this.loading = false;
  }
},

    async clearAllHistory() {
      await this.clearSection("all");
    },

    /* ============================================================
       LOAD HISTORY: Fully Synced with Schema
    ============================================================ */
    async loadHistory() {
      if (this.useMockData) {
        this.loadMockHistory();
        return;
      }

      this.loading = true;

      try {
        const { data, error } = await window.sb
          .from("pre_orders")
          .select("*")
          .order("created_at", { ascending: false });

        if (error) throw error;

        const safe = data || [];

        this.orderHistory = safe.map(item => ({
          id: item.id,
          title: `${item.quantity_cartons} Cartons • ${item.product_size}`,
          time: this.timeAgo(item.created_at)
        }));

        this.priceHistory = safe.map(item => ({
          id: item.id,
          amount: item.revenue_naira, // ✅ Uses the money column now
          time: this.timeAgo(item.created_at)
        }));

        this.preorderLogs = safe.map(item => ({
          id: item.id,
          name: item.business_name,
          time: this.timeAgo(item.created_at)
        }));

      } catch (err) {
        console.error("History Load Error:", err);
        this.loadMockHistory();
      } finally {
        this.loading = false;
      }
    },

    loadMockHistory() {
      this.orderHistory = [
        { id: 1, title: "20 Cartons • 370ml", time: "2h ago" },
        { id: 2, title: "5 Cartons • 370ml", time: "5h ago" }
      ];
      this.priceHistory = [
        { id: 1, amount: 300000, time: "2h ago" },
        { id: 2, amount: 75000, time: "1d ago" }
      ];
      this.preorderLogs = [
        { id: 1, name: "Jendor Market", time: "2h ago" },
        { id: 2, name: "Rendezvous Hotel", time: "1d ago" }
      ];
    },
    
    timeAgo(date) {
      if (!date) return "recently";
      const diff = (new Date() - new Date(date)) / 1000;
      if (diff < 60) return "just now";
      if (diff < 3600) return `${Math.floor(diff / 60)}m ago`;
      if (diff < 86400) return `${Math.floor(diff / 3600)}h ago`;
      return `${Math.floor(diff / 86400)}d ago`;
    }
  }


};






const PublicMetricsPage = {
  template: `
    <div id="public-metrics-page">

      <div class="metrics-header">
        <div class="brand-pill">Akol'ace Brew</div>
        <h1 class="title">Live Business Metrics</h1>
        <p class="subtitle">Real-time snapshot of activity</p>
      </div>

      <div v-if="loading" class="metrics-loading">
        <p>Loading metrics...</p>
      </div>

      <div v-else>

        <div class="metrics-grid">
          <div class="metric-card">
            <h2>{{ totalOrders }}</h2>
            <p>Packs Ordered</p>
          </div>
          <div class="metric-card">
            <h2>₦{{ revenue.toLocaleString() }}</h2>
            <p>Total Revenue</p>
          </div>
        </div>

        <div class="activity-section">
          <h3>Recent Activity</h3>
          <div class="activity-list">
            <div
              v-for="item in preorderInfo"
              :key="item.id"
              class="activity-item"
            >
              <div class="dot"></div>
              <div class="activity-text">
                <strong>{{ item.name }}</strong>
                <span>{{ item.time }}</span>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  `,

  data() {
    return {
      loading: true,
      totalOrders: 0,
      revenue: 0,
      preorderInfo: []
    };
  },

  async mounted() {
    await this.loadMetrics();
  },

  methods: {

    async loadMetrics() {
      try {

        const client = window.sb || window.supabase.createClient(
          "https://qsqzryesugnybibtjkzc.supabase.co",
          "sb_publishable_sgoetXLpJhcxOFkY4-JX4A_SoybvZzf"
        );

        const { data, error } = await client
          .from("public_metrics")
          .select("id, business_name, quantity_cartons, revenue_naira, created_at")
          .order("created_at", { ascending: false });

        if (error) throw error;

        const rows = data || [];

        this.totalOrders = rows.reduce((sum, r) =>
          sum + Number(r.quantity_cartons || 0), 0);

        this.revenue = rows.reduce((sum, r) =>
          sum + Number(r.revenue_naira || 0), 0);

        this.preorderInfo = rows.slice(0, 6).map((r, i) => ({
          id: r.id || i,
          name: r.business_name || "New Order",
          time: this.timeAgo(r.created_at)
        }));

      } catch (err) {
        console.error("❌ PublicMetrics fetch error:", err.message);
      } finally {
        this.loading = false;
      }
    },

    timeAgo(dateString) {
      if (!dateString) return "Just now";
      const seconds = Math.floor(
        (new Date() - new Date(dateString)) / 1000
      );
      if (seconds < 60) return "Just now";
      const minutes = Math.floor(seconds / 60);
      if (minutes < 60) return `${minutes} min ago`;
      const hours = Math.floor(minutes / 60);
      if (hours < 24) return `${hours} hours ago`;
      return `${Math.floor(hours / 24)} days ago`;
    }

  }
};





const CONFIG = {
  SUPABASE_URL: "https://qsqzryesugnybibtjkzc.supabase.co",
  SUPABASE_ANON_KEY: "sb_publishable_sgoetXLpJhcxOFkY4-JX4A_SoybvZzf",
  
  init() {
    if (!window.supabase) {
      console.error("❌ Supabase CDN failed to load!");
      return null;
    }
    
    const client = window.supabase.createClient(
      this.SUPABASE_URL,
      this.SUPABASE_ANON_KEY
    );
    
    // Set globally for the rest of the script
    window.sb = client;
    console.log("🚀 Akol'ace Brew Engine Initialized");
    return client;
  }
};

// Global Supabase Variable
const sb = CONFIG.init();






/**
 * ROUTES
 */
const routes = [
  { path: '/', component: LandingPage },//✅
  { path: '/about', component: AboutUsPage },//✅
  { path: '/faqs', component: FAQSPage },//✅
  { path: '/testimonials', component: TestimonialsPage },//✅
  { path: '/contact', component: ContactPage },//✅

  
  {
    path: '/preorderform',
    component: PreOrderFormPage,
  },//✅
  
{
  path: '/admin',
  component: AdminPanelPage,
 meta:{requiresAuth: true}
},//✅

{
  path: '/preorderinfo',
  component: PreOrderInfoPage,
meta: { requiresAuth: true }
},//✅



{
  path: '/history',
  component: HistoryPage,
 meta: { requiresAuth: true }
},//✅



/* ---- Dashboard Metrics ---- */

{ path: '/public-metrics', component: PublicMetricsPage },//✅
    
    
  /* ---- Accessing Panel ---- */

{
  // This replaces /register with a high-security string
  path: '/nexus-auth-v9-ak-7722', 
  component: LoginPage,
},//✅





]


/* =========================
   ROUTER INSTANCE
========================= */

const router = VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  routes
});


/* =========================
   NAVIGATION GUARD
========================= */

router.beforeEach(async (to, from, next) => {

  try {

    // AUTH STORAGE
    const storedAdmin =
      localStorage.getItem("akolace_admin");

    const admin =
      storedAdmin ? JSON.parse(storedAdmin) : null;

    const isAuthenticated = !!admin;

    /* =========================
       ALLOW SUPABASE CALLBACKS
    ========================= */

    if (
      window.location.hash.includes("access_token=") ||
      window.location.hash.includes("type=recovery")
    ) {
      return next();
    }

    /* =========================
       BLOCK UNAUTHORIZED USERS
    ========================= */

    if (to.meta.requiresAuth && !isAuthenticated) {
      return next("/nexus-auth-v9-ak-7722");
    }

    /* =========================
       BLOCK LOGGED-IN USERS
       FROM RETURNING TO LOGIN
    ========================= */

    if (
      (to.path === "/" || to.path === "/nexus-auth-v9-ak-7722") &&
      isAuthenticated
    ) {
      return next("/admin");
    }

    next();

  } catch (err) {

    console.error(
      "🚨 Router Guard Error:",
      err
    );

    next("/nexus-auth-v9-ak-7722");
  }
});


/* =========================
   VUE APP
========================= */

const app = Vue.createApp({});

app.use(router);

app.mount("#app");
