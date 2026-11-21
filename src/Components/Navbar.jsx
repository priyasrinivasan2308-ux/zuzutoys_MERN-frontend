import React from 'react';

function Navbar({ go, user, setUser, cart }) {
  return (
    <div style={{
      backgroundColor: '#FF4081', padding: '15px 20px',
      display: 'flex', alignItems: 'center', gap: '10px',
      color: 'white', flexWrap: 'wrap'
    }}>
      <h2 style={{ margin: 0, cursor: 'pointer', flexGrow: 1 }} onClick={() => go('home')}>
        🧸 ZUZU Toys
      </h2>
      <button style={btn} onClick={() => go('home')}>Home</button>
      <button style={btn} onClick={() => go('product')}>Product</button>
      <button style={btn} onClick={() => go('about')}>About</button>
      <button style={btn} onClick={() => go('contact')}>Contact Us</button>
    
      {user ? (
        <>
          <span>Hi, {user}</span>
          <button style={btn} onClick={() => { setUser(null); go('home'); }}>Sign Out</button>
        </>
      ) : (
        <>
          <button style={btn} onClick={() => go('login')}>Login</button>
          <button style={btn} onClick={() => go('signup')}>Sign Up</button>
        </>
      )}
      <button style={btn} onClick={() => go('checkout')}>🛒 Cart ({cart.length})</button>
    </div>
  );
}
const btn = { backgroundColor: 'transparent', color: 'white', border: '1px solid white', padding: '6px 12px', borderRadius: '5px', cursor: 'pointer' };
export default Navbar;