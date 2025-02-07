import { Link } from 'react-router-dom';

function Navbar({ cartCount }) {
  return (
    <nav className="bg-yellow-500 text-black flex justify-between items-center p-5 font-semibold text-3xl font-serif">
      <Link to="/" className="text-black">KING & QUEEN SHOP</Link>
      <Link to="/cart" className="bg-gray-500 px-5 py-2 rounded-full">
        Your Cart: {cartCount}
      </Link>
    </nav>
  );
}

export default Navbar;