import { useEffect, useState } from 'react';

function Products({ cartItems, addToCart, removeFromCart }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
      {products.map((product) => {
        const isInCart = cartItems.some((item) => item.id === product.id);
        return (
          <div key={product.id} className="border border-gray-500 rounded-sm shadow-lg bg-white p-5">
            <img className="mx-auto h-50 mb-5" src={product.image} alt="Product" />
            <h2 className="text-lg font-semibold text-gray-700 font-serif">{product.title}</h2>
            <p className="text-lg font-bold text-red-500 font-serif">Rs.{product.price}</p>
            {isInCart ? (
              <button
                onClick={() => removeFromCart(product.id)}
                className="bg-red-500 text-white w-full py-2 my-2 rounded-full font-semibold font-serif hover:bg-red-700"
              >
                Remove from Cart
              </button>
            ) : (
              <button
                onClick={() => addToCart(product)}
                className="bg-gray-500 text-black w-full py-2 my-2 rounded-full font-semibold font-serif hover:bg-yellow-400"
              >
                Add to Cart
              </button>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default Products;