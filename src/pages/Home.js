import React, { useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import "../index.css";
import '../css/MainAdmin.css';

export default function Home() {
  const token = localStorage.getItem("token");
  const location = useLocation();
  const formRef = useRef(null);

  // ✅ Handle scroll from navbar state
  useEffect(() => {
    if (location.state?.scrollTo) {
      const section = document.getElementById(location.state.scrollTo);
      if (section) {
        // wait until page renders
        setTimeout(() => {
          section.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location]);



  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent!");
    formRef.current.reset();
  };

  return (
    <div className="home-container">
      {/* ✅ Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Find Your Dream Job with JobBridge</h1>
          <p className="hero-subtitle">JobBridge connects students and employers seamlessly. Start your career journey today!</p>
          <div className="hero-buttons">
            {!token ? (
              <>
                <Link to="/auth" className="btn btn-primary">
                  Get Started
                </Link>
                <Link to="/auth" className="btn btn-outline">
                  Login
                </Link>
              </>
            ) : (
              <>
                <Link to="/career" className="btn btn-primary">
                  Apply for Jobs
                </Link>
                <button
                  className="btn btn-outline"
                  onClick={() => {
                    localStorage.removeItem("token");
                    localStorage.removeItem("role");
                    window.location.reload();
                  }}
                >
                  Logout
                </button>
              </>
            )}
          </div>
        </div>
      </section>
      {/* ✅ Features Section */}
      <section className="features-section">
        <h2 className="section-title">Why Choose <span className="highlight">JobBridge</span>?</h2>
        <p className="section-text">
          Discover the easiest way to search, apply, and manage job opportunities. JobBridge brings a seamless experience for both job seekers and employers.
        </p>
        <div className="features-grid">
          <div className="feature-card">
            <h3>🔍 Simplified Search</h3>
            <p>Find your dream job faster with advanced filters, tags, and real-time search results.</p>
          </div>
          <div className="feature-card">
            <h3>💼 Apply Securely</h3>
            <p>Upload your resume, cover letter, and apply with one click. Track your application in real time.</p>
          </div>
          <div className="feature-card">
            <h3>📊 Personal Dashboard</h3>
            <p>Manage your profile, job applications, and get notified about updates – all in one place.</p>
          </div>
        </div>
      </section>
      {/* ✅ About Section */}
      <section id="about" className="about-section">
        <div className="about-container">
          <h2 className="section-title">About JobBridge</h2>
          <p className="about-intro">
            At <strong>JobBridge</strong>, we believe in building a strong connection between students and employers.
            Our platform is designed to simplify the recruitment process while giving students a fair chance to showcase their talent.
          </p>
          <div className="about-grid">
            <div className="about-card">
              <h3>🎯 Our Mission</h3>
              <p>
                To empower students by connecting them with verified companies and helping them start their careers with confidence and transparency.
              </p>
            </div>
            <div className="about-card">
              <h3>🌱 Why We Started</h3>
              <p>
                We noticed many students struggle to find genuine opportunities. JobBridge was created to bridge that gap with trusted job postings and real-time updates.
              </p>
            </div>
            <div className="about-card">
              <h3>🤝 Who We Serve</h3>
              <p>
                From ambitious students looking for internships to employers searching for fresh talent, JobBridge is your partner in growth.
              </p>
            </div>
          </div>
          <div className="about-highlight">
            <h3>✨ What Makes Us Different?</h3>
            <ul>
              <li>✅ Verified employers & secure applications</li>
              <li>✅ Smart dashboards to track your progress</li>
              <li>✅ Resume uploads with instant notifications</li>
              <li>✅ A supportive team always ready to help you</li>
            </ul>
          </div>
        </div>
      </section>
      {/* ✅ Services Section */}
      <section id="services" className="services-section">
        <h2 className="section-title">🚀 Our Premium Services</h2>
        <p className="section-text">We go beyond just job listings! Here’s what makes JobBridge stand out:</p>
        <div className="services-grid">
          <div className="service-card">
            <h3>🧭 Smart Job Matching</h3>
            <p>Our AI-powered system recommends the best jobs for you based on your profile, skills, and interests.</p>
          </div>
          <div className="service-card">
            <h3>📑 Instant Resume Builder</h3>
              <p>No resume? No problem! Create a professional resume right from your dashboard in minutes.</p>
          </div>
          <div className="service-card">
            <h3>🔒 Verified Employers</h3>
            <p>Apply confidently! All employers are pre‑verified to ensure authenticity and secure recruitment.</p>
          </div>
          <div className="service-card">
            <h3>📈 Career Insights</h3>
            <p>Get access to interview tips, career growth plans, and live webinars to help you excel.</p>
          </div>
        </div>
      </section>
      {/* ✅ Contact Section */}
      <section id="contact" className="contact-section">
        <h2 className="section-title">📬 Get In Touch With Us</h2>
        <p className="section-text">
          We’d love to hear from you! Reach us directly or visit us at our office.
        </p>
        <div className="contact-grid">
          {/* LEFT SIDE - Contact info and form */}
          <div className="contact-left">
            <div className="contact-info">
              <ul className="contact-list">
                <li>
                  <span className="icon">📧</span>
                  <a href="mailto:support@jobbridge.com">support@jobbridge.com</a>
                </li>
                <li>
                  <span className="icon">📞</span>
                  <a href="tel:+919701657953">+91 97016 57953</a>
                </li>
                <li>
                  <span className="icon">⏰</span>
                  Mon‑Sat (9AM – 7PM IST)
                </li>
              </ul>
              {/* Social Icons */}
              <div className="social-icons">
                <a href="https://facebook.com" target="_blank" rel="noreferrer"><i className="fab fa-facebook-f"></i></a>
                <a href="https://instagram.com" target="_blank" rel="noreferrer"><i className="fab fa-instagram"></i></a>
                <a href="https://youtube.com" target="_blank" rel="noreferrer"><i className="fab fa-youtube"></i></a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer"><i className="fab fa-linkedin-in"></i></a>
                <a href="https://twitter.com" target="_blank" rel="noreferrer"><i className="fab fa-twitter"></i></a>
              </div>
            </div>

            {/* Contact Form */}
            <form className="contact-form" ref={formRef} onSubmit={handleSubmit}>
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
              <input type="tel" placeholder="Your Mobile Number" pattern="[0-9]{10}" title="Enter 10-digit mobile number" required />
              <textarea placeholder="Your Message" rows="4" required></textarea>
              <button type="submit" className="btn btn-primary">Send Message</button>
            </form>
          </div>

          {/* RIGHT SIDE - Map */}
          <div className="contact-right">
            <div className="map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3878.6314297454956!2d78.50163773988955!3d13.558187001688585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1753253565276!5m2!1sen!2sin"
                width="100%"
                height="100%"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Our Location"
              ></iframe>
            </div>
            <div className="map-address">
              <h3>📍 Our Office</h3>
              <p>Madanapalle, Andhra Pradesh, India</p>
            </div>
          </div>
        </div>
      </section>
      {/* ✅ Footer */}
      <footer className="footer">
        <div className="footer-container">
          {/* Left content */}
          <div className="footer-left">
            <p>© {new Date().getFullYear()} <strong>JobBridge</strong>. All rights reserved.</p>
            <p>
              <a href="mailto:support@jobbridge.com">📧 support@jobbridge.com</a> |  
              <a href="tel:+919701657953">+91 97016 57953</a>
            </p>
          </div>

          {/* Right social icons */}
          <div className="footer-right">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="footer-icon" aria-label="Facebook">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="footer-icon" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer" className="footer-icon" aria-label="YouTube">
              <i className="fab fa-youtube"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="footer-icon" aria-label="Twitter">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="footer-icon" aria-label="LinkedIn">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
