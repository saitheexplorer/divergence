var cities = [
  'Dallas',
  'Austin',
  'Houston',
  'San Antonio'
];

function checkCity(city) {
  if (cities.indexOf(city) > -1) {
    console.log('Answer OK');
  } else {
    console.log('Answer not OK');
  }
}
