import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./CartSlice";
import { ShoppingCart } from "lucide-react";
import "./ProductList.css";

const plants = [
  {
    id: 1,
    name: "Snake Plant",
    category: "Indoor Plants",
    price: 499,
    image: "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: 2,
    name: "Peace Lily",
    category: "Indoor Plants",
    price: 599,
    image: "https://images.unsplash.com/photo-1593482892290-f54927ae1bb6?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: 3,
    name: "Spider Plant",
    category: "Indoor Plants",
    price: 349,
    image: "https://images.unsplash.com/photo-1572688484438-313a6e50c333?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: 4,
    name: "ZZ Plant",
    category: "Indoor Plants",
    price: 699,
    image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: 5,
    name: "Money Plant",
    category: "Indoor Plants",
    price: 299,
    image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: 6,
    name: "Rubber Plant",
    category: "Indoor Plants",
    price: 649,
    image: "https://images.unsplash.com/photo-1604762524889-3e2fcc145683?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: 7,
    name: "Aloe Vera",
    category: "Succulents",
    price: 299,
    image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: 8,
    name: "Echeveria",
    category: "Succulents",
    price: 249,
    image: "https://images.unsplash.com/photo-1527965408463-82ae0731828b?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: 9,
    name: "Jade Plant",
    category: "Succulents",
    price: 399,
    image: "https://images.unsplash.com/photo-1603487553126-42c3e0d8eab8?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: 10,
    name: "Haworthia",
    category: "Succulents",
    price: 299,
    image: "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: 11,
    name: "Zebra Haworthia",
    category: "Succulents",
    price: 349,
    image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: 12,
    name: "String of Pearls",
    category: "Succulents",
    price: 449,
    image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: 13,
    name: "Orchid",
    category: "Flowering Plants",
    price: 899,
    image: "https://images.unsplash.com/photo-1566907225474-6c5e1b6e7a1f?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: 14,
    name: "Anthurium",
    category: "Flowering Plants",
    price: 749,
    image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: 15,
    name: "Jasmine",
    category: "Flowering Plants",
    price: 499,
    image: "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: 16,
    name: "Hibiscus",
    category: "Flowering Plants",
    price: 399,
    image: "https://images.unsplash.com/photo-1597848212624-e5301e7a7a3a?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: 17,
    name: "Rose Plant",
    category: "Flowering Plants",
    price: 449,
    image: "https://images.unsplash.com/photo-1496062031456-07b8f162a322?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: 18,
    name: "Gerbera",
    category: "Flowering Plants",
    price: 349,
    image: "https://images.unsplash.com/photo-1562690868-60bbe7293e94?auto=format&fit=crop&w=700&q=80"
  }
];

const categories = ["Indoor Plants", "Succulents", "Flowering Plants"];

export default function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const handleAddToCart = (plant) => {
    dispatch(addToCart(plant));
  };

  return (
    <main className="products-page">
      <section className="products-header">
        <div>
          <span className="eyebrow">OUR COLLECTION</span>
          <h1>Find your perfect plant</h1>
          <p>Explore our curated collection of plants for every space.</p>
        </div>
        <div className="collection-badge">
          <ShoppingCart size={19} />
          {cartItems.reduce((sum, item) => sum + item.quantity, 0)} items in cart
        </div>
      </section>

      {categories.map((category) => (
        <section className="category-section" key={category}>
          <div className="category-title">
            <h2>{category}</h2>
            <span>{plants.filter((plant) => plant.category === category).length} plants</span>
          </div>

          <div className="product-grid">
            {plants
              .filter((plant) => plant.category === category)
              .map((plant) => {
                const added = cartItems.some((item) => item.id === plant.id);

                return (
                  <article className="product-card" key={plant.id}>
                    <div className="image-wrapper">
                      <img src={plant.image} alt={plant.name} />
                    </div>

                    <div className="product-info">
                      <span className="product-category">{plant.category}</span>
                      <h3>{plant.name}</h3>

                      <div className="product-bottom">
                        <strong>₹{plant.price}</strong>
                        <button
                          className="add-button"
                          onClick={() => handleAddToCart(plant)}
                          disabled={added}
                        >
                          {added ? "Added" : "Add to Cart"}
                        </button>
                      </div>
                    </div>
                  </article>
                );
              })}
          </div>
        </section>
      ))}
    </main>
  );
}