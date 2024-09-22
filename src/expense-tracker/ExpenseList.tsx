import React, { useState } from "react";

interface Props {
  db: (cat: string[]) => void;
  removeItem: (name) => void;
  capitalize: (data: string) => void;
}

const ExpenseList = ({ removeItem, db, capitalize }: Props) => {
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
            {db.map((data) => {
              //console.log(data);
              return (
                <tr key={data.id}>
                  <td>{data.description}</td>
                  <td>${data.amount}</td>
                  <td>{capitalize(data.category)}</td>
                  <td>
                    <button
                      onClick={(e) => removeItem(data.description)}
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
