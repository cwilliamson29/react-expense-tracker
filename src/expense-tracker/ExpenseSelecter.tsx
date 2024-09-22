import React from "react";

const ExpenseSelecter = () => {
  return (
    <div>
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
  );
};

export default ExpenseSelecter;
