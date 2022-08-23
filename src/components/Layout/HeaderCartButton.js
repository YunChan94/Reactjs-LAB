import { useContext, useEffect, useState } from "react";
import classes from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";
const HeaderCartButton = (props) => {
  const [btnHighlighted, setBtnHighlighted] = useState(false);
  const cartCtx = useContext(CartContext);
  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  //Add animation to cart button
  const btnClasses = `${classes.button} ${btnHighlighted ? classes.bump : ""}`;

  const { items } = cartCtx;
  useEffect(() => {
    if (cartCtx.items.length === 0) {
      return;
    }
    setBtnHighlighted(true);
    //Remove classes ra khỏi button để khi thêm item những lần sau sẽ có animation
    const timer = setTimeout(() => {
      setBtnHighlighted(false);
    }, 300);

    // Clean up func
    return () => {
      clearTimeout(timer);
    };
  }, [items]);
  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};
export default HeaderCartButton;
