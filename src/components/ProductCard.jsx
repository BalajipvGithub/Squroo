import { Star, ShoppingCart } from "lucide-react";

export default function ProductCard({ product, onAddToCart }) {
  const discount = Math.round(
    ((product.originalPrice - product.price) / product.originalPrice) * 100
  );

  return (
    <div className="product-card">
      {product.badge && <span className="product-badge">{product.badge}</span>}
      <div className="product-img-wrap">
        <img src={product.image} alt={product.name} loading="lazy" />
      </div>
      <div className="product-info">
        <p className="product-category">{product.category}</p>
        <h3 className="product-name">{product.name}</h3>
        <div className="product-rating">
          <Star size={14} fill="#f59e0b" stroke="#f59e0b" />
          <span>{product.rating}</span>
          <span className="review-count">({product.reviews})</span>
        </div>
        <div className="product-pricing">
          <span className="price">₹{product.price.toLocaleString()}</span>
          <span className="original-price">₹{product.originalPrice.toLocaleString()}</span>
          <span className="discount">{discount}% off</span>
        </div>
        <button className="add-to-cart" onClick={() => onAddToCart(product)}>
          <ShoppingCart size={16} />
          Add to Cart
        </button>
      </div>
    </div>
  );
}
