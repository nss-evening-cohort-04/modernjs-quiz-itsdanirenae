"use strict";

console.log(Robot);

console.log("robot");

$(document).ready(function(){
  var robotBrawl;

$("#class-select").hide();

  $("#player-setup").show();
  var player1;  // what are we defining here? why define variable?
  var player2;
  // deathEater.generateSpell();
  // deathEater.generateNames();
  // console.log("deathEater", deathEater);

//function for choosing robot here - player 1 and 2
// do I need a function for choosing robot and then enter robot info in switch statement?






$(".card__link").on("click", function(event){
  var nextCard = $(this).attr("next");
  var moveAlong = false;
  //

switch (nextCard) {
  case "card--class" :
    moveAlong = ($("player1-name").val() !== "");
    moveAlong += ($("player2-name").val() !== "");
    console.log( "card class");
    var playerOne = $("#player1-name").val();
    var playerTwo = $("#player2-name").val();
console.log(playerOne);
console.log(playerTwo);

    // // player1 = new Robot.OldRobot.Warriors(); //check if this is correct
    // // player2 = new Robot.OldRobot.Warriors(); //check if this is correct
    // player1.playerName = playerOne;
    // player2.playerName = playerTwo;

break;

  case "" :/*class name for robot selection here*/
    moveAlong = (player1.robot !== null);
      if(player1.robot === null) {
        alert ("Please choose a robot.");
      }
     moveAlong += (player2.robot !== null);
      if(player2.robot === null) {
        alert ("Please choose a robot!")
      }
      break;

      default :
      console.log("everything is broken fml!")
}
      if (moveAlong) {
        $(".card").hide();
        $("." + nextCard).show(); //understand this better
      }
    });

$("#player1Robot").on("click", function(event){
  var test = $(event.target).is("btn-text");
    if(test){
      let clicked = $(event.target).find("btn-text".)context.innerHTML;
      console.log("clicked", clicked);
      player1.robot = new Robot.OldRobot[clicked]();
      console.log("player 1", player1);
    }
    event.preventDefault();
});


//card back function - back button needs to be installed in each page - if want to use
// $(".card__back").click(function(e) {
//     var previousCard = $(this).attr("previous");
//     $(".card").hide();
//     $("." + previousCard).show();
//   });
});








