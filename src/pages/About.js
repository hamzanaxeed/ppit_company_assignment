import React from 'react';
import '../styles/About.css';

export default function About() {
  return (
    <div className="about">
      {/* Hero Section */}
      <section className="about-hero">
        <h1>About Aurevia Technologies</h1>
        <p>The Golden Path to Digital Innovation</p>
      </section>

      {/* Company Overview */}
      <section className="company-overview">
        <div className="content-wrapper">
          <div className="overview-text">
            <h2>Who We Are</h2>
            <p>
              Aurevia is a leading software development company specializing in custom software solutions. 
              We are passionate about transforming business ideas into powerful, scalable applications that drive growth and innovation.
            </p>
            <p>
              With a team of highly skilled developers, designers, and project managers, we deliver world-class 
              software solutions tailored to meet the unique needs of each client.
            </p>
          </div>
          <div className="overview-image">
            <div className="placeholder-image">🏢</div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="mission-vision">
        <div className="mission-card">
          <h3>🎯 Our Mission</h3>
          <p>
            To empower businesses through innovative, custom software solutions that solve complex challenges, 
            streamline operations, and create lasting value for our clients.
          </p>
        </div>
        <div className="vision-card">
          <h3>🌟 Our Vision</h3>
          <p>
            To be the most trusted partner for custom software development, recognized for our excellence, 
            reliability, and commitment to client success across various industries.
          </p>
        </div>
      </section>

      {/* Core Values */}
      <section className="core-values">
        <h2>Our Core Values</h2>
        <div className="values-grid">
          <div className="value-item">
            <h4>Innovation</h4>
            <p>We embrace cutting-edge technologies and creative problem-solving approaches</p>
          </div>
          <div className="value-item">
            <h4>Quality</h4>
            <p>Excellence is non-negotiable in every project we undertake</p>
          </div>
          <div className="value-item">
            <h4>Integrity</h4>
            <p>Honest communication and transparent dealings with all stakeholders</p>
          </div>
          <div className="value-item">
            <h4>Collaboration</h4>
            <p>Working closely with clients as true partners in their success</p>
          </div>
          <div className="value-item">
            <h4>Performance</h4>
            <p>Delivering results that exceed expectations and drive business growth</p>
          </div>
          <div className="value-item">
            <h4>Support</h4>
            <p>Providing ongoing support and maintenance for long-term success</p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <h2>Our Expert Team</h2>
        <p className="team-description">
          We have a diverse team of professionals with expertise in various technologies and domains
        </p>
        <div className="team-grid">
          <div className="team-member">
            <div className="member-avatar">👨‍💻</div>
            <h4>Development Team</h4>
            <p>Full-stack developers proficient in modern web and mobile technologies</p>
          </div>
          <div className="team-member">
            <div className="member-avatar">🎨</div>
            <h4>Design Team</h4>
            <p>User experience and interface designers creating beautiful, intuitive applications</p>
          </div>
          <div className="team-member">
            <div className="member-avatar">📊</div>
            <h4>Project Managers</h4>
            <p>Experienced managers ensuring timely delivery and client satisfaction</p>
          </div>
          <div className="team-member">
            <div className="member-avatar">🔧</div>
            <h4>QA & Support</h4>
            <p>Quality assurance and technical support teams ensuring reliability</p>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="technologies">
        <h2>Technologies We Specialize In</h2>
        <div className="tech-grid">
          <div className="tech-item">
            <h4>Frontend</h4>
            <p>React, Vue, Angular, HTML5, CSS3, JavaScript, TypeScript</p>
          </div>
          <div className="tech-item">
            <h4>Backend</h4>
            <p>Node.js, Python, Java, C#, PHP, Ruby, Go</p>
          </div>
          <div className="tech-item">
            <h4>Databases</h4>
            <p>MongoDB, PostgreSQL, MySQL, Firebase, DynamoDB</p>
          </div>
          <div className="tech-item">
            <h4>Cloud & DevOps</h4>
            <p>AWS, Azure, Google Cloud, Docker, Kubernetes, CI/CD</p>
          </div>
          <div className="tech-item">
            <h4>Mobile Development</h4>
            <p>React Native, Flutter, Native iOS/Android</p>
          </div>
          <div className="tech-item">
            <h4>Tools & Frameworks</h4>
            <p>Git, Jenkins, Webpack, Serverless, GraphQL, REST APIs</p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats">
        <div className="stat-item">
          <h3>50+</h3>
          <p>Projects Completed</p>
        </div>
        <div className="stat-item">
          <h3>30+</h3>
          <p>Happy Clients</p>
        </div>
        <div className="stat-item">
          <h3>7+</h3>
          <p>Years Experience</p>
        </div>
        <div className="stat-item">
          <h3>100%</h3>
          <p>Client Satisfaction</p>
        </div>
      </section>
    </div>
  );
}
