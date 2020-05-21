import React, { Component } from 'react';
import Header from './Header';
import './Styles.css';

class TodoList extends Component {
	constructor(props) {
		super(props);

		this.state = {
			tasks: ['task 1', 'task 2', 'task 3'],
		};
	}

	render() {
		return (
			<>
				<div className='wrapper'>
					<div className='card frame'>
						<Header numTodos={this.state.tasks.length} />
					</div>
				</div>
			</>
		);
	}
}

export default TodoList;
