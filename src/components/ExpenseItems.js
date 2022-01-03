import React from "react";
import ExpenseItem from "./ExpenseItem";

export default function ExpenseItems(props) {
  return (
    <div>
      {props.expenses.map((e) => {
        return (
          <ExpenseItem
            title={e.title}
            amount={e.amount}
            date={e.date}
          />
        );
      })}
    </div>
  );
}
