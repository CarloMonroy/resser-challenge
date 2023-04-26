import React from "react";

function TodoTable(props) {
  //Create a table and display the todos corresponding to the current page
  const createTable = () => {
    let table = [];
    let start = (props.currentPage - 1) * 10;
    let end = start + 10;
    for (let i = start; i < end; i++) {
      table.push(
        <tr key={i}>
          <td>{props.data[i].id}</td>
          <td>{props.data[i].userId}</td>
          <td>{props.data[i].title}</td>
          <td>{props.data[i].completed ? "✔" : "X"}</td>
        </tr>
      );
    }
    return table;
  };

  return (
    <div>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>#</th>
            <th>User</th>
            <th>Description</th>
            <th>Completed</th>
          </tr>
        </thead>
        <tbody>{createTable()}</tbody>
      </table>
    </div>
  );
}

export default TodoTable;
