import React, { Component } from "react";
import "./App.css";
import Form from "./Components/Form";
import TodoList from "./Components/TodoList";
import Header from "./Components/Header";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: ["Go to walk", "Write Assignments", "Make a React App"]
    };
  }

  addTask = task => {
    if (task !== "" && !this.state.tasks.includes(task)) {
      const newTask = [...this.state.tasks, task];
      localStorage.setItem("task", JSON.stringify(newTask));
      this.setState(state => {
        return { tasks: [...state.tasks, task] };
      });
    } else {
      alert("Please Enter Correct Todo!!");
    }
  };

  handleDelete = index => {
    const newArr = [...this.state.tasks];
    newArr.splice(index, 1);
    localStorage.setItem("task", JSON.stringify(newArr));
    this.setState({ tasks: newArr });
  };

  componentDidMount() {
    if (JSON.parse(localStorage.getItem("task"))) {
      this.setState({ tasks: JSON.parse(localStorage.getItem("task")) });
    }
  }

  render() {
    const { tasks } = this.state;
    return (
      <div className="App">
        <div className="wrapper">
          <div className="card frame">
            <Header numTodos={tasks.length} />
            <TodoList todos={tasks} deleteTask={this.handleDelete} />
            <Form addTask={this.addTask} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
