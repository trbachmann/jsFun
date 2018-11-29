const { kitties } = require('./datasets/kitties');
const { clubs } = require('./datasets/clubs');
const { mods } = require('./datasets/mods');
const { cakes } = require('./datasets/cakes');
const { classrooms } = require('./datasets/classrooms');
const { breweries } = require('./datasets/breweries');
const { instructors, cohorts } = require('./datasets/turing');
const { bosses, sidekicks } = require('./datasets/bosses');
const { constellations, stars } = require('./datasets/astronomy');
const { weapons, characters } = require('./datasets/ultima');






// SINGLE DATASETS
// =================================================================

// DATASET: kitties from ./datasets/kitties
const kittyPrompts = {
  orangeKittyNames() {
    // Return an array of just the names of kitties who are orange e.g.
    // ['Tiger', 'Snickers']

    const result = kitties.filter((kitten) => {
      return kitten.color === 'orange';
    })
      .map((orangekitten) => {
        return orangekitten.name;
      });
    return result;

    // Annotation:
    // Because we we want to return an array that only inclues the names from
    // elements that match a condition, we will first use the filter method.
    // On each iteration its callback function will return true is the condition
    // is met that the current kitten's color is 'orange'. Upon completion of the 
    // iteration the filter method returns an array, which only includes kittens
    // whose color value equals 'orange'. We then chain the map method because we want 
    // to return a modified array of the same length from the filter method's return.
    // On each iteration the map method returns a modified version of the current element
    // which is only the value of the name property of each kitten object. Upon completetion
    // of the iteration, map method returns an array of just the kitten names. 
  },

  sortByAge() {
    // Sort the kitties by their age

    const result = kitties.sort((a, b) => {
      return b.age - a.age;
    });
    return result;

    // Annotation:
    // Becuase we want to sort the array by age we use the sort method to 
    // put the elements in that order. The parameters for our callback function are a and b. 
    // 'a' represents the first element in the array you are comparing and 'b' is the next element 
    // in the array you are comparing. The sort method will iterate through the entire array 
    // until all the elements are ordered largest to smallest because we have the return statement set 
    // as b.age - a.age. If we wanted in reverse order, we could rewrite as a.age - b.age, which would sort
    // the array from smallest to largest. 
  },

  growUp() {
    // Return an array of kitties who have all grown up by 2 years e.g.
    // [{
    //   name: 'Felicia',
    //   age: 4,
    //   color: 'grey'
    // },
    // {
    //   name: 'Tiger',
    //   age: 7,
    //   color: 'orange'
    // },
    // ...etc]

    const result = kitties.map((kitten) => {
      kitten.age += 2;
      return kitten;
    });
    return result;
    
    // Annotation:
    // Because we want an array of all the kitties, we use the map method to 
    // return a modified array of the same length. On iteration we increment each
    // kitten's age value by two and reassign their age age property to the new value.
    // Afterwards we return each modified kitten object. Upon completion of the iteration
    // map returns a modified array of all the kitties.
  }
};




// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------




// DATASET: clubs from ./datasets/clubs
const clubPrompts = {
  membersBelongingToClubs() {
    // Create an object whose keys are the names of people, and whose values are
    // arrays that include the names of the clubs that person is a part of. e.g. 
    // {
    //   Louisa: ['Drama', 'Art'],
    //   Pam: ['Drama', 'Art', 'Chess'],
    //   ...etc
    // }

    const result = clubs.reduce((accu, currentClub) => {
      currentClub.members.forEach((member) => {
        if (!accu[member]) {
          accu[member] = [currentClub.club];
        } else {
          accu[member].push(currentClub.club);
        }
      });
      return accu;
    }, {});
    return result;

    // Annotation:
    // Because we want to return an object, we will use reduce since it is the
    // only prototype method that can return an object. On each iteration of
    // reduce, we will invoke a forEach method on the members array of the current 
    // club element. On each iteration, if our accumulator (initially an empty object) 
    // does not have a key matching the current member, we step into the if block statement
    // and add a property ('member') to our accumulator and assign it to an array
    // with the currentClub's club property value at index 0. If our accumulator 
    // already has a key matching the current member, we step into the else block 
    // and push the currentClub's clbu property value into our accumulator's 
    // member (at this current context) array. Upon completetion of the reduce
    // iteration we return our accumulator object.
  }
};


// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------



// DATASET: mods from ./datasets/mods
const modPrompts = {
  studentsPerMod() {
    // Return an array of objects where the keys are mod (the number of the module)
    // and studentsPerInstructor (how many students per instructor there are for that mod) e.g.
    // [
    //   { mod: 1, studentsPerInstructor: 9 },
    //   { mod: 2, studentsPerInstructor: 11 },
    //   { mod: 3, studentsPerInstructor: 10 },
    //   { mod: 4, studentsPerInstructor: 8 }
    // ]

    const result = mods.map((module) => {
      let studentsPerInstructor = module.students / module.instructors;
      return { mod: module.mod, studentsPerInstructor: studentsPerInstructor };
    });
    return result;

    // Annotation:
    // Because we are given an array and want an array back of the same length
    // we will use the 'map' method since it will return an array of the same
    // length. On each iteration of map, we will create a variable 
    // 'studentsPerInstructor' and assign it to the value of the current 
    // element's students value divided by the current element's instructors 
    // value. We will also return an object literal that has a mod key with value 
    // of the current element's mod value and a studentsPerInstructor key with
    // a value of the variable studentsPerInstructor. When iteration is complete
    // it will return an array of the same length as the original with the
    // modified elements.
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: cakes from ./datasets/cakes
const cakePrompts = {
  stockPerCake() {
    // Return an array of objects that include just the flavor of the cake and how
    // much of that cake is in stock e.g.
    // [ 
    //    { flavor: 'dark chocolate', inStock: 15 },
    //    { flavor: 'yellow', inStock: 14 },
    //    ..etc
    // ]

    const result = cakes.map((cake) => {
      return {flavor: cake.cakeFlavor, inStock: cake.inStock};
    });
    return result;

    // Annotation:
    // Becuase we want to return a modified array of the same length
    // as the original array, we will use the map method. In each 
    // iteration the callback fuction of map will return a modified
    // element, which is an object with a key of 'flavor' whose value
    // is the current cake's cakeFlavor value and another key of 'inStock'
    // whose value is the current cake's inStock value. Upon completetion
    // of the iteration the map method returns an array of the modified
    // elements.
  },

  onlyInStock() {
    // Return an array of only the cakes that are in stock
    // e.g.
    // [
    //   {
    //   cakeFlavor: 'dark chocolate',
    //   filling: null,
    //   frosting: 'dark chocolate ganache',
    //   toppings: ['dutch process cocoa', 'toasted sugar', 'smoked sea salt'],
    //   inStock: 15
    // },
    // {
    //   cakeFlavor: 'yellow',
    //   filling: 'citrus glaze',
    //   frosting: 'chantilly cream',
    //   toppings: ['berries', 'edible flowers'],
    //   inStock: 14
    // },
    // ..etc
    // ]

    const result = cakes.filter((cake) => {
      return cake.inStock > 0;
    });
    return result;

    // Annotation:
    // Because we want to return an array of cakes that that meet a specific 
    // condition of being inStock we will use the filter method. In each iteration the callback function of 
    // the filter method returns true if the condition of the current cake's inStock  value is greater
    // than 0 is met. At completion of iteration the filter method returns an array that includes
    // only the cakes whose value of inStock was greater than 0. If none of the cakes had a value greater
    // than zero, filter would return an empty array. 
  },
  
  totalInventory() {
    // Return the total amount of cakes in stock e.g.
    // 59

    const result = cakes.reduce((sum, cake) => {
      sum += cake.inStock;
      return sum;
    }, 0);
    return result;

    // Annotation:
    // Because we want to return a single value from the array cakes, we use the
    // reduce method. On each iteration of reduce, we add the current cake's 
    // inStock value to our sum accumulater. The sum accumulater is return at the 
    // completion of the reduce execution.
  },

  allToppings() {
    // Return an array of all unique toppings (no duplicates) needed to bake
    // every cake in the dataset e.g.
    // ['dutch process cocoa', 'toasted sugar', 'smoked sea salt', 'berries', ..etc]

    const result = cakes.reduce((toppingsArr, cake) => {
      cake.toppings.forEach((topping) => {
        if (toppingsArr.indexOf(topping) === -1) {
          toppingsArr.push(topping);
        }
      });
      return toppingsArr;
    }, []);
    return result;

    // Annotation:
    // Because we need to return array that does not have to be the exact same size as the
    // original array, we' will use the reduce method. In each iteration,
    // we are invoking a forEach method on the current cake's toppings array. For each topping, we 
    // are checking if our accumulater, toppingsArr, includes that topping. We are doing this
    // by invoking the indexOf method on our accumulater, toppingsArr within the conditional.
    // If the current topping is not in toppingsArr, it will result in -1. We will then enter the 
    // if block statement and we use the push method to add the topping in the current context to
    // the end of the toppingsArr. If the current topping is alreadyin the toppingsArr, we will not
    // enter the if block statement and the foreach will simply continue iterating. At the end of
    // execution of reduce, toppingsArr is returned. 

  },

  groceryList() {
    // I need to make a grocery list. Please give me an object where the keys are
    // each topping, and the values are the amount of that topping I need to buy e.g.
    // { 
    //    'dutch process cocoa': 1,
    //    'toasted sugar': 3,
    //    'smoked sea salt': 3,
    //    'berries': 2, 
    //    ...etc
    // }

    const result = cakes.reduce((groceryObj, cake) => {
      cake.toppings.forEach((topping) => {
        if(!groceryObj[topping]) {
          groceryObj[topping] = 0;
        }
        groceryObj[topping]++;
      });
      return groceryObj;
    }, {});
    return result;

    // Annotation:
    // Because we want to return an object, we'll use the reduce method since
    // it is the only one that can return an object. We invoke reduce on the cakes array. In each iteration,
    // we use the forEach method to iterate over each topping in the toppings array of the current cake.
    // If the current topping is not a key in groceryObj, then we set that topping as a key
    // of groceryObj with an intial value of 0. Once the topping is set as a key:value pair
    // we step outside of the if block and increment the value of the current topping. 
    // If the topping is already a key in groceryObj, we increment its value. At the end of execution
    // of reduce, groceryObj is returned.
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: classrooms from ./datasets/classrooms
const classPrompts = {
  feClassrooms() {
    // Create an array of just the front-end classrooms. e.g.
    // [
    //   { roomLetter: 'A', program: 'FE', capacity: 32 },
    //   { roomLetter: 'C', program: 'FE', capacity: 27 },
    //   { roomLetter: 'E', program: 'FE', capacity: 22 },
    //   { roomLetter: 'G', program: 'FE', capacity: 29 }
    // ]

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  totalCapacities() {
    // Create an object where the keys are 'feCapacity' and 'beCapacity',
    // and the values are the total capacity for all classrooms in each program e.g.
    // { 
    //   feCapacity: 110,
    //   beCapacity: 96
    // }

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  sortByCapacity() {
    // Return the array of classrooms sorted by their capacity (least capacity to greatest)

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: breweries from ./datasets/breweries
const breweryPrompts = {
  getBeerCount() {
    // Return the total beer count of all beers for every brewery e.g.
    // 40

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  getBreweryBeerCount() {
    // Return an array of objects where each object has the name of a brewery
    // and the count of the beers that brewery has e.g.
    // [
    //  { name: 'Little Machine Brew', beerCount: 12 },
    //  { name: 'Ratio Beerworks', beerCount: 5},
    // ...etc.
    // ]

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  findHighestAbvBeer() {
    // Return the beer which has the highest ABV of all beers
    // e.g.
    // { name: 'Barrel Aged Nature\'s Sweater', type: 'Barley Wine', abv: 10.9, ibu: 40 }

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DOUBLE DATASETS
// =================================================================

// DATASET: instructors, cohorts from ./datasets/turing
const turingPrompts = {
  studentsForEachInstructor() {
    // Return an array of instructors where each instructor is an object
    // with a name and the count of students in their module. e.g. 
    // [
    //  { name: 'Pam', studentCount: 21 },
    //  { name: 'Robbie', studentCount: 18 }
    // ]

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  studentsPerInstructor() {
    // Return an object of how many students per teacher there are in each cohort e.g.
    // { 
    // cohort1806: 9,
    // cohort1804: 10.5
    // }

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  modulesPerTeacher() {
    // Return an object where each key is an instructor name and each value is
    // an array of the modules they can teach based on their skills. e.g.:
    // { 
    //   Leta: [2, 4],
    //   Nathaniel: [2],
    //   Robbie: [4],
    //   Pam: [2, 4]
    // }

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  curriculumPerTeacher() {
    // Return an object where each key is a curriculum topic and each value is
    // an array of instructors who teach that topic e.g.:
    // { 
    //   html: [ 'Travis', 'Louisa' ],
    //   css: [ 'Travis', 'Louisa' ],
    //   javascript: [ 'Travis', 'Louisa', 'Christie', 'Will' ],
    //   recursion: [ 'Pam', 'Leta' ]
    // }

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: bosses, sidekicks from ./datasets/bosses
const bossPrompts = {
  bossLoyalty() {
    // Create an array of objects that each have the name of the boss and the sum
    // loyalty of all their sidekicks. e.g.:
    // [
    //   { bossName: 'Jafar', sidekickLoyalty: 3 },
    //   { bossName: 'Ursula', sidekickLoyalty: 20 },
    //   { bossName: 'Scar', sidekickLoyalty: 16 }
    // ]

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: constellations, stars } from ./datasets/astronomy
const astronomyPrompts = {
  starsInConstellations() {
    // Return an array of all the stars that appear in any of the constellations
    // listed in the constellations object e.g.
    // [ 
    //   { name: 'Rigel',
    //     visualMagnitude: 0.13,
    //     constellation: 'Orion',
    //     lightYearsFromEarth: 860,
    //     color: 'blue' },
    //   { name: 'Betelgeuse',
    //     visualMagnitude: 0.5,
    //     constellation: 'Orion',
    //     lightYearsFromEarth: 640,
    //     color: 'red' }
    // ]

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  starsByColor() {
    // Return an object with keys of the different colors of the stars,
    // whose values are arrays containing the star objects that match e.g.
    // {
    //   blue: [{obj}, {obj}, {obj}, {obj}, {obj}],
    //   white: [{obj}, {obj}],
    //   yellow: [{obj}, {obj}],
    //   orange: [{obj}],
    //   red: [{obj}]
    // }

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  constellationsStarsExistIn() {
    // Return an array of the names of the constellations that the brightest stars are part of e.g.
    // [ 'Canis Major',
    //   'Carina',
    //   'Boötes',
    //   'Lyra',
    //   'Auriga',
    //   'Orion',
    //   'Canis Minor',
    //   'Eridanus',
    //   'Orion',
    //   'Centaurus' ]

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: charaters, weapons from ./datasets/ultima
const ultimaPrompts = {
  totalDamage() {

    // Return the sum of the amount of damage for all the weapons that our characters can use
    // Answer => 113

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  charactersByTotal() {

    // Return the sum damage and total range for each character as an object. 
    // ex: [ { Avatar: { damage: 27, range: 24 }, { Iolo: {...}, ...}

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },
};



module.exports = {
  breweryPrompts,
  turingPrompts,
  clubPrompts,
  bossPrompts,
  classPrompts,
  modPrompts,
  kittyPrompts,
  cakePrompts,
  astronomyPrompts,
  ultimaPrompts
};