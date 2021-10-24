import React from "react";
import ExpeseItem from "./components/ExpenseItem";

function App() {
  const expense = [
    {
      id: 1,
      title: "Car Insurance",
      amount: 350.23,
      date: new Date(2021, 10, 23),
    },
    { id: 2, title: "Groceries", amount: 120.22, date: new Date(2021, 9, 23) },
    { id: 3, title: "Food", amount: 256.14, date: new Date(2021, 10, 30) },
    { id: 4, title: "Shopping", amount: 98.56, date: new Date(2021, 8, 30) },
  ];

  return (
    <div>
      <h2>Lets get started</h2>
      <ExpeseItem
        title={expense[0].title}
        date={expense[0].date}
        amount={expense[0].amount}
      />
    </div>
  );
}

export default App;
