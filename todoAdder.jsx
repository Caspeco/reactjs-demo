var React = require('react');

var TodoAdder = React.createClass({
	getInitialState: function () {
		return {
			text: ""
		};
	},

	textChangeHandler: function (event) {
		this.setState({
			text: event.target.value
		});
	},

	addClickHandler: function () {
		this.props.onAdd(this.state.text);
		this.setState({
			text: ""
		});
	},

	render: function() {
		return (
			<div>
				<input type="text" value={this.state.text} onChange={this.textChangeHandler} />
				<button onClick={this.addClickHandler}>Add</button>
			</div>
		);
	}
});

module.exports = TodoAdder;