var cities = [
  'dallas',
  'austin',
  'houston',
  'san antonio'
];

var guesses = [];

function checkAnswer(bank, answer) {
  if (typeof answer !== 'string') return {status: false, message: 'Answer not a string.'};

  answer = answer.toLowerCase();

  if (bank.indexOf(answer) === -1) return {status: false, message: 'Answer not in list.'};
  if (guesses.indexOf(answer) !== -1) return {status: false, message: 'Answer already guessed.'};

  return {status: true};
}

function makeGuess(guess) {
  var checkGuess = checkAnswer(cities, guess);

  if (!checkGuess.status) return alert(checkGuess.message);

  guesses.push(guess.toLowerCase());

  alert('Good answer! Guess again.');
}

$(document).ready(function () {
  $('#submit').on('click', function () {
    var guess = $('#user-word').val();

    makeGuess(guess);
  });
});

