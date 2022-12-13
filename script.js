var player1=Math.random();
player1*=6;
player1=Math.ceil(player1);
var randomDiceImage="dice"+player1+".png";
var randomImageSrc= "images/"+randomDiceImage;
document.querySelector(".dice-img1").setAttribute("src", randomImageSrc);


var player2=Math.random();
player2*=6;
player2=Math.ceil(player2);
var randomDiceImage1="dice"+player2+".png";
var randomImageSrc1="images/"+randomDiceImage1;
document.querySelector(".dice-img2").setAttribute("src",randomImageSrc1);




if(player1>player2){
  document.querySelector("h1").innerHTML="Player1 is Winner!";
}
else if (player1 < player2){
  document.querySelector("h1").innerHTML="Player2 is Winner!";

}
else if(player1===player2){
  document.querySelector("h1").innerHTML="Draw!";

}
