import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav classname="border-b border-zinc-800 px-4 py-6">
      <div className="flex items-center justify-between">
        <h1 classname="text-2xl font-bold text-white">ShopUi</h1>
        <div className="flex text-zinc-300 gap-6">
          <Link to="/">Home</Link>
          <Link to="/collections">Collections</Link>
          <Link to="/products">Products</Link>
          <Link to="/profile">Profile</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
