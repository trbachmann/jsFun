const scope = {
  exerciseA() {
    let personA = 'Paul';
    let personB = 'Ben';
    let personC = 'Tom';

    function changePerson() {
      if (personA === 'Paul') {
        person = 'CardiB';
        beautifyPerson();
      }

      function beautifyPerson() {
        // Log A: personB
        
        if (personB.includes('B')) {
          personB = person;
          personC = personB;
          // Log B: personC
        }
      }

      personC = personA;

      // Log C: personB
    }

    changePerson();

    // Log D: personC

    const result = [
      {'A': 'Ben'}, 
      {'B': 'CardiB'}, 
      {'C': 'CardiB'}, 
      {'D': 'Paul'}
    ];
    return result;

    // Annotation:
    // Within the global scope on line 3 we declare three variables: personA, personB, personC,
    // and then we declare the function changePerson. changePerson is invoked on line 28, its
    // invocation brings us back up to line 8 where we begin executing changePerson. On line 8
    // we check if personA equals 'Paul', which evaluates to true so we enter that if block and 
    // reassign the variable 'person' to 'CardiB'. Since person is not declared in the current local
    // scope we move up the scope chain to look until we find a declaration for person. We reach
    // the global scope and do not find a declaration for person, so person is now declared as a global
    // variable with a value of 'CardiB'. Then we invoke beautifyPerson and log personB, which currently
    // equals 'Ben'. We then check if the value of personB includes a string of 'B', which is does so we 
    // enter that if block and reassign personB to the value of person which is 'CardiB'. We then
    // reassign personC to the value of personB and log personC which now equals 'CardiB.' The execution 
    // for beutifyPerson is now complete. It is popped off the call stack and we are back in the local
    // execution context of changePerson on line 23 where we reassign personC to the value of personA
    // which currently equals 'Paul'. Then we log personB which currently equals 'CardiB'. The execution for 
    // changePerson is complete so we move down to line 30 where we log personC, which now equals
    // 'Paul'
  },

  exerciseB() {
    let number = 30;

    function numberFunction() {
      let number = 75;

      if (number === 75) {
        let number = 28;
      }

      // Log A: number

      function newNumber() {
        number = 64;

        // Log B: number
      }

      newNumber();

      // Log C: number
    }

    numberFunction();

    // Log D: number

    const result = [
      {'A': 75}, 
      {'B': 64}, 
      {'C': 64}, 
      {'D': 30}
    ];
    return result;

    // Annotation:
    // On line 60 in the global scope we declare a variable 'number' assigned to a value
    // of 60 and then on line 62 we declare the function numberFunction 
    // which is invoked on line 82. Upon invocation we go up to line 63 and declare 
    // a variable 'number' in the local scope. We then evaluate if 'number' equals 75, 
    // which in the local scope if does, so we enter the if block. Within the if block
    // we declare a variable 'number' with the keyword let and assign it a value of 28.
    // Since let is block scoped 'number' in the current local block scope will not 
    // "leak out" of its scope. The if block if complete so we hop out and then log 
    // number which equals 75 in the current local scope of numberFunction. Then newNumber
    // is invoked, which brings up to line 72 where we reassign 'number'. Since 'number' is
    // not declared in the current local scope we look up the scope chain to find its 
    // declaration. We find 'number' declared in the numberFunction scope and reassign it to
    // a value of 64. Then we log number, which currently has a value of 64. This is the end
    // of newNumber's execution so it is popped of the callStack and now we are back in the 
    // numberFunction execution. We then log number, which currently equals 64 since we previiously
    // reassigned it. The execution for numberFunction ends and then we moved down to line 84 where
    // we log number, which equals 30 becuase we are back in the global scope and the value of the
    // variable number is 30.
  },

  exerciseC() {
    let greeting = 'Hello';

    function greetingFunction() {
      var greeting = 'Yo';

      if (greeting === 'Yo') {
        let greeting = 'Howdy';
      }

      // Log A: greeting

      function newPhrase() {
        greeting = 'Hey';

        // Log B: greeting
      }

      newPhrase();

      // Log C: greeting
    }

    greetingFunction();

    // Log D: greeting

    const result = [
      {'A': 'Yo'},
      {'B': 'Hey'},
      {'C': 'Hey'},
      {'D': 'Hello'}
    ];
    return result;

    // Annotation:
    // On line 116 in the global scope we declare a variable 'greeting' and then we declare 
    // the function greeting Function which is invoked on line 138. Upon invocation we move to
    // line 119 and begin execution. In the local scope we declare a variable 'greeting' and 
    // assign it a value of 'Yo'. We then check if 'greeting' is equal to 'Yo' and this evaluates
    // to true in the current local context so we enter the if block. In the block we declare a 
    // variable greeting an assign it a value of 'Howdy' and then the block is complete so we step
    // out. Since we declare the variable with keyword let it will not "leak" outside of 
    // the if block. Then we continue execution and log greeting, which equals 'Yo'. We then invoke
    // newPhrase and move to line 128 where we reassign 'greeting'. Since greeting is not declared
    // in the current local scope of newPhrase we move up the scope chain until we find 'greeting' 
    // declared. It is declared in the greetingFunction scope so we reassign it a value of 'Hey'. 
    // Then we log 'greeting', which currently equals 'Hey'. Execution of the newPhrase block is
    // complete so it is popped off the callStack and we move back to the greetingFunction execution 
    // We then log greeting, which equals 'Hey'. Execution of greetingFunction is complete so we
    // move to back to the global execution and to line 140 where we log greeting which equals 'Hello'
  },

  exerciseD() {
    let greeting = 'howdy';

    const greetingGenerator = () => {
      let greeting = 'hi';

      if (greeting === 'hi') {
        let greeting = 'hello';
      }

      // Log A: greeting

      const newGreeting = ()  => {
        greeting = 'welcome';

        // Log B: greeting
      };

      newGreeting();

      // Log C: greeting
    };

    greetingGenerator();

    // Log D: greeting

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseE() {
    let name = 'Brittany';

    function sayName() {
      let name = 'Pam';

      if (name === 'Pam') {
        name = 'Nathaniel';

        if (name.length > 0) {
          let name = 'Brittany';
        }

        // Log A: name
      }

      // Log B: name
    }

    // Log C: name

    sayName();

    // Log D: name

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseF() {
    var dog = 'Spot';

    function petDog() {
      // Log A: dog

      if (dog === 'Spot') {
        let dog = 'Fluffy';
      }

      function rollOver() {
        // Log B: dog

        dog = 'Biscuit';

        // Log C: dog

      }

      rollOver();

      // Log D: dog
    }

    petDog();

    // Log E: dog

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseG() {
    var fruit = 'apple';

    function eatFruit() {

      if (fruit !== 'kiwi') {
        var fruit = 'mango';

        if (fruit) {
          // Log A: fruit
          const fruit = 'strawberry';
        }

        // Log B: fruit
      }

      // Log C: fruit
    }

    eatFruit();

    // Log D: fruit

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseH() {
    let num = 6;

    const fn1 = function() {
      let num = 4;

      // Log A: num

      if (num < 5) {
        const num = 9;

        fn2(num);

        const newNum = num;

        // Log B: newNum
      }

      newNum = num;

      // Log C: newNum
    };

    const fn2 = function(num){
      // Log D: num

      num = num + 1;

      // Log E: num
    };

    fn1();

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseI() {
    var hunger = 100;

    function eatSnack() {
      hunger -= 25;
      // Log A: hunger
      gorgeYourself();

      function gorgeYourself() {
        const hunger = 0;
        // Log B: hunger
      }

      // Log C: hunger
    }

    eatSnack();

    hunger += 5;
    // Log D: hunger

    eatSnack();
    // Log E: hunger

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseJ() {
    let sandwich = 'ketchup sandwich';

    // Log A: sandwich

    const addChipotle = () => {
      // Log B: toppings
      var toppings = 'chipotle sauce';

      if (toppings === 'chipotle sauce') { 
        sandwich = 'not a mediocre sandwich';
      }

      // Log C: sandwich
    };

    const addCheese = () => {
      let cheeseTopping = 'gouda';
      // Log D: cheeseTopping

      const shesTheManReference = () => {
        amandaBynes = 'National Treasure';
      };

      shesTheManReference();
    };

    cheeseTopping = 'kraft';
    addCheese();

    addChipotle();
    // Log E: sandwich
    // Log F: amandaBynes

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseK() {
    let num = 10;

    function foo() {
      if (num > 5) {
        num = 7;
      }
      // Log A: num
    }

    foo();

    // Log B: num

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseL() {
    let grade = 100;

    function losePoints() {
      grade = 90;

      function addPoints() {
        const grade = 95;

        if (grade === 95) {
          let grade = 97;
        }

        // Log A: grade
      }

      addPoints();

      // Log B: grade
    }

    losePoints();

    // Log C: grade

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseM() {
    var num = 5;

    function first() {
      // Log A: num
      num = 6;
      // Log B: num
    }

    function second() {
      // Log C: num
      let num = 7;
    }

    first();
    second();

    // Log D: num

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseN() {
    var instructor = 'Pam';

    function changeInstructor() {

      // Log A: instructor

      if (instructor === 'Brittany') {
        const instructor = 'Nathaniel';
      } else {
        let instructor = 'Brittany';
      }

      // Log B: instructor

      function rename() {
        instructor = 'Louisa';
        // Log C: instructor
      }

      rename();

      // Log D: instructor

    }

    // Log E: instructor

    changeInstructor();

    // Log F: instructor

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseO() {
    var shoe = 'flipflop';

    function putOnShoe() {
      // Log A: shoe
      var shoe = 'boot';
    }

    // Log B: shoe
    putOnShoe();
    // Log C: shoe

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseP() {
    let lunch;
    function orderLunch() {
      if (lunch) {
        // Log A: lunch
        let lunch = 'sandwich';
      }

      if (typeof lunch === 'undefined') {
        lunch = 'soup';
      }

      // Log B: lunch
    }

    orderLunch();

    // Log C: lunch

    const result = [
      {'B': 'soup'},
      {'C': 'soup'}
    ];
    return result;

    // Annotation:
    // Declaring a variable 'lunch', then we have a function declaration orderLunch()
    // Log A never occurs becuase the first conditional evaluates to false
    //**** waiting for the test suite to be updated, the result above it correct but not passing test*****
  },

  exerciseQ(){
    let myKid = 'Pandora';
    let wildKids = ['Antigone'];

    let myCrazyKidAntics = kid => {
      // Log A: kid
      wildKids.push(kid);
      // Log B: wildKids
  
      let drawOnTheWall = () => {
        let myKid = 'Mandy';
        // Log C: myKid
        return `That wild kid ${myKid}, drew on the wall!`;
      };

      drawOnTheWall();

      let myAmazingKid = () => {
        let myKid = wildKids.shift();
        // Log D: myKid
        return `That kid ${myKid}, is AMAZING!`;
      };

      myAmazingKid();
      // Log E: myKid;
      return `All these kids are wild, especially, ${myKid}!`;
    };

    myCrazyKidAntics(myKid);

    const result = [
      {'A': 'Pandora'},
      {'B': ['Antigone', 'Pandora']},
      {'C': 'Mandy'},
      {'D': 'Antigone'},
      {'E': 'Pandora'}
    ];
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseR() {
    let myName = 'Rody';
    // Log A: myName

    const parentFunc = () => {
      myName += 'Toy';
      // Log B: myName

      let innerFunc = () => {
        let myName = 'Tesla'; 
        // Log C: myName
      };

      innerFunc();
      myName += 'Daniels';
    };

    parentFunc();
    // Log D: myName

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  }
};

module.exports = scope;