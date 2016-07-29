
var updatedWordBank = [];

function checkMatch(userWord, wordBank){
  console.log(updatedWordBank);
  userWord = userWord.toLowerCase();
  // if arguments are entered incorrectly display errors in console
  if (!userWord || !wordBank){
    console.log("The function checkMatch is missing one or more arguments");
    return 0;
  }

  if(wordBank.indexOf(userWord) == -1) {
    return {status:0, message: "Your word does not fit category"};
  }
  if (updatedWordBank.indexOf(userWord) != -1) {
    return {status: 0, message: "Your word as already been used"};
  }

  return {status: 1, message: "Great Guess Guh! Go Guess 'Gain"};
    console.log("Answer is valid");
    return 0;
}

function updateBank(userWord){
  updatedWordBank.push(userWord.toLowerCase());
}

function checkAnswer(userWord, wordBank){
  var isAnswerGood = checkMatch(userWord, wordBank);
  var message = isAnswerGood.message;

  if(isAnswerGood.status) {
    message = message.fontcolor("green");
    updateBank(userWord.toLowerCase());
   }
  else {
    message = message.fontcolor("red");
  }
  document.getElementById("form2").innerHTML = message;


  if (!isAnswerGood.status) return 0;
  else return 1;


}

/* will need a function like this to compare answers with other users
function checkDivergence(){

}
*/
