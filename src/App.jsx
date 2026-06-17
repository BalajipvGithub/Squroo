import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import ProductGrid from "./components/ProductGrid";
import CartDrawer from "./components/CartDrawer";
import Footer from "./components/Footer";
import { products } from "./data/products";
import "./App.css";

export default function App() {
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.id === product.id);
      if (existing) {
        return prev.map((i) =>
          i.id === product.id ? { ...i, qty: i.qty + 1 } : i
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });
    setCartOpen(true);
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((i) => i.id !== id));
  };

  const scrollToId = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const goToCategory = (cat) => {
    setActiveCategory(cat);
    setSearchTerm("");
    scrollToId("shop");
  };

  const cartCount = cart.reduce((s, i) => s + i.qty, 0);

  return (
    <>
      <Navbar
        cartCount={cartCount}
        onCartClick={() => setCartOpen(true)}
        searchTerm={searchTerm}
        onSearchChange={(term) => {
          setSearchTerm(term);
          setActiveCategory("All");
        }}
        onCategorySelect={goToCategory}
      />
      <main>
        <Hero onShopClick={goToCategory} onLearnMoreClick={() => scrollToId("features")} />
        <Features />
        <ProductGrid
          products={products}
          onAddToCart={addToCart}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
          searchTerm={searchTerm}
        />
      </main>
      <Footer />
      {cartOpen && (
        <CartDrawer
          cart={cart}
          onClose={() => setCartOpen(false)}
          onRemove={removeFromCart}
          onClearCart={() => setCart([])}
        />
      )}
    </>
  );
}
