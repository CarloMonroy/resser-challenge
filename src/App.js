import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import Spinner from "react-bootstrap/Spinner";
import TodoList from "./components/todoList";

function App() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [err, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/todos"
        );
        setLoading(false);
        setData(response.data);
      } catch (e) {
        setError(true);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      {err ? (
        <div className="MainContainer">
          <h1>Something went wrong</h1>
        </div>
      ) : (
        <div className="MainContainer">
          {loading ? (
            <div>
              <h3>Loading</h3>
              <Spinner animation="border" variant="primary" />
            </div>
          ) : (
            <div>
              <TodoList data={data} setData={setData} />
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
