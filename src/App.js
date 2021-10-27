import React from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

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
      <NewExpense />
      <Expenses items={expense}/>
    </div>
  );
}

export default App;
