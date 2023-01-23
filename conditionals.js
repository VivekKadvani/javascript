// Q=1
let a = 12
//console.log(a)
let age = Number.parseInt(a)
if (age >= 10 && age <= 20) {
    console.log("valid age btw 10-20")

}
else {
    console.log("not a valid age")
}


// Q=2
let choice = 3
switch (choice) {
    case 1: console.log("select 1")
        break;
    case 2: console.log("select 2")
        break;
    case 3: console.log("select 3")
        break;
    case 4: console.log("select 4")
        break;
    default: console.log("select defauklt")
}

//Q=3
let num = 330
if (((num % 2) == 0) && ((num % 3) == 0))
    console.log("divisable by 2 and 3")

else
    console.log("not divisable by 2 & 3 ")



//Q=4
num = 312
if (((num % 2) == 0) || ((num % 3) == 0))
    console.log("divisable by 2 and 3")

else
    console.log("not divisable by 2 & 3 ")


//Q=5
age=19
age<=18?console.log("not drive"):console.log("drive")