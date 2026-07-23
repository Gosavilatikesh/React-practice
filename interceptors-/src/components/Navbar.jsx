import React from "react";
import { Navigate, NavLink } from "react-router";
import { House, Users, ShoppingBag, LogOut } from "lucide-react";

const Navbar = () => {
  const navStyle = ({ isActive }) =>
    `flex items-center gap-3 rounded-xl px-4 py-3 transition-all duration-200 ${
      isActive
        ? "bg-red-500 text-white shadow-md"
        : "text-gray-600 hover:bg-gray-100 hover:text-red-500"
    }`;

  return (
    <aside className="flex h-screen w-64 flex-col justify-between border-r border-gray-200 bg-white p-5 shadow-sm">
      {/* Top Section */}
      <div>
        {/* Logo */}
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-red-500">
            E-Com
          </h1>
          <p className="text-sm text-gray-500">
            Admin Dashboard
          </p>
        </div>

        {/* Navigation */}
        <nav className="space-y-3">
          <NavLink to="/main" end className={navStyle}>
            <House size={20} />
            <span>Home</span>
          </NavLink>

          <NavLink to="/main/user" className={navStyle}>
            <Users size={20} />
            <span>Users</span>
          </NavLink>

          <NavLink to="/main/products" className={navStyle}>
            <ShoppingBag size={20} />
            <span>Products</span>
          </NavLink>
        </nav>
      </div>

      {/* Bottom Section */}
      <button onClick={() => {
        localStorage.removeItem("logedInUser")
        return <Navigate to={"/"}/>
      }} className="flex items-center justify-center gap-2 rounded-xl bg-red-500 px-4 py-3 font-medium text-white transition hover:bg-red-600">
        <LogOut size={18} />
        Log Out
      </button>
    </aside>
  );
};

export default Navbar;