let p1 = new Promise((resolve, reject) => {
    console.log("promise 1 is pending")
    setTimeout(() => {
        console.log("time finished ")
        resolve(true)
    }, 2000);
})

let p2 = new Promise((resolve, reject) => {
    console.log("promise 2 is pending")
    setTimeout(() => {
        reject(new Error("this is eroor"))
        resolve(true)
    }, 2000);
})

p1.then((value) => {
    console.log(value)
})
p2.catch((error) => {
    console.log("err cathced in p2")
})
console.log("this is runnning parallely ")