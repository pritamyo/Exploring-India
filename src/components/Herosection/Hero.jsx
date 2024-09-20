// eslint-disable-next-line no-unused-vars
import React from 'react';
import './hero.css';

function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>
          Explore <span className="highlight">Hidden India</span>
          <br />
          Rich in Culture and 
          <br/>
          Tradition
        </h1>
        <p>
          Tired of searching for India’s hidden gems?
          Let us simplify your search and help you discover cultural wonders effortlessly.
        </p>
        <div className="hero-buttons">
          <button className="sign-up-btn">Sign up</button>
          <button className="login-btn">Login</button>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
