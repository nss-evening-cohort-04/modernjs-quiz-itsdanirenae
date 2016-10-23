var Robot = function(OldRobot) {
  OldRobot.Fighters = {};
}

OldRobot.Fighters.Player = function(name = "unknown adventurer")
//ask Stephen about these below...what is their purpose?
this.class = null;

this.PlayerName = name;
this.health = Math.floor(Math.random() *2 + 10);
this.strength = 100;
};

OldRobot.Fighters.Player.prototype.generateRobot = function(){
// Get a random index from the allowed classes array
  var random = Math.round(Math.random() * (this.allowedRobotTypes.length - 1));

// Get the string at the index
  var randomClass = this.allowedRobotTypes[random];

// Composes the corresponding player class into the player object
  this.robot = new OldRobot.RobotTypes[randomClass]();

//not the correct return what should I return here?
return this.spell;
};

