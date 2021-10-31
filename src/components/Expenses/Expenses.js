import React, { useState } from "react";
import "./Expenses.css";
import ExpeseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2021");
  const onGetYearHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpense = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div className="expenses">
      <ExpensesFilter selected={filteredYear} onGetYear={onGetYearHandler} />
      <div>
        {filteredExpense.map((item) => {
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
