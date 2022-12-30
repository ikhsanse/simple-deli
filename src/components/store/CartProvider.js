import CartContext from "./cart-context";
import { useReducer } from "react";

const defaultCartData = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD_CART_ITEM") {
    const updateTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const existingCartItem = state.items[existingCartItemIndex];

    let updateItems;

    if (existingCartItem) {
      const updateItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };
      updateItems = [...state.items];
      updateItems[existingCartItemIndex] = updateItem;
    } else {
      updateItems = state.items.concat(action.item);
    }
    return {
      items: updateItems,
      totalAmount: updateTotalAmount,
    };
  }
  if (action.type === "REMOVE_CART_ITEM") {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existingCartItem = state.items[existingCartItemIndex];
    const updateTotalAmount = state.totalAmount - existingCartItem.price;
    let updatedItems;

    if(existingCartItem.amount === 1) {
      updatedItems = state.items.filter(item => item.id !== action.id)
    } else {
      const updateditem = {...existingCartItem, amount: existingCartItem.amount - 1}
      updatedItems = [...state.items]
      updatedItems[existingCartItemIndex] = updateditem
    }
    return {
      items: updatedItems,
      totalAmount: updateTotalAmount
    }
  }
  return defaultCartData;
};

const CartProvider = (props) => {
  const [cartState, dispatchCart] = useReducer(cartReducer, defaultCartData);

  const addItemCartHandler = (item) => {
    dispatchCart({
      type: "ADD_CART_ITEM",
      item: item,
    });
  };

  const removeCartHandler = (id) => {
    dispatchCart({
      type: "REMOVE_CART_ITEM",
      id: id,
    });
  };

  const cartContextData = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemCartHandler,
    removeItem: removeCartHandler,
  };

  return (
    <CartContext.Provider value={cartContextData}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
