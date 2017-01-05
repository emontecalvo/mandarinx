import * as actions from '../actions/actions';

const initial_state = {
	token: false,
	words: {
  	"yī": ["one", "一"],
  	"èr": ["two", "二"],
  	"sān": ["three", "三"],
  	"sì": ["four", "四"],
  	"wǔ": ["five", "五"],
  	"lìu": ["six", "六"],
  	"qī": ["seven", "七"],
  	"bā": ["eight", "八"],
  	"jiǔ": ["nine", "九"],
  	"shí": ["ten", "十"]
  }
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


