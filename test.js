//start file and test node 
var v = "hello world by vivek in";
console.log(v);

//start file and test node 
var v = "hello world by vivek in";
console.log(v.toUpperCase);

//start learning variable   
let b = 65
console.log(b)
b = "student"
console.log(b)

//overriting var
var a = 67
console.log(a)
var a = "sixty seven"
console.log(a)
let c = 12
console.log(c)
//let c="twelve"
c = "twelve"
console.log(c)
{
    let c = "bar"
    console.log(c)
}
console.log(c)

//const keyword : not changed or not redeclare
const boss = "vivek";
//boss="mw"
//let boss="kak"
console.log(boss)


//datatypes
let d=88
let e=null
let f=Symbol("i am vk")
let g="this is js"
let h=true
let i=BigInt(345)
let j
console.log(d,e,f,g,h,i,j)

const obj = {
    "vivek":"head",
    "role":"blockchain",
    "package":6.5,
    "training":null,
    "onboarding":undefined
}

console.log(obj["package"])


//practice set 1
let k="vivek"
k=k+23
console.log(k)

console.log(typeof(k))

obj["time"]=10
obj["vivek"]="student"
console.log(obj)

const dict ={
    a:"apple",
    b:"ball",
    c:"cat"
}
console.log(dict.b)