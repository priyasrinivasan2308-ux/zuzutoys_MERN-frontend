import React from 'react';

function Information({ setPage }) {
  return (
    <div className="page-container">
      <h2 className="page-title">Information</h2>
      <p className="page-subtitle">Everything you need to know about ZUZU Toys.</p>

      <div className="info-card">
        <h3>About Us</h3>
        <p>ZUZU Toys is a kids toy shop started in Velur, Tamil Nadu. Our aim is simple: Happy Kids, Safe Parents! All our toys are tested, safe, and made for learning and fun.</p>
        <button onClick={() => setPage('about')}>Read More About Us</button>
      </div>

      <div className="info-card">
        <h3>Contact Information</h3>
        <p>Address: Velur, Tamil Nadu, India</p>
        <p>Phone: 98765 43210</p>
        <p>Email: zuzutoys@gmail.com</p>
        <p>Working Hours: 9 AM to 9 PM, All Days</p>
        <button onClick={() => setPage('contact')}>Contact Us</button>
      </div>

      <div className="info-card">
        <h3>Delivery Information</h3>
        <p>Velur: 1-2 Days | Tamil Nadu: 2-4 Days | Other States: 4-7 Days</p>
        <p>Free delivery for orders above Rs.999. Otherwise, delivery charge is Rs.49.</p>
      </div>

      <div className="info-card">
        <h3>Policies</h3>
        <p>Please read our policies before ordering.</p>
        <button onClick={() => setPage('terms')}>Terms & Conditions</button>{' '}
        <button onClick={() => setPage('privacy')}>Privacy Policy</button>{' '}
        <button onClick={() => setPage('faq')}>FAQ</button>
      </div>
    </div>
  );
}

export default Information;