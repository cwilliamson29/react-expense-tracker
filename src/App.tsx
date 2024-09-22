import { useState } from "react";
import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import { produce } from "immer";
import ExpandableText from "./components/ExpandableText";
import Form from "./components/form";

function App() {
  const [count, setCount] = useState(0);
  const [alertVisible, setAlertVisible] = useState(false);

  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  const [pizza, setPizza] = useState({
    name: "Spicy Pepperoni",
    toppings: ["Mushroom"],
  });

  const handleClick = () => {
    setPizza({ ...pizza, toppings: [...pizza.toppings, "Olives"] });
  };

  return (
    <div className="App">
      <ListGroup items={items} heading={"Cities"} />
      {alertVisible && (
        <Alert onClose={() => setAlertVisible(false)}>Hello World</Alert>
      )}
      <Button
        buttonText="Test Button"
        color="primary"
        onClick={() => setAlertVisible(true)}
      />

      <button onClick={handleClick}>Click Me</button>

      <ExpandableText>
        asd;lkfjas;ldkjf;alksdjf;laksjdf;lakjsdf;lkjasd;lfkjas;ldkfja;lskdjf;laskdjf;lakjsdf;lkajsd;lfkjas;ldkfja;lsdkjf;alskdjf
      </ExpandableText>
      <br></br>
      <Form />
    </div>
  );
}

export default App;
