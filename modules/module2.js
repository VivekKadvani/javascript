const hello = require("./module1")

// console.log(hello())
hello()

console.log("start")

setTimeout(function cbT(){
    console.log("CB SetTimeout");
},5000)

fetch("https://google.com").then(function cbF(){
    console.log('CB Netflix')
})

console.log("end")