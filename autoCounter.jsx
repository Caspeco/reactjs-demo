var React = require('react');

var AutoCounter = React.createClass({
	getInitialState: function () {
		return {
			elapsed: 0
		};
	},

	componentDidMount: function () {
		this.interval = setInterval(this.tick, 1000);
	},

	componentWillUnmount: function () {
		clearInterval(this.interval);
	},

	tick: function () {
		this.setState({
			elapsed: this.state.elapsed + 1
		});
	},

	render: function() {
		return (
			<div style={{fontSize: "60px", margin: "20px"}}>{this.state.elapsed} secondos</div>
		);
	}
});

module.exports = AutoCounter;