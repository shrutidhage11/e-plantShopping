import React from "react";
import { useState } from 'react';
import { useSelector } from 'react-redux';
import ProductList from './ProductList.jsx';
import CartItem from './CartItem.jsx';
import AboutUs from './AboutUs.jsx';
import './App.css';

export default function App() {
  const [page, setPage] = useState('home');
  const count = useSelector(state => state.cart.items.reduce((sum, item) => sum + item.quantity, 0));
  const navigate = next => { setPage(next); window.scrollTo({ top: 0, behavior: 'smooth' }); };
  return <div className="app-shell">
    <header className="navbar"><button className="brand" onClick={() => navigate('home')}><span className="brand-mark">✿</span><span>PARADISE<span className="brand-light"> NURSERY</span></span></button>
      <nav><button onClick={() => navigate('home')}>Home</button><button onClick={() => navigate('plants')}>Plants</button><button className="cart-nav" onClick={() => navigate('cart')}>♧ Cart <span className="cart-count">{count}</span></button></nav>
    </header>
    {page === 'home' && <main className="hero"><div className="hero-copy"><p className="eyebrow">A BREATH OF FRESH AIR</p><h1>Make room<br/><em>for nature.</em></h1><p className="hero-description">Bring home a little green. Find your perfect plant and let your space flourish.</p><button className="primary-btn" onClick={() => navigate('plants')}>Get Started <span>→</span></button><button className="text-btn" onClick={() => navigate('about')}>Our story</button></div><div className="hero-art"><div className="sun"></div><div className="plant-illustration"><span className="leaf leaf1"></span><span className="leaf leaf2"></span><span className="leaf leaf3"></span><span className="leaf leaf4"></span><span className="leaf leaf5"></span><div className="pot"></div></div><div className="hero-note">A happier home<br/>starts with a plant.</div></div><div className="hero-bottom"><span>PLANTS FOR EVERY SPACE</span><span>GROW AT YOUR OWN PACE ↗</span></div></main>}
    {page === 'plants' && <ProductList onNavigate={navigate}/>}
    {page === 'cart' && <CartItem onNavigate={navigate}/>}
    {page === 'about' && <AboutUs/>}
    <footer>© 2026 Paradise Nursery <span>Grow something good.</span></footer>
  </div>;
}
