import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ""
    };
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addTask(this.state.term);
    this.setState({
      term: ""
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          className="input"
          placeholder="Enter Item"
          name="term"
          value={this.state.term}
          onChange={this.handleChange}
        />
        <button className="button">Submit</button>
      </form>
    );
  }
}

export default Form;
