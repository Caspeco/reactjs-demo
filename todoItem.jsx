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

		var rowStyle = {};
		if (done) {
			rowStyle.backgroundColor = "lightgreen";
			rowStyle.fontWeight = "bold";
		}

		return (
			<tr style={rowStyle}>
				<td>
					<input type="checkbox" checked={done} onChange={this.toggleDone} />
				</td>
				<td>
					<span>{text}</span>
				</td>
				<td>
					<button onClick={this.deleteItem}>x</button>
				</td>
			</tr>
		);
	}
});

module.exports = TodoItem;