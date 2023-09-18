// This function returns a function that returns a string
// Add the types:
function sayHey() {
    return function () { return 'Hey!'; };
}
// This variable contains a function that returns a string
var hey = sayHey();
// Calling the function returns the string
console.log(hey()); // Hey!
console.log(hey()); // Hey!
console.log(hey()); // Hey!
console.log(hey()); // Hey!
function mathizer(n) {
    var sum = n;
    return function (x) { return x * n; };
}
var mathy = mathizer(3);
console.log(mathy(3)); // 9
console.log(mathy(2)); // 6
console.log(mathy(10)); // 30
console.log(mathy(111)); // 333
