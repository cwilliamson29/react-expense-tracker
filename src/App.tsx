import { useEffect, useState } from "react";
import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import { produce } from "immer";
import ExpandableText from "./components/ExpandableText";
//import Form from "./components/form";
import ExpenseForm from "./expense-tracker/ExpenseForm";
import ExpenseList from "./expense-tracker/ExpenseList";
import ExpenseSelecter from "./expense-tracker/ExpenseSelecter";

function App() {
  const categories = ["groceries", "utilities", "entertainment"];
  const [activeCat, setActiveCat] = useState(null);
  const [activeDB, setActiveDB] = useState([]);
  const [domUpdate, setDomUpdate] = useState(false);

  const [db, setDB] = useState([
    { id: 1, description: "Eggs", amount: 3.99, category: "groceries" },
    { id: 2, description: "Bacon", amount: 4.99, category: "groceries" },
    { id: 3, description: "Water Bill", amount: 65, category: "utilities" },
    { id: 4, description: "Netflix", amount: 17.99, category: "entertainment" },
    { id: 5, description: "Power Bill", amount: 265, category: "utilities" },
  ]);

  useEffect(() => {
    if (domUpdate === true) {
      const db = getByCategory(activeCat);
      setActiveDB(db);
      setDomUpdate(false);
    }
  });

  const addDB = (data) => {
    setDB([...db, data]);
    setDomUpdate(true);
  };
  const getByCategory = (cat) => {
    if (cat === "all") return db;

    const data = db.filter((item) => item.category === cat);
    return data;
  };

  const removeByName = (name) => {
    setDB((current) =>
      current.filter((itemName) => itemName.description !== name)
    );
    setDomUpdate(true);
  };

  const catSetter = (name) => {
    setActiveCat(name);
    setDomUpdate(true);
  };

  // const updateActiveDB = () => {
  //   const db = getByCategory(activeCat);
  //   setActiveDB(db);
  // };

  const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (
    <div className="App">
      <ExpenseForm
        categories={categories}
        dataFile={db}
        setData={addDB}
        capitalize={capitalize}
      />
      <ExpenseSelecter
        categories={categories}
        catSetter={catSetter}
        capitalize={capitalize}
      />
      <ExpenseList
        categories={categories}
        db={activeDB}
        removeItem={removeByName}
        capitalize={capitalize}
      />
    </div>
  );
}

export default App;
