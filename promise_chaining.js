let p1=new Promise((resolve,reject)=>{
    console.log("this is first promise")
    resolve(88)
})

p1.then((value)=>{
    console.log(value)
    let p2=new Promise((resolve,reject)=>{
        console.log("promise 2")
        resolve(66)
    })
    return p2
}).then((value)=>{
    console.log(value)
    return 2
}).then((value)=>{
    console.log(value)
})