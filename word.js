function verifyLetter(x, y){
	this.word = x;
	this.letter = y;

	this.verify = function(){
		for (var i = 0; i < word.length; i++) {
			if (word[i] === this.letter){
				console.log("match!");
			}

			else{
				console.log("no match!");
			};
		};

	};	

};
