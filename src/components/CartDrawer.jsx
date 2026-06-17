import { useState } from "react";
import { X, Trash2, CheckCircle2 } from "lucide-react";
import ProductScene from "./ProductScene";

export default function CartDrawer({ cart, onClose, onRemove, onClearCart }) {
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [orderNumber, setOrderNumber] = useState("");

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  const handleCheckout = () => {
    setOrderNumber("SQ" + Math.floor(100000 + Math.random() * 900000));
    setOrderPlaced(true);
    onClearCart();
  };

  const handleClose = () => {
    setOrderPlaced(false);
    onClose();
  };

  return (
    <>
      <div className="cart-overlay" onClick={handleClose} />
      <div className="cart-drawer">
        <div className="cart-header">
          <h2>
            {orderPlaced
              ? "Order Confirmed"
              : `Your Cart (${cart.reduce((s, i) => s + i.qty, 0)} items)`}
          </h2>
          <button onClick={handleClose}>
            <X size={22} />
          </button>
        </div>

        {orderPlaced ? (
          <div className="cart-empty order-success">
            <CheckCircle2 size={48} color="#16a34a" />
            <p>
              <strong>🎉 Order #{orderNumber} received!</strong>
            </p>
            <span>
              This is a preview store — real checkout & payments launch soon.
              We'll reach out to confirm your Chota Kits.
            </span>
            <button className="btn-primary" onClick={handleClose}>
              Continue Browsing
            </button>
          </div>
        ) : cart.length === 0 ? (
          <div className="cart-empty">
            <p>Your cart is empty.</p>
            <button className="btn-primary" onClick={handleClose}>
              Continue Shopping
            </button>
          </div>
        ) : (
          <>
            <div className="cart-items">
              {cart.map((item) => (
                <div key={item.id} className="cart-item">
                  <div className="cart-item-scene">
                    <ProductScene theme={item.theme} size="thumb" />
                  </div>
                  <div className="cart-item-info">
                    <p className="cart-item-name">{item.name}</p>
                    <p className="cart-item-price">
                      ₹{item.price.toLocaleString()} × {item.qty}
                    </p>
                  </div>
                  <button className="remove-btn" onClick={() => onRemove(item.id)}>
                    <Trash2 size={16} />
                  </button>
                </div>
              ))}
            </div>
            <div className="cart-footer">
              <div className="cart-total">
                <span>Total</span>
                <span>₹{total.toLocaleString()}</span>
              </div>
              <button className="btn-primary checkout-btn" onClick={handleCheckout}>
                Proceed to Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
}
