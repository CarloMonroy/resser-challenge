import React from "react";
import { useState } from "react";
import TodoTable from "./todoTable";

function TableParent(props) {
  const [currentPage, setCurrentPage] = useState(1);

  const handleComplete = (index) => {
    let newData = [...props.data];
    newData[index].completed = true;
    props.setData(newData);
  };

  const handeClick = (e) => {
    setCurrentPage(e.currentTarget.id);
  };
  const createButtons = () => {
    let buttons = [];
    let numOfButtons = props.data.length / 10;
    for (let i = 1; i <= numOfButtons; i++) {
      buttons.push(
        <button
          id={i}
          key={i}
          onClick={handeClick}
          // if the current button is the one pressed, highlight it

          className={
            currentPage == i ? "btn btn-dark" : "btn btn-outline-secondary"
          }
        >
          {i}
        </button>
      );
    }

    return buttons;
  };

  return (
    <div>
      <div>{createButtons()}</div>
      <TodoTable
        data={props.data}
        currentPage={currentPage}
        handleComplete={handleComplete}
      />
    </div>
  );
}

export default TableParent;
