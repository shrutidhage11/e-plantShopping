import { Routes, Route, Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { ShoppingCart, Leaf } from "lucide-react";
import ProductList from "./ProductList";
import CartItem from "./CartItem";
import AboutUs from "./AboutUs";
import "./App.css";

function Navbar() {
  const location = useLocation();
  const cartItems = useSelector((state) => state.cart.items);
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav className="navbar">
      <Link to="/" className="brand">
        <Leaf size={25} />
        <span>Paradise Nursery</span>
      </Link>

      <div className="nav-links">
        <Link className={location.pathname === "/" ? "active" : ""} to="/">
          Home
        </Link>
        <Link className={location.pathname === "/plants" ? "active" : ""} to="/plants">
          Plants
        </Link>
        <Link className={location.pathname === "/about" ? "active" : ""} to="/about">
          About Us
        </Link>
        <Link className={`cart-link ${location.pathname === "/cart" ? "active" : ""}`} to="/cart">
          <ShoppingCart size={21} />
          Cart <span className="cart-count">{cartCount}</span>
        </Link>
      </div>
    </nav>
  );
}

function LandingPage() {
  return (
    <main className="landing-page">
      <div className="hero-overlay">
        <div className="hero-content">
          <span className="eyebrow">BRING NATURE HOME</span>
          <h1>Paradise Nursery</h1>
          <p>
            Discover beautiful houseplants that bring freshness, calm and life
            into every corner of your home.
          </p>
          <Link to="/plants" className="primary-button">
            Get Started
          </Link>
        </div>
      </div>
    </main>
  );
}

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/plants" element={<ProductList />} />
        <Route path="/cart" element={<CartItem />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </div>
  );
}