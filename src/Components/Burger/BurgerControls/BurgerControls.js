import React from "react";
import BuildControl from "./BuildControl/BuildControl";
import classes from "./BurgerControls.module.css";

const controls = [
  { label: "Lettuce", type: "lettuce" },
  { label: "Vegan Bacon", type: "veganBacon" },
  { label: "Beyond Meat", type: "beyondMeat" },
  { label: "Vegan Cheese", type: "veganCheese" },
];

const BurgerControls = (props) => (
  <div className={classes.BurgerControls}>
    <p>
      Current Price: <strong>$ {props.price.toFixed(2)}</strong>
    </p>
    {controls.map((key) => {
      return (
        <BuildControl
          key={key.label}
          label={key.label}
          added={() => props.ingredientAdded(key.type)}
          removed={() => props.ingredientRemoved(key.type)}
          disabled={props.disabled[key.type]}
        />
      );
    })}
    <button
      className={classes.OrderButton}
      disabled={!props.purchasable}
      onClick={props.ordered}
    >
      Order Now!
    </button>
  </div>
);

export default BurgerControls;
