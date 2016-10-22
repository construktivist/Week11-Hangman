var inquirer = require("inquirer");
var letters = require("./letter.js")
var verify = require("./word.js")
var word = require("./game.js");
var selectedWord = word.selectWord.randomWord;
var currentLetter;

var blanks = new letters(selectedWord);
blanks.showBlanks();

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
  var currentLetter = answers.letter;
  var check = new verify(selectedWord, currentLetter)

  if (check.verify()){
    console.log("True!");
    blanks.showLetter(currentLetter);
    inquire();
  }

  else {
    console.log("False!");
  }  
};  



//========================================================================
inquire();