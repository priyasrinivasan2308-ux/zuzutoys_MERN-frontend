import React, { useState } from 'react';
import Navbar from '../Components/Navbar';

function Home() {
  const [page, setPage] = useState('home');
  const [user, setUser] = useState(null);
  const [cart, setCart] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const go = (p) => { setPage(p); window.scrollTo(0,0); };

  const products = [
    { id: 1, name: 'Cute Teddy Bear', price: 499, img: '🧸', desc: 'Soft & Cute Teddy' },
    { id: 2, name: 'Racing Car', price: 799, img: '🚗', desc: 'Fast Racing Car' },
    { id: 3, name: 'Building Blocks', price: 999, img: '🧩', desc: '100 Pcs Blocks' },
    { id: 4, name: 'Doll Set', price: 699, img: '🪆', desc: 'Beautiful Doll' },
    { id: 5, name: 'Robot Toy', price: 1299, img: '🤖', desc: 'Talking Robot' },
    { id: 6, name: 'Train Set', price: 899, img: '🚂', desc: 'Mini Train' },
  ];

  const addToCart = (p) => { setCart([...cart, p]); alert(p.name + ' Cart  added!'); };

  const handleLogin = () => {
    if (email && password) { setUser(email.split('@')[0]); go('home'); alert('Login Success!'); }
    else alert('Email & Password podu');
  };

const handleSignup = () => {
  if (!name || !email || !password) {
    alert("Please fill all fields");
    return;
  }

  let users = JSON.parse(localStorage.getItem("users")) || [];

  const existingUser = users.find(
    (user) => user.email === email
  );

  if (existingUser) {
    alert("Email already exists!");
    return;
  }

  const newUser = {
    name,
    email,
    password
  };

  users.push(newUser);

  localStorage.setItem("users", JSON.stringify(users));

  alert("Signup Successful!");

  setName("");
  setEmail("");
  setPassword("");
};
  return (
    <div style={{ backgroundColor: '#FFF9C4', minHeight: '100vh', fontFamily: 'Arial' }}>
      <Navbar go={go} user={user} setUser={setUser} cart={cart} />

      {/* ---------- HOME PAGE ---------- */}
      {page === 'home' && (
        <div style={{ textAlign: 'center', padding: '30px 20px' }}>
          <h1 style={{ fontSize: '45px', color: '#FF4081' }}>Welcome to ZUZU Toys 🧸</h1>
          <p style={{ fontSize: '18px' }}>Where Fun Begins!</p>
          <button onClick={() => go('product')} style={pinkBtn}>Shop Now 🛍️</button>
          <button onClick={() => go('about')} style={whiteBtn}>About Us</button>
          

          <h2 style={{ marginTop: '40px' }}>🔥 Popular Toys</h2>
          <div style={grid}>
            {products.slice(0,3).map(p => (
              <div key={p.id} style={card}>
                <div style={{ fontSize: '70px' }}>{p.img}</div>
                <h3>{p.name}</h3><p>{p.desc}</p>
                <b style={{ color: '#FF4081', fontSize: '20px' }}>₹{p.price}</b><br/><br/>
                <button onClick={() => addToCart(p)} style={pinkBtn}>Add to Cart</button>
              </div>
            ))}
          </div>
        </div>
      )}
      
      {/* ---------- PRODUCT PAGE ---------- */}
      {page === 'product' && (
        <div style={{ padding: '20px', textAlign: 'center' }}>
          <h1>All Toys 🧸</h1>
          <div style={grid}>
            {products.map(p => (
              <div key={p.id} style={card}>
                <div style={{ fontSize: '70px' }}>{p.img}</div>
                <h3>{p.name}</h3><p>{p.desc}</p>
                <b style={{ color: '#FF4081' }}>₹{p.price}</b><br/><br/>
                <button onClick={() => addToCart(p)} style={pinkBtn}>Add to Cart</button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ---------- ABOUT PAGE ---------- */}
      {page === 'about' && (
        <div style={{ padding: '30px', textAlign: 'center' }}>
          <h1>About ZUZU Toys</h1>
          <p style={{ maxWidth: '600px', margin: 'auto', lineHeight: '1.8' }}>
            ZUZU Toys  Kids  safe, quality toys. 2026 start.
            Safe for all kids. Velur, Tamil Nadu.
          </p>
        </div>
      )}

      {/* ---------- CONTACT PAGE ---------- */}
      {page === 'contact' && (
        <div style={{ padding: '30px', textAlign: 'center' }}>
          <h1>Contact Us 📞</h1>
          <p>📍 Velur, Tamil Nadu</p>
          <p>📧 zuzu@gmail.com</p>
          <p>📱 98765 43210</p>
          <input placeholder="User Name" style={input} /><br/>
          <input placeholder="User Message" style={input} /><br/>
          <button onClick={() => alert('Message Sent!')} style={pinkBtn}>Send Message</button>
        </div>
      )}

      {/* ---------- LOGIN PAGE ---------- */}
      {page === 'login' && (
        <div style={formBox}>
          <h1>Login</h1>
          <input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} style={input} /><br/>
          <input placeholder="Password" type="password" value={password} onChange={e => setPassword(e.target.value)} style={input} /><br/>
          <button onClick={handleLogin} style={pinkBtn}>Login</button><br/><br/>
          <span onClick={() => go('forgot')} style={link}>Forgot Password?</span> | <span onClick={() => go('signup')} style={link}>Sign Up</span>
        </div>
      )}

            {/* ---------- SIGNUP PAGE ---------- */}

{page === 'signup' && (
        <div style={formBox}>
          <h1>Sign Up</h1>
          <input placeholder="Full Name" value={name} onChange={e => setName(e.target.value)} style={input} /><br/>
          <input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} style={input} /><br/>
          <input placeholder="Password" type="password" value={password} onChange={e => setPassword(e.target.value)} style={input} /><br/>
          <button onClick={handleSignup} style={pinkBtn}>Create Account</button><br/><br/>
          <span>Already have account? <span onClick={() => go('login')} style={link}>Login</span></span>
        </div>
      )}

      {/* ---------- FORGOT PAGE ---------- */}
      {page === 'forgot' && (
        <div style={formBox}>
          <h1>Forgot Password</h1>
          <input placeholder="Email" style={input} /><br/>
          <button onClick={() => { alert('Reset Link Sent!'); go('login'); }} style={pinkBtn}>Send Reset Link</button>
        </div>
      )}

      {/* ---------- CHECKOUT / CART PAGE ---------- */}
      {page === 'checkout' && (
        <div style={{ padding: '30px', textAlign: 'center' }}>
          <h1>🛒 Your Cart ({cart.length})</h1>
          {cart.length === 0 ? <p>Cart empty! Product page Add pannu.</p> :
            <div>
              {cart.map((c,i) => <p key={i}>{c.img} {c.name} - ₹{c.price}</p>)}
              <h3>Total: ₹{cart.reduce((a,c) => a + c.price, 0)}</h3>
              <button onClick={() => { alert('Order Placed!'); setCart([]); go('home'); }} style={pinkBtn}>Place Order</button>
            </div>
          }
        </div>
      )}

      {/* ---------- FOOTER ---------- */}
      <div style={{ backgroundColor: '#3E2723', color: 'white', textAlign: 'center', padding: '20px', marginTop: '40px' }}>
        <p>🧸 ZUZU Toys - Velur, Tamil Nadu</p>
        <p onClick={() => go('terms')} style={linkWhite}>Terms</p> | <span onClick={() => go('privacy')} style={linkWhite}>Privacy</span> | <span onClick={() => go('faq')} style={linkWhite}>FAQ</span>
        <p>© 2026 ZUZU Toys</p>
      </div>

      {page === 'terms and conditions' && <div style={infoPage}><h1>Terms</h1><p>Please toys return within 7 days.</p></div>}
      {page === 'privacy' && <div style={infoPage}><h1>Privacy Policy</h1><p>Yours data not shown to everyone.</p></div>}
      {page === 'faq' && <div style={infoPage}><h1>FAQ</h1><p><b>When will my order arrive?</b></p>.<p>Yours order is expected to arrive within 3-5 days.</p></div>}

    </div>
  );
}

const pinkBtn = { backgroundColor: '#FF4081', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '20px', cursor: 'pointer', margin: '5px', fontSize: '15px' };
const whiteBtn = { backgroundColor: 'white', color: '#FF4081', border: '1px solid #FF4081', padding: '10px 20px', borderRadius: '20px', cursor: 'pointer', margin: '5px' };
const card = { backgroundColor: 'white', padding: '20px', borderRadius: '15px', boxShadow: '0 2px 10px #ddd', width: '220px' };
const grid = { display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap', marginTop: '20px' };
const input = { padding: '12px', width: '280px', margin: '8px', borderRadius: '8px', border: '1px solid #ddd', fontSize: '15px' };
const formBox = { maxWidth: '400px', margin: '40px auto', backgroundColor: 'white', padding: '30px', borderRadius: '15px', textAlign: 'center', boxShadow: '0 2px 10px #ddd' };
const link = { color: '#FF4081', cursor: 'pointer', fontWeight: 'bold' };
const linkWhite = { cursor: 'pointer', margin: '0 5px' };
const infoPage = { padding: '30px', textAlign: 'center', backgroundColor: 'white', margin: '20px' };

export default Home;