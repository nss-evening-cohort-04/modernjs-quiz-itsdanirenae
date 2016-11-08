
var Robot = (function(OldRobot) {
    var player1, player2;

  OldRobot.startAttack = function(p1, p2){
    player1 = p1;
    player2 = p2;
  writeStats();
  };

function writeStats(){
    $("#player1stats").html("");
    $("#player1stats").append(`${player1.toString()}`);
    $("#player2stats").html("");
    $("#player2stats").append(`${player2.toString()}`);
}

  OldRobot.runAttack = function(){
    player1.robot.healthBonus -= player2.robot.strengthBonus;
    player2.robot.healthBonus -= player1.robot.strengthBonus;
    writeStats();
};


OldRobot.winnerWinnerChickenDinner = function(){
    if (player1.robot.healthBonus <= 0){
        $("#player2win").show();
        $("#player1win").hide();
    } else if (player2.robot.healthBonus <= 0){
        $("#player2win").hide();
        $("#player1win").show();
    }
}


  return OldRobot;
})(Robot || {});