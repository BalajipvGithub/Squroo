import ProductCard from "./ProductCard";
import { categories } from "../data/products";

export default function ProductGrid({
  products,
  onAddToCart,
  activeCategory,
  onCategoryChange,
  searchTerm,
}) {
  const term = searchTerm.trim().toLowerCase();

  const filtered = products.filter((p) => {
    const matchesCategory = activeCategory === "All" || p.category === activeCategory;
    const matchesSearch =
      !term ||
      p.name.toLowerCase().includes(term) ||
      p.tagline.toLowerCase().includes(term) ||
      p.category.toLowerCase().includes(term);
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="product-section" id="shop">
      <h2 className="section-title">Shop Chota Kits</h2>

      <div className="category-tabs">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`cat-tab ${activeCategory === cat ? "active" : ""}`}
            onClick={() => onCategoryChange(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="no-results">No kits match "{searchTerm}". Try another search.</p>
      ) : (
        <div className="product-grid">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
          ))}
        </div>
      )}
    </section>
  );
}
