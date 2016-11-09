"use strict";

$(document).ready(function(){
  var robotBrawl;

// Player setup + empty objects for player 1 and player 2
  $("#player-setup").show();
  var player1 = {};
  var player2 = {};

//
$(".card__link").click(function(event){
  var nextCard = $(this).attr("next");
  var moveAlong = false;

//Switch statement to get player name input and robot information
//moves to next page after selections
  switch (nextCard) {
    case "card--class" :
      $("#class-select").show();
      $("#player-setup").hide();

      moveAlong = ($("player1-name").val() !== "");
      moveAlong += ($("player2-name").val() !== "");
      console.log( "card class");
      var playerOne = $("#player1-name").val();
      var playerTwo = $("#player2-name").val();
      player1 = new Robot.Warriors.Person(playerOne);
      player2 = new Robot.Warriors.Person(playerTwo);

      break;

    case "card--dome" :
        // if(player1.robot === null) {
        //   alert ("Please choose a robot, player 1.");
        //   break;
        // }
        // if(player2.robot === null) {
        //   alert ("Please choose a robot, player 2!");
        //   break;
        // }
    $("#class-select").hide();
            Robot.startAttack(player1, player2);
    $("#battledome").show();
        break;
  }
});

//chosen robot function - player 1
$("#player1Robot .class__link").click(function(e){
    var chosenRobot1 = $(e.currentTarget).data("robotclass");
console.log(chosenRobot1);
player1.robot = new Robot.RobotTypes[chosenRobot1]();
console.log(player1);
        e.preventDefault();
});

//chosen robot function - player 2
$("#player2Robot .class__link").click(function(e){
  var chosenRobot2 = $(e.currentTarget).data("robotclass");
  console.log(chosenRobot2);
  player2.robot = new Robot.RobotTypes[chosenRobot2]();
  console.log(player2);
    e.preventDefault();
});

//attack button function
$("#attack").click(function(dothings){
    var attackbtn = $(dothings.currentTarget);
    Robot.runAttack();
    Robot.winnerWinnerChickenDinner();
  });

});
