import * as actions from '../actions/actions';

const initial_state = {
	token: false,
	words:   [
  {
    word: 'yī',
    translation: "one",
    character: "一"
  },
    {
      word: "èr",
      translation: "two",
      character: "二"
  },
    {
      word: "sān",
      translation: "three",
      character: "三"
  },
  {
    word: "sì",
    translation: "four",
    character: "四"
  },
  {
    word: "wǔ",
    translation: "five",
    character: "五"
  },
  {
    word: "lìu",
    translation: "six",
    character: "六"
  },
  {
    word: "qī",
    translation: "seven",
    character: "七"
  },
  {
    word: "bā",
    translation: "eight",
    character: "八"
  },
  {
    word: "jiǔ",
    translation: "nine",
    character: "九"
  },
  {
    word: "shí",
    translation: "ten",
    character: "十"
  }
  ]
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


