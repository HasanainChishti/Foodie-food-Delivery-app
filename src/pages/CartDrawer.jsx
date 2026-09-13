// const CartDrawer = ({ isCartOpen, setIsCartOpen }) => {
//   return (
//     // <>
//     //   {isCartOpen && (
//     //     <div
//     //       onClick={() => setIsCartOpen(false)}
//     //       className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
//     //     />
//     //   )}

//     //   <aside
//     //     className={`fixed right-0 top-0 z-[60] h-full w-full max-w-md transform bg-[#181818] transition-transform duration-300 ${
//     //       isCartOpen ? "translate-x-0" : "translate-x-full"
//     //     }`}
//     //   >
//     //     <div className="flex items-center justify-between border-b border-[#262626] p-6">
//     //       <h2 className="text-xl font-semibold text-white">
//     //         Your Cart
//     //       </h2>

//     //       <button
//     //         onClick={() => setIsCartOpen(false)}
//     //         className="text-neutral-400 transition-colors hover:text-white"
//     //       >
//     //         ✕
//     //       </button>
//     //     </div>
//     //   </aside>
//     // </>
//     <>
    
//     </>
//   );
// };

// export default CartDrawer;
import { useDispatch, useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import { removeFromCart } from "../Stored/CartSlice";


const CartDrawer = ({ isCartOpen, setIsCartOpen }) => {
  const cartItems = useSelector((state) => state.cart.items);
console.log(cartItems,"cartitems compo");
const subtotal = cartItems.reduce(
  (total, item) => total + item.price * item.quantity,
  0
);
const dispatch = useDispatch();
  return (
    <>
      {isCartOpen && (
        <div
          onClick={() => setIsCartOpen(false)}
          className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
        />
      )}

      <aside
  className={`fixed right-0 top-0 z-[60] flex h-full w-full max-w-md flex-col bg-[#181818] transition-transform duration-300 ${
    isCartOpen ? "translate-x-0" : "translate-x-full"
  }`}
>
  {/* Header */}
  <div className="flex items-center justify-between border-b border-[#262626] p-6">
    <h2 className="text-xl font-semibold text-white">
      Your Cart
    </h2>

    <button
      onClick={() => setIsCartOpen(false)}
      className="text-2xl text-neutral-400 hover:text-white"
    >
      ×
    </button>
  </div>

  {/* Cart Items */}
  <div className="flex-1 overflow-y-auto px-6">
    {cartItems.map((item) => (
      <CartItem key={item.id} item={item} />
    ))}
  </div>

  {/* Bottom */}
  <div className="border-t border-[#262626] p-6">
    <div className="mb-5 flex items-center justify-between">
      <span className="text-neutral-400">
        Subtotal
      </span>

      <span className="text-lg font-semibold text-white">
        ₹{subtotal}
      </span>
    </div>

    <button className="w-full rounded-full bg-[#F59E0B] px-5 py-3 font-semibold text-[#111111] transition-colors duration-300 hover:bg-amber-400">
      Proceed to Order →
    </button>
  </div>
</aside>
    </>
  );
};

export default CartDrawer;