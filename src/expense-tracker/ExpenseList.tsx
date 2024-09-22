import React, { useState } from "react";

interface Expense {
  id: number;
  description: string;
  amount: number;
  category: string;
}
interface Props {
  expense: Expense[];
  onDelete: (name) => void;
}

const ExpenseList = ({ onDelete, expense }: Props) => {
  return (
    <div>
      <div className="p-4">
        <table className="table caption-top">
          <thead>
            <tr>
              <th scope="col">Description</th>
              <th scope="col">Amount</th>
              <th scope="col">Category</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {expense.map((data) => {
              return (
                <tr key={data.id}>
                  <td>{data.description}</td>
                  <td>${data.amount}</td>
                  <td>{data.category}</td>
                  <td>
                    <button
                      onClick={() => onDelete(data.description)}
                      className="btn btn-danger"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ExpenseList;
