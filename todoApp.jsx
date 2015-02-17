var React = require('react');
var Immutable = require('immutable');
var TodoAdder = require('./todoAdder.jsx');
var TodoList = require('./todoList.jsx');

var ItemRecord = Immutable.Record({
	text: "",
	done: false
});

var TodoApp = React.createClass({
	getInitialState: function () {
		return {
			items: Immutable.List()
		};
	},

	addItem: function (todoText) {
		var newItems = this.state.items.push(
			new ItemRecord({
				text: todoText
			})
		);
		this.setState({
			items: newItems
		});
	},

	updateItem: function (todoItem) {
		var index = this.state.items.findIndex(item => item.text == todoItem.text);
		var newItems = this.state.items.set(index, todoItem);
		this.setState({
			items: newItems
		});
	},

	deleteItem: function (todoItem) {
		var index = this.state.items.findIndex(item => item.text == todoItem.text);
		var newItems = this.state.items.delete(index);
		this.setState({
			items: newItems
		});
	},

	render: function() {
		return (
			<div>
				<TodoAdder onAdd={this.addItem} />
				<TodoList items={this.state.items} onDelete={this.deleteItem} onUpdate={this.updateItem} />
			</div>
		);
	}
});

// mount the todo app under body
React.render(<TodoApp />, document.body);