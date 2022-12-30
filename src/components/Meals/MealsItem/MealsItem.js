import React, { useContext } from "react";

import classes from "./MealsItem.module.css";
import MealsItemForm from "./MealsItemForm";
import CartContext from "../../store/cart-context";

const MealsItem = (props) => {
  const price = `Rp. ${props.price}`;

  const cartCtx = useContext(CartContext);

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      amount: amount,
      name: props.name,
      price: props.price,
    });
  };

  return (
    <li className={`${classes.meal} `}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.desc}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealsItemForm addToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default MealsItem;
