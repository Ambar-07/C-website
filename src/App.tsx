import React, { useState } from 'react';
import { Menu, X, Heart, Star, Phone, Mail, MapPin, Instagram, ShoppingBag } from 'lucide-react';
import './App.css';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const products = [
    {
      id: 1,
      name: "Yoda Plushie",
      price: "₹300",
      image: "5.jpg",
      description: "Handmade crocheted Yoda plushie."
    },
    {
      id: 2,
      name: "Headphone cover",
      price: " ₹400",
      image: "4.jpg",
      description: "handmade crocheted headphone cover for Sony WH-1000XM4."
    },
    {
      id: 3,
      name: "Headband",
      price: "₹250",
      image: "3.jpg",
      description: "Stylish and comfortable crocheted headband for all seasons."
    }
    // {
    //   id: 4,
    //   name: "Warm Winter Scarf",
    //   price: "$38",
    //   image: "https://images.pexels.com/photos/5699456/pexels-photo-5699456.jpeg?auto=compress&cs=tinysrgb&w=400",
    //   description: "Cozy handmade scarf in various colors"
    // },
    // {
    //   id: 5,
    //   name: "Kitchen Pot Holders",
    //   price: "$22",
    //   image: "https://images.pexels.com/photos/6292389/pexels-photo-6292389.jpeg?auto=compress&cs=tinysrgb&w=400",
    //   description: "Practical and beautiful kitchen accessories"
    // },
    // {
    //   id: 6,
    //   name: "Decorative Cushion",
    //   price: "$35",
    //   image: "https://images.pexels.com/photos/6527061/pexels-photo-6527061.jpeg?auto=compress&cs=tinysrgb&w=400",
    //   description: "Handcrafted cushion cover with intricate patterns"
    // }
  ];

  const testimonials = [
  {
    name: "Divya Duklan",
    text: "The crocheted flower pot is simply adorable! It brightens up my desk beautifully.",
    rating: 5
  },
  {
    name: "Ambar Gairola",
    text: "My headphone cover fits perfectly and looks amazing. Great way to personalize my headphones!",
    rating: 5
  },
  {
    name: "Devanshi",
    text: "Love the new headband! The craftsmanship is excellent and it's very comfortable to wear.",
    rating: 5
  }
];

  return (
    <div className="app">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
            <div className="nav-content">
            <div className="nav-brand">
              <span className="brand-text">Crochet Kanya</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="nav-links desktop-nav">
              <a href="#home" className="nav-link">Home</a>
              <a href="#products" className="nav-link">Products</a>
              <a href="#about" className="nav-link">About</a>
              <a href="#testimonials" className="nav-link">Reviews</a>
              <a href="#contact" className="nav-link">Contact</a>
            </div>

            {/* Mobile menu button */}
            <div className="mobile-menu-btn">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="menu-toggle">
                {isMenuOpen ? <X className="menu-icon" /> : <Menu className="menu-icon" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="mobile-nav">
            <div className="mobile-nav-content">
              <a href="#home" className="mobile-nav-link">Home</a>
              <a href="#products" className="mobile-nav-link">Products</a>
              <a href="#about" className="mobile-nav-link">About</a>
              <a href="#testimonials" className="mobile-nav-link">Reviews</a>
              <a href="#contact" className="mobile-nav-link">Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-text">
              <div className="hero-heading">
                <h1 className="hero-title">
                  Handcrafted with
                  <span className="hero-accent">Love & Care</span>
                </h1>
                <p className="hero-description">
                  Discover beautiful, handmade crochet creations that bring warmth and comfort to your home. Each piece is carefully crafted with premium materials and attention to detail.
                </p>
              </div>
              <div className="hero-buttons">
  <a href="#products" className="btn btn-primary">Shop Now</a>
</div>
              <div className="hero-stats">
                <div className="stat">
                  <div className="stat-number">20+</div>
                  <div className="stat-label">Happy Customers</div>
                </div>
                <div className="stat">
                  <div className="stat-number">65+</div>
                  <div className="stat-label">Items Sold</div>
                </div>
                <div className="stat">
                  <div className="stat-number">4.5★</div>
                  <div className="stat-label">Average Rating</div>
                </div>
              </div>
            </div>
            <div className="hero-image">
              <img 
              src="/2.jpg" 
              alt="Beautiful crochet work" 
              className="hero-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="products">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Featured Products</h2>
            <p className="section-description">
              Explore our collection of handmade crochet items, perfect for gifts or treating yourself to something special.
            </p>
          </div>
          
          <div className="products-grid">
            {products.map((product) => (
              <div key={product.id} className="product-card">
                <div className="product-image">
                  <img src={product.image} alt={product.name} />
                  <div className="product-heart">
                    <Heart className="heart-icon" />
                  </div>
                </div>
                <div className="product-info">
                  <h3 className="product-name">{product.name}</h3>
                  <p className="product-description">{product.description}</p>
                  <div className="product-footer">
                    <span className="product-price">{product.price}</span>
                    <button className="add-to-cart">
                      <ShoppingBag className="cart-icon" />
                      <span>Add to Cart</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <div className="about-content">
            <div className="about-image">
              <div className="about-image-bg"></div>
              <img 
              src="/500035146_17842574670497181_6545358227312059011_n.jpg" 
              alt="Crochet Kanya" 
              className="about-img"
              />
            </div>
            <div className="about-text">
              <h2 className="about-title">About Crochet Kanya</h2>
              <p className="about-paragraph">
                Hey there! I’m the hands (and heart) behind Crochet Kanya — where yarn turns into cute, cozy, and sometimes chaotic little creations!
              </p>
              <p className="about-paragraph">
                From blooming crochet flowers to tiny keychains, every piece is handmade with love, patience, and way too many cups of chai ☕. This is a women-led, desi-grown brand that’s all about slow fashion, big dreams, and tiny hooks 🧶
                Yahan sab kuch haathon ka jadoo hai — not machine-made, but heart-made. 💛

              </p>
              <div className="about-stats">
                <div className="about-stat">
                  <div className="about-stat-number">2.5+</div>
                  <div className="about-stat-label">Years Experience</div>
                </div>
                <div className="about-stat">
                  <div className="about-stat-number">100%</div>
                  <div className="about-stat-label">Handmade</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="testimonials">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">What Our Customers Say</h2>
            <p className="section-description">
              Don't just take our word for it. Here's what our happy customers have to say about our handmade creations.
            </p>
          </div>
          
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <div className="testimonial-stars">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="star-icon" />
                  ))}
                </div>
                <p className="testimonial-text">"{testimonial.text}"</p>
                <div className="testimonial-author">- {testimonial.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Get in Touch</h2>
            <p className="section-description">
              Have a custom request or question? We'd love to hear from you! Reach out and let's create something beautiful together.
            </p>
          </div>
          
          <div className="contact-content">
            <div className="contact-info">
              <div className="contact-card">
                <h3 className="contact-card-title">Contact Information</h3>
                <div className="contact-details">
                  <div className="contact-item">
                    <Phone className="contact-icon" />
                    <span>+91 94101 86064</span>
                  </div>
                  <div className="contact-item">
                    <Mail className="contact-icon" />
                    <span>sukanyadobhal05@gmail.com</span>
                  </div>
                  <div className="contact-item">
                    <MapPin className="contact-icon" />
                    <span>DehraDun, Uttarakhand</span>
                  </div>
                </div>
                
                <div className="social-section">
                  <h4 className="social-title">Follow Us</h4>
                  <div className="social-links">
                    <a href="https://www.instagram.com/crochet.kanya/" className="social-link">
                      <Instagram className="social-icon" />
                    </a>
                  
                  </div>
                </div>
              </div>
            </div>
            
            <div className="contact-form-container">
              <h3 className="contact-form-title">Send us a Message</h3>
              <form className="contact-form" action="https://formspree.io/f/meozkvyz" method="POST">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="form-input"
                    placeholder="Your name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-input"
                    placeholder="your@email.com"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea
                    rows={4}
                    id="message"
                    name="message"
                    className="form-textarea"
                    placeholder="Tell us about your custom request or ask any questions..."
                  ></textarea>
                </div>
                <button type="submit" className="form-submit">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <Heart className="footer-icon" />
              <span className="footer-brand-text">Crochet Kanya</span>
            </div>
            <p className="footer-description">
              Handcrafted with love, delivered with care. Making your world a little cozier, one stitch at a time.
            </p>
            <div className="footer-divider"></div>
            <p className="footer-copyright">
              © 2024 Crochet Kanya. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;