import { useState } from "react";
import { ShoppingCart, Search, Menu, X, User } from "lucide-react";
import { categories } from "../data/products";

export default function Navbar({
  cartCount,
  onCartClick,
  searchTerm,
  onSearchChange,
  onCategorySelect,
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [accountOpen, setAccountOpen] = useState(false);

  const navCategories = categories.filter((c) => c !== "All");

  const handleSelect = (cat) => {
    onCategorySelect(cat);
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <div className="navbar-logo" onClick={() => handleSelect("All")}>
          <span className="logo-sq">Sq</span>uroo
        </div>

        <div className="navbar-search">
          <Search size={18} className="search-icon" />
          <input
            type="text"
            placeholder="Search Farm Kit, Kitchen Kit, Gifts..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
          />
        </div>

        <div className="navbar-actions">
          <div className="account-wrap">
            <button className="nav-btn" title="Account" onClick={() => setAccountOpen((v) => !v)}>
              <User size={22} />
              <span>Account</span>
            </button>
            {accountOpen && (
              <div className="account-dropdown">
                <p>👋 Sign-in is launching soon!</p>
                <span>We'll notify you when accounts & order tracking go live.</span>
              </div>
            )}
          </div>
          <button className="nav-btn cart-btn" onClick={onCartClick} title="Cart">
            <ShoppingCart size={22} />
            <span>Cart</span>
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </button>
        </div>

        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div className="navbar-categories">
        {navCategories.map((cat) => (
          <button key={cat} className="navbar-cat-link" onClick={() => handleSelect(cat)}>
            {cat}
          </button>
        ))}
      </div>

      {menuOpen && (
        <div className="mobile-menu">
          <button onClick={() => handleSelect("All")}>Home</button>
          {navCategories.map((cat) => (
            <button key={cat} onClick={() => handleSelect(cat)}>
              {cat}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
