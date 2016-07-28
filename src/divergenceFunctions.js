

function checkMatch(userWord, wordBank){
  if(wordBank.indexOf(userWord) > -1) {
    document.getElementById('form2').innerHTML ="Nice Job! " + userWord + " is in the word bank";
    console.log("Answer is valid");
    return 1;
  }
  else {
    document.getElementById('form2').innerHTML ="Invalid Answer: " + userWord + " is NOT in the word bank";
    console.log("Answer is invalid");
    return 0;
  }
}

/* will need a function like this to compare answers with other users
function checkDivergence(){

}
*/
