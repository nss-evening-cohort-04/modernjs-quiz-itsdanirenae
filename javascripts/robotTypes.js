"use strict";

var Robot = (function(OldRobot) {
  OldRobot.RobotTypes = {};

OldRobot.RobotTypes.Player = function () {
  this.name = "Robot";
  this.healthBonus = 0;
  this.strengthBonus = 0;

};

/*
    Robot Types:
    --Main Robot Uno
         - MilitaryRobot
         - SpaceRobot
    --Main Robot Dos
         - ServiceRobot
         - SwimmingRobot
    --Main Robot Tres
         - BipedalRobot
         - FlyingRobot
    */

      OldRobot.RobotTypes.MainRobotUno = function() {
        this.healthBonus = 5;
        this.strengthBonus = 5;
      };
      OldRobot.RobotTypes.MainRobotUno.prototype = new OldRobot.RobotTypes.Player();


OldRobot.RobotTypes.MilitaryRobot = function() {
  this.name = "Military Robot";
  this.healthBonus += 2;
  this.strengthBonus += 6;
  this.image = "<img src='../images/military-robot.jpg' width=200px height 200px>";
};
OldRobot.RobotTypes.MilitaryRobot.prototype = new OldRobot.RobotTypes.MainRobotUno();

OldRobot.RobotTypes.SpaceRobot = function () {
  this.name = "Space Robot";
  this.healthBonus += this.healthBonus + 20;
  this.strengthBonus += this.strengthBonus + 10;
  this.image = "<img src='../images/space-robot.jpg' width=200px height 200px>";

};
OldRobot.RobotTypes.SpaceRobot.prototype = new OldRobot.RobotTypes.MainRobotUno();

      OldRobot.RobotTypes.MainRobotDos = function() {
        this.healthBonus = 25;
        this.strengthBonus = 3;
      };
      OldRobot.RobotTypes.MainRobotDos.prototype = new OldRobot.RobotTypes.Player();

OldRobot.RobotTypes.ServiceRobot = function () {
  this.name = "Service Robot";
  this.healthBonus = this.healthBonus + 10;
  this.image = "<img src='../images/service-robot.jpg' width=200px height 200px>";
};
OldRobot.RobotTypes.ServiceRobot.prototype = new OldRobot.RobotTypes.MainRobotDos();

OldRobot.RobotTypes.SwimmingRobot = function () {
  this.name = "Swimming Robot";
  this.healthBonus = this.healthBonus + 100;
  this.strengthBonus = this.strengthBonus + 10;
  this.image = "<img src='../images/swimming-robot.jpg' width=200px height 200px>";
};
OldRobot.RobotTypes.SwimmingRobot.prototype = new OldRobot.RobotTypes.MainRobotDos();

      OldRobot.RobotTypes.MainRobotTres = function() {
        this.healthBonus = 50;
        this.strengthBonus = 30;
      };
      OldRobot.RobotTypes.MainRobotTres.prototype = new OldRobot.RobotTypes.Player();

OldRobot.RobotTypes.BipedalRobot = function () {
  this.name = "Bipedal Robot";
  this.healthBonus = this.healthBonus + 2;
  this.strengthBonus = this.strengthBonus + 7;
  this.image = "<img src='../images/bipedal-robot.jpg' width=200px height 200px>";
};
OldRobot.RobotTypes.BipedalRobot.prototype = new OldRobot.RobotTypes.MainRobotTres();

OldRobot.RobotTypes.FlyingRobot = function () {
  this.name = "Flying Robot";
  this.healthBonus = this.healthBonus + 9;
  this.strengthBonus = this.strengthBonus + 20;
  this.image = "<img src='../images/flying-robot.jpg' width=200px height 200px>";
};
OldRobot.RobotTypes.FlyingRobot.prototype = new OldRobot.RobotTypes.MainRobotTres();

return OldRobot;
})(Robot || {});


