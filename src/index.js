const core = require("./../student/index")

const stringInput = "Hello World!"
const arrayInput1 = [1,2,3]
const arrayInput2 = [4,5,6]
const objectInput1 = {a: 1, b: 2}
const objectInput2 = {c: 3, d: 4}


console.log('#####################')
console.log('Exercise 0')
console.log('Input: ', stringInput)
console.log('Result: ', core.returnTheString(stringInput))
console.log('#####################')
console.log('Exercise 1')
console.log('Input: ', stringInput)
console.log('Result: ', core.splitTheString(stringInput))
console.log('#####################')
console.log('Exercise 2')
console.log('Input: ', objectInput1)
console.log('Result: ', core.shallowCopyObject(objectInput1))
console.log('Identical? (should be false): ', objectInput1 === core.shallowCopyObject(objectInput1))
console.log('#####################')
console.log('Exercise 3')
console.log('Input: ', arrayInput1)
console.log('Result: ', core.shallowCopyArray(arrayInput1))
console.log('Identical? (should be false): ', arrayInput1 === core.shallowCopyArray(arrayInput1))
console.log('Exercise 4')
console.log('Input1: ', objectInput1)
console.log('Input2: ', objectInput2)
console.log('Result: ', core.mergeTwoObjects(objectInput1, objectInput2))
console.log('Exercise 5')
console.log('Input1: ', arrayInput1)
console.log('Input2: ', arrayInput2)
console.log('Result: ', core.combineTwoArrays(arrayInput1, arrayInput2))