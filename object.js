const student ={
    name : "vivek",
    department : "it ",
    subject : "blockchain",
    age : 22,
    fullname : function min(){
        console.log( this.name + " kadvani")
    }
    
}

console.log(student.name)
console.log(student ["name"])
student.fullname()
