$(document).ready(function(){


// Variables
var answer1 = ("jon snow", "tywin lannister", "jorah mormont","bran stark","jamie lannister")
var guessedLetters = " "
var guessingWord = " "
var rightAnswer = true;
var wrongAnswer = false;
var wins = 0

// document.onkeypress = function(event){
//      answers = answer1(Math.floor(Math.random) * answer1.length);
//     if (i = 0, i < answers.length)
//     )}


// game starts


document.onkeyup = function(event){
    if (isAlpha(event.key))
    checkLetter(event.key.toLowerCase());
}
    function checkLetter(letter){
        var guessedLetters = false
        for(var i=0, j = rightAnswer.length; i<j; i++){
            if (letter === rightAnswer.length[i]){
                guessingWord[i] = letter
            }
        }
    }