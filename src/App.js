import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  // {
  //   id: 1,
  //   title: "Car Insurance",
  //   amount: 350.23,
  //   date: new Date(2021, 10, 23),
  // },
  // { id: 2, title: "Groceries", amount: 120.22, date: new Date(2021, 9, 23) },
  // { id: 3, title: "Food", amount: 256.14, date: new Date(2021, 10, 30) },
  // { id: 4, title: "Shopping", amount: 98.56, date: new Date(2021, 8, 30) },
];

function App() {
  const [expense, setExpense] = useState(DUMMY_EXPENSES);
  const addExpenseDataHandler = (expenses) => {
    setExpense((prevExpense) => {
      return [expenses, ...prevExpense];
    });
  };

  return (
    <div>
      <NewExpense onAddExpenseData={addExpenseDataHandler} />
      <Expenses items={expense} />
    </div>
  );
}

export default App;
