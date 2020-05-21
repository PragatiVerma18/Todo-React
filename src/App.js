import React, { Component } from 'react';
import './App.css';
import Form from './Components/Form';
import TodoList from './Components/TodoList';
import Header from './Components/Header';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			tasks: ['task 1', 'task 2', 'task 3'],
		};
	}
	render() {
		return (
			<div className='App'>
				<div className='wrapper'>
					<div className='card frame'>
						<Header numTodos={this.state.tasks.length} />
						<TodoList />
						<Form />
					</div>
				</div>
			</div>
		);
	}
}

export default App;
