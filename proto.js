let car = {
    name:"mustang",
    speed:190,
    color:"red",
    func:()=>{
        console.log("ye udti he bhai")
     }
}
console.log(car)

let action = {
    func:()=>{
       console.log("ye udti he")
    }
}

car.__proto__=action
car.func()