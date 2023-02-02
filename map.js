const radius = [2, 4, 6, 8]


// const caalculateArea = function (radius) {
//     const output = []
//     for (let i = 0; i < radius.length; i++) {

//         output.push(Math.PI * radius[i] * radius[i])
//         // console.log(Math.PI * radius[i] *radius[i])
//     }
//     return output
// }
const calculate = function (radius, logic) {
    const output = []
    for (let i = 0; i < radius.length; i++) {
        output.push(logic(radius[i]))
    }
    return output;
}
const area = function (radius) {
    return Math.PI * radius * radius;
}

const dia = function (radius) {
    return radius * 2;
}

const crf = function (radius) {
    return Math.PI * 2 * radius
}
console.log(radius.map(crf))
console.log(radius)
console.log(calculate(radius, dia))

console.log(calculate(radius, area))



let n = [1, 2, 3, 4, 5]

const doub = n.map(function db(n) {
    return n * 2;
})


const trip = n.map((n)=> {
    return n * 3;
})

console.log(trip)