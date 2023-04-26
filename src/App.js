import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { useState } from "react";
import Spinner from "react-bootstrap/Spinner";

function App() {
  const [loading, setLoading] = useState(false);

  function fetchData() {
    axios.get("https://jsonplaceholder.typicode.com/todos").then((res) => {
      console.log(res);
      setLoading(true);
    });
  }
  return (
    <div className="App">
      <Spinner animation="border" />
    </div>
  );
}

export default App;
