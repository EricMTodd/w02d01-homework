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


// Object-ception

const inception = {
   reality: {
       dreamLayer1: {
           dreamLayer2: {
               dreamLayer3: {
                   dreamLayer4: {
                       dreamLayer5: {
                           dreamLayer6: {
                               limbo: "Joseph Gordon Levitt"
                          }
                       }
                   }
               }
           }
       }
   }
}

inception.reality.dreamLayer1.dreamLayer2.dreamLayer3.dreamLayer4.dreamLayer5.dreamLayer6.limbo = "null";
console.log(inception);


// Bond films

// Array of objects:

const bondFilms = [
  { "title" : "Skyfall", "year" : 2012, "actor" : "Daniel Craig", "gross" : "$1,108,561,008" },
  { "title" : "Thunderball", "year" : 1965, "actor" : "Sean Connery", "gross" : "$1,014,941,117" },
  { "title" : "Goldfinger", "year" : 1964, "actor" : "Sean Connery", "gross" : "$912,257,512" },
  { "title" : "Live and Let Die", "year" : 1973, "actor" : "Roger Moore", "gross" : "$825,110,761" },
  { "title" : "You Only Live Twice", "year" : 1967, "actor" : "Sean Connery", "gross" : "$756,544,419" },
  { "title" : "The Spy Who Loved Me", "year" : 1977, "actor" : "Roger Moore", "gross" : "$692,713,752" },
  { "title" : "Casino Royale", "year" : 2006, "actor" : "Daniel Craig", "gross" : "$669,789,482" },
  { "title" : "Moonraker", "year" : 1979, "actor" : "Roger Moore", "gross" : "$655,872,400" },
  { "title" : "Diamonds Are Forever", "year" : 1971, "actor" : "Sean Connery", "gross" : "$648,514,469" },
  { "title" : "Quantum of Solace", "year" : 2008, "actor" : "Daniel Craig", "gross" : "$622,246,378" },
  { "title" : "From Russia with Love", "year" : 1963, "actor" : "Sean Connery", "gross" : "$576,277,964" },
  { "title" : "Die Another Day", "year" : 2002, "actor" : "Pierce Brosnan", "gross" : "$543,639,638" },
  { "title" : "Goldeneye", "year" : 1995, "actor" : "Pierce Brosnan", "gross" : "$529,548,711" },
  { "title" : "On Her Majesty's Secret Service", "year" : 1969, "actor" : "George Lazenby", "gross" : "$505,899,782" },
  { "title" : "The World is Not Enough", "year" : 1999, "actor" : "Pierce Brosnan", "gross" : "$491,617,153" },
  { "title" : "For Your Eyes Only", "year" : 1981, "actor" : "Roger Moore", "gross" : "$486,468,881" },
  { "title" : "Tomorrow Never Dies", "year" : 1997, "actor" : "Pierce Brosnan", "gross" : "$478,946,402" },
  { "title" : "The Man with the Golden Gun", "year" : 1974, "actor" : "Roger Moore", "gross" : "$448,249,281" },
  { "title" : "Dr. No", "year" : 1962, "actor" : "Sean Connery", "gross" : "$440,759,072" },
  { "title" : "Octopussy", "year" : 1983, "actor" : "Roger Moore", "gross" : "$426,244,352" },
  { "title" : "The Living Daylights", "year" : 1987, "actor" : "Timothy Dalton", "gross" : "$381,088,866" },
  { "title" : "A View to a Kill", "year" : 1985, "actor" : "Roger Moore", "gross" : "$321,172,633" },
  { "title" : "License to Kill", "year" : 1989, "actor" : "Timothy Dalton", "gross" : "$285,157,191" }
];

bondFilms[0].gross = 1108561008;
bondFilms[1].gross = 1014941117;
bondFilms[2].gross = 912257512;
bondFilms[3].gross = 825110761;
bondFilms[4].gross = 756544419;
bondFilms[5].gross = 692713752;
bondFilms[6].gross = 669789482;
bondFilms[7].gross = 655872400;
bondFilms[8].gross = 648514469;
bondFilms[9].gross = 622246378;
bondFilms[10].gross = 576277964;
bondFilms[11].gross = 543639638;
bondFilms[12].gross = 529548711;
bondFilms[13].gross = 505899782;
bondFilms[14].gross = 491617153;
bondFilms[15].gross = 486468881;
bondFilms[16].gross = 478946402;
bondFilms[17].gross = 448249281;
bondFilms[18].gross = 440759072;
bondFilms[19].gross = 426244352;
bondFilms[20].gross = 381088866;
bondFilms[21].gross = 321172633;
bondFilms[22].gross = 285157191;



console.log(bondFilms);
console.log("---BREAK---");
let bondTitles = [];
for (let key in bondFilms) {
  bondTitles.push(bondFilms[key].title);
};

console.log(bondTitles);

for (let key in bondFilms) {
  if (bondFilms[key].year % 2 === 1) {
    console.log(bondFilms[key].year);
  }
};

const totalGross = () => {
  let sum = 0;
  for (let key in bondFilms) {
    sum += bondFilms[key].gross;
  }
  return sum
};

console.log(totalGross());






















