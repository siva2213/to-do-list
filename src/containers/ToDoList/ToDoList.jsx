import React from "react";
import ItemList from "../../components/ItemsList/ItemsList";

function ToDoList(props) {
  return (
    <div>
      <ItemList {...props} />
    </div>
  );
}

export default ToDoList;
