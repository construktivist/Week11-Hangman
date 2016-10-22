var inquirer = require("inquirer");
var letters = require("./letter.js")
var verify = require("./word.js")
var word = require("./game.js");
var selectedWord = word.selectWord.randomWord;

var blanks = new letters(selectedWord);
blanks.display();

var questions = [
  {
    type: 'list',
    name: 'letter',
    message: "Select a letter",
    choices: [
    	"a", "b", "c", "d", "e", 
    	"f", "g", "h", "i", "j", 
    	"k", "l", "m", "n", "o", 
    	"p", "q", "r", "s", "t", 
    	"u", "v", "w", "x", "y", 
    	"z"],
  },
];

function inquire(){
  inquirer.prompt(questions).then(checkLetter);

};

function checkLetter(answers){
  var check = new verify(selectedWord, answers.letter)
    console.log(check.letter);
    console.log(check.word);
};  



//========================================================================
inquire();