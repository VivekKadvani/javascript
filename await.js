async function weather(){
    let p1 = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("20 deg")
        },3000)
    })

    let p2 = new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve("2 deg")
        }, 6000);
    })


    console.log("fetchini delhi weather wait.....")
    let d_w = await p1;
    console.log("delhi weather fetched "+d_w)
    console.log("fetched banglore weaather wait....")
    let b_w = await p2;
    console.log("fetched banglore weather "+b_w)
}

console.log("welcome to weather control room ")
let t = weather()
t .then((value)=>{console.log(value)})   