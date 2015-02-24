var React = require('react');
var Immutable = require('immutable');
var TodoAdder = require('./todoAdder.jsx');
var TodoList = require('./todoList.jsx');
var AutoCounter = require("./autoCounter.jsx");

var ItemRecord = Immutable.Record({
	text: "",
	done: false
});

var TodoApp = React.createClass({
	getInitialState: function () {
		var initialItems = this.props.items.map(item => {
			return new ItemRecord(item);
		});

		return {
			items: Immutable.List(initialItems)
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

// mount the todo app under body with some default todos
var initialItems = [
	{ done: true, text: "Prepare a presentation"},
	{ done: false, text: "Hold a presentation about React.js" },
	{ done: false, text: "Do some live coding" },
	{ done: false, text: "Add a timer" }
];
var renderThis = (
	<div>
		<AutoCounter />
		<TodoApp items={initialItems} />
		<TodoApp items={[]} />
	</div>
	);
React.render(renderThis, document.body);
