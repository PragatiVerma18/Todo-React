import React from "react";

function Header(props) {
  return (
    <div>
      <div className="card-header">
        <h1 className="card-header-title header">
          You have {props.numTodos} Todos
        </h1>
      </div>
    </div>
  );
}

export default Header;
