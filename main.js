var inquirer = require("inquirer");
var letters = require("./letter.js")
var verify = require("./word.js")
var word = require("./game.js");
var guesses = 15;
var selectedWord = word.selectWord.randomWord;
var currentLetter;

var blanks = new letters(selectedWord);
var blanksArr = blanks.blanks;
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

function checkGame(){
    for(var i = 0; i < blanksArr.length; i++){
    
      if(blanksArr[i] === "_" && guesses != 0){
        inquire();
        break;
      }
      
      else if (blanksArr[i] === "_" && guesses === 0){
        console.log("You lost!");
        break;
      } 
  }; 
};    


function checkLetter(answers){
  var currentLetter = answers.letter;
  var check = new verify(selectedWord, currentLetter)
  blanks.showLetter(currentLetter);
  checkGame();
}; 

 



//========================================================================
inquire();