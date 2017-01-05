const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WordSchema = new Schema({
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
});

const Word = mongoose.model('words', WordSchema);

module.exports = Word;