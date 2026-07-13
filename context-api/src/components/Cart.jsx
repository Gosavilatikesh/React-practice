import React from "react";
import { Minus, Plus, Trash2 } from "lucide-react";

const Cart = ({ cartItems }) => {
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * (item.quantity || 1),
    0
  );

  return (
    <div className="min-h-screen bg-slate-100 p-6">
      <div className="mx-auto max-w-6xl">
        <h1 className="mb-6 text-3xl font-bold">Shopping Cart</h1>

        {cartItems.length === 0 ? (
          <div className="rounded-xl bg-white p-10 text-center shadow">
            <h2 className="text-xl font-semibold text-slate-600">
              Your cart is empty 🛒
            </h2>
          </div>
        ) : (
          <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
            {/* Cart Items */}
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div    
                  key={item.id}
                  className="flex gap-4 rounded-2xl bg-white p-4 shadow-sm"
                >
                  <div className="h-28 w-28 shrink-0 rounded-lg bg-slate-50 p-2">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-contain"
                    />
                  </div>

                  <div className="flex flex-1 flex-col justify-between">
                    <div>
                      <h3 className="line-clamp-2 text-lg font-semibold">
                        {item.title}
                      </h3>

                      <p className="mt-1 text-sm text-slate-500 capitalize">
                        {item.category}
                      </p>
                    </div>

                    <div className="mt-3 flex items-center justify-between">
                      <span className="text-xl font-bold text-slate-900">
                        ${item.price}
                      </span>

                      {/* Quantity */}
                      <div className="flex items-center gap-3">
                        <button className="rounded-lg border p-2 hover:bg-slate-100">
                          <Minus size={16} />
                        </button>

                        <span className="font-medium">
                          {item.quantity || 1}
                        </span>

                        <button className="rounded-lg border p-2 hover:bg-slate-100">
                          <Plus size={16} />
                        </button>

                        <button className="ml-3 rounded-lg p-2 text-red-500 hover:bg-red-50">
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Summary */}
            <div className="h-fit rounded-2xl bg-white p-6 shadow-sm">
              <h2 className="mb-4 text-xl font-bold">
                Order Summary
              </h2>

              <div className="mb-3 flex justify-between">
                <span>Items</span>
                <span>{cartItems.length}</span>
              </div>

              <div className="mb-4 flex justify-between">
                <span>Shipping</span>
                <span>Free</span>
              </div>

              <hr />

              <div className="my-4 flex justify-between text-lg font-bold">
                <span>Total</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>

              <button className="w-full rounded-xl bg-slate-900 py-3 font-medium text-white transition hover:bg-slate-700">
                Proceed to Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;