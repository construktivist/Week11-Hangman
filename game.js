var gameWords = ["donkey", "pig", "goat", "sheep", "cow", "duck", "chicken"];

exports.selectWord = {
 randomWord: gameWords[Math.floor(Math.random()*gameWords.length)]
};
