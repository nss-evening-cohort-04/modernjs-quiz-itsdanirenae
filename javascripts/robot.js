"use strict";

//main robot function + getters and setters

var Robot = (function(OldRobot) {
  OldRobot.Warriors = {};
    /*
      Define the base object for any player of Gauntlet,
      whether a human player or a monster.
     */
    OldRobot.Warriors.Person = function(e) {
      this.species = null;
      this.class = null;
      this.weapon = null;

      this.playerName = name;
      this.health = Math.floor(Math.random() * 40 + 50);
      this.limbs = ["head", "neck", "arm", "leg", "torso"];
      this.skinColor = "gray";
      this.strength = 90;
      this.intelligence = 90;

    };

    // // OldGauntlet.Combatants.Player.prototype.setWeapon = function(newWeapon) {
    // //   this.weapon = newWeapon;
    // // }

    // OldRobot.Warriors.Person.prototype.generateExterior = function() {
    //   // Get a random index from the allowed classes array
    //   var random = Math.round(Math.random() * (this.allowedRobotTypes.length - 1));

    //   // Get the string at the index
    //   // var randomRobotType = this.allowedHouses[random];

    //   // Composes the corresponding player class into the player object
    //   this.house = new OldGauntlet.Hogwarts[randomClass]();

    //   // Add the health bonus
    //   // this.health += this.class.healthBonus;
    //   return this.house;
    // };

    // OldGauntlet.Combatants.Player.prototype.generateSpell = function() {
    //   // Get a random index from the allowed classes array
    //   var random = Math.round(Math.random() * (this.allowedSpells.length - 1));

    //   // Get the string at the index

    //   var randomClass = this.allowedSpells[random];

    //   // Composes the corresponding player class into the player object
    //   this.spell = new OldGauntlet.SpellBook[randomClass]();

    //   // Add the health bonus
    //   // this.damage += this.class.healthBonus;
    //   return this.spell;
    // };

    // OldGauntlet.Combatants.Player.prototype.generateCreature = function() {
    //   // Get a random index from the allowed classes array
    //   var random = Math.round(Math.random() * (this.allowedCreatures.length - 1));

    //   // Get the string at the index
    //   var randomClass = this.allowedCreatures[random];

    //   // Composes the corresponding player class into the player object
    //   this.creature = new OldGauntlet.Creatures[randomClass]();

    //   // Add the health bonus
    //   // this.health += this.class.healthBonus;
    //   return this.creature;
    // };

    /*
      Define the base properties for a robot in a
      constructor function.
     */
    OldRobot.Warriors.Stuff = function() {
      var randomExterior;

      this.species = "Robot";
      this.intelligence = this.intelligence + 20;
      this.exterior = null;


// //weapons object
//         this.allowedWeapon = ['stick', 'saw', 'hammer', 'ragnarok'];
//         //function to randomize the object
//         this.generateWeapon = function() {
//             let random = Math.round(Math.random() * (this.allowedWeapon.length -1));
//             let randomWeapon = this.allowedWeapon[random];
//             this.weapon = new Botwar.weaponOptions[randomWeapon]();
        // };



      this.exteriorTypes.push("metal", "titanium", "carbon", "plastic");
      randomExterior = Math.round(Math.random() * (this.exteriorTypes.length-1));
      this.exteriorTypes = this.exteriorTypes[randomExterior];

      this.weaponTypes.push("lightsaber", "gun", "sword", "bare hands");
      randomWeapon = Math.round(Math.random() * (this.weaponTypes.length-1));
      this.weaponTypes = this.weaponTypes[randomWeapon]; // why is this printing as undefined?






      this.allowedRobotTypes = ["Military Robot", "Space Robot", "Service Robot", "Swimming Robot", "Bipedal Robot", "Flying Robot"];
      // this.allowedWeapons = ["Expelliarmus", "Conjunctivitis", "Confringo"];
      this.toString = function() {
        var output = [this.playerName,
          " is made of ",
          this.exterior,
          " with a ",
          this.weapon,
          ", and has health of ",
          this.health,
          "!"
        ].join("");
        return output;
      };
    };
    OldRobot.Warriors.Person.prototype = new OldRobot.Warriors.Person();


    /*
      Define the base properties for a monster in a
      constructor function.
    //  */
    // OldGauntlet.Combatants.DeathEater = function() {
    //   this.health = this.health - 30;
    //   this.intelligence = this.intelligence -20;
    //   this.strength = this.strength + 30;
    //   this.toString = function() {
    //     var output = [this.playerName,
    //       "<br />",
    //       this.house,
    //       "<br />",
    //       this.spell,
    //       "<br />",
    //       this.health,
    //       " Health"
    //     ].join("");
    //     return output;
    //   };
    // };

    // OldGauntlet.Combatants.DeathEater.prototype = new OldGauntlet.Combatants.Player();

    return OldRobot;
})(Robot || {});