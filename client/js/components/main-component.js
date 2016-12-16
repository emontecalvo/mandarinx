import React from 'react';
import {connect} from 'react-redux';
import NewPaula from './new-paula';
import Signin from './signin';

class MainComponent extends React.Component {
	render() {
		return <div>
			<h1>React/Redux demo</h1>
			<h5>ANOTHER TEST %%%%% % % % % % </h5>
			<h6>hello there AGAIN!!!!! $$$</h6>
			<Signin />
			<p>This is where your content goes. Paula is {this.props.paula}.</p>
			<NewPaula />
		</div>;
	}
}

export default connect((state, props) => ({
	//Select your state -> props mappings here
	paula: state.paula,
}))(MainComponent);
