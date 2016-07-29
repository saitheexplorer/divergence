var cities = [
  'dallas',
  'austin',
  'houston',
  'san antonio'
];

var guessedCities = [];

function checkCity(city) {
  if (typeof city !== 'string') return false;

  city = city.toLowerCase();

  if (cities.indexOf(city) === -1) return false;
  if (guessedCities.indexOf(city) !== -1) return false;

  return true;
}

function guessCity(city) {
  if (!checkCity(city)) {
    console.log('Bad answer - already guessed or not in list.');
  } else {
    guessedCities.push(city.toLowerCase());

    console.log('Good answer! Guess again.');
  }
}


