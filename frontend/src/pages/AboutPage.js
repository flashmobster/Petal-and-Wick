// AboutPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import './FrontPage.css';

function AboutPage() {
  return (
    <div className="front-page">
      <header>
        <div className="frontPage">
          <Link to="/" className="logo">Petal & Wick</Link>
        </div>
        <nav className="navbar">
          <div className="links">
            <Link to="/">home</Link>
            <Link to="/candles">candles</Link>
            <Link to="/flowers">flowers</Link>
            <Link to="/bundles">bundles</Link>
            <Link to="/cart"><i className="fa fa-shopping-cart"></i></Link>
          </div>
        </nav>
      </header>
      <main>
        <div className="about">
          <h1>About Us</h1>
          <p>Welcome to Petal and Wick, where we blend nature's elegance with the warmth of home.
            We create exquisite floral arrangements and hand-poured candles that bring beauty and tranquility to any space.
            Inspired by nature and crafted with care, our products are perfect for any occasion.
            Using high-quality, eco-friendly ingredients and sustainable practices, we ensure that every petal tells a story and every wick sparks joy.
            Illuminate your world with Petal and Wick.
          </p>
        </div>
      </main>
    </div>
  );
}

export default AboutPage;
