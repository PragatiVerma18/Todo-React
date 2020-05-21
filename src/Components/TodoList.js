import React from "react";
import TodoItem from "./TodoItem";

function TodoList(props) {
  return (
    <div className="list-wrapper is-hoverable">
      {props.todos.map((task, index) => {
        return (
          <TodoItem
            task={task}
            key={index}
            id={index}
            deleteTask={props.deleteTask}
          />
        );
      })}
    </div>
  );
}

export default TodoList;
