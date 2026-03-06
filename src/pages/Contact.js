import React, { useState } from 'react';
import '../styles/Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        subject: '',
        message: ''
      });
    }, 3000);
  };

  return (
    <div className="contact">
      <section className="contact-hero">
        <h1>Get in Touch</h1>
        <p>Have a project in mind? Let's talk about it!</p>
      </section>

      <section className="contact-container">
        <div className="contact-info">
          <h2>Contact Information</h2>
          
          <div className="info-item">
            <h4>📍 Address</h4>
            <p>Fast NUCES<br />Lahore, Pakistan - 560001</p>
          </div>

          <div className="info-item">
            <h4>📧 Email</h4>
            <p><a href="mailto:info@aurevia.com">info@aurevia.com</a></p>
            <p><a href="mailto:projects@aurevia.com">projects@aurevia.com</a></p>
          </div>

          <div className="info-item">
            <h4>📞 Phone</h4>
            <p><a href="tel:+929876543210">+92 98765 43210</a></p>
            <p><a href="tel:+929876543211">+92 98765 43211</a></p>
          </div>

          <div className="info-item">
            <h4>⏰ Working Hours</h4>
            <p>Monday - Friday: 9:00 AM - 6:00 PM<br />Saturday: 10:00 AM - 4:00 PM<br />Sunday: Closed</p>
          </div>

          <div className="social-links">
            <h4>Follow Us</h4>
            <div className="social-icons">
              <a href="#!" className="social-icon">f</a>
              <a href="#!" className="social-icon">t</a>
              <a href="#!" className="social-icon">in</a>
              <a href="#!" className="social-icon">gh</a>
            </div>
          </div>
        </div>

        <div className="contact-form-container">
          <h2>Send us a Message</h2>
          {submitted && (
            <div className="success-message">
              ✅ Thank you! Your message has been sent successfully. We'll get back to you soon!
            </div>
          )}
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your Name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your.email@example.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Your Phone Number"
              />
            </div>

            <div className="form-group">
              <label htmlFor="company">Company</label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Your Company Name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject *</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="Project Inquiry"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message *</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Tell us about your project requirements..."
                rows="6"
              ></textarea>
            </div>

            <button type="submit" className="submit-button">Send Message</button>
          </form>
        </div>
      </section>

      <section className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-grid">
          <div className="faq-item">
            <h4>How long does a typical project take?</h4>
            <p>Project timelines vary based on complexity and scope. A basic website might take 4-8 weeks, while complex applications could take 3-6 months.</p>
          </div>
          <div className="faq-item">
            <h4>What is your payment structure?</h4>
            <p>We typically work with 50% upfront, 50% upon completion. For larger projects, milestone-based payments are available.</p>
          </div>
          <div className="faq-item">
            <h4>Do you provide ongoing support?</h4>
            <p>Yes! We offer various support plans including bug fixes, updates, and feature enhancements post-launch.</p>
          </div>
          <div className="faq-item">
            <h4>Can you work with existing codebases?</h4>
            <p>Absolutely. We can integrate with, maintain, or improve existing applications as per your requirements.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
