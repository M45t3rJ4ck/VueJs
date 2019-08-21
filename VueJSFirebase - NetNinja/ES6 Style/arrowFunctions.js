// Normal function code style
const greetOne = function(name){
    console.log('Hello ' + name);
};

// Fat Arrow function
const greetTwo = (name) => {
    console.log('Hello ' + name);
};

// Callback Fat Arrow Function
// Obj.method(name => {
//     console.log('Hello ' + name);
// });

// One liner Fat Arrow Function
const greetThree = name => console.log('Hello ' + name);

// Calling functions
greetOne('Mario');
greetTwo('Luigi');
greetThree('Yoshi');