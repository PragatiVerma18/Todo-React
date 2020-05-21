import React from "react";

function TodoItem(props) {
  return (
    <div className="list-item">
      {props.id + 1}. {props.task}
      <button
        className="delete is-pulled-right"
        onClick={() => props.deleteTask(props.id)}
      />
    </div>
  );
}

export default TodoItem;
