import { useContext } from "react";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";
const Cart = (props) => {
  // Access context
  const cartCtx = useContext(CartContext);
  // Làm tròn số vd: 15.5 -> 15.50
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  // check trong cart có item không?
  const hasItems = cartCtx.items.length > 0;

  // Xoá item trong cart
  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  // Thêm item trong cart
  const cartItemAddHandler = (item) => {
    cartCtx.addItem(item);
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};
export default Cart;
