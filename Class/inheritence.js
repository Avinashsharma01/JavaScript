class Person{
    constructor(){
        console.log("I am constructor from Person Class")
    }
    eat(){
        console.log("I am eating.")
    }
    sleep(){
        console.log("i am sleeping.")
    }
    walk(){
        console.log('i am walking.')
    }
}



class engineering extends Person{
    constructor(){
        super()
        console.log("i am the constructor from engineering class")
    }
    work(){
        console.log("I work as engineer.")
    }
}

let engObj= new engineering()
engObj.work()
engObj.eat()
engObj.sleep()
engObj.walk()

