import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import FrontPage from './pages/FrontPage';
import Candles from './pages/Candles'; // Create Candles component
import Flowers from './pages/Flowers'; // Create Flowers component
import Bundles from './pages/Bundles'; // Create Bundles component

function App() {
  return (
    <Router>
      <div className="App">
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
              <Link to="/cart"> <i className="fa fa-shopping-cart"></i></Link>
            </div>
          </nav>
        </header>

        <Routes>
          <Route exact path="/" element={<FrontPage />} />
          <Route path="/candles" element={<Candles />} />
          <Route path="/flowers" element={<Flowers />} />
          <Route path="/bundles" element={<Bundles />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
