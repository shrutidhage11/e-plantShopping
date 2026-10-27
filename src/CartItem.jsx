import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ArrowLeft, Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import {
  decreaseQuantity,
  increaseQuantity,
  removeFromCart
} from "./CartSlice";
import "./CartItem.css";

export default function CartItem() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const totalItems = cartItems.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  if (cartItems.length === 0) {
    return (
      <main className="cart-page empty-cart-page">
        <ShoppingBag size={58} />
        <h1>Your cart is empty</h1>
        <p>Add some beautiful plants to your cart and they will appear here.</p>
        <Link to="/plants" className="primary-button">
          Continue Shopping
        </Link>
      </main>
    );
  }

  return (
    <main className="cart-page">
      <div className="cart-heading">
        <div>
          <span className="eyebrow">YOUR SHOPPING CART</span>
          <h1>Shopping Cart</h1>
          <p>{totalItems} item{totalItems !== 1 ? "s" : ""} in your cart</p>
        </div>
        <Link to="/plants" className="back-link">
          <ArrowLeft size={18} />
          Continue Shopping
        </Link>
      </div>

      <div className="cart-layout">
        <section className="cart-items">
          {cartItems.map((item) => {
            const itemTotal = item.price * item.quantity;

            return (
              <article className="cart-item" key={item.id}>
                <img src={item.image} alt={item.name} />

                <div className="cart-item-details">
                  <span className="product-category">{item.category}</span>
                  <h2>{item.name}</h2>
                  <p className="unit-price">Unit price: ₹{item.price}</p>

                  <div className="cart-controls">
                    <div className="quantity-control">
                      <button
                        aria-label={`Decrease ${item.name}`}
                        onClick={() => dispatch(decreaseQuantity(item.id))}
                      >
                        <Minus size={16} />
                      </button>

                      <span>{item.quantity}</span>

                      <button
                        aria-label={`Increase ${item.name}`}
                        onClick={() => dispatch(increaseQuantity(item.id))}
                      >
                        <Plus size={16} />
                      </button>
                    </div>

                    <strong>₹{itemTotal}</strong>

                    <button
                      className="delete-button"
                      aria-label={`Remove ${item.name}`}
                      onClick={() => dispatch(removeFromCart(item.id))}
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </section>

        <aside className="summary-card">
          <h2>Order Summary</h2>

          <div className="summary-row">
            <span>Items</span>
            <span>{totalItems}</span>
          </div>

          <div className="summary-row">
            <span>Subtotal</span>
            <span>₹{total}</span>
          </div>

          <div className="summary-row">
            <span>Delivery</span>
            <span>Free</span>
          </div>

          <div className="summary-total">
            <span>Total</span>
            <strong>₹{total}</strong>
          </div>

          <button
            className="checkout-button"
            onClick={() => window.alert("Checkout is Coming Soon!")}
          >
            Checkout
          </button>

          <Link to="/plants" className="continue-button">
            Continue Shopping
          </Link>
        </aside>
      </div>
    </main>
  );
}