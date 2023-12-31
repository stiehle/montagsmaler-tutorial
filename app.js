console.log("Hallo");
const wordEL = document.querySelector(".word");
const oldWordsEl = document.querySelector(".old-words");

// Wortliste
let words = [];
let currentWord = "";
let previusWords = [];

fetch("words.txt")
  .then(function (response) {
    return response.text();
  })
  .then(function (text) {
    // console.log(text);
    words = text.split(",");
    console.log(words);
  });

function onClick() {
  if (currentWord) {
    previusWords.push(currentWord);
    if (previusWords.length > 10) {
      console.log("!");
      previusWords.shift();
    }
    oldWordsEl.innerHTML = previusWords.join(", ");
    console.log(currentWord, previusWords);
  }
  currentWord = getRandomWord();
  wordEL.innerHTML = currentWord;
  // console.log(currentWord);
}

function getRandomNumber(maxNumber) {
  console.log(
    "Max. Wörter -->",
    maxNumber,
    "Vorherige Wörter -->",
    previusWords.length
  );
  // var randomNumer = Math.random();
  // console.log("-->", randomNumer, maxNumber, (randomNumer * maxNumber), Math.floor(randomNumer * maxNumber));
  return Math.floor(Math.random() * maxNumber);
}

function getRandomWord() {
  // return words[getRandomNumber(words.lenght)];
  return words[getRandomNumber(words.length)];
}
