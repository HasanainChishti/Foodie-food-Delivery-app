import { useDispatch } from "react-redux";
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} from "../Stored/CartSlice";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
 
  return (
    <article className="flex gap-4 border-b border-[#262626] py-5">
      {/* Image */}
      <img
        src={item.image}
        alt={item.name}
        className="h-20 w-20 shrink-0 rounded-xl object-cover"
      />

      {/* Details */}
      <div className="min-w-0 flex-1">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="font-semibold text-white">
              {item.name}
            </h3>

            <p className="mt-1 text-sm text-neutral-400">
              ₹{item.price}
            </p>
          </div>

          <button
            onClick={() => dispatch(removeFromCart(item.id))}
            className="text-xs text-neutral-500 transition-colors hover:text-red-400"
          >
            Remove
          </button>
        </div>

        {/* Quantity */}
        <div className="mt-3 flex items-center gap-3">
          <button
            onClick={() => dispatch(decreaseQuantity(item.id))}
            className="flex h-7 w-7 items-center justify-center rounded-full border border-neutral-700 text-white transition-colors hover:border-[#F59E0B] hover:text-[#F59E0B]"
          >
            −
          </button>

          <span className="min-w-5 text-center text-sm font-semibold text-white">
            {item.quantity}
          </span>

          <button
            onClick={() => dispatch(increaseQuantity(item.id))}
            className="flex h-7 w-7 items-center justify-center rounded-full border border-neutral-700 text-white transition-colors hover:border-[#F59E0B] hover:text-[#F59E0B]"
          >
            +
          </button>
        </div>
      </div>
    </article>
  );
};

export default CartItem;