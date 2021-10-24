import React from "react";
import "./Expenses.css";
import ExpeseItem from "./ExpenseItem";

function Expenses(props) {
  return (
    <div className="expenses">
      <ExpeseItem
        title={props.expense[0].title}
        date={props.expense[0].date}
        amount={props.expense[0].amount}
      />
      <ExpeseItem
        title={props.expense[1].title}
        date={props.expense[1].date}
        amount={props.expense[1].amount}
      />
      <ExpeseItem
        title={props.expense[2].title}
        date={props.expense[2].date}
        amount={props.expense[2].amount}
      />
      <ExpeseItem
        title={props.expense[3].title}
        date={props.expense[3].date}
        amount={props.expense[3].amount}
      />
    </div>
  );
}

export default Expenses;
