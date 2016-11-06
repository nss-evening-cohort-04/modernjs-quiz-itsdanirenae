"use strict";

var Robot = (function(OldRobot){
  OldRobot.Weapons = {};

  OldRobot.Weapons.Weapon = function() {
    this.name = "bare";
    this.damage = 1;
    this.hands = 2;

    this.toString = function() {
      var weaponOutput = [
      this.name,
      " with a damage of ",
      this.damage].join("");
      return this.name;
      // return weaponOutput;
    };
  };

  OldRobot.Weapons.Lightsaber = function() {
    this.name = "lightsaber";
    this.damage = 4;
    this.hands = 1;
  };
  OldRobot.Weapons.Lightsaber.prototype = new OldRobot.Weapons.Weapon();

  OldRobot.Weapons.Gun = function() {
    this.name = "gun";
    this.damage = 14;
    this.hands = 2;
  };
  OldRobot.Weapons.Gun.prototype = new OldRobot.Weapons.Weapon();

  OldRobot.Weapons.Sword = function() {
    this.name = "sword";
    this.damage = 18;
    this.hands = 2;
  };
  OldRobot.Weapons.Sword.prototype = new OldRobot.Weapons.Weapon();

  return OldRobot;
})(Robot || {});