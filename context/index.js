const context = {
  exerciseA() {
    const fly = () => {
      console.log(this);
    };

    class SpaceProbe {
      constructor(title, classification) {
        this.title = title;
        this.classification = classification;
        this.fly = fly;
      } 
    }

    const ship = new SpaceProbe('voyager', 'classy');


    // What is the value of `this` when we call ship.fly()?
    const result = 'global window object';
    return result;

    // Annotation:
    // 'this' references the global window object. The const variable 
    // fly is an ES6 arrow function and the value of 'this' is set when
    // the fuction is created, which then points to the global window object. 
    // If fly() was declared on line 11 inside the constructor function then
    // 'this' would reference ship, becuase fyl() would be declared when 
    // the constructor function is invoked and therefore the current
    // context of this would be the newly instanciated object ship.
  },

  exerciseB() {
    function fn() {
      const value = 2;
      return this.value;
    }
    
    // What is the value of `this` when we call fn()?
    const result = 'global window object';
    return result;

    // Annotation:
    // 'this' will reference the global window object because fn() is written
    // as an ES5 function, which sets the value of 'this' when invoked. In
    // this case when we call fn() it is not called as a method on a
    // particiular object, therefore 'this' refers to the global object.
  },

  exerciseC() {
    const car = {
      make: 'Tesla',
      getInfo: function(){
        console.log(this);
      }
    };

    const el = document.getElementById('btn');
    el.addEventListener('click', car.getInfo);

    // What is the value of `this` when a user clicks on our element and car.getInfo() is triggered?
    const result = 'el';
    return result;

    // Annotation: 
    // 'this' will reference the const variable el, which is the value of the
    // element selected from the DOM because of rule #2 when a function
    // is invoked as a method with dot notation 'this' references the obj
    // to the left of the dot.
  },

  exerciseD() {
    const dog = {
      breed: 'Chihuahua',
      getBreed: function(){
        const innerFunction = function() {
          console.log(this.breed);
        };
    
        return innerFunction();
      }
    };


    // What is the value of `this` when we call dog.getBreed()?
    const result = 'global window object';
    return result;

    // Annotation: 
    // 'this' will reference the global window object. When dog.getBreed()
    // is executed, innerFuntion() is invoked which is an ES5 function and
    // therefore sets the value of 'this' upon execution, not creation
    // and since innerFunction() is not executed as a method of the dog
    // object 'this' references the global window object. 

  },

  exerciseE() {

    const fn = () => {
      value = 21;
      return this.value;
    };


    // What is the value of `this` when we call fn()?
    const result = 'global window object';
    return result;

    // Annotation: 
    // 'this' references the global window object. fn() is writen as an ES6
    // function, which sets the value of 'this' upon creation. fn() is not executed as a method on
    // an object and is not invoked in function code with the keyword new, therefore the default
    // 'this' refers to the global window object.

  },

  exerciseF() {
    class Hero {
      constructor(name, power, canFly = false) {
        this.name = name;
        this.power = power;
        this.canFly = canFly;
      }

      identifyHero() {
        return this;
      }
    }

    const storm = new Hero('Ororo', 'weather control', true);

    // What is the value of `this` when we call storm.identifyHero()?
    const result = 'instance of Hero';
    return result;

    // Annotation: 
    // 'this' references the newly created object instance becuase of
    // rule #3, which says when using the new operator 'this' refers to the
    // newly created object
  },

  exerciseG() {
    class Game {
      constructor(title) {
        this.title = title;
      }

      resetGame() {
        console.log('Clearing the board and starting over');
      }

      restart() {
        // this -> monoply
        setTimeout(function() {
          console.log(`Restarting ${this.title}...`);
        }, 1000);
      }
    }

    const monopoly = new Game('Monopoly');


    // What is the value of `this` when we call monopoly.restart()?
    const result = 'global window object';
    return result;

    // Annotation: 
    // 'this' references the global window object. When restart() is invoked as a method of 
    // monopoly, setTimeout() is imediately invoked. Since 'this' is set in ES5 when the function
    // is invoked, 'this' refers to the global object in the setTimeout function
  },

  exerciseH() {
    const obj = {
      arrowFunction: null,
      method: function() {
        this.arrowFunction = () => { 
          return this;
        };
      }
    };

    obj.method();

    // What is the value of `this` when we call obj.arrowFunction()?
    const result = 'obj';
    return result;

    // Annotation: 
    // 'this' references obj. On line 183 method() is invoked as a
    // method of obj, in the current context 'this' references obj 
    // and we move up to line 176. In the functional scope we 
    // reassign this.arrowFunction (which was previously a property 
    // with a value of null), to an ES6 arrow function. Since the 
    // value of 'this' is determined when an ES6 arrow function 
    // is created, 'this' refers to obj

  },

  exerciseI() {  
    const poets = [{
      name: 'Sappho'
    }, {
      name: 'Maya'
    }, {
      name: 'Emily'
    }, {
      name: 'Audre'
    }];

    poets.map(function(poet) {
      return this;
    }, poets);

    // What is the value of `this` that gets returned on each iteration of poets.map()?
    const result = 'poets';
    return result;

    // Annotation: 
    // 'this' references poets becuase the method map() is invoked on the poets 
    // object and when executing a functon as a method of an object, the 
    // value of 'this' refers to that object.
  },
  exerciseJ() {
    const el = $('#btn');
    el.on('click', function() {
      console.log($(this));
    });

    // What is the value of `this` when a user clicks on our #btn element and the callback is triggered?
    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation: 
    // Write your annotation here as a comment.
  },

  exerciseK() {
    const el = $('#btn');
    el.on('click', () => {
      console.log(this);
    });

    // What is the value of `this` when a user clicks on our #btn element and the callback is triggered?
    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation: 
    // Write your annotation here as a comment.
  }

};

module.exports = context;