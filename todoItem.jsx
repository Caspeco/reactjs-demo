var React = require('react');

var TodoItem = React.createClass({
	toggleDone: function () {
		var newItem = this.props.item.set("done", !this.props.item.done);
		this.props.onUpdate(newItem);
	},

	deleteItem: function () {
		var item = this.props.item;
		this.props.onDelete(item);
	},

	render: function() {
		var item = this.props.item;
		var done = item.done;
		var text = item.text;

		return (
			<tr>
				<td>
					<input type="checkbox" checked={done} onClick={this.toggleDone} />
					{done ? "done" : ""}
				</td>
				<td>
					<span>{text}</span>
				</td>
				<td>
					<button onClick={this.deleteItem}>Remove</button>
				</td>
			</tr>
		);
	}
});

module.exports = TodoItem;