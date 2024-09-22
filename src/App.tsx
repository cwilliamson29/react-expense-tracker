import { useState } from "react";
import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import { produce } from "immer";
import ExpandableText from "./components/ExpandableText";
//import Form from "./components/form";
import ExpenseTracker from "./components/ExpenseTracker";
import ExpenseList from "./components/ExpenseList";

function App() {
  const categories = ["groceries", "utilities", "entertainment"];
  const [db, setDB] = useState([
    { id: 1, description: "Eggs", amount: 3.99, category: "groceries" },
    { id: 2, description: "Bacon", amount: 4.99, category: "groceries" },
    { id: 3, description: "Water Bill", amount: 65, category: "utilities" },
    { id: 4, description: "Netflix", amount: 17.99, category: "entertainment" },
    { id: 5, description: "Power Bill", amount: 265, category: "utilities" },
  ]);

  const addDB = (data) => {
    setDB([...db, data]);
    console.log(db);
  };
  const getByCategory = (cat) => {
    const data = db.find((cat) => data.category === cat);
    return data;
  };

  return (
    <div className="App">
      <ExpenseTracker categories={categories} dataFile={db} setData={addDB} />
      <ExpenseList categories={categories} getByCat={getByCategory} />
    </div>
  );
}

export default App;
