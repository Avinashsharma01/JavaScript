class Avinash{
    constructor(){
        console.log("I am the constructor")
    }
    a=10
    avi(){
        console.log("I am the member function of the Avinash Class ", this.a)
    }
}

let obj= new Avinash()
obj.avi()