var React = require('react');
var TodoItem = require('./todoItem.jsx');

var TodoList = React.createClass({
	onDelete: function (item) {
		this.props.onDelete(item);
	},

	onUpdate: function (item) {
		this.props.onUpdate(item);
	},

	render: function() {
		var items = this.props.items.map(item => {
			return <TodoItem item={item} onDelete={this.onDelete} onUpdate={this.onUpdate} />;
		});

		return (
			<table>
				<tr>
					<th>Done</th>
					<th>Task</th>
					<th>Remove</th>
				</tr>
				{items.toArray()}
			</table>
		);
	}
});

module.exports = TodoList;