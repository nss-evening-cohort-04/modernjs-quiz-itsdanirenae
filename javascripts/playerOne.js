"use strict";

var Robot = (function(OldRobot) {
  OldRobot.PlayerOne = {};

OldRobot.PlayerOne.BipedalRobot = function (){

}
//three types of robot - bipedal, h2o, drone
let BipedalRobot = function(robot) {
    Robot.call(this, robot); //what?
      this.name = robot;
      this.type = "Ground";
      this.strength = 5;
    };
    OldRobot.BipedalRobot.prototype = new Robot();

// let H2ORobot = function() {
//     Robot.call(this, robot);
//       this.name = robot;
//       this.type = "water";
//       this.strength = 25;
//     };
//     H2ORobot.prototype = new Robot();


// let DroneRobot = function() {
//     Robot.call(this, robot)
//       this.name = robot;
//       this.type = "aerial";
//       this.strength = 10;
//     };
//     DroneRobot.prototype = new Robot();

// //3 types that augment 3 types above - Galaxy 3000, Aquabot, Humanbot

// OldRobot.DroneRobot.Galaxy3000 = function () {
// Robot.call(this, name);
//   this.name = "Galaxy3000";
//   this.type = "aerial";
//   this.strength = 15;
// }

// OldRobot.BipedalRobot.Humanbot = function () {}


return OldRobot;

})(Robot || {});


