import React from "react";

const Navbar = () => {

  return (
    <div className="flex items-center justify-between bg-black text-white rounded p-4">
      <div>Logo</div>
      <div className="flex gap-10 text-xl">
        <p className="cursor-pointer">
          Home
        </p>
        <p className="cursor-pointer">
          Cart
        </p>
      </div>
      <button>Login</button>
    </div>
  );
};

export default Navbar;
