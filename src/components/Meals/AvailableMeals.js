import classes from "./AvailableMeals.module.css";

import MealsItem from "./MealsItem/MealsItem";
import Card from "../UI/Card";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 65505,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 76522,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 52999,
  },
  {
    id: "m4",
    name: "Gado Gado",
    description: "Healthy...and green...",
    price: 20999,
  },
];

const AvailableMeals = () => {
  const mealList = DUMMY_MEALS.map((meal) => (
    <MealsItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      desc={meal.description}
      price={meal.price}
    />
  ));
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
