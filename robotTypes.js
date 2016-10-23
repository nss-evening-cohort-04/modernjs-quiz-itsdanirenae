var Robot = (function(OldRobot) {
  OldRobot.RobotTypes = {};

OldRobot.RobotTypes.PlayerClass = function () {
  this.name = "";
  this.healthBonus = 0;
  this.strengthBonus = 0;
  this.intelligenceBonus = 0;

  this.toString = function() {
    return this.name;
  }
};

OldRobot.RobotTypes.MilitaryRobot = function() {
  this.healthBonus = 20;
  this.strengthBonus = 10;
};
OldRobot.RobotTypes.MilitaryRobot.prototype = new Robot.RobotTypes.PlayerClass();

OldRobot.RobotTypes.SpaceRobot = function () {
  this.name = "";
  this.healthBonus = this.healthBonus + 20;
  this.strengthBonus = this.strengthBonus + 10;
}
OldRobot.RobotTypes.SpaceRobot.prototype = new Robot.RobotTypes.PlayerClass();

OldRobot.RobotTypes.ServiceRobot = function () {
  this.name = "";
  this.healthBonus = this.healthBonus + 10;

}









})