import React from "react";

const ProductCard = ({ product, setCartItems }) => {
  return (
    <div className="max-w-sm rounded-xl border border-gray-200 bg-white p-4 shadow-md hover:shadow-lg transition">
      <img
        src={product.image}
        alt={product.title}
        className="h-56 w-full object-contain"
      />

      <div className="mt-4">
        <p className="text-sm text-gray-500 capitalize">
          {product.category}
        </p>

        <h2 className="mt-2 text-lg font-semibold line-clamp-2">
          {product.title}
        </h2>

        <p className="mt-2 text-sm text-gray-600 line-clamp-3">
          {product.description}
        </p>

        <div className="mt-4 flex items-center justify-between">
          <span className="text-2xl font-bold text-green-600">
            ${product.price}
          </span>

          <div className="flex items-center gap-1">
            ⭐
            <span>{product.rating.rate}</span>
            <span className="text-gray-500">
              ({product.rating.count})
            </span>
          </div>
        </div>

        <button onClick={() => setCartItems((prev) => [...prev, product])} className="mt-4 w-full rounded-lg bg-blue-600 py-2 text-white hover:bg-blue-700">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;