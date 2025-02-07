import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Products from './components/Products';
import CartPage from './components/CartPage';
import './App.css'

function App() {
  const [cartItems, setCartItems] = useState([]);

  // Add to Cart function
  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  // Remove from Cart function
  const removeFromCart = (productId) => {
    setCartItems(cartItems.filter((item) => item.id !== productId));
  };

  // Increase Quantity
  const increaseQuantity = (productId) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // Decrease Quantity
  const decreaseQuantity = (productId) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === productId
          ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 }
          : item
      )
    );
  };

  return (
    <Router>
      <div className="bg-gray-400 min-h-screen">
        <Navbar cartCount={cartItems.length} />
        <Routes>
          <Route path="/" element={<Products cartItems={cartItems} addToCart={addToCart} removeFromCart={removeFromCart} />} />
          <Route
            path="/cart"
            element={
              <CartPage
                cartItems={cartItems}
                removeFromCart={removeFromCart}
                increaseQuantity={increaseQuantity}
                decreaseQuantity={decreaseQuantity}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;