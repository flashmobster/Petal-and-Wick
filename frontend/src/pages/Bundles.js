// Bundles.js
import React from 'react';
import { Link } from 'react-router-dom';
import './candles.css';
import './FrontPage.css';

function Bundles() {
  return (
    <div className="front-page">
      <header>
        <div className="frontPage">
          <Link to="/" className="logo">Petal & Wick</Link>
        </div>
        <nav className="navbar">
          <div className="links">
            <Link to="/">Home</Link>
            <Link to="/candles">Candles</Link>
            <Link to="/flowers">Flowers</Link>
            <Link to="/bundles">Bundles</Link>
            <Link to="/cart"><i className="fa fa-shopping-cart"></i></Link>
          </div>
        </nav>
      </header>
      <main>
        {/* Add your bundle content here */}
      </main>
    </div>
  );
}

export default Bundles;
