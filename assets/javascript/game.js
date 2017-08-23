var objHangMan = {
	currentWord: "",
	lettersGuessed: [],
	// wordLetters: [],
	randomWord: "",
	wins: 0,
	losses: 0,
};

var objWordList =  {
	// fruitWord = ["Apple", "Banana","Grape"],
	// animalWord =["Zebra","Giraffe","Lion"],
	randomWord: ["lion", "cat", "dog", "apple", "pear", "tree", 
	"desk", "phone", "coffee", "computer", "lamp", "car", 
	"pants", "doll", "couch", "garden", "carpet", "street", 
	"house", "stero", "dirt", "lawn", "police", "nurse", "marine", 
	"fireman", "town", "city", "bear", "monkey", "tiger", "friend", 
	"mother", "father", "brother", "sister", "cousin", "uncle", 
	"nephew", "grandpa", "pizza"],
};

function pickWord() {
	    var minNumber = 0;
        var maxNumber = 40; 
        randomNumber = Math.floor(Math.random() * (maxNumber + 1) + minNumber);
        objHangMan.randomWord = objWordList.randomWord[randomNumber];
        console.log ("randomNumber is " + randomNumber);
        // return randomWord;
        console.log("Random word is " + objHangMan.randomWord);
}

pickWord()
