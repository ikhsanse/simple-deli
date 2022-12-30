import React, { useRef, useState } from "react";

import classes from "./MealsItemForm.module.css";
import Input from "../../UI/Input";

const MealsItemForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    const enteredAmount = amountRef.current.value;
    const numberAmount = +enteredAmount; //change string amount to number
    if (
      enteredAmount.trim().length === 0 ||
      numberAmount < 1 ||
      numberAmount > 5
    ) {
      setAmountIsValid(false);
      return;
    }
    props.addToCart(numberAmount);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountRef}
        label="Amount"
        input={{
          id: "amount_" + props.id, // this changed!
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
      {!amountIsValid && <p> Please enter the correct amount (1-5) </p>}
    </form>
  );
};

export default MealsItemForm;
