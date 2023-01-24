let arr=[1,2,3,4,5]
//let a=arr.toString()

//console.log(a)
console.log(arr)

// console.log(arr.join("_"))

console.log(arr.pop())

console.log(arr)
arr.push(9)

console.log(arr)

console.log(arr.shift())
console.log(arr)
console.log(arr.unshift(99))
console.log(arr)

// delete arr[4]
console.log(arr)

let arr2=[11,12,13,14,15]
let new_arr=arr.concat(arr2)
console.log(new_arr)
let cmp = (a,b)=>{
    return b-a
}
console.log(new_arr.sort(cmp))

console.log(new_arr.reverse())

new_arr.splice(0,4,101,102,103,104,105)
console.log(new_arr)

console.log(new_arr.slice(5))

console.log(arr )
arr.forEach((ele)=>{
    console.log(ele*ele)
})




let name="vivek"
let array_f =Array.from(name) 
console.log(array_f)


let bum=[3,6,9]
let sq=bum.map((num)=>num*num)
console.log(sq)
let fil=bum.filter(num=>num<5)
console.log(fil)
console.log(bum)

const sum= bum.reduce((sum,bum)=>{
    return sum+bum
},0)
console.log(sum)