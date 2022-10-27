

// "new" binding this
function Person(name, age) {
    this.name = name;
    this.age =age;
    }
  
  const person1 = new Person('Xavier', 55)
  person1

  // Notes: the "new" keyword binds "this" to  the object we substantiate (person1), so person1 will be the "this" keyword.
  // this is the same for when we use "this" for classes
  
 //Example: 
  class Character {
  constructor(name, weapon) {
    this.name = name;
    this.weapon = weapon;
  }
  attack() {
    return 'atack with ' + this.weapon
  }
}

class Elf extends Character { 
  constructor(name, weapon, type) {
    // console.log('what am i?', this); this gives an error
    super(name, weapon) 
    console.log('what am i?', this); // Note: the "this" keyword refers to Elf
    this.type = type;
  }
}

//implicit binding
const person = {
    name: 'Karen',
    age: 40,
    hi() {
      console.log('hi' + this.name)
    }
  }

person.hi()

  // Notes: "this" gets bound to "person"

//explicit binding
const person3 = {
    name: 'Karen',
    age: 40,
    hi: function() {
      console.log('hi' + this.setTimeout)
    }.bind(window)
  }
  
  person3.hi()
  
  // arrow functions
  const person4 = {
    name: 'Karen',
    age: 40,
    hi: function() {
      var inner = () => {
        console.log('hi ' + this.name)
      }
      return inner()
    }
  }
  
  person4.hi()
  
  // NOtes: Where ever we write the function, thats where "this" binds to. 
  // Also, remember that if we didn't use an arrow function in this example we would have a function inside a method and "this" would bind to the Global object or Window
