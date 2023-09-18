// This function returns a function that returns a string
// Add the types:

function sayHey(): () => string {
    return () => 'Hey!'
}
// This variable contains a function that returns a string
const hey = sayHey()
// Calling the function returns the string
console.log(hey()) // Hey!
console.log(hey()) // Hey!
console.log(hey()) // Hey!
console.log(hey()) // Hey!

function mathizer(n: number): (x: number) => number {
    let sum = n
    return (x) => x * n
}

const mathy = mathizer(3)
console.log(mathy(3))   // 9
console.log(mathy(2))   // 6
console.log(mathy(10))  // 30
console.log(mathy(111)) // 333
