const ProductCard = ({ product }) => {
  return (
    <div className="max-w-sm overflow-hidden rounded-2xl bg-white shadow-lg transition duration-300 hover:shadow-xl">
      {/* Product Image */}
      <div className="h-64 bg-gray-100 p-4">
        <img
          src={product.image}
          alt={product.title}
          className="h-full w-full object-contain"
        />
      </div>

      {/* Product Details */}
      <div className="p-5">
        <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700">
          {product.category}
        </span>

        <h2 className="mt-3 line-clamp-2 text-lg font-semibold text-gray-800">
          {product.title}
        </h2>

        <p className="mt-2 line-clamp-3 text-sm text-gray-600">
          {product.description}
        </p>

        {/* Rating */}
        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-yellow-500">⭐</span>
            <span className="font-medium">{product.rating.rate}</span>
            <span className="text-sm text-gray-500">
              ({product.rating.count} reviews)
            </span>
          </div>

          <span className="text-2xl font-bold text-green-600">
            ${product.price}
          </span>
        </div>

        {/* Button */}
        <button className="mt-5 w-full rounded-lg bg-blue-600 py-2 text-white transition hover:bg-blue-700">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;