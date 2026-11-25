
import React from "react";
import "./App.css";

function ProductCart({ image, title, description, price, tag }) {
  return (
    <div className="product-card">

      <span className="product-tag">{tag}</span>

      <div className="product-image">
        <img src={image} alt={title} />
      </div>

      <div className="product-details">
        <h2>{title}</h2>

        <p>{description}</p>

        <div className="product-bottom">
          <h3>{price}</h3>
          <button>Add to Cart <span>+</span></button>
        </div>
      </div>

    </div>
  );
}

function App() {
  return (
    <div className="main-container">

      <nav className="navbar">
        <h2>VIBE<span>STORE.</span></h2>
        <p>HOME &nbsp; COLLECTION &nbsp; ABOUT</p>
        <button className="cart-btn">🛒 My Cart</button>
      </nav>

      <section className="hero">
        <p className="hero-label">✦ YOUR STYLE, YOUR VIBE ✦</p>

        <h1>
          SHOP YOUR <span>VIBE.</span>
        </h1>

        <p className="hero-text">
          Discover products that define your personality.
          Style is not what you wear, it's how you own it.
        </p>

        <div className="hero-line"></div>
      </section>

      <section className="collection">

        <div className="section-heading">
          <div>
            <p className="small-heading">HANDPICKED FOR YOU</p>
            <h2>Trending <span>Collection</span></h2>
          </div>

          <p className="collection-count">03 PRODUCTS / 2026</p>
        </div>

        <div className="product-container">

          <ProductCart
            image="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=700"
            title="Air Flex Sneakers"
            description="Clean, lightweight and effortlessly stylish sneakers for your everyday look."
            price="₹2,499"
            tag="BEST SELLER"
          />

          <ProductCart
            image="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=700"
            title="RCB Fan Jersey"
            description="Show your passion for Royal Challengers Bengaluru with a Virat Kohli-inspired fan jersey."
            price="₹1,499"
            tag="KING COLLECTION"
          />

          <ProductCart
            image="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=700"
            title="Classic Bracelet"
            description="A minimal and elegant bracelet that adds a little shine to your personality."
            price="₹799"
            tag="TRENDING"
          />

        </div>

      </section>

      <footer>
        <h2>VIBE<span>STORE.</span></h2>
        <p>Designed with passion. Made for your vibe.</p>
        <p className="copyright">© 2026 Vibe Store | All Rights Reserved</p>
      </footer>

    </div>
  );
}

export default App;
