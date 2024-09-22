import React from "react";
import categories from "./categories";
interface Props {
  catSetter: (data: string) => void;
}
const ExpenseSelecter = ({ catSetter }: Props) => {
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
            {data}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ExpenseSelecter;
