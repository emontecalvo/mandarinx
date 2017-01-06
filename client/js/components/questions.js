import React from 'react';
import {connect} from 'react-redux';
import Signin from './signin';

class Questions extends React.Component {
	render() {
		return (
			<div>
				<div><Signin /></div>
				<h1>questions:  nĭ hăo</h1>
				<ul>
					{this.props.words.map((item, index) => {
						console.log(index)
						return <li key={index}>
							{item.word} &nbsp; &nbsp; {item.character}
							<input type="text" />
							<button>check</button>
						</li>
					})}
				</ul>
			</div>
		)
	}
}

// gets state from redux and assigned some of that state to a prop
const mapStateToProps = function(state) {
	console.log(state);
	return {
		words: state.words
	}
}

// connect is how we know about the state
export default connect(mapStateToProps)(Questions)

