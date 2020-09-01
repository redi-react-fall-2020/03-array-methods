const core = require("./../student/index")

const stringInput = "Hello World!"

const arrayInput1 = [1,2,3,4,5]
const arrayInput2 = [1,-2,3,-4,5]

const arrayInput3 = [true,  true,  true,  false,
    true,  true,  true,  true ,
    true,  false, true,  false,
    true,  false, false, true ,
    true,  true,  true,  true ,
    false, false, true,  true ];

const arrayInput4 = [[10,0],[3,5],[5,8]];

console.log('#####################')
console.log('Exercise 1')
console.log('Input: ', arrayInput1)
console.log('Result: ', core.invert(arrayInput1))
console.log(`Correct ? ${JSON.stringify(core.invert(arrayInput1)) === JSON.stringify([-1,-2,-3,-4,-5])}`)
console.log('----')
console.log('Input: ', arrayInput2)
console.log('Result: ', core.invert(arrayInput2))
console.log(`Correct ? ${JSON.stringify(core.invert(arrayInput2)) === JSON.stringify([-1,2,-3,4,-5])}`)
console.log('#####################')

console.log('Exercise 2')
console.log('Input: ', arrayInput3)
console.log('Result: ', core.countSheeps(arrayInput3))
console.log(`Correct ? ${core.countSheeps(arrayInput3) === 17}`)

console.log('#####################')

console.log('Exercise 3')
console.log('Input: ', arrayInput4)
console.log('Result: ', core.peopleInBus(arrayInput4))
console.log(`Correct ? ${core.peopleInBus(arrayInput4) === 5}`)
