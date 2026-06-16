export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <p className="hero-tag">🎉 Summer Sale — Up to 70% Off</p>
        <h1>Shop Everything.<br />Delivered Fast.</h1>
        <p className="hero-sub">
          Millions of products across Electronics, Fashion, Home & more —
          right to your doorstep across India.
        </p>
        <div className="hero-btns">
          <button className="btn-primary">Shop Now</button>
          <button className="btn-secondary">View Deals</button>
        </div>
      </div>
      <div className="hero-image">
        <img
          src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=600&q=80"
          alt="Shopping"
        />
      </div>
    </section>
  );
}
