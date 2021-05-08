// @ts-check
const { getGoldenRatio, isGoldenRatio } = require('./index')

function isOdd(num) { return num % 2; }

// This Literaly fucked my computer XD
// function createBox(height = 1, width = 0.6180339887498948) {
//     // const box = new Box({
//     //     height,
//     //     width,
//     //     stringify: true
//     // })
//     return Box(`${height}x${width}`)
// }

let currentSum = 1

for (let index = 0; index < 100; index++) {
    const { a, b, sum } = getGoldenRatio(currentSum)
    currentSum = sum
    // if (isOdd(index)) {
    //     console.log(createBox(a, b))
    // } else {
    //     console.log(createBox(b, a))
    // }

    console.log(a, b, sum, isGoldenRatio(a, b))
    // a > b ? console.log(createBox(a, b)) : console.log(createBox(b, a))

}