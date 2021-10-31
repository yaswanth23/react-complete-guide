import React, { useState } from "react";
import "./Expenses.css";
import ExpeseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2021");
  const onGetYearHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  return (
    <div className="expenses">
      <ExpensesFilter selected={filteredYear} onGetYear={onGetYearHandler} />
      <div>
        {props.items.map((item) => {
          return (
            <ExpeseItem
              key={item.id}
              title={item.title}
              date={item.date}
              amount={item.amount}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Expenses;
