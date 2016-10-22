function letters(x){
	this.word = x;
	this.blanks = [];

	this.showBlanks = function(){
		for (var i = 0; i < this.word.length; i++) {
			this.blanks.push("_");
		}
		console.log(this.word);
		console.log(this.blanks);
	};

	this.showLetter = function(letter){
		this.blanks[i] = letter;
		console.log(this.blanks);
	};

};

module.exports = letters;	

