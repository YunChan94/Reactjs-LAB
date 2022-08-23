import { useReducer } from "react";
import CartContext from "./cart-context";

// Default cart state
const defaultCartState = {
  items: [],
  totalAmount: 0,
};

//Quản lý số lượng meal add vào cart
const cartReducer = (state, action) => {
  // ADD item vào
  if (action.type === "ADD") {
    // Tính giá trị totalAmount
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;
    // Check item cùng tên có tồn tại chưa
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    const existingCartItem = state.items[existingCartItemIndex];

    let updatedItems;
    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };
      updatedItems = [...state.items];

      // Cập nhật giá trị mới vào array items của context
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  //REMOVE item
  if (action.type === "REMOVE") {
    // Check item cùng tên có tồn tại chưa
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existingCartItem = state.items[existingCartItemIndex];
    // Tính lại giá trị totalAmount
    const updatedTotalAmount = state.totalAmount - existingCartItem.price;
    let updatedItems;
    //Nếu item có SL=1 thì lọc ra array không chứa giá trị của item đó (tức xóa item đó khỏi array mới)
    if (existingCartItem.amount === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.id);
    } else {
      // Cập nhật lại số lượng của item
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount - 1,
      };

      updatedItems = [...state.items];

      // Cập nhật giá trị mới vào array items của context
      updatedItems[existingCartItemIndex] = updatedItem;
    }
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  return defaultCartState;
};

const CartProvider = (props) => {
  // Cart state
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemtoCart = (item) => {
    dispatchCartAction({ type: "ADD", item: item });
  };
  const removeItemFromCart = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };
  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
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
