let boy1="rahul"
let boy2="shyam"

let sen=`${boy1} and ${boy2}`
console.log(sen)

let str=`bana\'na`
console.log(str)
let str2="rupiya 1000"
let ptrn=/[0-9]/g
let str3=""
for(let i in str2){
if(str2[i].match(ptrn))
{
   str3+= str2[i]
}
}
console.log(str3)
// console.log(str.includes("na"))
// console.log(str.endsWith("nawa"))
// console.log(str.startsWith("ba"))

