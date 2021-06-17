var categories =  [
    ["everton", "liverpool", "swansea", "chelsea", "watford", "fulham", "arsenal"],
    ["python",
    "javascript",
    "json",
    "java",
    "CSS",
    "c",
    "csharp",
    "ruby",
    "sql",
    "php",
    "kotlin"],
    ["kathmandu", "delhi", "dhaka", "beijing", "london","berlin","tokyo","amsterdam","doha","moscow"]
];

var chosenCategory; 
let answer = '';
let maxWrong = 6;
let mistake = 0;
let guessed = [];
let wordStatus = null;
function randomWord() {
    chosenCategory = categories[Math.floor(Math.random() * categories.length)];
    answer =
    chosenCategory[
      Math.floor(Math.random() * chosenCategory.length)
    ];
    selectCat();
    
}

function generateButtons(){
    let buttonsHtml= "abcdefghijklmnopqrstuvwxyz".split('').map(letter =>
       ` <button
            class="btn btn-lg btn-primary m-2"
            id='` + letter+ `'
            onClick="handleGuess('` + letter + `')"
        >
            ` + letter + `
        </button>
        `).join('');
        document.getElementById("keyboard").innerHTML = buttonsHtml;
}
function guessWord(){
    wordStatus = answer.split('').map(letter => (guessed.indexOf(letter) >= 0 ? letter: " _ " )).join('');
    document.getElementById('wordSpotlight').innerHTML= wordStatus;
}

document.getElementById('maxWrong').innerHTML = maxWrong;

function handleGuess(chosenLetter) {
    guessed.indexOf(chosenLetter) === -1 ? guessed.push(chosenLetter) : null;
    document.getElementById(chosenLetter).setAttribute('disabled', true);
    
    if(answer.indexOf(chosenLetter) >= 0){
        guessWord();
        
        checkIfGameWon();
    } else if(answer.indexOf(chosenLetter) === -1) {
        mistake++;
        updateMistakes();
        checkIfGameLost();
        updatePictures();
    }
}
function updatePictures(){
    document.getElementById('hangmanPic').src ='./images/' + mistake + ".jpg";
}

function updateMistakes(){
    document.getElementById('mistake').innerHTML = mistake;

}
function checkIfGameWon(){
    if (wordStatus === answer){
        document.getElementById('keyboard').innerHTML = "You Won!!!";
    }
}
function checkIfGameLost(){
    if (mistake === maxWrong){
        document.getElementById('keyboard').innerHTML = "You Lost!!!";
        document.getElementById('wordSpotlight').innerHTML = ' The answer was: ' + answer;
    }
}
function reset(){
    mistake = 0;
    guessed = [];
    document.getElementById('hangmanPic').src = './images/0.jpg';
    randomWord();
    guessWord();
    updateMistakes();
    generateButtons();
}
var selectCat = function () {
    if (chosenCategory === categories[0]) {
        document.getElementById('catagoryName').innerHTML = "The Chosen Category Is Premier League Football Teams";
    } else if (chosenCategory === categories[1]) {
       document.getElementById('catagoryName').innerHTML = "The Chosen Category Is Progamming Language";
    } else if (chosenCategory === categories[2]) {
       document.getElementById('catagoryName').innerHTML = "The Chosen Category Is Capital Cities";
    }
  }
randomWord();
generateButtons();
guessWord();
handleGuess();
