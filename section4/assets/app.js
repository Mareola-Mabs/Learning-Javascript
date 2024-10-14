// Arrays
const car = ["volvo", "toyota", "mercedes"]

// Array inside an Object
const person = {
    firstName: "Jane",
    lastName: "Doe",
    otherNames: ["volvo", "toyota", "mercedes"]
}

console.log(person["otherNames"][0])

for(var i = 0; i < person["otherNames"].length; i++){
        console.log(person.otherNames[i])
    
}


// An Object in an Array
const notal = ["blue", "green",
    {firstName:"Jane", lastName:"Doe"}
]

console.log(notal[2].firstName)


const students = new Array ("Ibukun", "Anita")

console.log(students[0])


// Converting Arrays to String
console.log(students.join())
console.log(students.toString())

// Array Pop & Push
const fruits = ["Apple", "Pineapple", "Mango"]
console.log(fruits.pop())
console.log(fruits)

// Array Splice
const fruits2 = ["Apple", "Pineapple", "Mango"]
console.log("The spliced array is "+fruits2.splice(0,1))
console.log(fruits2)
console.log(fruits2.length)

const fruits4 = ["Banana","Orange","Apple","Mango"]
let removed = fruits4.splice(2,0,"Lemon","Kiwi")
console.log("The new spliced array is"+fruits4)
console.log("The targeted item is"+removed)


// Array Shift
const fruits3 = ["Apple", "Pineapple", "Mango"]
console.log(fruits3.shift())
console.log(fruits3)
console.log(fruits3.length)

// Array unshift
const delays = [20, 40, 60]
delays.unshift(300)
console.log(delays)

// Array Push
const products = ["leg"]
products.push("kiwi", 10)
const newProducts = products
console.log(newProducts)


const times = ["8:00", "9:00", "10:00"]
console.log("Hey")
console.log(times.length)
times.pop()
console.log(times)
console.log(times.length)


var myBoys = ["Trevor","Allen"]
var myGirls = ["Octavia"]
const sex = ["male","male","female"]
console.log(myBoys.concat(myGirls,sex))


// Array Sort
const items = ["Apple","Ball","Cat","Abcd"]
console.log(items.sort())

const numbers = ["Apple",10,20,"Abcd"]
console.log(numbers.sort())



// Array ForEach
var sum = 0
const dame = [20,50,10,2]
dame.forEach(item=>{
    sum += item
})
console.log(sum)



// Date Function
const d = new Date("2024 06 24")
const f = d.toDateString()
const g = d.toUTCString()
const h = d.toISOString()
console.log(f)
console.log(g)
console.log(h)










