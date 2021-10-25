import React from "react";
import "./Expenses.css";
import ExpeseItem from "./ExpenseItem";

function Expenses(props) {
  return (
    <div className="expenses">
      {props.items.map((item)=>{
        return <ExpeseItem 
          title={item.title}
          date={item.date}
          amount={item.amount}
        />
      })}
    </div>
  );
}

export default Expenses;
