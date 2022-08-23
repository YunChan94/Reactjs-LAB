import { useContext } from "react";
import CartContext from "../../../store/cart-context";
import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";

const MealItem = (props) => {
  //Access vào context
  const cartCtx = useContext(CartContext);

  // Cập nhật amount vào context
  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.item.id,
      name: props.item.name,
      amount: amount,
      price: props.item.price,
    });
  };

  const price = `${props.item.price.toFixed(2)}`;
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.item.name}</h3>
        <div className={classes.description}>{props.item.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <MealItemForm onAddToCart={addToCartHandler} />
    </li>
  );
};
export default MealItem;
