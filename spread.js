const array = [1,2,3,4]
const obj = {...array}

console.log(obj)

function myFunction(v, w, x, y, z) {
    console.log(v)
    console.log(w)
    console.log(x)
    console.log(y)
    console.log(z)
}
const args = [6, 5];
myFunction(-1, ...args, 2, ...[6]);