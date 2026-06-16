import { useState } from "react";
import { ShoppingCart, Search, Menu, X, User } from "lucide-react";

export default function Navbar({ cartCount, onCartClick }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <div className="navbar-logo">
          <span className="logo-sq">Sq</span>uroo
        </div>

        <div className="navbar-search">
          <Search size={18} className="search-icon" />
          <input type="text" placeholder="Search products, brands and more..." />
        </div>

        <div className="navbar-actions">
          <button className="nav-btn" title="Account">
            <User size={22} />
            <span>Account</span>
          </button>
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

      {menuOpen && (
        <div className="mobile-menu">
          <a href="#">Home</a>
          <a href="#">Electronics</a>
          <a href="#">Fashion</a>
          <a href="#">Home & Living</a>
          <a href="#">Sports</a>
          <a href="#">Beauty</a>
        </div>
      )}
    </nav>
  );
}
