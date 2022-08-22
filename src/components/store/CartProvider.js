import CartContext from "./cart-context";
const CartProvider = (props) => {
  const addItemtoCart = () => {};
  const removeItemFromCart = () => {};
  const cartContext = {
    items: [],
    totalAmount: 0,
    addItem: addItemtoCart,
    removeItem: removeItemFromCart,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};
export default CartProvider;
