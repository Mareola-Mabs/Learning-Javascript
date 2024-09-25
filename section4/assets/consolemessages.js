// Different Console Message Types
console.info("This is an Informational Message")

console.warn("This is a Warning Message")

console.error("This is an Error Message")

console.debug("This is a Debug Message")

console.table(car)

console.dir(car)

const isTrue = false;
console.assert(isTrue, "Assertion failed: This will be logged because isTrue is false.");

console.group("Person Details")
console.log("firstName: John")
console.log("lastName: Doe")
console.groupEnd()
