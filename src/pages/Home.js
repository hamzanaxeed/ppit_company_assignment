import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

export default function Home() {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to Aurevia Technologies</h1>
          <p>The Golden Path to Digital Innovation</p>
          <Link to="/contact" className="cta-button">
            Start Your Project
          </Link>
        </div>
        <div className="hero-image">
          <div className="code-animation">{'< />'}</div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2>Why Choose Aurevia Technologies?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🎯</div>
            <h3>Custom Solutions</h3>
            <p>Tailored software designed specifically for your unique business needs</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">⚡</div>
            <h3>Fast Delivery</h3>
            <p>Quick turnaround times without compromising on quality</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🔒</div>
            <h3>Secure & Reliable</h3>
            <p>Enterprise-grade security and 99.9% uptime guarantee</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">👥</div>
            <h3>Expert Team</h3>
            <p>Experienced developers with proven track record</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <h2>Ready to Transform Your Business?</h2>
        <p>Let's discuss your project requirements and create something amazing together</p>
        <Link to="/about" className="cta-button-secondary">
          Learn More About Us
        </Link>
      </section>
    </div>
  );
}
