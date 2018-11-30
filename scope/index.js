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
    // the function greetingFunction which is invoked on line 138. Upon invocation we move to
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

    const result = [
      {'A': 'hi'},
      {'B': 'welcome'},
      {'C': 'welcome'},
      {'D': 'howdy'}
    ];
    return result;

    // Annotation:
    // On line 169 in the global scope we declare a variable 'greeting' and
    // then declare the function greetingGenerator, which is invoked on line 
    // 186. Upon invocation we move to line 172 and begin execution. In the local
    // scope we declare a variable 'greeting' and assign it a value 'hi' and we
    // declare the function newGreeting, which is invoked later on line 186. We then 
    // move to the if conditional and check if 'greeting' equals 'hi', which it 
    // does in the local scope so we move into the if block. Within the block
    // we declare a block-scoped variable 'greeting' with a value of 'hello'
    // and becuase it is block-scope it will not leak out. The block 
    // execution is complete so we step out and log greeting which in the local
    // scope equals 'hi'. We move to line 186 and invoke newGreeting, then move
    // up to line 181 and begin execution. We want to reassign 'greeting', but
    // do not have a declared variabe in the local scope so we move up the scope
    // chain to the greetingGenerator scope and find a declared variable 'greeting'
    // and reassign its value to 'welcome'. We then log greeting, which equals
    // 'welcome'. Execution of this block is complete so we step out and pop
    // newGreeting off the callStack and then log greeting, which in the 
    // current local scope is 'welcome'. The execution for greetingGenerator 
    // is complete and then we log greeting, which in the global scope equals 'howdy' 
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

    const result = [
      {'C': 'Brittany'},
      {'A': 'Nathaniel'},
      {'B': 'Nathaniel'},
      {'D': 'Brittany'}
    ];
    return result;

    // Annotation:
    // On line 226 in the global scope we declare a variable 'name' and declare
    // the function sayName, which is invoked on line 246. The variable 'name'
    // is assigned to a value 'Brittany'. We then log name, which equals
    // 'Brittany. Upon invokation of sayName on line 
    // 246 we move to line 229 and begin execution. In the local scope we
    // declare a varible name and assign its value 'Pam'. Then we move to the
    // conditional and evaluate if 'name' equals 'Pam', which it does in the 
    // current local context so we enter the if block. In the block we reassign
    // a variable 'name', which we find declared in the local scope, to a value
    // 'Nathaniel'. We move to the next conditional and evaluate if the length
    // of 'name' is greater than 0, which the length of 'Nathanial' is so we 
    // step into the if block. There we assign a block-scoped variable 'name'
    // to a value of 'Brittany'. This ends execution and since the variable we
    // just declared is blockscoped, it won't "leak out". We then log 'name',
    // which equals 'Nathaniel' in the local scope and then execution of the block
    // is complete so we step out and log 'name' on line 241, which equals
    // 'Nathaniel' in the local scope. Execution of sayName is complete and is
    // popped off the callStack. Then we log 'name' in the global scope, which
    // equals 'Brittany'.
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

    const result = [
      {'A': 'Spot'},
      {'B': 'Spot'},
      {'C': 'Biscuit'},
      {'D': 'Biscuit'},
      {'E': 'Biscuit'}
    ];
    return result;

    // Annotation:
    // On line 281 in the global scope we assign a variable 'dog' and then
    // declare the function petDog, which is invoked on line 304. We assign 'dog'
    // to the value 'Spot' and then invoke petDog on line 304 and begin
    // execution. In the local scope of petDog we declare the function rollOver
    // and then begin execution on line 284 where we log 'dog'. There is not a 
    // declared variable 'dog' in the local scope so we go up the scope chain to
    // the global scope where there is a declared 'dog' variable so we log its 
    // value of 'Spot'. Then we move to the if block and check if 'dog' equals
    // 'Spot', which in the global scope it does so it evaluates to true and 
    // we step into the block. In the block we declare a blockscoped variable
    // 'dog' with a value 'Fluffy' and complete execution of the if block. We 
    // move to line 299 and invoke rollOver, which moves us to begin execution
    // on line 291 and we log 'dog'. So we move up the scope chain and in the 
    // global scope it equals 'Spot'. Then we reassign 'dog', again moving up 
    // the chain to the global scope, to a value of 'Biscuit'. We then log
    // 'dog', which is 'Biscuit'. Execution of rollOver is complete, it is
    // popped off the callStack and then we log 'dog' as the last line of the
    // petDog execution, which equals 'Biscuit'. Exeuction of petDog is complete
    // we move to line 306 in the global scope and log 'dog', which equals 'Biscuit'
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

    const result = [
      {'A': 'reference error'},
      {'B': 'mango'},
      {'C': 'mango'},
      {'D': 'apple'}
    ];
    return result;

    // Annotation:
    // On line 340 in global scope we declare a variable 'fruit' and declare
    // a function eatFruit. Variable fuit is then assigned to 'apple' and
    // function eatFruit is invoked on line 358, so we begin execution and
    // move to line 344 and check if fruit is not equal to 'kiwi'. There is 
    // not a declared variable fruit in the local scope so we move up the scope
    // chain and in global scope the declare variable fruit equals 'apple', 
    // which is not equal to 'kiwi' so the conditional evaluates to true. We 
    // move into the if block and declare a variable 'fruit with the keyword 
    // var and assign it a value of 'mango'. We then move to the if statement
    // and evaluate if there is a fruit variable, which is true so we move into
    // that if block. We logA which returns a reference error becuase 
    // we declared a variable 'fruit' with the keyword const and if a variable is 
    // declared with let or const it cannot be accessed before it is declared (temporal deadzone)/
    // Execution of the block is complete so we move out 
    // to line 352 and logB fruit, which equals 'mango' in the local scope. Execution
    // of that block is complete to we step out to line 355 and logC fruit, which equals
    // 'mango' becuase the variable 'fruit' we declared in the if block was declared with a 
    // keyword var which is not block scope and "leaks out". Execution of eatFruit
    // is complete and we move into the global scope and logD fuit, which equals 'apple'
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

    const result = [
      {'A': 4},
      {'D': 9},
      {'E': 10},
      {'B': 9},
      {'C': 4}
    ];
    return result;

    // Annotation:
    // On line 393 in global scope we declare three variables, 'num' 'fn1' 'fn2'.
    // Then we assign 'num' to a value of 6, 'fn1' to a value of a function 
    // expression, and 'fn2' to a function expression. On 423vwe invoke the fn1
    // function. We begin execution of fn1 on line 396, where we declare a varible 
    // in the local scope, 'num' assigned a value of 4. We logA 'num' in
    // the current local scope which equals 4. Then we move to the if conditional
    // and 'num' less than 5 evaluates to true, since num is 4. We move into the block
    // and declare a block-scoped variable num and assign it a value of 9. Then we invoke 
    // the fn2 function and pass through an argument of num, which equals 9. We begin
    // execution in the fn2 local scope and logD 'num' which is 9. Then we reassign 
    // num, which moves up the scope chain to the local context of fn1, to a value of 
    // num + 1, which is 10. We logE which is 10. Execution of fn2 is complete, it is
    // popped of the callStack and we continue on line 405. We declare a block scoped
    // variable newNum and assign is a value of num, which is 9 within this block. We
    // then logB num, which equals 9. We're step out of the if block to line 410 and 
    // reassign newNum to a value of num. There isn't a declared variable newNum in the 
    // local scope so we move up the chain and declare newNum in the global scope, it is
    // assigned a value of 4 since num in the local scope is 4. We logE num which is 4.
    // Exuction is complete. 
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

    const result = [
      {'A': 75},
      {'B': 0},
      {'C': 75},
      {'D': 80},
      {'A': 55},
      {'B': 0},
      {'C': 55},
      {'E': 55}
    ];
    return result;

    // Annotation:
    // 
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

    const result = [
      {'A': 'ketchup sandwich'},
      {'D': 'gouda'},
      {'B': undefined},
      {'C': 'not a mediocre sandwich'},
      {'E': 'not a mediocre sandwich'},
      {'F': 'National Treasure'}
    ];
    return result;

    // Annotation:
    // Starting from line 497 in global scope we declare a variable 'sandwich',
    // then addChipotle, and addCheese. We then assign 'sandwich' to a string
    // of 'ketchup sandwich' and LogA 'sandwich' which equals 'ketchup sandwich'.
    // We then assign addChipotle to a function expression and do the same for addCheese
    // then we look for a variable cheeseTopping, which has not been declared
    // so it is declared in the global scope and assigned a value 'kraft'. Then 
    // addCheese function is invoked. Begiing execution of addCheese we declare
    // a variable cheeseTopping in the local scope and a variable ShesTheManReference.
    // Then we assign cheeseTopping the value of 'gouda' and then LogD cheeseTopping
    // which equals 'gouda' in the local scope. Next we invokce the shesTheManRefernce
    // and begin executution. We look for a declared variable amandaBynes, but do
    // not have one declared in local scope so we move up the scope chain util we 
    // reach the global scope without finding it. Therefore we declare a global variable
    // amandaBynes and assign is a value of 'National Treasure'. Execution of
    // shesTheManRefernce is complete, its popped off the callStack. addCheese execution
    // is also complete. We then invoke addChipotle function and begin execution on line 501
    // We declare a variable toppings. Then we logB toppings, but since we have not
    // assigned a value to toppings, it logs undefined. Then we assign a value of 
    // 'chipotle sauce' to toppings. We move to the if conditionals and check if 
    // toppings is equal to 'chipotle sauce', which is does so we step into the block
    // and look for a variable sandwich, but there is not one declare in the block or 
    // local scope so we move up the scope chain to the global scope and find a 
    // declared variable sandwich, which we reassign to a value of 'not a mediocre sandwich'
    // We complete the if block and move to line 509 where we logC sandwich, which equals
    // 'not a mediocre sandwich'. Execution of addChipolte is complete. Then we logE
    // sandwich which equals 'not a mediocre sandwich' and logF amandaBynes which equals 'National Treasure'

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

    const result = [
      {'A': 7},
      {'B': 7}
    ];
    return result;

    // Annotation:
    // On line 571 in global scope we declare a varible num and assign
    // it a value of 10. Then we invoke the function foo and enter execution
    // we check if num is greater than 5, and look up the scope chain to fund
    // num which is greater than 5 so we move into the if block. Then we reassign
    // num in the global scope to a value of 7. We complete the if block and then
    // logA num, which equals 7. Execution of foo is complete and it is popped
    // off the callStack. Then we logB num, which equals 7.
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

    const result = [
      {'A': 95},
      {'B': 90},
      {'C': 90}
    ];
    return result;

    // Annotation:
    // On line 601 in global scope we declare a variable grade, and 
    // assign it a value of 100. Then we invoke losePoints function on line 621
    // and begin execution. Then we look for a variable grade, there is not one
    // in the local sope so we move up the scope chain to the global scope and 
    // then reassign the declared variable grade to a value of 90. Then we invoke
    // the function addPoints. On line 607 we declare a block-scoped variable
    // grade and assign it a value of 95. We then check if grade equals 95, 
    // which in the local scope it does so we enter the if block and then declare
    // a block scoped variable grade and assign it to 97. The block execution is complete
    // so we step out and on line 613 we logA grade, which equals 95 in the local scope.
    // Execution of addPoints is complete so it is popped off the callStack and we move to
    // line 618 where we logB, which equals 90 in the local scope. Execution of 
    // locePoints is complete and we step out to line 623 where we logC which equals 90.
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

    const result = [
      {'A': 5},
      {'B': 6},
      {'C': 'reference error'},
      {'D': 5}
    ];
    return result;

    // Annotation:
    // ON line 649 in global scope we delcare a variable num and assign
    // it to a value of 5. Then we invoke the 'first' function and enter execution
    // We logA num, and move up the scope chain to the global scope to find the declared
    // variable num, which equals 5.
    // FINISH ANNOTATION !!!!!!!!!!!
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