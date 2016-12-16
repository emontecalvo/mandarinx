import * as actions from '../actions/actions';

const initial_state = {
	token: false
};

export default function reducer(state=initial_state, action={}) {
	console.log(action.type);
	switch (action.type) {
		case 'LOGGED_IN':
			return {...state, token: true};
		default: break;
	}
	return state;
}
