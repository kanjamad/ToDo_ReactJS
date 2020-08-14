import React, { Component } from 'react';
import ListItems from './ListItems';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';


library.add(faTrash);

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			items: [],
			currentItem: {
				text: '',
				key: ''
			}
		};
	}

	handleInput = (e) => {
		this.setState({
			currentItem: {
				text: e.target.value,
				key: Date.now()
			}
		});
	};

	addItem = (e) => {
		e.preventDefault();
		const newItem = this.state.currentItem;
		if (newItem.text !== '') {
			const items = [...this.state.items, newItem];
			this.setState({
				items: items,
				currentItem: {
					text: '',
					key: ''
				}
			});
		}
	};

	deleteItem = (key) => {
		const filteredItems = this.state.items.filter((item) => item.key !== key);
		this.setState({
			items: filteredItems
		});
	};

	setUpdate = (text, key) => {
		const items = this.state.items;
		items.map((item) => {
			if (item.key === key) {
				item.text = text;
			}
		});
		this.setState({
			items
		});
	};

	render() {
		return (
			<div>
				<h1>ToDo lists</h1>
				<div className="App">
					<header>
						<form id="to-do-form" onSubmit={this.addItem}>
							<input
								type="text"
								placeholder="Enter task"
								value={this.state.currentItem.text}
								onChange={this.handleInput}
							/>
							<button type="submit">Add</button>
						</form>
						<ListItems items={this.state.items} deleteItem={this.deleteItem} setUpdate={this.setUpdate} />
					</header>
				</div>
			</div>
		);
	}
}

export default App;
