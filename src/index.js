var cities = [
  'dallas',
  'austin',
  'houston',
  'san antonio'
];

var guessedCities = [];

function checkCity(city) {
  if (typeof city !== 'string') return {status: false, message: 'Answer not a string.'};

  city = city.toLowerCase();

  if (cities.indexOf(city) === -1) return {status: false, message: 'City not in list'};
  if (guessedCities.indexOf(city) !== -1) return {status: false, message: 'City already guessed'};

  return {status: true};
}

function guessCity(city) {
  var checkGuess = checkCity(city);

  if (!checkGuess.status) return alert(checkGuess.message);

  guessedCities.push(city.toLowerCase());

  alert('Good answer! Guess again.');
}

$(document).ready(function () {
  $('#submit').on('click', function () {
    var guess = $('#user-word').val();

    guessCity(guess);
  });
});

