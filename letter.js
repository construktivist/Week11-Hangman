function letters(x){
	this.word = x;
	this.blanks = [];
	this.guesses = 15;

	this.showBlanks = function(){
		for (var i = 0; i < this.word.length; i++) {
			this.blanks.push("_");
		}
		console.log(this.word);
		console.log(this.blanks);
		console.log(this.guesses);
	};

	this.showLetter = function(letter){
		for (var i = 0; i < this.word.length; i++) {
			if (this.word[i] === letter){
				this.blanks[i] = letter;
				console.log(this.blanks);
			}

		};

	};

};

module.exports = letters;	

