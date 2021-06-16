var programming_languages = [
  "python",
  "javascript",
  "json",
  "java",
  "CSS",
  "C",
  "Csharp",
  "ruby",
  "sql",
  "PHP",
  "Kotlin",
];

let answer = "";
let maxWrong = 6;
let mistake = 0;
let guessed = [];

function randomWord() {
  answer =
    programming_languages[
      Math.floor(Math.random() * programming_languages.length)
    ];

}

function generateButtons(){
    let buttonsHtml= "abcdefghijklmnopqrstuvwxyz".split('').map(letter =>
       ` <button
            class="btn btn-lg btn-primary m-2"
            id='` + letter+` '
            onClick="handleGuess('` + letter + `')"
        >
            ` + letter + `
        </button>
        `).join('');
        document.getElementById("keyboard").innerHTML = buttonsHtml;
}

document.getElementById('maxWrong').innerHtml = maxWrong;

randomWord();
generateButtons();
