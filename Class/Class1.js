class Car {
    start(str){
        console.log("i'm Car 1 ")
    }
    stop(){
        console.log("i'm Car 2")
    }
}


console.log(Car)
let maruti= new Car() // object 1
let alto=new Car() // object 2
maruti.start()
maruti.stop()




class Avinash{
    constructor(){
        console.log("this is constructor")
    }
    avi(){
        console.log("avi is from Avinash Class")
    }
    somu(){
        console.log("somu is from Avinash Class")
    }
}

let AvinashObj=new Avinash()
AvinashObj.avi()
AvinashObj.somu()