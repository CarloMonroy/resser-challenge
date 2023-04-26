import React from "react";
import { useState } from "react";
import TableParent from "./tableParent";

function TodoList(props) {
  const [todo, setTodo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(todo);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter todo"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button type="submit">Add</button>
        <button onClick={() => window.location.reload()}>Refresh</button>
      </form>
      <TableParent data={props.data} setData={props.setData} />
    </div>
  );
}

export default TodoList;
