import React from "react";

interface Props {
  categories: string[];
  catSetter: (data: string) => void;
  capitalize: (data: string) => void;
}
const ExpenseSelecter = ({ categories, catSetter, capitalize }: Props) => {
  return (
    <div>
      <select
        className="form-select"
        id="category"
        onChange={(e) => catSetter(e.target.value)}
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
