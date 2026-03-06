import React from 'react';
import '../styles/Services.css';

export default function Services() {
  return (
    <div className="services">
      <section className="services-hero">
        <h1>Our Services</h1>
        <p>AI-Powered Solutions for Digital Transformation</p>
      </section>

      <section className="services-grid">
        <div className="service-card">
          <div className="service-icon">🤖</div>
          <h3>AI Business Co-Pilots</h3>
          <p>
            Custom AI assistants trained on your company's internal data to help employees make 
            faster, smarter decisions.
          </p>
          <ul className="service-list">

            <li>AI Legal Assistant</li>
            <li>AI Sales Strategist</li>

            <li>AI Healthcare Analyst</li>
            <li>Custom Domain Experts</li>
          </ul>
        </div>
        

        <div className="service-card">
          <div className="service-icon">⚙️</div>
          <h3>Business Automation</h3>
          <p>
            Autonomous systems that automate entire workflows, reducing manual effort and 
            increasing operational efficiency.
          </p>
          <ul className="service-list">
            <li>AI Customer Service</li>
            <li>Automated Finance Reporting</li>
            <li>Smart HR Screening</li>
            <li>Workflow Optimization</li>
          </ul>
        </div>

        <div className="service-card">
          <div className="service-icon">🔮</div>
          <h3>Predictive Intelligence</h3>
          <p>
            AI-powered predictive analytics that forecast business outcomes and help you stay 
            ahead of market trends.
          </p>
          <ul className="service-list">
            <li>Demand Forecasting</li>
            <li>Risk Detection</li>
            <li>Market Trend Prediction</li>
            <li>Customer Behavior Analysis</li>
          </ul>
        </div>

        <div className="service-card">
          <div className="service-icon">🌐</div>
          <h3>Digital Twin Systems</h3>
          <p>
            Create virtual replicas of your operations to simulate scenarios and test strategies 
            before real-world implementation.
          </p>
          <ul className="service-list">
            <li>Supply Chain Simulation</li>
            <li>Business Strategy Testing</li>
            <li>Factory & Logistics Modeling</li>
            <li>Scenario Planning</li>
          </ul>
        </div>

        <div className="service-card">
          <div className="service-icon">🎨</div>
          <h3>AI-Driven Product Design</h3>
          <p>
            Leverage AI to generate, test, and refine product ideas, UI designs, and prototypes 
            at unprecedented speed.
          </p>
          <ul className="service-list">
            <li>AI-Generated Designs</li>
            <li>Prototype Development</li>
            <li>Design Testing & Iteration</li>
            <li>User Experience Optimization</li>
          </ul>
        </div>

        <div className="service-card">
          <div className="service-icon">🛡️</div>
          <h3>Ethical AI Consulting</h3>
          <p>
            Help your organization adopt AI responsibly with robust governance frameworks and 
            transparency measures.
          </p>
          <ul className="service-list">
            <li>AI Governance Framework</li>
            <li>Ethical AI Strategy</li>
            <li>Transparency & Compliance</li>
            <li>Risk Management</li>
          </ul>
        </div>
      </section>

      <section className="process-section">
        <h2>Our Development Process</h2>
        <div className="process-steps">
          <div className="step">
            <div className="step-number">1</div>
            <h4>Requirements Analysis</h4>
            <p>Detailed understanding of your business needs and goals</p>
          </div>
          <div className="step">
            <div className="step-number">2</div>
            <h4>Design & Planning</h4>
            <p>Creating comprehensive architecture and design documents</p>
          </div>
          <div className="step">
            <div className="step-number">3</div>
            <h4>Development</h4>
            <p>Agile development with regular updates and feedback</p>
          </div>
          <div className="step">
            <div className="step-number">4</div>
            <h4>Testing & QA</h4>
            <p>Rigorous testing to ensure quality and reliability</p>
          </div>
          <div className="step">
            <div className="step-number">5</div>
            <h4>Deployment</h4>
            <p>Smooth deployment to production environments</p>
          </div>
          <div className="step">
            <div className="step-number">6</div>
            <h4>Support</h4>
            <p>Ongoing maintenance and technical support</p>
          </div>
        </div>
      </section>
    </div>
  );
}
