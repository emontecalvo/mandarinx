import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/actions';

class Signin extends React.Component {

	update(event) {
		event.preventDefault();
		this.props.dispatch(actions.logged_in(this.props.token));
	}
	
	render() {
		var test;
		if (this.props.token === true) {
			test = '';
		} else {
			test = <div><h2>welcome to mandarin-x</h2>
					<button onClick={this.update.bind(this)}>button</button></div>
		}

		return (
			<div>
				{ test }

			</div>
		)
	}
}

export default connect((state, props) => ({
	token: state.token,
}))(Signin);