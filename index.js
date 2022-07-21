// Add answers here

// DO NOT EDIT below this line - This will result in an automatic fail
// module.exports = {nameOfCity, isDivisible, missingAngle, isRaining, geometricalSequence, multiplesOfThree, powerOf, vowelCount};

// ### Conditional Algorithms

// #### 1. Los or New?
// Create a function named "_nameOfCity_". If a passed string begins with "_Los_" or "_New_", then return the full string. If not, return "_The city name does not begin with Los or New_". The function should be **case insensitive**.

// ##### Examples
// ````javascript
// nameOfCity('New York') ➞ 'New York'
// nameOfCity('newark') ➞ 'newark'
// nameOfCity('London') ➞ 'The city name does not begin with Los or New'

function nameOfCity(string) {
  if (string.includes("Los") || string.includes("New")) {
    return string;
  } else {
    return string;
  }
}

console.log("Q1:", nameOfCity("Los Angeles"));
console.log("Q1:", nameOfCity("New york"));
console.log("Q1:", nameOfCity("New Zealand"));
console.log("Q1:", nameOfCity("London"));

console.log(
  "-----------------------------------------------------------------------------"
);

// #### 2. isDivisible?
// Create a function named "_isDivisible_". The function should take an integer as an argument. If the integer is divisible by 100, then return true. If not, return false.

// ##### Examples
// ````javascript
// isDivisible(1) ➞ false
// isDivisible(1000) ➞ true
// isDivisible(100) ➞ true

function _isDivisible_(int) {
  if (int % 100 == 0) {
    return true;
  } else {
    return false;
  }
}

console.log("Q2:", _isDivisible_(10000));
console.log("Q2:", _isDivisible_(50));

console.log(
  "-----------------------------------------------------------------------------"
);
// #### 4. What's the weather?
// Use a **ternary operator** to complete this task. Create a function named "_isRaining_". If passed `true`, return "_wet day - you need an umbrella_". If passed `false`, return "_dry day - leave your umbrella at home_".

// ##### Example
// ````javascript
// isRaining(true) ➞ 'wet day - you need an umbrella'

function _isRaining_(weather) {
  if (weather == "Raining") {
    return "Q4:wet day - you need an umbrella";
  } else {
    return "Q4:I don't know the weather";
  }
}

console.log("Q4:", _isRaining_("Raining"));
console.log("Q4:", _isRaining_("Sunny"));

console.log(
  "-----------------------------------------------------------------------------"
);
// ### Loops

// #### 1. Sequence
// Create a function named "_geometricalSequence_" and **use a loop** to return the following sequence: _`1 2 4 8 16 32 64 128 256`_. Concatenate each value to a string and return a string.

// ##### Example
// ````javascript
// geometricalSequence() ➞ '1 2 4 8 16 32 64 128 256'

console.log(
  "-----------------------------------------------------------------------------"
);
