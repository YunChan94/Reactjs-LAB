import React, { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import ExpenseChart from "./ExpensesChart";
function Expenses(props) {
  // Lưu trữ state ('default value')
  const [filteredYear, setFilterYear] = useState("2020");

  // Function khai báo ở parent nhưng sử dụng giá trị ở children component, qua custom event listener(onFilter)
  const filterChangeHandler = (selectedYear) => {
    setFilterYear(selectedYear);
  };
  //Filter expenses theo năm
  const filterExpenses = props.item.filter(
    (expense) => expense.date.getFullYear() == filteredYear
  );
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onFilter={filterChangeHandler}
        />
        <ExpenseChart expenses={filterExpenses} />
        {/* && operator sử dụng khi đúng điều kiện sẽ thực hiện câu lệnh phía sau nó */}
        {/* {filterExpenses.length === 0 && <p>No expenses found</p>} */}
        {/* {expensesContent} */}
        <ExpensesList item={filterExpenses} />
      </Card>
    </div>
  );
}
export default Expenses;
