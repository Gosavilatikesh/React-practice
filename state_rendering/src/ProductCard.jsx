import React from "react";
import { Trash2 } from "lucide-react";

const ProductCard = ({product, del}) => {
  return (
    <div className="overflow-hidden rounded-xl bg-white shadow-md transition hover:shadow-lg">
      <img
        src={product.image}
        alt=""
        className="h-48 w-full object-cover"
      />

      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800">
            {product.title}
        </h2>

        <p className="mt-1 text-sm text-gray-500">
          {product.category}
        </p>

        <div className="mt-4 flex items-center justify-between">
          <span className="text-xl font-bold text-green-600">
            ₹{product.price}
          </span>

          <button onClick={() => del(product.id)}>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
