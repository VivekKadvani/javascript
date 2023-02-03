class car {
    drive(){ console.log("i can drive ")}
}
class rixa extends car{
    drive(){
        super.drive()
        console.log("Ic can also drive ")
    }
}

const obj =new car ()
const obj2 =new rixa ()

obj.drive()
console.log(obj instanceof car)
obj2.drive()