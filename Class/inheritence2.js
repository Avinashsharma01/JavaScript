class Avi{
    constructor(name){
        this.name
    }
    Avinash(){
        console.log("Hello Avinash")
    }
}



class Somu extends Avi{
    hello(){
        console.log("Hello im soumya ")
    }
}
let obj=new Somu(10)
obj.hello()
obj.Avinash()