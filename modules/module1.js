const hello = () => {
    console.log("hello world")
}

// function hello (){
//     console.log("sucsess")
// }
module.exports = hello;       


const regex= /[a-z]/g
let str="you are very cute and very bad"
console.log(str.replace(regex , "1"))