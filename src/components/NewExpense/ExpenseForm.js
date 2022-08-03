import React, { useState } from "react";
import "./ExpenseForm.css";
function ExpenseForm(props) {
  //State title
  const [enteredTitle, setEnterTitle] = useState("");
  const [enteredAmount, setEnterAmount] = useState("");
  const [enteredDate, setEnterDate] = useState("");
  //  const [userInput,setUserInput] useState({
  //     enteredTitle: "",
  //     enteredAmount: "",
  //     enteredDate: "",
  //   });

  const titleChangeHandler = (event) => {
    setEnterTitle(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredTitle:event.target.value,
    // })
    //Cách này luôn sử dụng giá trị state cuối cùng (latest state), Nên dùng khi usestate depending on prevouse state
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredTitle: event.target.value };
    // });
  };
  //State amount
  const amountChangeHandler = (event) => {
    setEnterAmount(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value,
    // });
  };
  //State Date
  const dateChangeHandler = (event) => {
    setEnterDate(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value,
    // });
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };
    // console.log(expenseData);
    // Reset form input (set lại value của từng input)
    // Custom event ở NewExpense, thì children component(ExpenseForm) vẫn sử dụng được
    props.onSaveExpenseData(expenseData);
    setEnterTitle("");
    setEnterAmount("");
    setEnterDate("");
  };

  return (
    // Bắt sự kiện submit của form
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          {/* Bắt sự kiện input  dùng onChange*/}
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          ></input>
        </div>
      </div>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Amount</label>
          {/* Bắt sự kiện input  dùng onChange*/}
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          ></input>
        </div>
      </div>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Date</label>
          {/* Bắt sự kiện input  dùng onChange*/}
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          ></input>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}
export default ExpenseForm;
