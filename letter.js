function letters(x){
	this.word = x;
	this.blanks = [];

	this.display = function(){
		for (var i = 0; i < this.word.length; i++) {
			this.blanks.push("_");
		}

		console.log(this.blanks);
	};

};

module.exports = letters;	

