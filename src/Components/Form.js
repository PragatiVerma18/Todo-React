import React, { Component } from 'react';

class Form extends Component {
	constructor(props) {
		super(props);

		this.state = {
			term: '',
		};
	}

	onChangeHandler = (event) => {
		this.setState({
			term: event.target.value,
		});
	};

	handleSubmit = (task) => {
		this.setState({ tasks: [...this.state.tasks, task] });
	};

	render() {
		return (
			<form onFormSubmit={this.handleSubmit}>
				<input
					type='text'
					className='input'
					placeholder='Enter Item'
					value={this.state.term}
					onChange={this.onChangeHandler}
				/>
				<button className='button'>Submit</button>
			</form>
		);
	}
}

export default Form;
