function CartPage({ cartItems, removeFromCart, increaseQuantity, decreaseQuantity }) {
    const totalCartPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    const discountedPrice = totalCartPrice * 0.9; // 10% discount
  
    return (
      <div className="p-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Your Cart</h2>
        {cartItems.length > 0 ? (
          <div>
            {cartItems.map((item) => (
              <div key={item.id} className="flex justify-between items-center mb-4 border-b pb-2">
                <img src={item.image} alt="Product" className="w-20 h-20" />
                <div className="text-gray-600">{item.title}</div>
                <p className="text-red-500 font-bold">Rs. {item.price}</p>
                <div className="flex items-center">
                  <button
                    className="px-2 py-1 bg-gray-300"
                    onClick={() => decreaseQuantity(item.id)}
                  >
                    -
                  </button>
                  <span className="px-3">{item.quantity}</span>
                  <button
                    className="px-2 py-1 bg-gray-300"
                    onClick={() => increaseQuantity(item.id)}
                  >
                    +
                  </button>
                </div>
                <p className="text-gray-700 font-semibold">
                  Rs. {item.price * item.quantity}
                </p>
                <button
                  className="text-red-700 hover:underline"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </div>
            ))}
            <div className="mt-5 text-right">
              <p className="text-lg font-semibold">Total: Rs. {totalCartPrice.toFixed(2)}</p>
              <p className="text-green-600 font-bold">Discounted Price: Rs. {discountedPrice.toFixed(2)}</p>
            </div>
          </div>
        ) : (
          <p className="text-yellow-600">Your Cart is Empty.</p>
        )}
      </div>
    );
  }
  
  export default CartPage;