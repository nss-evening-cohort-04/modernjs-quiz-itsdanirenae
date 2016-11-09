"use strict";

var Robot = (function(OldRobot) {
  OldRobot.Warriors = {};

    OldRobot.Warriors.Person = function(name) {
      this.playerName = name;
      this.robot = {};

      this.toString = function() {
        var output = `${this.playerName} has a health of ${this.robot.healthBonus} and a strength of ${this.robot.strengthBonus}!`;
        return output;
      };
    };

    return OldRobot;
})(Robot || {});

