import { useState, useEffect } from "react";
import Nav from "./Components/Nav";
import Product from "./Components/Product";
import Cart from "./Components/Cart";
import "./App.css";
import data from "./data.json";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { db } from "./config";

function App() {
  const [cartNum, setCartNum] = useState(0);
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems([...data]);
  }, []);

  return (
    <div className="App">
      <Router>
        <Nav cartNum={cartNum} />
        <Switch>
          <Route exact path="/">
            <Product items={items} setCartNum={setCartNum} cartNum={cartNum} />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
