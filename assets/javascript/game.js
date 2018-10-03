    var alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

    var wins = 0;
    var losses = 0;
    var guesses = 10;

    var computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];

    console.log(computerChoice);

    document.onkeyup = function(event) {
        var userGuess = event.key;

        if (userGuess === computerChoice){
                wins++;
        } else {
            guesses--;
        }
    }