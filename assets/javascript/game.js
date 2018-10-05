

    var wins = 0;
    var losses = 0;
    var guesses = 10;
    var lettersGuessed = [];

    var alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

    var computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];

    console.log(computerChoice);

    document.onkeyup = function(event) {
        var userGuess = event.key;
        lettersGuessed.push(userGuess);

            if (userGuess === computerChoice) {
                wins++;
            } else {
                guesses--;
            }
            if (guesses === 0) {
                losses++;
            }
            
    document.getElementById("wins").innerHTML = wins;
    document.getElementById("losses").innerHTML = losses;
    document.getElementById("guesses").innerHTML = guesses;
    document.getElementById("lettersGuessed").innerHTML = lettersGuessed;
    
    };
    

