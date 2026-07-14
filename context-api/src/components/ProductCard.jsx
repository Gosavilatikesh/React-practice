import { Star, ShoppingCart } from "lucide-react";
import { useContext } from "react";
import { MyShop } from "../context/MyContext";

const ProductCard = ({ product }) => {

  let {setCartItems} = useContext(MyShop)

  return (
    <div className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Product Image */}
      <div className="relative h-64 overflow-hidden bg-slate-50 p-6">
        <img
          src={product.image}
          alt={product.title}
          className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
        />

        <span className="absolute left-3 top-3 rounded-full bg-indigo-100 px-3 py-1 text-xs font-medium capitalize text-indigo-700">
          {product.category}
        </span>
      </div>

      {/* Product Details */}
      <div className="space-y-3 p-5">
        <h3 className="line-clamp-2 min-h-[56px] text-base font-semibold text-slate-800">
          {product.title}
        </h3>

        <div className="flex items-center gap-2">
          <div className="flex items-center rounded-md bg-emerald-500 px-2 py-1 text-white">
            <span className="text-sm font-medium">
              {product.rating.rate}
            </span>
            <Star size={14} className="ml-1 fill-current" />
          </div>

          <span className="text-sm text-slate-500">
            ({product.rating.count} reviews)
          </span>
        </div>

        <p className="line-clamp-2 text-sm text-slate-500">
          {product.description}
        </p>

        <div className="flex items-center justify-between pt-2">
          <div>
            <p className="text-2xl font-bold text-slate-900">
              ${product.price}
            </p>
          </div>

          <button onClick={() => setCartItems(prev => [...prev, product])} className="flex items-center gap-2 rounded-xl bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-700">
            <ShoppingCart size={16} />
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;