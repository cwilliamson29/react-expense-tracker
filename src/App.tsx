import { useEffect, useState } from "react";
import ExpenseForm from "./expense-tracker/ExpenseForm";
import ExpenseList from "./expense-tracker/ExpenseList";
import ExpenseSelecter from "./expense-tracker/ExpenseSelecter";
import categories from "./expense-tracker/categories";

function App() {
  const [activeCat, setActiveCat] = useState(null);
  const [db, setDB] = useState([
    { id: 1, description: "Eggs", amount: 3.99, category: "Groceries" },
    { id: 2, description: "Bacon", amount: 4.99, category: "Groceries" },
    { id: 3, description: "Water Bill", amount: 65, category: "Utilities" },
    { id: 4, description: "Netflix", amount: 17.99, category: "Entertainment" },
    { id: 5, description: "Power Bill", amount: 265, category: "Utilities" },
  ]);

  const addDB = (data: any) => {
    setDB([...db, data]);
  };
  const getByCategory = (cat: string) => {
    if (cat === "all") {
      return db;
    } else {
      const data = db.filter((item) => item.category === cat);
      return data;
    }
  };

  const catSetter = (name: string) => {
    setActiveCat(name);
  };
  const onDelete = (name: string) =>
    setDB(db.filter((itemName) => itemName.description !== name));

  return (
    <div className="App">
      <ExpenseForm setData={addDB} />
      <ExpenseSelecter catSetter={(name) => setActiveCat(name)} />
      <ExpenseList
        expense={getByCategory(activeCat)}
        onDelete={(name) =>
          setDB(db.filter((itemName) => itemName.description !== name))
        }
      />
    </div>
  );
}

export default App;
