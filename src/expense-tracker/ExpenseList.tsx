import React, { useState } from "react";

interface Props {
  categories: string[];
  getByCat: (cat) => void;
  removeItem: (name) => void;
}

const ExpenseList = ({ categories, getByCat, removeItem }: Props) => {
  const [category, setCategory] = useState("all");
  const [get, setGet] = useState([]);

  const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  //const getter = getByCat(category);

  const handleChange = (e) => {
    setCategory(e.target.value);
    const a = getByCat(e.target.value);
    setGet(a);
    console.log(getComputedStyle);
  };
  const handleDelete = (item) => {
    removeItem(item);
    const getter = getByCat(category);
    setGet(getter);
    console.log(get);
  };

  return (
    <div>
      <div className="p-3">
        <select
          className="form-select"
          id="category"
          onChange={(e) => handleChange(e)}
        >
          <option value="null"></option>
          <option value="all">All Items</option>
          {categories.map((data, index) => (
            <option key={index} value={data}>
              {capitalize(data)}
            </option>
          ))}
        </select>
      </div>
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
            {get.map((data) => {
              //console.log(data);
              return (
                <tr key={data.id}>
                  <td>{data.description}</td>
                  <td>${data.amount}</td>
                  <td>{capitalize(data.category)}</td>
                  <td>
                    <button
                      onClick={(e) => handleDelete(data.description)}
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
