// For of Loop Javascript
const numbers = [1,2,3,4,5]
for (let num of numbers){
    console.log(num)
}

console.log("")

const name1 = "John"
for (const char of name1){
    console.log(char)
}

console.log("")

// Temperate Literals in Javascript
const text = `This is a regular text`
console.log(`${text}`)

console.log("")

const names = `Alice`
const age = 25
const message = `Hello, my name is ${names}, and i am ${age} years old`
console.log(message)

console.log("")
const multiLineText = `This is a Line.
                        This is a new Line.
                        This is the last Line`
console.log(multiLineText)

console.log("")

const a = 10
const b = 20
console.log(`The sum of a and b is ${a+b}`)

console.log("")

function tag(strings,...values) {
    console.log(strings); // Array of string literals
    console.log(values);  // Array of expression values
  }
  
  const name = "Alice";
  tag`Hello, ${name}!`;
  
