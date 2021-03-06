// DATA TYPES: (composite types: انواع مركبة)
// - array
// - object

// Array: a set of values grouped in one variable
//-----------------------------------------------------------------------------
var x = []; // empty array
var y = [10, "20", 30, true, null, "hello world!"]; // array contains values
// y :
// 2 numbers
// 2 strings
// 1 boolean
// 1 null

// we use (index) to access individual values
console.log(y[2]); // 30
console.log(y[6]); // undefined
console.log(y[5]); // "hello world!"

// y.length : number of items in the array
// console.log(y.length); // 6

// we can use (length) with strings
// var z = "Muneera Hamad Shwaiter";
// console.log(z.length); // 22


// Object: a set of values grouped in one variable
//-----------------------------------------------------------------------------
var o1 = {}; // empty object
// values in object: key-value pair
var o2 = { name: "Muneera", job: "web developer", email: "muneera@example.com", isStudent: true };

// var o2 = { 
//     name: "Muneera", 
//     job: "web developer", 
//     email: "muneera@example.com", 
//     isStudent: true 
// };

// we use (key) to access individual values
console.log(o2.name);// "Muneera"