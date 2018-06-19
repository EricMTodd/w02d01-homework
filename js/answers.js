console.log("JavaScript is running...");

// Refresher

// 1. If else statement
let lightSwitch = true;

if (lightSwitch === true) {
	console.log("The light is on!");
} else {
	console.log("The light is off.");
};

// 2. String
console.log("eterictodd@gmail.com");

// 3. Object
const spaceShip = {
	name: "Pillar of Autumn",
	hullIntegrity: 100,
	cannons: 6,
	tractorBeam: "Inactive",
	warpDrive: "Ready"
};

// 4. Array
const classNames = ["student1", "student2", "student3"];

// 5. Nested array
const classLocations = [["student1", "location1"], ["student2", "location2"], ["student3", "location3"]];

// 6. Nested array
const classFavoriteTvShows = [["student1", "location1", "tvShow1"], ["student2", "location2", "tvShow2"], ["student3", "location3", "tvShow3"]];


// Take it easy

// 1. Rainbow array
const rainbow = ["red", "blue", "green", "yellow", "purple", "orange"];

// 2. Accessing blue
console.log(rainbow[1]);

// 3. The me object
const eric = {
  favoriteFood: "Chicken tikka masala",
  hobby: "Video Games",
  currentResidence: "Glendale",
  dataType: "Objects"
};

console.log(eric.hobby);


// Crazy object!

const crazyObject = {
  taco: [{meat: 'steak',
         cheese: ['panela', 'queso', 'chihuahua']},
         {meat: 'chicken',
          salsa: ["pico", "hot", "hotter", "really hot", "really really hot", "omg my mouth is burning"]},
        ],
  larry: {
    nicknames: ["LD", "Chicken Teriyaki Boyyyyyy"],
    quotes: ["Pretty pretty prettayyyyy good", "Is that a parkinson's thing?", "women love a self confident bald man", "I'm a walking talking enigma"],
    characters: [{
      name: "Jeff",
      occupation: "manager"
    },
    {
      name: "funkhauser",
      occupation: "tv dude"
    },
    {
      name: "susie",
      occupation: "jeffs wife",
      favourtieHobby: "Swearing at Larry and Jeff"
    },
    ]
  }
}

console.log(crazyObject);
console.log("---BREAK---");
console.log(crazyObject.taco[1].salsa[5]);
console.log(crazyObject.larry.quotes[0]);
console.log(crazyObject.larry.characters[2].favourtieHobby);
console.log(crazyObject.larry.nicknames[1]);
console.log(crazyObject.larry.characters[1]);

















