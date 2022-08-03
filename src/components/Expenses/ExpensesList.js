import React from "react";
import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";
const ExpensesList = (props) => {
  // Điều kiện hiện content
  //   let expensesContent = <p>No expenses found</p>;

  if (props.item.length === 0) {
    return <h2 className="expenses-list__fallback">No expenses found</h2>;
  }

  return (
    <ul className="expenses-list">
      {props.item.map((expense) => (
        <ExpenseItem
          // Giúp react nhận diện item đẫ render và update item mới được add vào dựa trên id
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
};
export default ExpensesList;
