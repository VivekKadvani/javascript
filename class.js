class car{
    constructor(namer,prise){
        this.name=namer,
        this.price=prise
    }
    viewdata(){
        console.log(this.name +this.price)
    }
}
class seller extends car {
    seller="vivek"
}

// const obj = new car("mustangGT",10000000);
const obj =new seller("mustang",12234)
console.log(obj.name)
obj.viewdata()