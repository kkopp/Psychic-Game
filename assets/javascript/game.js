

    var wins = 0;
    var losses = 0;
    var guesses = 10;
    var lettersGuessed = [];

    var alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

    var computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];

    console.log(computerChoice);

    document.onkeyup = function(event) {
        var userGuess = event.key;
        lettersGuessed.push(userGuess.toLowerCase());
    
            if (userGuess === computerChoice) {
                wins++;
                alert("You got it! You knew the psychic's answer was " + computerChoice + "!");
                guesses = 10;
                lettersGuessed = [];
                computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
            } else {
                guesses--;
            }
            if (guesses === 0) {
                losses++;
                alert("Your psychic powers have failed you today!  You should have known that the answer was " + computerChoice + "!");
                guesses = 10;
                lettersGuessed = [];
                computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
            }
        
    document.getElementById("wins").innerHTML = wins;
    document.getElementById("losses").innerHTML = losses;
    document.getElementById("guesses").innerHTML = guesses;
    document.getElementById("lettersGuessed").innerHTML = lettersGuessed;

    };
    

