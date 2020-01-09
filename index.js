var name1 = prompt("Enter Player1 name"); // Take a name of player1 and store it to name1 variable

var name2 = prompt("Enter Player2 name"); // Take a name of player2 and store it to name2 variable

document.querySelectorAll("p")[0].innerHTML = name1; // Select p tag having index 0 i.e, first p tag, from html and set inner html to player1 name

document.querySelectorAll("p")[1].innerHTML = name2; // Select p tag having index 1 i.e, second p tag, from html and set inner html to player2 name

var randomNum1 = Math.floor(Math.random() * 6) + 1; // Select random number between 1-6

var randomDiceImg1 = "images/dice" + randomNum1 + ".png";     // Select random Image to dice

document.querySelectorAll("img")[0].setAttribute("src", randomDiceImg1); // Select img tag from html and set src attribute to randomDiceImg1

var randomNum2 = Math.floor(Math.random() * 6) + 1; // Select random number between 1-6

var randomDiceImg2 = "images/dice" + randomNum2 + ".png";     // Select random Image to dice

document.querySelectorAll("img")[1].setAttribute("src", randomDiceImg2); // Select img tag from html and set src attribute to randomDiceImg2

if(randomNum1 > randomNum2){
  document.querySelector("h1").innerHTML = "🏆 Player 1 Wins!";
}

else if(randomNum1 < randomNum2){
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🏆";
}

else{
  document.querySelector("h1").innerHTML = "Draw";
}
