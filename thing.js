// Example 1
// const thing = {
//     doodoo: "Boo",
//     daadaa: function() {
//       console.log(this);
//     }
//   };

  // Example 2
  // const dog = {
  //   sound: "woof",
  //   speak: function() {
  //     console.log(this.sound);
  //   }
  // };

  // dog.sound = "🐶"
  // dog.speak();

  // Example 3
  class Pizza {

    constructor() {
      this.toppings = ["cheese"];
    }
  
    addTopping(topping) {
      this.toppings.push(topping);
    }
  
  }

  class Pizza {
    constructor() {
      this.toppings = ["cheese"];
    }
  }
  // Add a Method
  // class SomeClass {
  //   methodName(parameters) {
  //     // this is a method
  //   }
  // }

  // Add a Property //Hello
  // class SomeClass {
  //   someMethod() {
  //     this.hello = "hi"; // Created a property called hello
  //   }
  // }

// This will **NOT** work.
// That's because addTopping is a method only available to actual instances of Pizza
// Give it a try!
Pizza.addTopping();