import React from "react";
import { useState } from "react";
import TodoTable from "./todoTable";

function TableParent(props) {
  const [currentPage, setCurrentPage] = useState(1);
  // create a row of buttons for every 10 todos and highlight the current button pressed
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
          style={{
            backgroundColor: currentPage == i ? "yellow" : "white",
          }}
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
      <TodoTable data={props.data} currentPage={currentPage} />
    </div>
  );
}

export default TableParent;
