import React from "react";

interface Props {
  categories: string[];
  getByCat: () => void;
}

const ExpenseList = ({ categories, getByCat }: Props) => {
  const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (
    <div>
      <select className="form-select" id="category">
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

export default ExpenseList;
