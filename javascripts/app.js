"use strict";

console.log(Robot);

console.log("robot");

$(document).ready(function(){
  var robotBrawl;


  $("#player-setup").show();
  var player1;  // what are we defining here? why define variable?
  var player2;
  // deathEater.generateSpell();
  // deathEater.generateNames();
  // console.log("deathEater", deathEater);

//function for choosing robot here - player 1 and 2
// do I need a function for choosing robot and then enter robot info in switch statement?






$(".")/*class name here*/.on("click", function(event){
  var nextCard = $(this).attr("next");
  //

switch (nextCard) {
  case "" /*class name here */ :
    moveAlong = ($("player1-name").val() !== "");
    var playerOne = $("player1-name").val();
    var playerTwo = $("player2-name").val();
    player1 = new Robot.OldRobot.Warriors(); //check if this is correct
    player2 = new Robot.OldRobot.Warriors(); //check if this is correct
    player1.playerName = playerOne;
    player2.playerName = playerTwo;
  break;
}
  case "" /*class name for robot selection here*/
    moveAlong = (player1.robot !== null);
      if(player1.robot === null) {
        alert ("Please choose a robot.");
        break;
      }
      break;
      default :
      console.log("everything is broken fml!")

      if (moveAlong) {
        $(".card").hide();
        $("." + nextCard).show(); //understand this better
      }
});








