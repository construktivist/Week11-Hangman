function verifyLetter(x, y){
	this.word = x;
	this.letter = y;

	this.verify = function(){
		for (var i = 0; i < this.word.length; i++) {
			if (this.word[i] === this.letter){
				return true;
			}

			else{
				return false;
			};
		};

	};	

};

module.exports = verifyLetter;
