// clicking submit in html page
// triggers this fxn (entire script)
document.getElementById("userWord")
    .addEventListener("keydown", function(event) {

    if (event.keyCode == 13){
      var userWord = document.getElementById("userWord").value;
      console.log("User has submitted Answer");
      checkMatch(userWord, States);
    }
});

//console.log("you made it this far");
//checkMatch(userWord, States);
